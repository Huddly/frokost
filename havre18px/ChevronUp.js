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
var ChevronUp = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ChevronUp icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M9.23565 6.23712L9.94267 5.52993L9.23565 6.23712ZM15.707 11.293L9.94267 5.52993L8.52862 6.9443L14.293 12.7074L15.707 11.293ZM8.05716 5.53004L2.29414 11.2931L3.70835 12.7073L9.47137 6.94425L8.05716 5.53004ZM9.94267 5.52993C9.42196 5.00933 8.57782 5.00938 8.05716 5.53004L9.47137 6.94425C9.21105 7.20458 8.78898 7.2046 8.52862 6.9443L9.94267 5.52993Z", fill: color })] })));
};
exports.default = ChevronUp;
