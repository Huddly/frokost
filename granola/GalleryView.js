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
var GalleryView = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'GalleryView icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 10C3 8.34315 4.34315 7 6 7H10V9H6C5.44772 9 5 9.44772 5 10V14H3V10ZM23 9H18V7H23H24H25H30V9H25V13V14H23V13V9ZM5 24V28C5 28.5523 5.44772 29 6 29H7.41604C8.1876 27.2341 9.94968 26 12 26H20C21.6356 26 23.0878 26.7853 24 27.9995C24.9122 26.7853 26.3644 26 28 26H36C38.0503 26 39.8124 27.2341 40.584 29H42C42.5523 29 43 28.5523 43 28V24H45V28C45 29.6569 43.6569 31 42 31H41V40H43V41H5V40H7V31H6C4.34315 31 3 29.6569 3 28V24H5ZM23 40V31C23 29.3431 21.6569 28 20 28H12C10.3431 28 9 29.3431 9 31V40H23ZM25 31V40H39V31C39 29.3431 37.6569 28 36 28H28C26.3431 28 25 29.3431 25 31ZM42 9H38V7H42C43.6569 7 45 8.34315 45 10V14H43V10C43 9.44772 42.5523 9 42 9ZM16 16C14.3431 16 13 17.3431 13 19C13 20.6569 14.3431 22 16 22C17.6569 22 19 20.6569 19 19C19 17.3431 17.6569 16 16 16ZM11 19C11 16.2386 13.2386 14 16 14C18.7614 14 21 16.2386 21 19C21 21.7614 18.7614 24 16 24C13.2386 24 11 21.7614 11 19ZM29 19C29 17.3431 30.3431 16 32 16C33.6569 16 35 17.3431 35 19C35 20.6569 33.6569 22 32 22C30.3431 22 29 20.6569 29 19ZM32 14C29.2386 14 27 16.2386 27 19C27 21.7614 29.2386 24 32 24C34.7614 24 37 21.7614 37 19C37 16.2386 34.7614 14 32 14Z", fill: color })] })));
};
exports.default = GalleryView;
