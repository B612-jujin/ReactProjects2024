import React from "react";
import comment from "../chp05/Comment";




class Notification extends React.Component{
    constructor(props) {
        super(props);//Component 가 생성 될 때 props 를 전달받을 수 있는 매개변수를 갖는 생성자가 호출된다.

        this.state = {};
    }

    componentDidMount() {
        console.log(`${this.props.id} : componentDidMount() called.`)
    }

    componentDidUpdate() {
        console.log(`${this.props.id}:componentDidUpdate() called.`)
    }

    componentWillUnmount() {
        console.log(`${this.props.id}:componentWillUnmount() called.`)
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