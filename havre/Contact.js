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
var Contact = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Contact icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 2C2.89543 2 2 2.89543 2 4V21.1849C2 22.5642 3.70477 23.2123 4.62111 22.1814L7.44907 19H20C21.1046 19 22 18.1046 22 17V4C22 2.89543 21.1046 2 20 2H4ZM4 4H20V17H7H6.55093L6.25259 17.3356L4 19.8698V4ZM11.0382 7.81864C10.8962 8.01228 10.8318 8.28722 10.8318 8.5H8.83179C8.83179 7.98551 8.96739 7.26044 9.42538 6.63591C9.92 5.96143 10.7239 5.5 11.8318 5.5C13.2124 5.5 14.2263 6.22401 14.6375 7.27071C15.0258 8.25904 14.8297 9.43666 14.0689 10.2666C13.7757 10.5865 13.4978 10.8288 13.2646 11.0237C13.201 11.0768 13.1444 11.1236 13.0932 11.1659L13.0929 11.1661L13.0929 11.1661L13.0929 11.1662C12.9413 11.2914 12.8378 11.3769 12.7424 11.471C12.6354 11.5766 12.5902 11.646 12.5627 11.7099C12.5344 11.7755 12.4985 11.8972 12.4985 12.1364V12.5H10.4985V12.1364C10.4985 11.6907 10.5667 11.2881 10.7259 10.9186C10.8859 10.5472 11.1115 10.2704 11.3379 10.0472C11.5025 9.88476 11.6979 9.72369 11.8643 9.58651C11.9057 9.55236 11.9454 9.51969 11.9823 9.48886C12.1866 9.31816 12.3879 9.14073 12.5946 8.91518C12.8338 8.65425 12.8878 8.28642 12.776 8.00202C12.6872 7.77599 12.4512 7.5 11.8318 7.5C11.3396 7.5 11.1436 7.67493 11.0382 7.81864ZM10.5037 15.5V13.5H12.5037V15.5H10.5037Z", fill: color })] })));
};
exports.default = Contact;
