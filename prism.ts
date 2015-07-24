// copyright 2015 Webbist Multimedia Enr.

// licensed under the Apache License, Version 2.0(the "License");
// you may not use this file except in compliance with the License.
// you may obtain a copy of the License at

//    http://www.apache.org/licenses/LICENSE-2.0

// unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
// either express or implied.
// see the License for the specific language governing permissions and limitations under the License.

import System = require("./mono");

import EventArgs = System.EventArgs;

export module PubSubEvents {
    export class EventAggregator {
        static GetEvent<TEventType extends EventBase>(event: { new (): TEventType; }): TEventType {
            return new event();
        }
    }

    export class EventBase {
    }

    export class PubSubEvent<TPayload extends EventArgs> extends EventBase {
        Publish(eventArgs: TPayload): void {
            $.publish((<any>this.constructor).name, eventArgs);
        }

        Subscribe(instance: any, action: (eventArgs: TPayload) => void): void {
            $.subscribe((<any>this.constructor).name, function (event, eventArgs) {
                action.apply(instance, [eventArgs]);
            });
        }
    }
}