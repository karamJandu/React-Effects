import { useState } from "react";

const Image = ({ imageSrc, index, onRemoveHandler }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="w-1/3 my-4 flex justify-center">
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

        <img src={imageSrc.urls.regular} width="350" />
      </div>
    </div>
  );
};

export default Image;