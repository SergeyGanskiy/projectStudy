import {Students} from "../models/Students";


export async function registration(s) {
        console.log(s.payload)
        const student = await Students.create({
            id: s.payload.id,
            firstName: s.payload.firstName,
            lastName: s.payload.lastName,
            sex: s.payload.sex,
            phone: s.payload.phone,
            faculty: s.payload.faculty,
            averageGrade: s.payload.averageGrade

        })
        return student
}

// export async function studentInfoId(s) {
//     console.log(1)
//     const student = await Students.findOne({
//         attributes: ['firstName'],
//         where: {
//             id: s.auth.id
//         }
//     })
//
//     return student
// }


export async function updateStudentInfo(s) {
    console.log(Students.update)
    const student = await Students.update({
            firstName: s.payload.firstName,
            lastName: s.payload.lastName,
            sex: s.payload.sex,
            phone: s.payload.phone,
            faculty: s.payload.faculty,
            averageGrade: s.payload.averageGrade
    },
        {
            where:{id: s.payload.id}
        })
    return student
}

