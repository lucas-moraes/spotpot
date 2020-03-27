import React from "react";

const Track = props => {

  function Stars() {
    let star = "☆";
    for (let i = 1; i < (props.popularity / 2 / 10).toFixed(0); i++) {
      star += "☆";
    }
    return star;
  }

  return (
    <div className="row-1">
      <span>{props.id}</span>
      <span className="trackTitle">{props.title}</span>

      <span className="trackStars">
        <b>{Stars()}</b>
      </span>
      <span>
        Duração:{" "}
        {((props.duration / 1000 / 60) << 0) +
          ":" +
          ((props.duration % 60000) / 1000).toFixed(0)}
      </span>
    </div>
  );
};

export default Track;
