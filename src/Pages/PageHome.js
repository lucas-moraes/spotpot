import React, { useEffect } from "react";
import hash from "../Config/hash";
import { authEndpoint, clientId, redirectUri, scopes } from "../Config";
import { Route, Switch, withRouter } from "react-router-dom";
import Artist from "../Components/Artist";
import Albums from "../Components/Albums";
import Logo from "../Components/icon.png";
import SearchInput from "../Components/SearchInput.js";
import { useSelector, useDispatch } from "react-redux";

const PageHome = () => {

  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    let _token = hash.access_token;
    if (token == "" || null || undefined ) {
      dispatch({ type: "ADD_TOKEN", title: _token });
    }
  }, []);

  const ArtistRoute = ({ match }) => (
    <Artist
      searchString={match ? match.params.searchString || "" : ""}
      token={token}
    />
  );

  const AlbumsRoute = ({ match }) => (
    <Albums
      searchString={match ? match.params.searchString || "" : ""}
      token={token}
    />
  );

  return (
    <>
      {token != "" || null || undefined ? (
        <>
          <div className="container">
            <div className="header">
              <img src={Logo} className="logo" width="35" height="35" alt="Spotify Icon" />
              <Route
                exact
                path="/:searchString?"
                children={({ match }) => (
                  <SearchInput
                    searchString={match ? match.params.searchString || "" : ""}
                  />
                )}
              />
            </div>
            <Switch>
              <Route path="/:searchString?" component={ArtistRoute} />
            </Switch>
          </div>
          <div className="container">
            <Route path="/:searchString?" component={AlbumsRoute} />
          </div>
        </>
      ) : (
        <div className="label">
          <h2>Spotpot</h2>
          <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            Acessar
          </a>
        </div>
      )}
    </>
  );
};

export default withRouter(PageHome);
