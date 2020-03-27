import React, { useEffect, useState } from "react";
import Track from "../Components/Track";
import { withRouter, Link, Router } from "react-router-dom";
import { useSelector } from "react-redux";

const PageAlbun = props => {
  const [album, setAlbum] = useState();

  const query = props.match.params.searchString;
  const token = useSelector(state => state.token);

  useEffect(() => {
    fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=track&limit=10&offset=0`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then(res => res.json())
      .then(function(data) {
        setAlbum(data.tracks.items);
      })
      .catch(error => console.error(error));
  }, []);

  if (album) {
    console.log(album);
  }

  return (
    <>
      {album ? (
        <>
          <div className="container">
            <div className="row-2"><Link to="/">Voltar</Link></div>
            <img
              src={album[0].album.images[0].url}
              className="albumImage"
              alt="Album Image"
            />
          </div>
          <div className="container">
            {album.map((tracks, i = 1) => (
              <div key={i++}>
                <Track id={i} title={tracks.name} popularity={tracks.popularity} duration={tracks.duration_ms}/>
              </div>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default withRouter(PageAlbun);
