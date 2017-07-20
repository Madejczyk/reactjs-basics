import React from 'react'

export class Home extends React.Component{
    render(){

        return (
            <div>
                <p>New component</p>
                <p>Your name: {this.props.name}</p>
                <p>User object: {this.props.user.name}</p>
                <p>Hobbies:</p>
                <ul>
                    {this.props.user.hobbies.map((hobby) => <li>{hobby}</li>)}
                </ul>
            </div>
        )
    }
}