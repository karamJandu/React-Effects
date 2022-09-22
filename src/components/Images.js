import { useState } from "react";
import Image from "./Image";
import useFetchImage from "../utils/hooks/useFetchImage";

const Images = () => {
  const [page, setPage] = useState(1);
  const [images, setImages, errors, isLoading] = useFetchImage(page); // fetched using custom hook

  // event handler to remove image
  const onRemoveHandler = (targetIndex) => {
    setImages(images.filter((image, i) => i !== targetIndex));
  };

  if (isLoading) {
    return (
      <div className="flex h-screen">
        <p className="m-auto">
          <i className="fas fa-circle-notch fa-spin text-5xl text-yellow-600" />
        </p>
      </div>
    );
  }

  return (
    <section>
      {errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      )}

      <div className="mt-4" style={{ columnCount: 5 }}>
        {images.map((img, index) => (
          <Image
            key={index}
            index={index}
            imageSrc={img}
            onRemoveHandler={onRemoveHandler}
          />
        ))}
      </div>
      <button
        className="p-1 bg-blue-600 text-white mb-4"
        onClick={() => setPage(page + 1)}
      >
        Load More...
      </button>
    </section>
  );
};

export default Images;
