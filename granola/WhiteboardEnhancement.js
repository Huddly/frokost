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
var WhiteboardEnhancement = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'WhiteboardEnhancement icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.5 3.79289L45.6464 2.64645L46.3536 3.35355L45.2071 4.5L46.3536 5.64645L45.6464 6.35355L44.5 5.20711L43.3536 6.35355L42.6464 5.64645L43.7929 4.5L42.6464 3.35355L43.3536 2.64645L44.5 3.79289ZM39.0606 4.35348L38.3535 3.64637L37.6464 4.35348L38.3535 5.06058L39.0606 4.35348ZM4 10C4 8.34315 5.34315 7 7 7H39C40.6569 7 42 8.34315 42 10V33H44V35H31.8103L34.9162 42.0992L33.0838 42.9008L31.3772 39H14.6228L12.9162 42.9008L11.0838 42.0992L14.1897 35H2V33H4V10ZM29.6272 35L30.9397 38H15.0603L16.3728 35H29.6272ZM6 33H40V10C40 9.44772 39.5523 9 39 9H7C6.44772 9 6 9.44772 6 10V33ZM14 32H18V31H14V32ZM9 30H8V31V32H9H11H12V31V30H11H9ZM34.1465 15.4394L33.0859 14.3788L32.3788 15.0859L33.4394 16.1465L34.1465 15.4394ZM35.5624 16.8534L36.6231 17.914L35.916 18.6211L34.8553 17.5605L35.5624 16.8534ZM35.5606 16.1465L36.6212 15.0859L35.9141 14.3788L34.8535 15.4394L35.5606 16.1465ZM34.1447 17.5605L33.084 18.6211L32.3769 17.914L33.4376 16.8534L34.1447 17.5605ZM34.1464 16.8536C34.3417 17.0489 34.6583 17.0489 34.8536 16.8536C35.0488 16.6584 35.0488 16.3418 34.8536 16.1465C34.6583 15.9513 34.3417 15.9513 34.1464 16.1465C33.9512 16.3418 33.9512 16.6584 34.1464 16.8536ZM27.707 14.2927L29.1212 15.707L27.707 17.1212L26.2927 15.707L27.707 14.2927ZM45.707 10.2927L47.1212 11.707L45.707 13.1212L44.2927 11.707L45.707 10.2927ZM34.0606 11.3535L33.3535 10.6464L32.6464 11.3535L33.3535 12.0606L34.0606 11.3535Z", fill: color })] })));
};
exports.default = WhiteboardEnhancement;
