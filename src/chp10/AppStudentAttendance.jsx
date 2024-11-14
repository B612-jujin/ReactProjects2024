import React from "react";
import StudentAttendance from "./StudentAttendance";

const students=[
    {id:1,name:"윤이나", grade:2, major:"인공지능소프트웨어"},
    {id:2,name:"박현경", grade:3, major:"전기"},
    {id:3,name:"임희정", grade:3, major:"그린에너지"},
    {id:4,name:"유현주", grade:4, major:"시각디자인"},
    {id:5,name:"마다솜", grade:5, major:"인공지능소프트웨어"}
];

const students2=[
    {id:1,name:"윤나", grade:2, major:"인공지능소프트웨어"},
    {id:2,name:"박경", grade:3, major:"전기"},
    {id:3,name:"임정", grade:3, major:"그린에너지"},
    {id:4,name:"유주", grade:4, major:"시각디자인"},
    {id:5,name:"마솜", grade:5, major:"인공지능소프트웨어"}
]

function AppStudentAttendance(){
    return(
        <div>
            <StudentAttendance students={students}/>
            <hr/>
            <StudentAttendance students={students2}/>
        </div>
    );
}
export default AppStudentAttendance;