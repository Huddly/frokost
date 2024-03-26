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
var ShowPassword = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ShowPassword icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M22.5 11.5C22.5 11.5 19.5 18 12 18C4.5 18 1.5 11.5 1.5 11.5C1.5 11.5 4.5 5 12 5C19.5 5 22.5 11.5 22.5 11.5Z", stroke: "#262626", strokeWidth: "2", fill: color }), (0, jsx_runtime_1.jsx)("path", { d: "M22.5 11.5C22.5 11.5 19.5 18 12 18C4.5 18 1.5 11.5 1.5 11.5C1.5 11.5 4.5 5 12 5C19.5 5 22.5 11.5 22.5 11.5Z", stroke: "#262626", strokeWidth: "2", fill: color })] })));
};
exports.default = ShowPassword;
