"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const FunctionCallTagHandlerAndroid_1 = require("./FunctionCallTagHandlerAndroid");
const FunctionCallTagHandlerIOS_1 = require("./FunctionCallTagHandlerIOS");
const FunctionCallTagHandler = react_native_1.Platform.select({
    ios: FunctionCallTagHandlerIOS_1.default,
    android: FunctionCallTagHandlerAndroid_1.default
});
exports.default = FunctionCallTagHandler;
