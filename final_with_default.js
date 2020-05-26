
Unomi.prototype.page = function (page) {
 
};

Unomi.prototype.fillPageData = function (unomiPage, props) {
 
};

Unomi.prototype.processReferrer = function () {
 
};
Unomi.prototype.collectEvents = function (
  events,
  successCallback,
  errorCallback
) {
  events.sessionId = this.sessionId;
  var now = new Date();
  events.sendAt = now.toISOString();
  var data = JSON.stringify(events);

  this.ajax({

  });
};

/**
 * Identify.
 *
 * @api public
 * @param {Identify} identify
 */
Unomi.prototype.identify = function (identify) {
  
};

/**
 * ontrack.
 *
 * @api private
 * @param {Track} track
 */
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

      if (t.properties) {
        t.properties = t.properties;
      } else {
        t.properties = {};
      }
    } else {
      t = { properties: {} };
    }

    if (input.s && input.s != {}) {
      s = input.s;

      if (s.properties) {
        s.properties = s.properties;
      } else {
        s.properties = {};
      }
    } else {
      s = { properties: {} };
    }

    var prop = track.context();
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

/**
 * This function is used to load the current context in the page
 *
 * @param {boolean} [skipEvents=false] Should we send the events
 * @param {boolean} [invalidate=false] Should we invalidate the current context
 */
Unomi.prototype.loadContext = function (skipEvents, invalidate) {
  
};

Unomi.prototype.onpersonalize = function (msg) {
  
};

/**
 * This function return the basic structure for an event, it must be adapted to your need
 *
 * @param {string} eventType The name of your event
 * @param {object} [target] The target object for your event can be build with this.buildTarget(targetId, targetType, targetProperties)
 * @param {object} [source] The source object for your event can be build with this.buildSource(sourceId, sourceType, sourceProperties)
 * @param {object} [properties] a map of properties for the event
 * @returns {{eventType: *, scope}}
 */
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

/**
 * This function return an event of type form
 *
 * @param {string} formName The HTML name of id of the form to use in the target of the event
 * @returns {*|{eventType: *, scope, source: {scope, itemId: string, itemType: string, properties: {}}, target: {scope, itemId: string, itemType: string, properties: {}}}}
 */
Unomi.prototype.buildFormEvent = function (formName) {
  
};

/**
 * This function return the source object for a source of type page
 *
 * @returns {*|{scope, itemId: *, itemType: *}}
 */
Unomi.prototype.buildTargetPage = function (t) {
  var itemId = t.itemId;
  var itemType = t.itemType;
  var properties = t.properties;
  return this.buildTarget(itemId, itemType, properties);
};

/**
 * This function return the source object for a source of type page
 *
 * @returns {*|{scope, itemId: *, itemType: *}}
 */
Unomi.prototype.buildSourcePage = function () {
 
};

/**
 * This function return the source object for a source of type page
 *
 * @returns {*|{scope, itemId: *, itemType: *}}
 */
Unomi.prototype.buildPage = function (page) {
  return this.buildSource(page.pageInfo.pageID, "page", page);
};

/**
 * This function return the basic structure for the target of your event
 *
 * @param {string} targetId The ID of the target
 * @param {string} targetType The type of the target
 * @param {object} [targetProperties] The optional properties of the target
 * @returns {{scope, itemId: *, itemType: *}}
 */
Unomi.prototype.buildTarget = function (itemId, itemType, targetProperties) {
  return this.buildObject(itemId, itemType, targetProperties);
};

/**
 * This function return the basic structure for the source of your event
 *
 * @param {string} sourceId The ID of the source
 * @param {string} sourceType The type of the source
 * @param {object} [sourceProperties] The optional properties of the source
 * @returns {{scope, itemId: *, itemType: *}}
 */
Unomi.prototype.buildSource = function (
  sourceId,
  sourceType,
  sourceProperties
) {
  return this.buildObject(sourceId, sourceType, sourceProperties);
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
/**
 * This function will send an event to Apache Unomi
 * @param {object} event The event object to send, you can build it using this.buildEvent(eventType, target, source)
 * @param {function} successCallback will be executed in case of success
 * @param {function} errorCallback will be executed in case of error
 */
Unomi.prototype.collectEvent = function (
  event,
  successCallback,
  errorCallback
) {
  this.collectEvents({ events: [event] }, successCallback, errorCallback);
};

/**
 * This function will send the events to Apache Unomi
 *
 * @param {object} events Javascript object { events: [event1, event2] }
 * @param {function} successCallback will be executed in case of success
 * @param {function} errorCallback will be executed in case of error
 */
Unomi.prototype.collectEvents = function (
  events,
  successCallback,
  errorCallback
) {
  events.sessionId = this.sessionId;

  var data = JSON.stringify(events);
  this.ajax({
    
  });
};

/*******************************/
/* Private Function under this */
/*******************************/

Unomi.prototype.registerEvent = function (event) {
  
};

Unomi.prototype.registerCallback = function (onLoadCallback) {
  
};

/**
 * This is an utility function to generate a new UUID
 *
 * @returns {string}
 */
Unomi.prototype.generateGuid = function () {
  
};

/**
 * This is an utility function to execute AJAX call
 *
 * @param {object} ajaxOptions
 */
Unomi.prototype.ajax = function (ajaxOptions) {
  
};

Unomi.prototype.executeFallback = function () {
 
};
