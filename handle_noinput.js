
Unomi.prototype.track = function (track) {
  // we use the track event name to know that we are submitted a form because Analytics.js trackForm method doesn't give
  // us another way of knowing that we are processing a form.
  if (track.event() && track.event().indexOf("form") === 0) {
    var form = document.forms[track.properties().formName];
    var formEvent = this.buildFormEvent(form.name);
    formEvent.properties = this.extractFormData(form);
    this.collectEvent(formEvent);
  } else {
    console.log("Begin ");
    var input = track.properties();
    var s;
    var t;
    if (input.t) {
      t = input.t;
    } else {
      t = { itemType: " ", itemId: " ", properties: {} };
    }
    if (input.s) {
      s = input.s;
    } else {
      s = { itemType: " ", itemId: " ", properties: {} };
    }

    var prop = window.digitalData.page;
    prop.additional_properties = s.properties;
    this.collectEvent(
      this.buildEvent(
        track.event(),
        this.buildTargetPage(t),
        this.buildSource(s.itemType, s.itemId, prop),
        track.properties()
      )
    );
  }
};


Unomi.prototype.buildEvent = function (eventType, target, source, properties) {
  var event = {
    eventType: eventType,
    scope: window.digitalData.scope,
    itemType: "event",
  };

  if (target) {
    event.target = target;
  }

  if (source) {
    event.source = source;
  }

  if (properties && properties.p) {
    event.properties = properties.p;
  } else {
    event.properties = {};
  }

  return event;
};


Unomi.prototype.buildTargetPage = function (t) {
  var itemId = t.itemId;
  var itemType = t.itemType;
  var properties = t.properties;
  return this.buildTarget(itemId, itemType, properties);
};

Unomi.prototype.buildTarget = function (itemId, itemType, targetProperties) {
  return this.buildObject(itemId, itemType, targetProperties);
};


Unomi.prototype.buildObject = function (itemId, itemType, properties) {
  var object = {
    scope: window.digitalData.scope,
    itemId: itemId,
    itemType: itemType,
  };
  if (properties) {
    object.properties = properties;
  }

  return object;
};
