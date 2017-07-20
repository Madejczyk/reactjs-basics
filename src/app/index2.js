import React from 'react'
import {render} from 'react-dom'
import {Header2} from './components/Header2'
import {Home2} from './components/Home2'

class App extends React.Component {
    constructor(){
        super()
        this.state ={
            homeLink: "Dronito"
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
        let homeCmp = (
            <Home2 name={"Dronito"}
                  initialHeight={1}
                  changeLink={this.onChangeLinkName.bind(this)}
                  initialLinkName={this.state.homeLink}
                  greet={this.onGreet}/>
        )

        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header2 homeLink={this.state.homeLink} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}
                    </div>
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById("app"))