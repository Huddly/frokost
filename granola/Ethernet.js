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
var Ethernet = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Ethernet icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 7C5.34315 7 4 8.34315 4 10V37C4 38.6569 5.34314 40 7 40H41C42.6569 40 44 38.6569 44 37V10C44 8.34315 42.6569 7 41 7H7ZM6 10C6 9.44772 6.44772 9 7 9H41C41.5523 9 42 9.44771 42 10V37C42 37.5523 41.5523 38 41 38H7C6.44771 38 6 37.5523 6 37V10ZM21 12C19.8954 12 19 12.8954 19 14V15H17C15.8954 15 15 15.8954 15 17V18H11C9.89543 18 9 18.8954 9 20V33C9 34.1046 9.89543 35 11 35H37C38.1046 35 39 34.1046 39 33V20C39 18.8954 38.1046 18 37 18H33V17C33 15.8954 32.1046 15 31 15H29V14C29 12.8954 28.1046 12 27 12H21ZM21 14H27V16V17H28H31V19V20H32H37V33H32V30H31V33H29V30H28V33H26V32V30H25V32V33H23V30H22V33H20V30H19V33H17V30H16V33H11V20H16H17V19V17H20H21V16V14Z", fill: color })] })));
};
exports.default = Ethernet;
