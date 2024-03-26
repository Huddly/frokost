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
var AddUser = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'AddUser icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.25 5.75C8.25 4.23122 9.48122 3 11 3C12.5188 3 13.75 4.23122 13.75 5.75C13.75 7.26878 12.5188 8.5 11 8.5C9.48122 8.5 8.25 7.26878 8.25 5.75ZM11 1C8.37665 1 6.25 3.12665 6.25 5.75C6.25 8.37335 8.37665 10.5 11 10.5C13.6234 10.5 15.75 8.37335 15.75 5.75C15.75 3.12665 13.6234 1 11 1ZM7 12C4.79086 12 3 13.7909 3 16V20C3 21.1046 3.89543 22 5 22H17C18.1046 22 19 21.1046 19 20V16C19 13.7909 17.2091 12 15 12H7ZM5 16C5 14.8954 5.89543 14 7 14H15C16.1046 14 17 14.8954 17 16V20H5V16ZM19 8V6H21V8H23V10H21V12H19V10H17V8H19Z", fill: color })] })));
};
exports.default = AddUser;
