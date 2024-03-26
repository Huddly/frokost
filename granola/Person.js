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
var Person = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Person icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 15C27.0376 15 29.5 12.5376 29.5 9.5C29.5 6.46243 27.0376 4 24 4C20.9624 4 18.5 6.46243 18.5 9.5C18.5 12.5376 20.9624 15 24 15ZM24 17C28.1421 17 31.5 13.6421 31.5 9.5C31.5 5.35786 28.1421 2 24 2C19.8579 2 16.5 5.35786 16.5 9.5C16.5 13.6421 19.8579 17 24 17ZM11 26C11 22.134 14.134 19 18 19H30C33.866 19 37 22.134 37 26V45H40V46H37H35H32H31H17H16H13H11H8V45H11V26ZM17 45L17 29H16L16 45H13V26C13 23.2386 15.2386 21 18 21H30C32.7614 21 35 23.2386 35 26V45H32V29H31V45H17Z", fill: color })] })));
};
exports.default = Person;
