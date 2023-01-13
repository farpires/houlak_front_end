
import getAlbums from "../../services/albums";
import HomeTemp from "./Home.template";
import { useEffect, useState } from "react";

const Home = () => {
  const [artist, setArtist] = useState("");
  const [albums, setAlbums] = useState(null);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    getAlbums(artist).then((result)=>{
      setLoading(false)
      setAlbums(result);
    })
  },[artist]);

  return HomeTemp(setArtist,albums,loading);
}

export default Home;
