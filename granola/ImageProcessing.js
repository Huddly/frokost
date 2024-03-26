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
var ImageProcessing = function (_a) {
    var className = _a.className, _b = _a.color, color = _b === void 0 ? '#262626' : _b, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: className }, { children: [(0, jsx_runtime_1.jsx)("title", { children: title || 'ImageProcessing icon' }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 7C5.34315 7 4 8.34315 4 10V34C4 35.6569 5.34315 37 7 37H30.252C31.1401 40.4505 34.2723 43 38 43C42.4183 43 46 39.4183 46 35C46 32.9711 45.2447 31.1186 44 29.7084V29V28.5V10C44 8.34315 42.6569 7 41 7H7ZM42 28.0703V25.4142L33.7071 17.1213C33.3166 16.7308 32.6834 16.7308 32.2929 17.1213L20.7071 28.7071L20 29.4142L19.2929 28.7071L12.7071 22.1213C12.3166 21.7308 11.6834 21.7308 11.2929 22.1213L6 27.4142V34C6 34.5523 6.44772 35 7 35H30C30 30.5817 33.5817 27 38 27C39.4571 27 40.8233 27.3896 42 28.0703ZM42 10V22.5858L35.1213 15.7071C33.9497 14.5355 32.0503 14.5355 30.8787 15.7071L20 26.5858L14.1213 20.7071C12.9497 19.5355 11.0503 19.5355 9.87868 20.7071L6 24.5858V10C6 9.44772 6.44772 9 7 9H41C41.5523 9 42 9.44771 42 10ZM31 35C31 38.866 34.134 42 38 42C41.866 42 45 38.866 45 35C45 31.134 41.866 28 38 28C34.134 28 31 31.134 31 35ZM36.5246 30.5C36.5246 30.2239 36.7485 30 37.0246 30H38.9768C39.2529 30 39.4768 30.2239 39.4768 30.5V31.5294C39.4768 31.9158 39.8964 32.1562 40.2298 31.9606L41.0874 31.4576C41.3279 31.3165 41.6373 31.3994 41.7751 31.6418L42.7571 33.3704C42.8922 33.6081 42.8113 33.9103 42.5754 34.0486L41.6881 34.5693C41.3587 34.7625 41.3587 35.2386 41.6881 35.4318L42.5736 35.9513C42.8094 36.0897 42.8904 36.3918 42.7553 36.6296L41.7733 38.3581C41.6355 38.6006 41.326 38.6835 41.0855 38.5424L40.2298 38.0403C39.8965 37.8447 39.4768 38.0851 39.4768 38.4716V39.5C39.4768 39.7761 39.2529 40 38.9768 40H37.0246C36.7485 40 36.5246 39.7761 36.5246 39.5V38.4718C36.5246 38.0853 36.1049 37.8449 35.7716 38.0405L34.9159 38.5425C34.6754 38.6837 34.3659 38.6007 34.2282 38.3583L33.2461 36.6298C33.1111 36.392 33.192 36.0899 33.4278 35.9515L34.3137 35.4318C34.643 35.2386 34.643 34.7625 34.3137 34.5693L33.426 34.0485C33.1902 33.9101 33.1092 33.6079 33.2443 33.3702L34.2263 31.6417C34.3641 31.3992 34.6736 31.3163 34.9141 31.4574L35.7716 31.9605C36.1049 32.1561 36.5246 31.9157 36.5246 31.5293V30.5ZM39.4993 35C39.4993 35.8284 38.8278 36.5 37.9993 36.5C37.1709 36.5 36.4993 35.8284 36.4993 35C36.4993 34.1716 37.1709 33.5 37.9993 33.5C38.8278 33.5 39.4993 34.1716 39.4993 35ZM19.5 20C21.433 20 23 18.433 23 16.5C23 14.567 21.433 13 19.5 13C17.567 13 16 14.567 16 16.5C16 18.433 17.567 20 19.5 20ZM22 16.5C22 17.8807 20.8807 19 19.5 19C18.1193 19 17 17.8807 17 16.5C17 15.1193 18.1193 14 19.5 14C20.8807 14 22 15.1193 22 16.5Z", fill: color })] })));
};
exports.default = ImageProcessing;
