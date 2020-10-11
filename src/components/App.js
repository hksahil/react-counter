import React, { Component } from 'react'

export default class App extends Component {
constructor(props)
{
super(props)
this.state={
  counter1:0,
  counter2:100
}
}


incrementfn=()=>{
this.setState({counter1:this.state.counter1+1,counter2:this.state.counter2+1})
  console.log("incremented")

};
 decrementfn=()=>{
this.setState({counter1:this.state.counter1-1,counter2:this.state.counter2-1})
  console.log("decremented")
};


  render() {
    return (
      <div>
      <p>Simple Counter Application</p>
      <button onClick={this.incrementfn}>+</button>
      <p>Current value of counter1 is {this.state.counter1}</p>
      <p>Current value of counter2 is {this.state.counter2}</p>
      <button onClick={this.decrementfn}>-</button>
      </div>
    )
  }
}
