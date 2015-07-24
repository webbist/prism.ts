var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./mono"], function(require, exports, System) {
    (function (PubSubEvents) {
        var EventAggregator = (function () {
            function EventAggregator() {
            }
            EventAggregator.GetEvent = function (event) {
                return new event();
            };
            return EventAggregator;
        })();
        PubSubEvents.EventAggregator = EventAggregator;

        var EventBase = (function () {
            function EventBase() {
            }
            return EventBase;
        })();
        PubSubEvents.EventBase = EventBase;

        var PubSubEvent = (function (_super) {
            __extends(PubSubEvent, _super);
            function PubSubEvent() {
                _super.apply(this, arguments);
            }
            PubSubEvent.prototype.Publish = function (eventArgs) {
                $.publish(this.constructor.name, eventArgs);
            };

            PubSubEvent.prototype.Subscribe = function (instance, action) {
                $.subscribe(this.constructor.name, function (event, eventArgs) {
                    action.apply(instance, [eventArgs]);
                });
            };
            return PubSubEvent;
        })(EventBase);
        PubSubEvents.PubSubEvent = PubSubEvent;
    })(exports.PubSubEvents || (exports.PubSubEvents = {}));
    var PubSubEvents = exports.PubSubEvents;
});
//# sourceMappingURL=prism.js.map
