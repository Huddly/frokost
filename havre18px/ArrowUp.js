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
var ArrowUp = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ArrowUp icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M9.23443 3.73565L9.94145 3.02846L9.23443 3.73565ZM8.76305 3.73568L9.47015 4.44278L8.76305 3.73568ZM15.7058 8.79151L9.94145 3.02846L8.5274 4.44284L14.2918 10.2059L15.7058 8.79151ZM8.05594 3.02857L2.29292 8.79159L3.70713 10.2058L9.47015 4.44278L8.05594 3.02857ZM7.99872 4L7.99872 16L9.99872 16L9.99872 4L7.99872 4ZM9.94145 3.02846C9.42074 2.50786 8.5766 2.50791 8.05594 3.02857L9.47015 4.44278C9.20983 4.70311 8.78776 4.70313 8.5274 4.44284L9.94145 3.02846Z", fill: color })] })));
};
exports.default = ArrowUp;
