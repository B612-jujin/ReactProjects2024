import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        message:"안녕하세요, 오늘 일정을 알려드립니다.1",
    },
    {
        message:"안녕하세요, 오늘 일정을 알려드립니다.2",
    },
    {
        message:"안녕하세요, 오늘 일정을 알려드립니다.3",
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(()=> {

            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications:notifications,
                });
            }else {
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer){
            clearInterval(timer);
        }
    }

    render() {
        return(
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message ={notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;