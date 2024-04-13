import React from 'react';


export default class Users extends React.Component {

    getUserList(){
        return "user list"
    }

    getUserInfo(a){
        return a
    }

    myInfo(name){
        return 'my name is'+name
    }

    render(){
        return (
            <div>
                <h2>Class Component</h2>
            </div>
        )
    }
}