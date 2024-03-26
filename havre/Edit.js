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
var Edit = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Edit icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.008 5.56024C22.7941 6.34023 22.7968 7.61054 22.0139 8.39381L9.70734 20.7069L9.4513 20.9631L9.09058 20.9959L3.59058 21.4959L2.39551 21.6045L2.50415 20.4095L3.00416 14.9095L3.03693 14.5489L3.29294 14.2929L15.5886 1.99724C16.3675 1.21835 17.6296 1.21588 18.4115 1.99172L22.008 5.56024ZM20.5993 6.97997L17.0028 3.41145L15.4143 5L18.9972 8.58294L20.5993 6.97997ZM17.5834 9.99753L8.5488 19.0369L4.60458 19.3955L4.96316 15.4511L14 6.41421L17.5834 9.99753ZM23 21L13 21V19L23 19V21Z", fill: color })] })));
};
exports.default = Edit;
