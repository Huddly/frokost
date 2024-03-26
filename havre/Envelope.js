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
var Envelope = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Envelope icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 3C1.89543 3 1 3.89543 1 5V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V5C23 3.89543 22.1046 3 21 3H3ZM3 18V7.41421L10.5858 15C11.3668 15.781 12.6332 15.781 13.4142 15L21 7.41421V18H3ZM20.5858 5H3.41421L12 13.5858L20.5858 5Z", fill: color })] })));
};
exports.default = Envelope;
