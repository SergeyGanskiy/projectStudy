import {registration} from "../api/auth";
// import {studentInfoId} from "../api/auth";
import {updateStudentInfo} from "../api/auth";
// import {averageGrade} from "../api/auth";
// import {minAverageGrade} from "../api/auth";
// import {maxAverageGrade} from "../api/auth";
// import {studentInfoGrade} from "../api/auth";


export default [
    {
        method: 'POST',
        path: '/registration/',
        handler: registration
    },

    // {
    //      method: 'GET',
    //      path: '/studentInfoId/',
    //      handler: studentInfoId
    //  },

    {
        method: 'POST',
        path: '/updateStudentInfo/',
        handler: updateStudentInfo
    }

    // {
    //     method: 'GET',
    //     path: '/averageGrade/',
    //     handler: averageGrade
    // },
    //
    // {
    //     method: 'GET',
    //     path: '/minAverageGrade/',
    //     handler: minAverageGrade
    // },
    //
    // {
    //     method: 'GET',
    //     path: '/maxAverageGrade/',
    //     handler: maxAverageGrade
    // },
    //
    // {
    //     method: 'GET',
    //     path: '/studentInfoGrade/',
    //     handler: studentInfoGrade
    // },

]