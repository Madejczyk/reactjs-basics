import React from 'react'

const styles = {
    transition: 'all 1s ease-in'
}
export class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            scale: 1,
            opactiy: 1
        }
    }

    onScale(){
        this.setState({
            scale: this.state.scale > 1 ? 1 : 1.3
        })
    }

    onHide(){
        this.setState({
            opacity: 0
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="s12">

                    </div>
                </div>
                <div className="row">
                    <div className=".s8 offset-s2 center align">
                        <div className="card deep-purple z-depth-2"
                             style={{...styles, opacity: this.state.opacity, transform: 'scale('+this.state.scale+')'}}>
                        <div className="card-content white-text">
                            <span className="card-title">Home</span>
                            <p>CSS Animation</p>
                        </div>
                        <div className="card-action">
                            <a onClick={this.onHide.bind(this)} style={{cursor: 'pointer'}}>Hide</a>
                            <a onClick={this.onScale.bind(this)} style={{cursor: 'pointer'}}>Scale</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
    }
}
