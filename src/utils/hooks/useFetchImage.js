import { useEffect, useState } from "react";
import axios from "axios";

const url = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

const useFetchImage = (page) => {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${url}?client_id=${secret}&page=${page}`)
      .then((res) => {
        setImages([...images, ...res.data]);
        setIsLoading(false);
      })
      .catch((e) => setErrors("Unable to fetch images."));
  }, [page]);
  return [images, setImages, errors, isLoading];
};

export default useFetchImage;
