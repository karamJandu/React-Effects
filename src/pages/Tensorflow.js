import React, { useEffect, useRef, useState } from "react";
import "@tensorflow/tfjs";
import useTfClassify from "../utils/hooks/useTFClassify";

const Tensorflow = () => {
  const imgRef = useRef();
  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjYzMzR8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNjY1MTIwMjkw&ixlib=rb-1.2.1&q=80&w=1080"
  );
  const [predict, predictions, isLoading] = useTfClassify();
  const [showResults, setShowResults] = useState(false);

  const handlePredictClick = () => {
    predict(imgRef.current);
    setShowResults(true);
  };

  return (
    <div>
      <div className="flex justify-center p-5">
        <input
          className="p-2 w-10/12 border"
          placeholder="Paste Image Url"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>

      <div className="flex justify-center">
        <div className="w-1/3">
          <img
            className="mx-auto"
            width="200"
            crossOrigin="anonymous"
            src={imageUrl}
            ref={imgRef}
          />
          <div className="flex justify-center">
            <button
              className="p-2 rounded bg-gray-900 text-white text-center mt-4 w-32"
              onClick={handlePredictClick}
            >
              {isLoading ? (
                <i className="fa-solid fa-hourglass" />
              ) : (
                "Predict Result"
              )}
            </button>
          </div>
        </div>
        {showResults && (
          <div className="w-1/3 rounded bg-gradient-to-br from-indigo-900 to-indigo-300 text-white">
            {predictions.length > 0 ? (
              <div>
                <p className="flex justify-between p-2 text-gray-900 text-lg font-semibold">
                  <span>Match</span>
                  <span>Probability</span>
                </p>
                {predictions.map((prediction, index) => (
                  <ul key={index} className="flex justify-between p-2">
                    <li>{prediction.className}</li>
                    <li>{Math.floor(prediction.probability * 100)}%</li>
                  </ul>
                ))}
              </div>
            ) : (
              <p className="text-xl p-2">Fetching Results...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tensorflow;
