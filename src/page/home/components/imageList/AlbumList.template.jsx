import React from "react";
import Album from "../../../../components/Album";

export default function AlbumListTemp(albums) {
  console.log(albums);
  return (
    <div className="col-12 p-5 row">
        {albums.map((album,index)=>(
            <Album
              key={index}
              album ={album}
            />
        ))}
    </div>
  );
};
