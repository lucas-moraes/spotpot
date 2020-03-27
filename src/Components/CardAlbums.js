import React from "react";

const CardAlbums = props => {
  return (
    <div className="cardAlbuns" >
      <div className="cardAlbuns-body">
        <img src={props.image} className="albunsImage" alt="Artist Image" />
        <span className="cardAlbuns-title">{props.title}</span>
      </div>
    </div>
  );
};

export default CardAlbums;
