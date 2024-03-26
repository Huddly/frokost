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
var Calendar = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Calendar icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 3H17V1H19V3H20C21.1046 3 22 3.89543 22 5V13.3369C22.63 14.2316 23 15.3226 23 16.5C23 19.5376 20.5376 22 17.5 22C16.3226 22 15.2316 21.63 14.3369 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H5V1H7V3ZM20 9V11.5997C19.2499 11.2163 18.4002 11 17.5 11C14.4624 11 12 13.4624 12 16.5C12 17.4002 12.2163 18.2499 12.5997 19H4V9H20ZM4 7H20V5H4V7ZM17.5 13C15.567 13 14 14.567 14 16.5C14 18.433 15.567 20 17.5 20C19.433 20 21 18.433 21 16.5C21 14.567 19.433 13 17.5 13ZM19 17V14H17V16H15V18H18H19V17ZM7 17H10V15H7V17ZM10 13H7V11H10V13Z", fill: color })] })));
};
exports.default = Calendar;
