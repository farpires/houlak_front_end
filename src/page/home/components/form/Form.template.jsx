import React from "react";
import Error from "../../../../components/Error";
export default function FormTemp(setSearchKey, albumSearch, err) {

  return (
    <form
      onSubmit={albumSearch}
    >
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg "
            placeholder="Browse the most popular albums by artists, Example: La Konga"
            onChange={e => setSearchKey(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn btn-block"
            value="search"
          />
        </div>
      </div>
      {err ? <Error message="Agrega un termino de busqueda" /> : null}
    </form>
  );
};

