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
var Help = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Help icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10.3809 7.87469C10.1051 8.21938 10 8.66912 10 9H8C8 8.33088 8.19488 7.40562 8.81913 6.6253C9.47692 5.80307 10.5263 5.25 12 5.25C13.8299 5.25 15.1732 6.11549 15.7316 7.41858C16.2722 8.67994 15.9881 10.1761 14.9571 11.2071C14.5369 11.6273 14.138 11.9464 13.7955 12.2088C13.7078 12.276 13.6272 12.337 13.5525 12.3936C13.3186 12.5707 13.1422 12.7042 12.9832 12.848C12.7935 13.0195 12.6897 13.1546 12.6238 13.2949C12.5584 13.4339 12.5 13.643 12.5 14V14.5H10.5V14C10.5 13.4153 10.5978 12.9036 10.8137 12.4442C11.029 11.986 11.3315 11.6451 11.6418 11.3645C11.8721 11.1563 12.1425 10.9519 12.3911 10.7639L12.3911 10.7639L12.3915 10.7636L12.3917 10.7635C12.4561 10.7148 12.519 10.6672 12.5795 10.6209C12.8932 10.3806 13.2131 10.1227 13.5429 9.79289C14.0119 9.32386 14.1028 8.69506 13.8934 8.20642C13.7018 7.75951 13.1701 7.25 12 7.25C11.0737 7.25 10.6231 7.57193 10.3809 7.87469ZM10.5 16V18H12.5V16H10.5Z", fill: color })] })));
};
exports.default = Help;
