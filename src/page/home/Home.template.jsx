
import React, { Fragment } from "react";
import Form from "./components/form/Form";
import AlbumList from "./components/imageList/AlbumList";
import Spinner from "../../components/Spinner";

export default function HomeTemp(setArtist, albums, loading) {
  return (
    <Fragment>
      <div className="jumbotron">
        <p className="lead text-center">Spotify albums</p>
        <Form
          setArtist={setArtist}
        />
      </div>
      <div className="row justify-content-center">
        {loading ? <Spinner />
          : <AlbumList
            albums={albums}
          />}

      </div>
    </Fragment>
  );
};
