import React from "react";
import "../src/Styles/display.css";
import PhotoForm from "./PhotoForm";
import { withPhotos } from "./PhotoProvider";
import { withRouter } from "react-router-dom";

function RoverDisplay(props) {
  console.log(props);

  return (
    <section>
      <div className="rovers">
        <p>
          {" "}
          Rover Name: <b className="bold">{props.name}</b>{" "}
        </p>
        <p>
          <b className="bold">{props.name}</b> was launched on{" "}
          <b className="bold">{props.launch}</b> from Cape Canaveral, Florida;
          it landed on Mars on <b className="bold">{props.landing}</b>.
        </p>
        <p>
          {" "}
          Its mission status is currently:{" "}
          <b className="bold">{props.status}</b> and it has spent{" "}
          <b className="bold">{props.sol}</b> Days on Mars.{" "}
        </p>
        <p>
          {" "}
          It has transmitted <b className="bold">{props.photos}</b> photos which
          are available for view.{" "}
        </p>
        <PhotoForm
          submit={inputs =>
            props.queryPhoto(inputs.date, props.name.toLowerCase(),() => {
              props.history.push("/rover/photos");
            })
          }
        />
      </div>
    </section>
  );
}

export default withRouter(withPhotos(RoverDisplay));
