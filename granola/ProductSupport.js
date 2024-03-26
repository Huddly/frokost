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
var ProductSupport = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ProductSupport icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 11C16 6.58172 19.5817 3 24 3C28.4183 3 32 6.58172 32 11V14.5V15V16.5C32 17.3284 31.3284 18 30.5 18H29V19H30.5C31.8807 19 33 17.8807 33 16.5V16C33.5523 16 34 15.5523 34 15V10C34 9.44772 33.5523 9 33 9H32.777C31.8675 4.99202 28.2832 2 24 2C19.7168 2 16.1325 4.99202 15.223 9H15C14.4477 9 14 9.44772 14 10V15C14 15.5523 14.4477 16 15 16C15.5523 16 16 15.5523 16 15V11ZM24 17C26.7614 17 29 14.7614 29 12C29 9.23858 26.7614 7 24 7C21.2386 7 19 9.23858 19 12C19 14.7614 21.2386 17 24 17ZM24 19C27.866 19 31 15.866 31 12C31 8.13401 27.866 5 24 5C20.134 5 17 8.13401 17 12C17 15.866 20.134 19 24 19ZM11 28C11 24.134 14.134 21 18 21H30C33.866 21 37 24.134 37 28V45H39V46H37H35H32L31 46L17 46H16H13H11H9V45H11V28ZM31 31V45H17L17 31H16L16 45H13V28C13 25.2386 15.2386 23 18 23H30C32.7614 23 35 25.2386 35 28V45H32V31H31Z", fill: color })] })));
};
exports.default = ProductSupport;
