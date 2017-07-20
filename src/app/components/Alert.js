import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export class Alert extends React.Component{
    constructor(){
        super()
        this.state = {
            list: ['Item 1', 'Item 2', 'Item 3']
        }
    }

    onAddItem(){
        let newElement = "Item " + (this.state.list.length + 1)
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(newElement)
        this.setState({
           list: updatedList
        })
    }

    onDeleteItem(id){
        let updatedList = Object.assign([], this.state.list)
        updatedList.splice(id, 1)
        this.setState({
            list: updatedList
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
                        <a className="waves-effect waves-light btn" onClick={this.onAddItem.bind(this)}>Add item</a>
                        <p>Click item to Delete</p>
                        <ul className="collection">
                            <ReactCSSTransitionGroup
                            transitionName='fade'
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                            transitionAppear={true}
                            transitionAppearTimeout={1000}>
                            {this.state.list.map((item, i) => {
                                return (
                                    <li key={item} className="collection-item"
                                        onClick={this.onDeleteItem.bind(this, i)}
                                            style={{cursor:'pointer'}}>{item}</li>
                                )
                            })}
                            </ReactCSSTransitionGroup>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
