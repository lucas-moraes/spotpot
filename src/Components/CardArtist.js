import React from "react";
import { Link } from "react-router-dom";
import imagePlaceHolder from "./ImgPlaceHolder.png";

const CardArtist = props => {
  function Stars() {
    let star = "☆";
    for (let i = 1; i < (props.popularity / 2 / 10).toFixed(0); i++) {
      star += "☆";
    }
    return star;
  }

  return (
    <Link to={`/${props.title}`}>
      <div className="cardArtist">
        <div className="cardArtist-body">
          <img
            src={
              props.image[0] === undefined || ""
                ? imagePlaceHolder
                : props.image[0].url
            }
            className="artistImage"
            alt="Artist Image"
          />
          <div className="cardArtist-square">
            <p>
              <b>Artista: </b>
              {props.title}
            </p>
            <p>
              <b>Genero: </b>
              {props.genres ? props.genres : "Indefined"}
            </p>
            <p className="cardArtist-stars">
              <b>{Stars()}</b>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardArtist;
