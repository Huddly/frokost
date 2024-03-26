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
var ChevronLeft = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ChevronLeft icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M6.23695 8.7658L5.52976 8.05877L6.23695 8.7658ZM11.2928 2.29442L5.52976 8.05877L6.94414 9.47282L12.7072 3.70847L11.2928 2.29442ZM5.52987 9.94428L11.2929 15.7073L12.7071 14.2931L6.94408 8.53007L5.52987 9.94428ZM5.52976 8.05877C5.00916 8.57949 5.00921 9.42362 5.52987 9.94428L6.94408 8.53007C7.20441 8.7904 7.20444 9.21247 6.94414 9.47282L5.52976 8.05877Z", fill: color })] })));
};
exports.default = ChevronLeft;
