// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount //initial val of sec left is equal to initial count prop of bomb 
    }
  }

  //if seconds left is zero, render boom 
  render() {
    if (this.state.secondsLeft === 0) { 
      return 'Boom!'
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }
}