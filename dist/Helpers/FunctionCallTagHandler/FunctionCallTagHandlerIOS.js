"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const NativeBridges_1 = require("../../NativeBridges");
/*
 * FunctionTagHandler module for iOS lazily adds the global event listner the first time a function tag
 * needs to be registered. Due to some limitations in native enviroment all Function Call tag events
 * from native realm are sent over as GTM_FUNCTION_CALL_TAG event. The event objects
 * include  _fn (function name) and payload attributes which are passed down to registered
 * handlers respectively
 */
const GTM_FUNCTION_CALL_TAG_EVENT = "GTM_FUNCTION_CALL_TAG";
// Downstream events from native realm
const functionCallTagEventEmitter = new react_native_1.NativeEventEmitter(NativeBridges_1.TagManagerBridge);
const listeners = [];
let listenerRegistered = false;
exports.default = (functionName, handler) => {
    if (!listenerRegistered) {
        // Register a global listener for Function Tag events
        functionCallTagEventEmitter.addListener(GTM_FUNCTION_CALL_TAG_EVENT, ({ _fn, payload }) => {
            // Pass on the event to listeners
            // _fn is basically the same as functionName
            listeners.forEach(listener => {
                if (listener.functionName === _fn) {
                    try {
                        handler(_fn, payload);
                    }
                    catch (e) {
                        console.error(`Unhandled exception in FunctionCallTag handler: ${e.stack}`, `\nFunction Name: ${_fn}`, `\nPayload: ${JSON.stringify(payload)}`);
                    }
                }
            });
        });
        listenerRegistered = true;
    }
    return NativeBridges_1.TagManagerBridge.registerFunctionCallTagHandler(functionName).then(() => {
        listeners.push({
            functionName,
            handler
        });
        return true;
    });
};
