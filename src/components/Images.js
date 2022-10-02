import { useState } from "react";
import Image from "./Image";
import useFetchImage from "../utils/hooks/useFetchImage";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../utils/hooks/useDebounce";

const Images = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages, errors, isLoading] = useFetchImage(
    page,
    searchTerm
  ); // fetched using custom hook

  // event handler to remove image
  const onRemoveHandler = (targetIndex) => {
    setImages(images.filter((image, i) => i !== targetIndex));
  };

  const debounce = useDebounce();
  function handleInput(e) {
    const text = e.target.value;
    debounce(() => setSearchTerm(text));
  }

  return (
    <section>
      <div className="my-5">
        <input
          type="text"
          onChange={handleInput}
          className="w-full border rounded shadow p-2"
          placeholder="Search Photos Here"
        />
      </div>
      {errors.length > 0 && (
        <div className="flex h-screen">
          <p className="m-auto">{errors[0]}</p>
        </div>
      )}
      <div className="mt-4">
        <InfiniteScroll
          dataLength={images.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          className="flex flex-wrap"
        >
          {images.map((img, index) => (
            <Image
              key={index}
              index={index}
              imageSrc={img}
              onRemoveHandler={onRemoveHandler}
            />
          ))}
        </InfiniteScroll>
      </div>
      {isLoading && <Loading />};
    </section>
  );
};

export default Images;
