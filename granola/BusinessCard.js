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
var BusinessCard = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'BusinessCard icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 12C2 10.3431 3.34315 9 5 9H43C44.6569 9 46 10.3431 46 12V36C46 37.6569 44.6569 39 43 39H5C3.34315 39 2 37.6569 2 36V12ZM5 11C4.44772 11 4 11.4477 4 12V36C4 36.5523 4.44772 37 5 37H43C43.5523 37 44 36.5523 44 36V12C44 11.4477 43.5523 11 43 11H5ZM9 14H23C24.1046 14 25 14.8954 25 16V32C25 33.1046 24.1046 34 23 34H9C7.89543 34 7 33.1046 7 32V16C7 14.8954 7.89543 14 9 14ZM9 15C8.44772 15 8 15.4477 8 16V32C8 32.5523 8.44772 33 9 33H10V30C10 27.7909 11.7909 26 14 26H18C20.2091 26 22 27.7909 22 30V33H23C23.5523 33 24 32.5523 24 32V16C24 15.4477 23.5523 15 23 15H9ZM20 30V33H12V30C12 28.8954 12.8954 28 14 28H18C19.1046 28 20 28.8954 20 30ZM37 14H38V15H37V14ZM41 14H40V15H41V14ZM37 17V16H40.6836H41V17H40.6836H37ZM38 18H37V19H38V18ZM40 18H41V19H40V18ZM41 25H28V23H41V25ZM28 29H41V27H28V29ZM14 21C14 19.8954 14.8954 19 16 19C17.1046 19 18 19.8954 18 21C18 22.1046 17.1046 23 16 23C14.8954 23 14 22.1046 14 21ZM16 17C13.7909 17 12 18.7909 12 21C12 23.2091 13.7909 25 16 25C18.2091 25 20 23.2091 20 21C20 18.7909 18.2091 17 16 17Z", fill: color })] })));
};
exports.default = BusinessCard;
