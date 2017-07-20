import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import {Home} from './components/Home'
import {Flight} from "./components/Flight"
import {Alert} from './components/Alert'

class App extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/flight">Flight</Link></li>
                        <li><Link to="/alert">Alert</Link></li>
                    </ul>

                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/flight" component={Flight}/>
                    <Route path="/alert" component={Alert}/>
                </div>
            </Router>
        )
    }
}

render(<App/>, window.document.getElementById("app"))