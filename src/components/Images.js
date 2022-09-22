import React, { useEffect, useState, useRef } from "react";
import Image from "./Image";
import axios from "axios";

const Images = () => {
  const [url, setUrl] = useState("");
  const [images, setImages] = useState([]);

  const inputRef = useRef(null);
  const varRef = useRef(images.length);

  useEffect(() => {
    inputRef.current.focus();
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=FU-hxJpxW5fLWERmcAugfemvUXDnAELWH1Gg8zw-5K0"
      )
      .then((res) => setImages(res.data));
  }, []);

  useEffect(() => {
    varRef.current = varRef.current + 1;
  });

  const onAddHandler = () => {
    if (url.trim() !== "") {
      setImages([...images, url]);
    }
    setUrl("");
  };

  const onRemoveHandler = (targetIndex) => {
    setImages(images.filter((image, i) => i !== targetIndex));
  };

  return (
    <section>
      <h1>{varRef.current} Images</h1>
      <div className="flex flex-wrap justify-around">
        {images.map((img, index) => (
          <Image
            key={index}
            index={index}
            imageSrc={img}
            onRemoveHandler={onRemoveHandler}
          />
        ))}
      </div>
      <div className="flex justify-around my-5">
        <input
          type="text"
          value={url}
          ref={inputRef}
          id="inputBox"
          onChange={(e) => setUrl(e.target.value)}
          className="p-1 mr-4 border border-gray-800 shadow rounded w-full"
        />
        <button
          disabled={url.trim() === ""}
          onClick={onAddHandler}
          className={`p-1  text-white ${
            url.trim() !== "" ? "bg-green-600" : "bg-green-300"
          }`}
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default Images;
