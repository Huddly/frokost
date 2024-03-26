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
var ArrowRight = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ArrowRight icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M19.6464 12.3536L18.9393 11.6464L19.6464 12.3536ZM12.7071 20.7071L20.3536 13.0607L18.9393 11.6464L11.2929 19.2929L12.7071 20.7071ZM20.3536 10.9393L12.7071 3.29289L11.2929 4.70711L18.9393 12.3536L20.3536 10.9393ZM19 11L3 11L3 13L19 13L19 11ZM20.3536 13.0607C20.9393 12.4749 20.9393 11.5251 20.3536 10.9393L18.9393 12.3536C18.7441 12.1583 18.7441 11.8417 18.9393 11.6464L20.3536 13.0607Z", fill: color })] })));
};
exports.default = ArrowRight;
