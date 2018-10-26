import React from "react";
import axios from "axios";
import { Component, createContext } from "react";
import "../src/Styles/RoverPhotosStyles.css";

const PhotoContext = createContext();

export default class PhotoProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      notLoading: false,
      err: null
    };
    this.queryPhoto = this.queryPhoto.bind(this);
  }

  queryPhoto(date, name, cb) {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${name}/photos?earth_date=${date}&api_key=COJsUBGDvkQ7qAxGPzVs9pywF1l2I5EngGJpVzFy`
      )
      .then(response => {
        this.setState(
          {
            images: response.data.photos,
            notLoading: true,
            err: null
          },
          cb
        );
      });
  }

  render() {
    return (
      <PhotoContext.Provider
        value={{ ...this.state, queryPhoto: this.queryPhoto }}
      >
        {this.props.children}
      </PhotoContext.Provider>
    );
  }
}
export const withPhotos = C => props => (
  <PhotoContext.Consumer>
    {value => <C {...value} {...props} />}
  </PhotoContext.Consumer>
);
