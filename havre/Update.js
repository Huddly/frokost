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
var Update = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsxs)("g", __assign({ clipPath: "url(#clip0_262_10546)" }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'Update icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.93933 15.7654L7.55371 16.4659L8.07135 14.5341L3.29026 13.253L2.32433 12.9942L2.06551 13.9601L0.784424 18.7412L2.71628 19.2588L3.32672 16.9806C5.05224 19.9791 8.2891 22 11.9998 22C16.3554 22 20.0582 19.2159 21.4306 15.3332L19.5449 14.6668C18.4462 17.7753 15.4815 20 11.9998 20C8.94427 20 6.28689 18.2868 4.93933 15.7654ZM19.0607 8.2346C17.7132 5.71323 15.0558 4 12.0002 4C8.51854 4 5.5539 6.22472 4.45519 9.33325L2.56951 8.66675C3.94182 4.78413 7.64461 2 12.0002 2C15.711 2 18.9478 4.02095 20.6733 7.01939L21.2838 4.74118L23.2156 5.25882L21.9345 10.0399L21.6757 11.0058L20.7098 10.747L15.9287 9.46593L16.4463 7.53407L19.0607 8.2346Z", fill: color })] })), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", __assign({ id: "clip0_262_10546" }, { children: (0, jsx_runtime_1.jsx)("rect", { width: "24", height: "24", fill: "white", transform: "matrix(1 1.74846e-07 1.74846e-07 -1 0 24)" }) })) })] })));
};
exports.default = Update;
