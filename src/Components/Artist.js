import React, { useState, useEffect } from "react";
import CardArtist from "./CardArtist";


const Artist = props => {
  const query = props.searchString == "" ? "tom jobim" : props.searchString;
  const token = props.token;

  const [artists, setArtists] = useState();

  useEffect(() => {
    fetch(
      `https://api.spotify.com/v1/search?q=${query}&type=artist&limit=10&offset=0`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
      .then(res => res.json())
      .then(function(data) {
        setArtists(data.artists.items);
      })
  }, [query]);

  return (
    <>
      {query ? (
        artists != undefined ? (
          <>
            {artists.map((artists, i = 1) => (
              <div className="row" key={i++}>
                <CardArtist
                  image={artists.images}
                  title={artists.name}
                  genres={artists.genres[0]}
                  popularity={artists.popularity}
                />
              </div>
            ))}
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

export default Artist;
