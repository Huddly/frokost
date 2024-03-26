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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ChevronRight icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M15.6464 11.6464L16.3536 10.9393L15.6464 11.6464ZM8.70711 20.7071L16.3536 13.0607L14.9393 11.6464L7.29289 19.2929L8.70711 20.7071ZM16.3536 10.9393L8.70711 3.29289L7.29289 4.70711L14.9393 12.3536L16.3536 10.9393ZM16.3536 13.0607C16.9393 12.4749 16.9393 11.5251 16.3536 10.9393L14.9393 12.3536C14.7441 12.1583 14.7441 11.8417 14.9393 11.6464L16.3536 13.0607Z", fill: color })] })));
};
exports.default = ChevronRight;
