import { useState } from "react";

const Image = ({ imageSrc, index, onRemoveHandler }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="w-1/5 p-1 border flex justify-center">
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <i
            onClick={() => onRemoveHandler(index)}
            className="fas fa-times absolute right-1 cursor-pointer opacity-30 hover:opacity-100"
          />
        )}

        <img
          onClick={() => setShowPreview(true)}
          src={imageSrc.urls.regular}
          width="100%"
        />
      </div>

      {showPreview && (
        <section
          className="fixed w-full h-full flex justify-center items-center top-0 left-0 z-40"
          onClick={() => setShowPreview(false)}
        >
          <div className="bg-white">
            <img src={imageSrc.urls.regular} rounded width="300" />
          </div>
        </section>
      )}
    </div>
  );
};

export default Image;
