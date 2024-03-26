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
var User = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'User icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.25 5.75C9.25 4.23122 10.4812 3 12 3C13.5188 3 14.75 4.23122 14.75 5.75C14.75 7.26878 13.5188 8.5 12 8.5C10.4812 8.5 9.25 7.26878 9.25 5.75ZM12 1C9.37665 1 7.25 3.12665 7.25 5.75C7.25 8.37335 9.37665 10.5 12 10.5C14.6234 10.5 16.75 8.37335 16.75 5.75C16.75 3.12665 14.6234 1 12 1ZM8 12C5.79086 12 4 13.7909 4 16V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V16C20 13.7909 18.2091 12 16 12H8ZM6 16C6 14.8954 6.89543 14 8 14H16C17.1046 14 18 14.8954 18 16V20H6V16Z", fill: color })] })));
};
exports.default = User;
