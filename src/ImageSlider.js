import React, { Component } from 'react';

export default class ImageSlider extends Component {

  constructor() {
    super(); //super required when calling this on constructor 
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return `I am on slide ${this.state.currentSlideIndex}`
  }
}