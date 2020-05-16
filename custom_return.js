var input = track.properties()
var t = input.t
var s = input.s
var additional_properties = s.properties
var prop = window.digitalData.page
prop.additional_properties = s.properties
this.collectEvent(this.buildEvent(track.event(),
    this.buildTargetPage(t),
    this.buildSource(s.itemType, s.itemId, prop),
    track.properties()
));
Unomi.prototype.buildTargetPage = function (t) {
    var itemId;
    var itemType;
    var properties;
    if (t !== {}) {
        itemId = t.itemId
        itemType = t.itemType
        properties = t.properties
    } else {
        itemId = "empty"
        itemType = "empty"
        properties = "empty"
    }
    return this.buildTarget(itemId, itemType, properties);
};
Unomi.prototype.buildTarget = function (itemId, itemType, targetProperties) {
    return this.buildObject(itemId, itemType, targetProperties);
};
Unomi.prototype.buildObject = function (itemId, itemType, properties) {
    var object = {
        scope: window.digitalData.scope,
        itemId: itemId,
        itemType: itemType
    };
    if (properties) {
        object.properties = properties;
    }
    return object;
};
Unomi.prototype.buildSource = function (sourceId, sourceType, sourceProperties) {
    return this.buildObject(sourceId, sourceType, sourceProperties);
};
Unomi.prototype.buildEvent = function (eventType, target, source, properties) {
    var event = {
        eventType: eventType,
        scope: window.digitalData.scope,
        itemType: 'event'
    };

    if (target) {
        event.target = target;
    }

    if (source) {
        event.source = source;
    }

    if (properties) {
        event.properties = properties.p;

    }
    console.log("Hello 100")
    return event;
};
Unomi.prototype.collectEvents = function (events, successCallback, errorCallback) {
    events.sessionId = this.sessionId;

    var data = JSON.stringify(events);
    // ajax call with this data
};

//Json Schema
// {
//     "eventType": "buffer_me",//Event alias
//         "scope": "ecommerce",//Reflect to source.scope
//             "itemType": "event",
//                 "target": {
//                     T1.Validation
//         "scope": "ecommerce",//reflect to source.scope
//             "itemType": "laptop",
//                 "itemId": "macbookPro",//
//                     "properties": {
//             "categories": ["Apple", "iphone"]
//         }
//     },
//     "source": {
//         "scope": "ecommerce",//Source KEY
//             "itemType": "site",//
//                 "itemId": "checkout",
//                     "properties": {//additional properties
//         }
//     },
//     "properties": {
//         E1.Validation
//         "duration": 12
//     }
// }

//test input call
window.follower.track("buffer_me", {
    t: { itemType: "laptop", itemId: "macbookPro", properties: { categories: ["Apple", "Iphone"] } },
    s: { itemType: "site", itemId: "checkout", properties: { location: ['somewhere on internet'] } },
    p: { "duration": 12 }
})