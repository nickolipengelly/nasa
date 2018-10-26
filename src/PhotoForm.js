import React, { Component } from "react";
import "../src/Styles/PhotoFormStyles.css";

export default class PhotoForm extends Component {
  constructor() {
    super();
    this.state = {
      date: ""
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state);
  }

  handleDateChange(date) {
    console.log("changed date");
    this.setState({
      date: date.target.value
    });
  }

  render() {
    return (
      <div className="datePicker">
        <form onSubmit={this.handleSubmit}>
          <label> Display photos from:</label>
          <input
            onChange={this.handleDateChange}
            type="date"
            id="earth_datePick"
          />
          <br />
          <button className="roverButton">Launch</button>
        </form>
      </div>
    );
  }
}
