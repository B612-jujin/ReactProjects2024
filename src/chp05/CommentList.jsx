import React from "react";
import Comment from "./Comment";
import Button from "../chp04/Button";
import comment from "./Comment";

const comments=[
    {
        name:"최주진",
        comment:"추석연휴 잘 보내고 오세요.",
        Cname:"test1",
    },
    {
        name:"차기환",
        comment:"집에 언제가나~ 차막혀서",
        Cname:'test2',
    },
    {
        name:"정구영",
        comment:"프로젝트 예습용, 실습용 나눌게요.",
        Cname:'test3',
    },
]

function CommentList(props){
    return(
        <div>
            {
                comments.map((comment)=>{
                    return(
                        <Comment name={comment.name} comment={comment.comment} Cname={comment.Cname}/>
                    );
                })
            }
        </div>
    );
}

export default CommentList;