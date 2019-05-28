import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
  render() {
    return (
      <div>
        <h1>This is the Roll Dice Component. It will consist of two die components and a button.</h1>
        <Die />
        <Die />
      </div>
    )
  }
}

export default RollDice;