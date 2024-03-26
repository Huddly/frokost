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
var Filter = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Filter icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 8C10 8.82843 9.32843 9.5 8.5 9.5C7.67157 9.5 7 8.82843 7 8C7 7.17157 7.67157 6.5 8.5 6.5C9.32843 6.5 10 7.17157 10 8ZM11.8551 9C11.4248 10.4457 10.0855 11.5 8.5 11.5C6.91449 11.5 5.57521 10.4457 5.14494 9H2V7H5.14494C5.57521 5.55426 6.91449 4.5 8.5 4.5C10.0855 4.5 11.4248 5.55426 11.8551 7L22 7V9L11.8551 9ZM17 16C17 16.8284 16.3284 17.5 15.5 17.5C14.6716 17.5 14 16.8284 14 16C14 15.1716 14.6716 14.5 15.5 14.5C16.3284 14.5 17 15.1716 17 16ZM15.5 19.5C17.0855 19.5 18.4248 18.4457 18.8551 17H22V15H18.8551C18.4248 13.5543 17.0855 12.5 15.5 12.5C13.9145 12.5 12.5752 13.5543 12.1449 15H2V17H12.1449C12.5752 18.4457 13.9145 19.5 15.5 19.5Z", fill: color })] })));
};
exports.default = Filter;
