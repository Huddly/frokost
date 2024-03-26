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
var Chat = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Chat icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 2C2.89543 2 2 2.89543 2 4V21.1849C2 22.5642 3.70477 23.2123 4.62111 22.1814L7.44907 19H20C21.1046 19 22 18.1046 22 17V4C22 2.89543 21.1046 2 20 2H4ZM4 4H20V17H7H6.55093L6.25259 17.3356L4 19.8698V4ZM7 11H9V9H7V11ZM11 11H13V9H11V11ZM17 11H15V9H17V11Z", fill: color })] })));
};
exports.default = Chat;
