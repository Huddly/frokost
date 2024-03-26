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
var ZoomOut = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ZoomOut icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.99992 17C6.13393 17 2.99992 13.866 2.99992 10C2.99992 6.13401 6.13393 3 9.99992 3C13.8659 3 16.9999 6.13401 16.9999 10C16.9999 13.866 13.8659 17 9.99992 17ZM9.99992 19C5.02936 19 0.999924 14.9706 0.999924 10C0.999924 5.02944 5.02936 1 9.99992 1C14.9705 1 18.9999 5.02944 18.9999 10C18.9999 12.1246 18.2637 14.0773 17.0325 15.6169L22.8398 21.4242L21.4256 22.8385L15.6184 17.0312C14.0786 18.2633 12.1253 19 9.99992 19ZM9.33333 11H14V9H9.33333L6 9V11H9.33333Z", fill: color })] })));
};
exports.default = ZoomOut;
