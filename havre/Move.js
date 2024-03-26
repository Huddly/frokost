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
var Move = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Move icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7045 23.2073L16.2445 19.6673L14.8302 18.2531L12.9974 20.0859L12.9976 12.9978L20.0873 12.9979L18.2587 14.8266L19.6729 16.2408L23.2086 12.7051C23.5991 12.3146 23.5991 11.6814 23.2086 11.2909L19.6732 7.75537L18.259 9.16955L20.0873 10.9979L12.9976 10.9978L12.9978 3.91434L14.8264 5.74297L16.2406 4.32876L12.7049 0.793067C12.3144 0.402549 11.6812 0.402541 11.2907 0.793051L7.75519 4.32842L9.16937 5.74267L10.9978 3.91436L10.9976 10.9978L3.91563 10.9976L5.72495 9.18831L4.31073 7.7741L0.794358 11.2905C0.606821 11.478 0.501465 11.7324 0.501465 11.9976C0.501465 12.2628 0.606821 12.5171 0.794358 12.7047L4.33432 16.2446L5.74853 14.8304L3.91573 12.9976L10.9976 12.9978L10.9974 20.086L9.18813 18.2767L7.77391 19.6909L11.2903 23.2073C11.4778 23.3948 11.7322 23.5002 11.9974 23.5002C12.2626 23.5002 12.517 23.3948 12.7045 23.2073Z", fill: color })] })));
};
exports.default = Move;
