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
var Contact = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Contact icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 7C12 5.34315 13.3431 4 15 4H42C43.6569 4 45 5.34315 45 7V26C45 27.6569 43.6569 29 42 29L36 29V38C36 39.6569 34.6569 41 33 41L18.5207 41L15.7288 44.9883C15.1317 45.8414 13.8683 45.8414 13.2712 44.9883L10.4793 41H6C4.34315 41 3 39.6569 3 38V18C3 16.3431 4.34315 15 6 15H12V7ZM34 38V29L27.5207 29L24.7288 32.9883C24.1317 33.8414 22.8683 33.8414 22.2712 32.9883L19.4793 29H15C13.3431 29 12 27.6569 12 26V17H6C5.44771 17 5 17.4477 5 18V38C5 38.5523 5.44772 39 6 39H11H11.5207L11.8192 39.4265L14.5 43.2562L17.1808 39.4265L17.4793 39H18L33 39C33.5523 39 34 38.5523 34 38ZM42 27L36 27H34L27 27H26.4793L26.1808 27.4265L23.5 31.2562L20.8192 27.4265L20.5207 27H20H15C14.4477 27 14 26.5523 14 26V7C14 6.44772 14.4477 6 15 6H42C42.5523 6 43 6.44772 43 7V26C43 26.5523 42.5523 27 42 27ZM27.646 22V20.32H29.27V22H27.646ZM29.018 19.032H27.856V18.318C27.856 18.164 27.856 18.01 27.884 17.87C27.8961 17.8095 27.9055 17.7489 27.9147 17.6907C27.9267 17.6142 27.9381 17.5416 27.954 17.478C27.968 17.366 28.01 17.254 28.08 17.128C28.0998 17.0883 28.1196 17.0504 28.1382 17.0148C28.1721 16.9501 28.2019 16.8932 28.22 16.848C28.248 16.778 28.304 16.694 28.416 16.582C28.514 16.484 28.584 16.414 28.612 16.372C28.64 16.344 28.71 16.274 28.836 16.176C28.962 16.078 29.032 16.022 29.06 15.994C29.088 15.98 29.172 15.924 29.312 15.826C29.3586 15.7933 29.399 15.7653 29.4327 15.742C29.5002 15.6953 29.5406 15.6673 29.55 15.658C29.928 15.406 30.222 15.14 30.432 14.888C30.628 14.636 30.74 14.314 30.74 13.922C30.74 13.418 30.558 13.054 30.222 12.816C29.872 12.592 29.438 12.466 28.92 12.466C28.318 12.466 27.842 12.62 27.492 12.928C27.128 13.236 26.96 13.684 26.96 14.272H25.7C25.7 13.334 26.008 12.606 26.638 12.102C27.268 11.598 28.052 11.332 29.004 11.332C29.9 11.332 30.614 11.556 31.174 12.004C31.734 12.452 32.014 13.096 32.014 13.936C32.014 14.244 31.972 14.51 31.916 14.748C31.846 14.986 31.72 15.21 31.552 15.406C31.384 15.602 31.244 15.756 31.132 15.868C31.02 15.98 30.824 16.134 30.544 16.33C30.264 16.526 30.096 16.666 30.012 16.736C29.592 17.072 29.326 17.352 29.2 17.59C29.074 17.828 29.018 18.136 29.018 18.514V19.032Z", fill: color })] })));
};
exports.default = Contact;
