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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Usb icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17 4C17 2.89543 17.8954 2 19 2H29C30.1046 2 31 2.89543 31 4V13C32.6569 13 34 14.3431 34 16V35C34 36.6569 32.6569 38 31 38H30V41C30 41.5523 29.5523 42 29 42H27V47H26V42H22L22 47H21L21 42H19C18.4477 42 18 41.5523 18 41V38H17C15.3431 38 14 36.6569 14 35V16C14 14.3431 15.3431 13 17 13V4ZM21 41H22H26H27H29V38H19V41H21ZM19 13H29V4L19 4V13ZM31 15H30H18H17C16.4477 15 16 15.4477 16 16V35C16 35.5523 16.4477 36 17 36H31C31.5523 36 32 35.5523 32 35V16C32 15.4477 31.5523 15 31 15Z", fill: color })] })));
};
exports.default = Usb;
