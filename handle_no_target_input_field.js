Unomi.prototype.track = function (track) {
  // we use the track event name to know that we are submitted a form because Analytics.js trackForm method doesn't give
  // us another way of knowing that we are processing a form.
  if (track.event() && track.event().indexOf("form") === 0) {
    var form = document.forms[track.properties().formName];
    var formEvent = this.buildFormEvent(form.name);
    formEvent.properties = this.extractFormData(form);
    this.collectEvent(formEvent);
  } else {
    var input = track.properties();
    var s;
    var t;
    if (input.t && input.t != {}) {
      t = input.t;
      if (t.itemType) {
        t.itemType = t.itemType;
      } else {
        t.itemType = " ";
      }
      if (t.itemId) {
        t.itemId = t.itemId;
      } else {
        t.itemId = " ";
      }
      if (t.properties) {
        t.properties = t.properties;
      } else {
        t.properties = {};
      }
    } else {
      t = { itemType: " ", itemId: " ", properties: {} };
    }

    if (input.s && input.s != {}) {
      s = input.s;
      if (s.itemType) {
        s.itemType = s.itemType;
      } else {
        s.itemType = " ";
      }
      if (s.itemId) {
        s.itemId = s.itemId;
      } else {
        s.itemId = " ";
      }
      if (s.properties) {
        s.properties = s.properties;
      } else {
        s.properties = {};
      }
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
