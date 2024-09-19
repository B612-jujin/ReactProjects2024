import React from "react";




class Notification extends React.Component{
    constructor(props) {
        super(props);//Component 가 생성 될 때 props 를 전달받을 수 있는 매개변수를 갖는 생성자가 호출된다.

        this.state = {};
    }
    render(){
        return(
            <div className={"wrapper"}>
                <span className={"messageText"}>
                    {this.props.message}
                </span>
            </div>
        );
    }
}

export default Notification;