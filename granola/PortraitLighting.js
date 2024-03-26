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
var PortraitLighting = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'PortraitLighting icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M36 7.5V5H34V7.5H36ZM19.5 15C19.5 17.2091 17.7091 19 15.5 19C13.2909 19 11.5 17.2091 11.5 15C11.5 12.7909 13.2909 11 15.5 11C17.7091 11 19.5 12.7909 19.5 15ZM21.5 15C21.5 18.3137 18.8137 21 15.5 21C12.1863 21 9.5 18.3137 9.5 15C9.5 11.6863 12.1863 9 15.5 9C18.8137 9 21.5 11.6863 21.5 15ZM11 23C7.68629 23 5 25.6863 5 29V41H3V42H5H7H24H26H28V41H26V29C26 25.6863 23.3137 23 20 23H11ZM9 41H7V29C7 26.7909 8.79086 25 11 25H20C22.2091 25 24 26.7909 24 29V41H22V31H21V41H10L10 31H9L9 41ZM39 15C39 17.2091 37.2091 19 35 19C32.7909 19 31 17.2091 31 15C31 12.7909 32.7909 11 35 11C37.2091 11 39 12.7909 39 15ZM41 15C41 18.3137 38.3137 21 35 21C31.6863 21 29 18.3137 29 15C29 11.6863 31.6863 9 35 9C38.3137 9 41 11.6863 41 15ZM42.5 14H45V16H42.5V14ZM36 25V22.5H34V25H36ZM25 14H27.5V16H25V14ZM41.0103 19.5962L42.7781 21.364L41.3639 22.7782L39.5961 21.0104L41.0103 19.5962ZM28.6361 22.7782L30.4039 21.0104L28.9897 19.5962L27.2219 21.364L28.6361 22.7782ZM28.6361 7.22183L30.4038 8.98959L28.9896 10.4038L27.2218 8.63604L28.6361 7.22183ZM41.0104 10.4038L42.7782 8.63604L41.3639 7.22183L39.5962 8.98959L41.0104 10.4038Z", fill: color })] })));
};
exports.default = PortraitLighting;
