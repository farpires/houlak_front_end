import axios from "axios";

export default async function getAlbums(searchKey) {
    try {
        if (searchKey === "") return;
        const albums = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/artist/${searchKey}`);
        return albums.data;
    } catch (err) {
        console.log(err);
    }
};
