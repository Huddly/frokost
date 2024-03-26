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
var ImageSettings = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ImageSettings icon' }), (0, jsx_runtime_1.jsx)("path", { d: "M4 2C2.89543 2 2 2.89543 2 4V18C2 19.1046 2.89543 20 4 20H12.3414C12.1203 19.3744 12 18.7013 12 18H4V17.3106L8.90337 12.4072L11.8651 15.3106L12.3989 15.8444C12.6498 15.1928 13.0111 14.5961 13.46 14.0771L13.2687 13.8859L10.3035 10.979C9.52022 10.2112 8.26472 10.2174 7.48915 10.993L4 14.4822V4H20V12.3414C20.7452 12.6048 21.4229 13.0113 22 13.5278V4C22 2.89543 21.1046 2 20 2H4Z", fill: color }), (0, jsx_runtime_1.jsx)("path", { d: "M4 2C2.89543 2 2 2.89543 2 4V18C2 19.1046 2.89543 20 4 20H12.3414C12.1203 19.3744 12 18.7013 12 18H4V17.3106L8.90337 12.4072L11.8651 15.3106L12.3989 15.8444C12.6498 15.1928 13.0111 14.5961 13.46 14.0771L13.2687 13.8859L10.3035 10.979C9.52022 10.2112 8.26472 10.2174 7.48915 10.993L4 14.4822V4H20V12.3414C20.7452 12.6048 21.4229 13.0113 22 13.5278V4C22 2.89543 21.1046 2 20 2H4Z", fill: color }), (0, jsx_runtime_1.jsx)("path", { d: "M4 2C2.89543 2 2 2.89543 2 4V18C2 19.1046 2.89543 20 4 20H12.3414C12.1203 19.3744 12 18.7013 12 18H4V17.3106L8.90337 12.4072L11.8651 15.3106L12.3989 15.8444C12.6498 15.1928 13.0111 14.5961 13.46 14.0771L13.2687 13.8859L10.3035 10.979C9.52022 10.2112 8.26472 10.2174 7.48915 10.993L4 14.4822V4H20V12.3414C20.7452 12.6048 21.4229 13.0113 22 13.5278V4C22 2.89543 21.1046 2 20 2H4Z", fill: color })] })));
};
exports.default = ImageSettings;
