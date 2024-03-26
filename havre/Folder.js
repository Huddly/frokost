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
var Folder = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Folder icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 21C2.89543 21 1.99999 20.1046 2 19L2.00009 4.99999C2.0001 3.89542 2.89553 3 4.00009 3L9.58578 3C10.1162 3 10.6249 3.21071 11 3.58579L14.4142 7L20 7C21.1046 7 22 7.89543 22 9L22 19C22 20.1046 21.1046 21 20 21L4 21ZM4 19L20 19L20 9L14 9L13.5858 9L4.00007 9L4 19ZM4.00008 7L4.00009 5L9.58578 5L11.5858 7L4.00008 7Z", fill: color })] })));
};
exports.default = Folder;
