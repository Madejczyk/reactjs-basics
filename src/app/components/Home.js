import React from 'react'

export class Home extends React.Component{
    constructor(props){
        super()
        this.state = {
            height: props.initialHeight
        }
    }

    onFlyHigher(){
        this.setState({
            height: this.state.height + 3
        })
    }

    render(){

        return (
            <div>
                <p>Flight component</p>
                <p>Your UAV name: {this.props.name}</p>
                <p>Him height: {this.state.height}</p>
                <hr/>
                <button onClick={() => this.onFlyHigher()} className="btn btn-primary">Fly higher</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number
}