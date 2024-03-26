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
var ChevronDown = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ChevronDown icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M12.3536 15.6464L13.0607 16.3536L12.3536 15.6464ZM3.29289 8.70711L10.9393 16.3536L12.3536 14.9393L4.70711 7.29289L3.29289 8.70711ZM13.0607 16.3536L20.7071 8.70711L19.2929 7.2929L11.6464 14.9393L13.0607 16.3536ZM10.9393 16.3536C11.5251 16.9393 12.4749 16.9393 13.0607 16.3536L11.6464 14.9393C11.8417 14.7441 12.1583 14.7441 12.3536 14.9393L10.9393 16.3536Z", fill: color })] })));
};
exports.default = ChevronDown;
