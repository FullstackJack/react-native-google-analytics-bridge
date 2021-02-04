"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsSettings = exports.AnalyticsBridge = exports.TagManagerBridge = void 0;
const react_native_1 = require("react-native");
const { GoogleTagManagerBridge, GoogleAnalyticsBridge, GoogleAnalyticsSettings } = react_native_1.NativeModules;
if (!GoogleTagManagerBridge ||
    !GoogleAnalyticsBridge ||
    !GoogleAnalyticsSettings) {
    console.error("Something went wrong initializing the native react-native-google-analytics-bridge module.\nPlease check your configuration.\nDid you forget to run 'react-native link' or install your node_modules?");
}
const AnalyticsBridge = GoogleAnalyticsBridge;
exports.AnalyticsBridge = AnalyticsBridge;
const TagManagerBridge = GoogleTagManagerBridge;
exports.TagManagerBridge = TagManagerBridge;
const AnalyticsSettings = GoogleAnalyticsSettings;
exports.AnalyticsSettings = AnalyticsSettings;
