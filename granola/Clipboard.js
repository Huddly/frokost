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
var Clipboard = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Clipboard icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31 5.5V6L36 6C37.6569 6 39 7.34315 39 9L39 41C39 42.6569 37.6569 44 36 44H12C10.3431 44 9 42.6569 9 41V9C9 7.34315 10.3431 6 12 6L17 6V5.5C17 4.67157 17.6716 4 18.5 4H19.382L19.9674 2.82918C20.2215 2.321 20.7409 2 21.309 2H26.691C27.2591 2 27.7785 2.321 28.0326 2.82918L28.618 4H29.5C30.3284 4 31 4.67157 31 5.5ZM29.5 9C30.1531 9 30.7087 8.5826 30.9146 8L36 8C36.5523 8 37 8.44772 37 9L37 41C37 41.5523 36.5523 42 36 42H12C11.4477 42 11 41.5523 11 41L11 9C11 8.44772 11.4477 8 12 8L17.0854 8C17.2913 8.5826 17.8469 9 18.5 9H29.5ZM18.5 5C18.2239 5 18 5.22386 18 5.5V7.5C18 7.77614 18.2239 8 18.5 8H29.5C29.7761 8 30 7.77614 30 7.5V5.5C30 5.22386 29.7761 5 29.5 5H28.309C28.1196 5 27.9465 4.893 27.8618 4.72361L27.1382 3.27639C27.0535 3.107 26.8804 3 26.691 3H21.309C21.1196 3 20.9465 3.107 20.8618 3.27639L20.1382 4.72361C20.0535 4.893 19.8804 5 19.691 5H18.5ZM33 17V19H19V17H33ZM15 19H17V17H15V19ZM33 22V24H19V22H33ZM19 27V29H33V27H19ZM22 5H26V4H22V5ZM17 24H15V22H17V24ZM15 29H17V27H15V29Z", fill: color })] })));
};
exports.default = Clipboard;
