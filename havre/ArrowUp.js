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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ArrowUp icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M12.3536 4.35355L11.6464 5.06066L12.3536 4.35355ZM20.7071 11.2929L13.0607 3.64645L11.6464 5.06066L19.2929 12.7071L20.7071 11.2929ZM10.9393 3.64645L3.29289 11.2929L4.70711 12.7071L12.3536 5.06066L10.9393 3.64645ZM11 5L11 21L13 21L13 5L11 5ZM13.0607 3.64645C12.4749 3.06066 11.5251 3.06066 10.9393 3.64645L12.3536 5.06066C12.1583 5.25592 11.8417 5.25592 11.6464 5.06066L13.0607 3.64645Z", fill: color })] })));
};
exports.default = ArrowUp;
