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
var Check = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Check icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M9.14645 16.1464L8.43934 16.8536L9.14645 16.1464ZM10.5607 16.8536L21.7071 5.70711L20.2929 4.29289L9.14645 15.4393L10.5607 16.8536ZM9.85355 15.4393L3.70711 9.29289L2.29289 10.7071L8.43934 16.8536L9.85355 15.4393ZM9.14645 15.4393C9.34171 15.2441 9.65829 15.2441 9.85355 15.4393L8.43934 16.8536C9.02513 17.4393 9.97487 17.4393 10.5607 16.8536L9.14645 15.4393Z", fill: color })] })));
};
exports.default = Check;
