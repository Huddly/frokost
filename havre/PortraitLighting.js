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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'PortraitLighting icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 0.5V3H11V0.5H13ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM13 23.5V21H11V23.5H13ZM23.5 13H21V11H23.5V13ZM0.5 13H3V11H0.5V13ZM4.57429 3.16106L6.34206 4.92882L4.92785 6.34304L3.16008 4.57527L4.57429 3.16106ZM20.8382 19.4244L19.0704 17.6567L17.6562 19.0709L19.4239 20.8386L20.8382 19.4244ZM20.8399 4.57527L19.0722 6.34304L17.6579 4.92882L19.4257 3.16106L20.8399 4.57527ZM4.57606 20.8386L6.34383 19.0709L4.92961 17.6567L3.16184 19.4244L4.57606 20.8386Z", fill: color })] })));
};
exports.default = PortraitLighting;
