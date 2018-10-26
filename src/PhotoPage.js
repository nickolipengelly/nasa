import React from "react";
import { withPhotos } from "./PhotoProvider";
import "../src/Styles/PhotoPageStyles.css";

function PhotoPage(props) {
  const withPhotos = props.images.map((images, index) => {
    return (
      <div className="grid">
        <div className="marsImage" key={index}>
          <img className="image" src={images.img_src} alt={index} />
          <p className="camera"> Camera name = {images.camera.full_name}</p>
        </div>
      </div>
    );
  });
  return <div className="roverImages">{withPhotos}</div>;
}

export default withPhotos(PhotoPage);
