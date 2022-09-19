import React, { useEffect, useState } from "react";

const TestBasics = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [fetchNewImage, setFetchNewImage] = useState(false);

  // component will update
  useEffect(() => {
    console.log("Component did update");
    fetch("https://random.imagecdn.app/500/150")
      .then((res) => setImageSrc(res.url))
      .catch((err) => console.log(err));
  }, [fetchNewImage]);

  return (
    <div className="flex justify-center">
      <h1>TestBasics</h1>
      <button
        className="p-1 bg-red-500 text-white"
        onClick={() => setFetchNewImage(!fetchNewImage)}
      >
        Fetch Image
      </button>
      <img src={imageSrc} alt="fetched-image" />
    </div>
  );
};

export default TestBasics;
