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
var SpeakerFraming = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'SpeakerFraming icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14 5C14 2.79086 15.7909 1 18 1H19C21.2091 1 23 2.79086 23 5V6C23 8.20914 21.2091 10 19 10H15H14V9V5ZM18 3C16.8954 3 16 3.89543 16 5V8H19C20.1046 8 21 7.10457 21 6V5C21 3.89543 20.1046 3 19 3H18ZM1 17C1 14.7909 2.79086 13 5 13H12C14.2091 13 16 14.7909 16 17V21C16 22.1046 15.1046 23 14 23H3C1.89543 23 1 22.1046 1 21V17ZM5 15C3.89543 15 3 15.8954 3 17V21H14V17C14 15.8954 13.1046 15 12 15H5ZM6.5 7.5C6.5 6.39543 7.39543 5.5 8.5 5.5C9.60457 5.5 10.5 6.39543 10.5 7.5C10.5 8.60457 9.60457 9.5 8.5 9.5C7.39543 9.5 6.5 8.60457 6.5 7.5ZM8.5 3.5C6.29086 3.5 4.5 5.29086 4.5 7.5C4.5 9.70914 6.29086 11.5 8.5 11.5C10.7091 11.5 12.5 9.70914 12.5 7.5C12.5 5.29086 10.7091 3.5 8.5 3.5Z", fill: color })] })));
};
exports.default = SpeakerFraming;
