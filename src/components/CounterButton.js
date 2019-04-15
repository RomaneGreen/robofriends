import React, { Component } from 'react'

export default class CounterButton extends Component {
   constructor() {
       super()
           this.state = { count: 0}
       
   }
    shouldComponentUpdate(nextProps, nextState) {
       
        return true
    }
    updateCount = () => {

        this.setState({count : this.state.count + 1})
    }
  render() {
      console.log('counterButton')
    return (
      <div>
        <button color ={this.props.color} onClick={this.updateCount}> Count:{this.state.count} </button>
      </div>
    )
  }
}
