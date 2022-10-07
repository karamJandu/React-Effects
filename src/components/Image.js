import { useState, useRef } from "react";
import useTfClassify from "../utils/hooks/useTFClassify";

const Image = ({ imageSrc, index, onRemoveHandler }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const imgRef = useRef();
  const [predict, predictions, isLoading, setPredictions] = useTfClassify();

  return (
    <div className="w-1/4 p-1 border flex justify-center">
      <div
        className="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {(predictions.length > 0 || isLoading) && (
          <span
            onClick={() => setPredictions([])}
            className="absolute w-8/12 cursor-pointer bg-gray-800 left-0 ml-7 text-white text-xs rounded shadow px-2"
          >
            {isLoading && <p>Fetching results...</p>}
            {predictions.map((prediction, index) => (
              <ul key={index} className="flex justify-between">
                <li>{prediction.className}</li>
                <li>{Math.floor(prediction.probability * 100)}%</li>
              </ul>
            ))}
          </span>
        )}

        {isHovering && (
          <i
            onClick={() => onRemoveHandler(index)}
            className="fas fa-times absolute right-1 top-1 cursor-pointer opacity-30 hover:opacity-100"
          />
        )}
        {isHovering && (
          <i
            onClick={() => predict(imgRef.current)}
            className="fas fa-magnifying-glass absolute left-1 top-1 cursor-pointer opacity-30 hover:opacity-100"
          />
        )}

        <img
          onClick={() => setShowPreview(true)}
          src={imageSrc.urls.regular}
          width="100%"
          ref={imgRef}
          crossOrigin="anonymous"
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
