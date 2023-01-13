import FormTemp from "./Form.template";
import { useState } from "react";
//(searchKey: string, resourceType:
const Form = ({setArtist}) => {
  const [searchKey, setSearchKey] = useState("");
  const [err, setError] = useState(false);

  const albumSearch = (e) => {
    e.preventDefault();
    if (searchKey.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setArtist(searchKey);
  };
  return FormTemp(setSearchKey, albumSearch, err);
};

export default Form;
