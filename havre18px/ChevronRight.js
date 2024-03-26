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
var ChevronRight = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ChevronRight icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M11.7631 9.2342L12.4702 9.94123L11.7631 9.2342ZM6.70719 15.7056L12.4702 9.94123L11.0559 8.52718L5.29281 14.2915L6.70719 15.7056ZM12.4701 8.05572L6.70711 2.29269L5.29289 3.70691L11.0559 9.46993L12.4701 8.05572ZM12.4702 9.94123C12.9908 9.42051 12.9908 8.57638 12.4701 8.05572L11.0559 9.46993C10.7956 9.2096 10.7956 8.78753 11.0559 8.52718L12.4702 9.94123Z", fill: color })] })));
};
exports.default = ChevronRight;
