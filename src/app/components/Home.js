import React from 'react'

export class Home extends React.Component{
    constructor(props){
        super()
        this.state = {
            height: props.initialHeight,
            duration: 0,
            homeLink: props.initialLinkName
        }
        setInterval(() => {
            this.setState({
                duration: this.state.duration + 1
            })
        },1000)
    }

    onFlyHigher(){
        this.setState({
            height: this.state.height + 3
        })
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        })
    }

    render(){

        return (
            <div>
                <p>Flight component</p>
                <p>Your UAV name: {this.props.name}</p>
                <p>Flight duration: {this.state.duration}</p>
                <p>Him height: {this.state.height}</p>
                <hr/>
                <button onClick={() => this.onFlyHigher()} className="btn btn-primary">Fly higher</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr />
                <input type="text"
                       onChange={(event) => this.onHandleChange(event)}
                       value={this.state.homeLink} />
                <button onClick={() => this.onChangeLink()} className="btn btn-primary">Change header link</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    duration: React.PropTypes.number,
    initialLinkName: React.PropTypes.string,
    greet: React.PropTypes.func
}