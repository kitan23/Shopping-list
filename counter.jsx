import React, { Component } from "react";

export default class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  tags = ["tag1", "tag2"];
  // styles = {
  //   fontSize: 40,
  //   fontWeight: "bold",
  // };

  render() {
    let classes = this.getBadgeClasses();
    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 25 }} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 30 }}
          className="btn btn-secondary btn-sm m-1"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={{ fontSize: 30 }}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrease
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={{ fontSize: 25 }}
          className="btn btn-danger btn-lg m-2"
        >
          Delete
        </button>
        <ul>
          {this.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
