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
var ImageQuality = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ImageQuality icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 9C4 7.34315 5.34315 6 7 6H41C42.6569 6 44 7.34315 44 9V32C44 33.6569 42.6569 35 41 35H28.153L28.8673 40H34V42H29.153H28H20H18.847H14V40H19.1327L19.847 35H7C5.34314 35 4 33.6569 4 32V9ZM21.8673 35L21.153 40H26.847L26.1327 35H21.8673ZM20.1327 33H21H27H27.8673H41C41.5523 33 42 32.5523 42 32V30H6V32C6 32.5523 6.44772 33 7 33H20.1327ZM6 29H42V9C42 8.44771 41.5523 8 41 8H7C6.44772 8 6 8.44772 6 9V29ZM32 14H16V21.2929L17.9393 19.3536C18.5251 18.7678 19.4749 18.7678 20.0607 19.3536L22.5 21.7929L25.1464 19.1464L27.4393 16.8536C28.0251 16.2678 28.9749 16.2678 29.5607 16.8536L32 19.2929V14ZM18.6464 20.0607L16 22.7071V25H32V20.7071L28.8536 17.5607C28.6583 17.3654 28.3417 17.3654 28.1464 17.5607L25.8536 19.8536L22.8536 22.8536L22.5 23.2071L22.1464 22.8536L19.3536 20.0607C19.1583 19.8654 18.8417 19.8654 18.6464 20.0607ZM16 13C15.4477 13 15 13.4477 15 14V25C15 25.5523 15.4477 26 16 26H32C32.5523 26 33 25.5523 33 25V14C33 13.4477 32.5523 13 32 13H16ZM22 19C23.1046 19 24 18.1046 24 17C24 15.8954 23.1046 15 22 15C20.8954 15 20 15.8954 20 17C20 18.1046 20.8954 19 22 19ZM23 17C23 17.5523 22.5523 18 22 18C21.4477 18 21 17.5523 21 17C21 16.4477 21.4477 16 22 16C22.5523 16 23 16.4477 23 17Z", fill: color })] })));
};
exports.default = ImageQuality;
