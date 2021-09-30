"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentInfo = exports.registration = void 0;
const Students_1 = require("../models/Students");
function registration(s) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(s.payload);
        const student = yield Students_1.Students.create({
            id: s.payload.id,
            firstName: s.payload.firstName,
            lastName: s.payload.lastName,
            sex: s.payload.sex,
            phone: s.payload.phone,
            faculty: s.payload.faculty,
            averageGrade: s.payload.averageGrade
        });
        return student;
    });
}
exports.registration = registration;
function updateStudentInfo(s) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(Students_1.Students.update);
        const student = yield Students_1.Students.update({
            firstName: s.payload.firstName,
            lastName: s.payload.lastName,
            sex: s.payload.sex,
            phone: s.payload.phone,
            faculty: s.payload.faculty,
            averageGrade: s.payload.averageGrade
        }, {
            where: { id: s.payload.id }
        });
        return student;
    });
}
exports.updateStudentInfo = updateStudentInfo;
//# sourceMappingURL=auth.js.map