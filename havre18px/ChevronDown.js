"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ChevronDown = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ChevronDown icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M8.76436 11.7629L8.05733 12.4701L8.76436 11.7629ZM2.29297 6.70702L8.05733 12.4701L9.47138 11.0557L3.70703 5.29265L2.29297 6.70702ZM9.94284 12.47L15.7059 6.70694L14.2916 5.29273L8.52863 11.0557L9.94284 12.47ZM8.05733 12.4701C8.57805 12.9907 9.42218 12.9906 9.94284 12.47L8.52863 11.0557C8.78896 10.7954 9.21102 10.7954 9.47138 11.0557L8.05733 12.4701Z", fill: color })] })));
};
exports.default = ChevronDown;
