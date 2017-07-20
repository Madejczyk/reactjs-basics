import React from 'react'
import {render} from 'react-dom'
import {Header} from './components/Header'
import {Home} from './components/Home'

class App extends React.Component {
    constructor(){
        super()
        this.state ={
            homeLink: "None"
        }
    }

    onGreet(){
        alert("Welcome")
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Dronito"}
                              initialHeight={1}
                              changeLink={this.onChangeLinkName.bind(this)}
                              greet={this.onGreet}/>
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById("app"))