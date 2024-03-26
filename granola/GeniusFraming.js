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
var GeniusFraming = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'GeniusFraming icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 6C5.34315 6 4 7.34315 4 9V14H6V9C6 8.44772 6.44772 8 7 8H12V6H7ZM36 8H41C41.5523 8 42 8.44772 42 9V14H44V9C44 7.34315 42.6569 6 41 6H36V8ZM20 26C17.9497 26 16.1876 27.2341 15.416 29H10C7.23858 29 5 31.2386 5 34V41H3V42L45 42V41L43 41V34C43 31.2386 40.7614 29 38 29H32.584C31.8124 27.2341 30.0503 26 28 26H20ZM41 41V34C41 32.3431 39.6569 31 38 31H33V41H41ZM31 41V31C31 29.3431 29.6569 28 28 28H20C18.3431 28 17 29.3431 17 31V41H31ZM15 41V31H10C8.34315 31 7 32.3431 7 34V41H15ZM24 16C22.3431 16 21 17.3431 21 19C21 20.6569 22.3431 22 24 22C25.6569 22 27 20.6569 27 19C27 17.3431 25.6569 16 24 16ZM19 19C19 16.2386 21.2386 14 24 14C26.7614 14 29 16.2386 29 19C29 21.7614 26.7614 24 24 24C21.2386 24 19 21.7614 19 19ZM9 22C9 20.3431 10.3431 19 12 19C13.6569 19 15 20.3431 15 22C15 23.6569 13.6569 25 12 25C10.3431 25 9 23.6569 9 22ZM12 17C9.23858 17 7 19.2386 7 22C7 24.7614 9.23858 27 12 27C14.7614 27 17 24.7614 17 22C17 19.2386 14.7614 17 12 17ZM36 19C34.3431 19 33 20.3431 33 22C33 23.6569 34.3431 25 36 25C37.6569 25 39 23.6569 39 22C39 20.3431 37.6569 19 36 19ZM31 22C31 19.2386 33.2386 17 36 17C38.7614 17 41 19.2386 41 22C41 24.7614 38.7614 27 36 27C33.2386 27 31 24.7614 31 22Z", fill: color })] })));
};
exports.default = GeniusFraming;
