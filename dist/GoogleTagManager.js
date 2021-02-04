"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NativeBridges_1 = require("./NativeBridges");
const FunctionCallTagHandler_1 = require("./Helpers/FunctionCallTagHandler");
/**
 * Can only be used with one container. All functions returns a Promise.
 *
 * @name GoogleTagManager
 * @example
 * import { GoogleTagManager } from "react-native-google-analytics-bridge";
 * GoogleTagManager.openContainerWithId("GT-NZT48")
 *   .then(() => GoogleTagManager.stringForKey("pack"))
 *   .then(str => console.log("Pack: ", str));
 */
class GoogleTagManager {
    /**
     * Call once to open the container for all subsequent static calls.
     * @example
     * GoogleTagManager.openContainerWithId('GT-NZT48').then((..) => ..)
     * @param {string} containerId
     * @returns {Promise<boolean>}
     */
    static openContainerWithId(containerId) {
        return NativeBridges_1.TagManagerBridge.openContainerWithId(containerId);
    }
    /**
     * Refreshes the GTM container.
     * According to Tag Manager documentations for Android can be called once every 15 minutes.
     * No such limitations has been mentioned for iOS containers, though.
     * @example
     * GoogleTagManager.refreshContainer().then((..) => ..)
     * @returns {Promise<boolean>}
     */
    static refreshContainer() {
        return NativeBridges_1.TagManagerBridge.refreshContainer();
    }
    /**
     * Retrieves a boolean value with the given key from the opened container.
     * @example GoogleTagManager.boolForKey("key").then(val => console.log(val));
     * @param {string} key
     * @returns {Promise<boolean>}
     */
    static boolForKey(key) {
        return NativeBridges_1.TagManagerBridge.booleanForKey(key);
    }
    /**
     * Retrieves a string with the given key from the opened container.
     * @example GoogleTagManager.stringForKey("key").then(val => console.log(val));
     * @param {string} key
     * @returns {Promise<string>}
     */
    static stringForKey(key) {
        return NativeBridges_1.TagManagerBridge.stringForKey(key);
    }
    /**
     * Retrieves a number with the given key from the opened container.
     * @example GoogleTagManager.doubleForKey("key").then(val => console.log(val));
     * @param {string} key
     * @returns {Promise<number>}
     */
    static doubleForKey(key) {
        return NativeBridges_1.TagManagerBridge.doubleForKey(key);
    }
    /**
     * Push a datalayer event for Google Analytics through Google Tag Manager. The event must have at least one key "event" with event name.
     * @example
     * GoogleTagManager.pushDataLayerEvent({
     *   event: "eventName",
     *   pageId: "/home"
     * }).then(success => console.log(success));
     * @param {DataLayerEvent} event An Map<String, Object> containing key and value pairs. It must have at least one key "event" with event name
     * @returns {Promise<boolean>}
     */
    static pushDataLayerEvent(event) {
        return NativeBridges_1.TagManagerBridge.pushDataLayerEvent(event);
    }
    /**
     * Register Function Call tag handler
     * @param {String} functionName
     * @param {Function} handler
     */
    static registerFunctionCallTagHandler(functionName, handler) {
        return FunctionCallTagHandler_1.default(functionName, handler);
    }
    /**
     * Sets logger to verbose, default is warning
     * @param {boolean} enabled
     */
    static setVerboseLoggingEnabled(enabled) {
        return NativeBridges_1.TagManagerBridge.setVerboseLoggingEnabled(enabled);
    }
}
exports.default = GoogleTagManager;
