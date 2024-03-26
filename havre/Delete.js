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
var Delete = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Delete icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 6L4.06055 6L4.94334 20.1248C5.00922 21.1788 5.88332 22 6.93945 22L17.0605 22C18.1167 22 18.9908 21.1788 19.0567 20.1248L19.9394 6L21 6L21 4L16 4L16 3C16 1.89543 15.1046 0.999999 14 1L10 1C8.89543 1 8 1.89543 8 3L8 4L3 4L3 6ZM6.93945 20L6.06445 6L17.9355 6L17.0605 20L6.93945 20ZM10 4L14 4L14 3L10 3L10 4ZM11 17L11 11L9 11L9 17L11 17ZM15 17L15 11L13 11L13 17L15 17Z", fill: color })] })));
};
exports.default = Delete;
