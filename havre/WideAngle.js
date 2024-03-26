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
var WideAngle = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'WideAngle icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 12.523V4.47703L7 5.67703V11.323L4 12.523ZM9 11H15V5.99999H9V11ZM17 5.67703V11.323L20 12.523V4.47703L17 5.67703ZM15.8074 13H8.19258L4.05709 14.6542C3.07179 15.0483 2 14.3227 2 13.2615V3.73851C2 2.67731 3.07179 1.95168 4.05709 2.34579L8.19258 3.99999H15.8074L19.9429 2.34579C20.9282 1.95168 22 2.67731 22 3.73851V13.2615C22 14.3227 20.9282 15.0483 19.9429 14.6542L15.8074 13ZM20.7071 18.2929L17.7071 15.2929L16.2929 16.7071L17.5858 18H6.41421L7.70711 16.7071L6.29289 15.2929L3.29289 18.2929L2.58579 19L3.29289 19.7071L6.29289 22.7071L7.70711 21.2929L6.41421 20H17.5858L16.2929 21.2929L17.7071 22.7071L20.7071 19.7071L21.4142 19L20.7071 18.2929Z", fill: color })] })));
};
exports.default = WideAngle;
