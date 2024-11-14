import React from "react";
import Book from "../chp03/Book";

/*const students=[
    {id:1,name:"윤이나", grade:2, major:"인공지능소프트웨어"},
    {id:2,name:"박현경", grade:3, major:"전기"},
    {id:3,name:"임희정", grade:3, major:"그린에너지"},
    {id:4,name:"유현주", grade:4, major:"시각디자인"},
    {id:5,name:"마다솜", grade:5, major:"인공지능소프트웨어"}
]*/

function StudentAttendance(props) {
    return(
        <div>
            <h1>학생 출석부</h1>
            <ul>
                {
                    props.students.map((student)=>(
                        <li key={student.id}>
                            <b>{student.name}</b> -{student.grade}학년, {student.major}전공

                        </li>
                    ))

                }
            </ul>
        </div>
    );

}




export default StudentAttendance;