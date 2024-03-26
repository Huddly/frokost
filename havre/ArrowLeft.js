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
var ArrowLeft = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ArrowLeft icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M4.35355 11.6464L5.06066 12.3536L4.35355 11.6464ZM11.2929 3.29289L3.64645 10.9393L5.06066 12.3536L12.7071 4.70711L11.2929 3.29289ZM3.64645 13.0607L11.2929 20.7071L12.7071 19.2929L5.06066 11.6464L3.64645 13.0607ZM5 13L21 13L21 11L5 11L5 13ZM3.64645 10.9393C3.06066 11.5251 3.06066 12.4749 3.64645 13.0607L5.06066 11.6464C5.25592 11.8417 5.25592 12.1583 5.06066 12.3536L3.64645 10.9393Z", fill: color })] })));
};
exports.default = ArrowLeft;
