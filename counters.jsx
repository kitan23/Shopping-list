import React, { Component } from "react";

import Counter from "./counter";

class Counters extends Component {
  tick() {
    return new Date().toLocaleTimeString();
  }

  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement,
    } = this.props;
    return (
      <div>
        <h2>{this.tick()}</h2>
        <hr />
        <button
          onClick={onReset}
          style={{ fontSize: 25 }}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
