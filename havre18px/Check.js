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
var Check = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Check icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M7.39016 12.1098L6.68306 11.4027L7.39016 12.1098ZM6.85983 12.1098L7.56694 11.4027L6.85983 12.1098ZM8.09727 12.8169L16.4571 4.45711L15.0429 3.04289L6.68306 11.4027L8.09727 12.8169ZM7.56694 11.4027L2.95711 6.79289L1.54289 8.20711L6.15273 12.8169L7.56694 11.4027ZM6.68306 11.4027C6.92714 11.1587 7.32286 11.1587 7.56694 11.4027L6.15273 12.8169C6.6897 13.3539 7.5603 13.3539 8.09727 12.8169L6.68306 11.4027Z", fill: color })] })));
};
exports.default = Check;
