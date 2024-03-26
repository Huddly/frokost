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
var Usb = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Usb icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 2H14V6H10V2ZM8 6.26756V6V2C8 0.895431 8.89543 0 10 0H14C15.1046 0 16 0.895431 16 2V6V6.26756C16.5978 6.61337 17 7.25972 17 8V17C17 18.1046 16.1046 19 15 19H14V21H13V22V23V24H11V23V22V21H10V19H9C7.89543 19 7 18.1046 7 17V8C7 7.25972 7.4022 6.61337 8 6.26756ZM9 8L9 17H15V8H14H10H9Z", fill: color })] })));
};
exports.default = Usb;
