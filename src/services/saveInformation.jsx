import axios from "axios";

export default async function saveInformation(result) {
    try {
        return axios.post(`${process.env.REACT_APP_URL_BACKEND}/api/information`, { artistName: result[0].artists[0].name });
    } catch (err) {
        console.log(err);
    }
};
