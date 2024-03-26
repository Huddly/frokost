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
var LightMax = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsxs)("g", __assign({ clipPath: "url(#clip0_3821_50171)" }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'LightMax icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 0V3H11V0H13ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM13 24V21H11V24H13ZM24 13H21V11H24V13ZM0 13H3V11H0V13ZM21.1915 4.22182L19.0702 6.34314L17.6559 4.92892L19.7773 2.8076L21.1915 4.22182ZM4.22641 21.1924L6.34773 19.0711L4.93352 17.6569L2.8122 19.7782L4.22641 21.1924ZM19.7773 21.1924L17.6559 19.0711L19.0702 17.6569L21.1915 19.7782L19.7773 21.1924ZM2.8122 4.22177L4.93352 6.34309L6.34773 4.92888L4.22641 2.80756L2.8122 4.22177Z", fill: color })] })), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", __assign({ id: "clip0_3821_50171" }, { children: (0, jsx_runtime_1.jsx)("rect", { width: "24", height: "24", fill: "white" }) })) })] })));
};
exports.default = LightMax;
