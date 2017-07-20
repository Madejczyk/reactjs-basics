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
                    {this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}
                </ul>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired
}