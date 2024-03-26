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
var ArrowDown = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ArrowDown icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M11.6464 19.6464L12.3536 18.9393L11.6464 19.6464ZM3.29289 12.7071L10.9393 20.3536L12.3536 18.9393L4.70711 11.2929L3.29289 12.7071ZM13.0607 20.3536L20.7071 12.7071L19.2929 11.2929L11.6464 18.9393L13.0607 20.3536ZM13 19V3L11 3V19H13ZM10.9393 20.3536C11.5251 20.9393 12.4749 20.9393 13.0607 20.3536L11.6464 18.9393C11.8417 18.7441 12.1583 18.7441 12.3536 18.9393L10.9393 20.3536Z", fill: color })] })));
};
exports.default = ArrowDown;
