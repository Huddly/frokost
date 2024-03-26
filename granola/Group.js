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
var Group = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Group icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 9C22.067 9 20.5 10.567 20.5 12.5C20.5 14.433 22.067 16 24 16C25.933 16 27.5 14.433 27.5 12.5C27.5 10.567 25.933 9 24 9ZM18.5 12.5C18.5 9.46243 20.9624 7 24 7C27.0376 7 29.5 9.46243 29.5 12.5C29.5 15.5376 27.0376 18 24 18C20.9624 18 18.5 15.5376 18.5 12.5ZM7 26H15V38H4V29C4 27.3431 5.34315 26 7 26ZM2 38H1V39L47 39V38L46 38V29C46 26.2386 43.7614 24 41 24H32.9C32.4367 21.7178 30.419 20 28 20H20C17.581 20 15.5633 21.7178 15.1 24H7C4.23858 24 2 26.2386 2 29V38ZM44 38V29C44 27.3431 42.6569 26 41 26H33V38H44ZM31 38V25C31 23.3431 29.6569 22 28 22H20C18.3431 22 17 23.3431 17 25V38H31ZM6 16.5C6 14.567 7.567 13 9.5 13C11.433 13 13 14.567 13 16.5C13 18.433 11.433 20 9.5 20C7.567 20 6 18.433 6 16.5ZM9.5 11C6.46243 11 4 13.4624 4 16.5C4 19.5376 6.46243 22 9.5 22C12.5376 22 15 19.5376 15 16.5C15 13.4624 12.5376 11 9.5 11ZM38.5 13C36.567 13 35 14.567 35 16.5C35 18.433 36.567 20 38.5 20C40.433 20 42 18.433 42 16.5C42 14.567 40.433 13 38.5 13ZM33 16.5C33 13.4624 35.4624 11 38.5 11C41.5376 11 44 13.4624 44 16.5C44 19.5376 41.5376 22 38.5 22C35.4624 22 33 19.5376 33 16.5Z", fill: color })] })));
};
exports.default = Group;
