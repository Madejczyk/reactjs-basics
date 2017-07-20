import React from 'react'

export class Flight extends React.Component{
    constructor(){
        super()
        this.state = {
            slide: false,
            flip: false
        }
    }

    onFlip(){
        this.setState({
            slide: false,
            flip: true
        })
    }

    onSlide(){
        this.setState({
            slide: true,
            flip: false
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
                        <div className={"card deep-purple z-depth-2 "+ (this.state.slide ? 'slide' : '') + (this.state.flip ? 'flip' : '')} >
                            <div className="card-content white-text">
                                <span className="card-title">Flight</span>
                                <p>CSS Animation</p>
                            </div>
                            <div className="card-action">
                                <a onClick={this.onFlip.bind(this)} style={{cursor: 'pointer'}}>Flip</a>
                                <a onClick={this.onSlide.bind(this)} style={{cursor: 'pointer'}}>Slide</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
