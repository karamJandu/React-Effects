import { useEffect, useState } from "react";
import axios from "axios";

const api = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;

const useFetchImage = (page, searchTerm) => {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // fetch image for search term
  const fetchSearch = () => {
    axios
      .get(
        `${api}/search/photos?client_id=${secret}&page=${page}&query=${searchTerm}`
      )
      .then((res) => {
        page > 1
          ? setImages([...images, ...res.data.results])
          : setImages(res.data.results);
        setIsLoading(false);
      })
      .catch((e) => setErrors("Unable to fetch images."));
  };

  // fetch random images
  const fetchRandom = () => {
    axios
      .get(`${api}/photos?client_id=${secret}&page=${page}`)
      .then((res) => {
        setImages([...images, ...res.data]);
        setIsLoading(false);
      })
      .catch((e) => setErrors("Unable to fetch images."));
  };

  // random search
  useEffect(() => {
    setIsLoading(true);
    searchTerm !== "" ? fetchSearch() : fetchRandom();
  }, [page]);

  // search term
  useEffect(() => {
    if (searchTerm === "") return;
    setIsLoading(true);
    fetchSearch();
  }, [searchTerm]);

  return [images, setImages, errors, isLoading];
};

export default useFetchImage;
