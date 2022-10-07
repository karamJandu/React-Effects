import React, { useEffect, useRef, useState } from "react";
import "@tensorflow/tfjs";
import useTfClassify from "../utils/hooks/useTFClassify";

const Tensorflow = () => {
  const imgRef = useRef();
  const [predict, predictions, isLoading] = useTfClassify();

  return (
    <div>
      <h1>Tensorflow</h1>
      <div className="flex justify-center">
        <div className="w-1/3">
          <img
            className="mx-auto"
            width="200"
            crossOrigin="anonymous"
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjYzMzR8MHwxfHNlYXJjaHwyfHxkb2d8ZW58MHx8fHwxNjY1MTIwMjkw&ixlib=rb-1.2.1&q=80&w=1080"
            ref={imgRef}
          />
          <div>
            {predictions.length > 0 && (
              <div>
                {predictions.map((prediction, index) => (
                  <ul key={index} className="flex justify-between">
                    <li>{prediction.className}</li>
                    <li>{Math.floor(prediction.probability * 100)}%</li>
                  </ul>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="p-2 rounded bg-gray-900 text-white text-center mt-4 w-32"
              onClick={() => predict(imgRef.current)}
            >
              {isLoading ? (
                <i className="fa-solid fa-hourglass" />
              ) : (
                "Predict Result"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tensorflow;
