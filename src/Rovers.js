import axios from "axios";
import React, { Component } from "react";
import "../src/Styles/Rovers.css";
import RoverDisplay from "./RoverDisplay";

export default class Rovers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rovers: [],
      notLoading: false,
      err: null
    };
    this.getRoverData = this.getRoverData.bind(this);
  }

  getRoverData(url) {
    return axios.get(url).then(response => {
      return response.data.rovers;
    });
  }
  componentDidMount() {
    this.getRoverData(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/?&api_key=COJsUBGDvkQ7qAxGPzVs9pywF1l2I5EngGJpVzFy"
    ).then(rovers => this.setState({ rovers, notLoading: true }));
  }

  render() {
    const mappedRovers = this.state.rovers.map(rover => (
      <RoverDisplay
        key={rover.id}
        name={rover.name}
        status={rover.status}
        camera={rover.cameras}
        launch={rover.launch_date}
        landing={rover.landing_date}
        sol={rover.max_sol}
        photos={rover.total_photos}
        available={rover.photos}
      />
    ));
    return (
      <div>{this.state.notLoading ? <div>{mappedRovers}</div> : null}</div>
    );
  }
}
