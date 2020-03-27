import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import CardAlbums from "./CardAlbums";

const Albums = props => {
  const query =  props.searchString == "" ? "tom jobim" : props.searchString;
  const token = props.token;

  const [albums, setAlbums] = useState();
  const [artist, setArtist] = useState();

  useEffect(() => {
    fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=artist,album&limit=10&offset=0`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then(res => res.json())
      .then(function(data) {
        setAlbums(data.albums.items); 
        setArtist(data.artists.items[0].name);
      })
  }, [query]);


  return (
    <>
      {query ? (
        albums != undefined ? (
          <>
            <h4>Albuns relacionados</h4>
            <div className="row">
              {albums.map((albums, i = 1) => (
                <Link to={`/pagealbum/album/album:${albums.name}+artist:${albums.artists[0].name}`} key={i++}>
                <CardAlbums
                  image={albums.images[0].url}
                  title={albums.name}
                />
                </Link>
              ))}
            </div>
          </>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default Albums;
