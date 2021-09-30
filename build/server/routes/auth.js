"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../api/auth");
const auth_2 = require("../api/auth");
exports.default = [
    {
        method: 'POST',
        path: '/registration/',
        handler: auth_1.registration
    },
    {
        method: 'POST',
        path: '/updateStudentInfo/',
        handler: auth_2.updateStudentInfo
    }
];
//# sourceMappingURL=auth.js.map