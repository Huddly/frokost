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
var Search = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Search icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.0001 10C21.0001 13.866 17.8661 17 14.0001 17C10.1341 17 7.00008 13.866 7.00008 10C7.00008 6.13401 10.1341 3 14.0001 3C17.8661 3 21.0001 6.13401 21.0001 10ZM23.0001 10C23.0001 14.9706 18.9706 19 14.0001 19C11.8747 19 9.92137 18.2633 8.38158 17.0312L2.57437 22.8385L1.16016 21.4242L6.96753 15.6169C5.73629 14.0773 5.00008 12.1246 5.00008 10C5.00008 5.02944 9.02951 1 14.0001 1C18.9706 1 23.0001 5.02944 23.0001 10Z", fill: color })] })));
};
exports.default = Search;
