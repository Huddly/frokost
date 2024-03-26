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
var RecordingQuality = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'RecordingQuality icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 10C3.34315 10 2 11.3431 2 13V35C2 36.6569 3.34315 38 5 38H38C39.6569 38 41 36.6569 41 35V32.9286L44.7905 33.7408C45.413 33.8742 46 33.3997 46 32.763V15.237C46 14.6003 45.413 14.1258 44.7905 14.2592L41 15.0714V13C41 11.3431 39.6569 10 38 10H5ZM41 17.1168V30.8832L44 31.526V16.474L41 17.1168ZM39 16.3084V13C39 12.4477 38.5523 12 38 12H5C4.44772 12 4 12.4477 4 13V26.5858L7.87868 22.7071C9.05025 21.5355 10.9497 21.5355 12.1213 22.7071L18 28.5858L28.8787 17.7071C30.0503 16.5355 31.9497 16.5355 33.1213 17.7071L39 23.5858V16.3084ZM9.29289 24.1213L4 29.4142V35C4 35.5523 4.44772 36 5 36H38C38.5523 36 39 35.5523 39 35V31.6916V26.4142L31.7071 19.1213C31.3166 18.7308 30.6834 18.7308 30.2929 19.1213L18.7071 30.7071L18 31.4142L17.2929 30.7071L10.7071 24.1213C10.3166 23.7308 9.68342 23.7308 9.29289 24.1213ZM17.5 22C19.433 22 21 20.433 21 18.5C21 16.567 19.433 15 17.5 15C15.567 15 14 16.567 14 18.5C14 20.433 15.567 22 17.5 22ZM20 18.5C20 19.8807 18.8807 21 17.5 21C16.1193 21 15 19.8807 15 18.5C15 17.1193 16.1193 16 17.5 16C18.8807 16 20 17.1193 20 18.5Z", fill: color })] })));
};
exports.default = RecordingQuality;
