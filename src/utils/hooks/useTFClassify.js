import { useState } from "react";
import "@tensorflow/tfjs";
import * as MobileNet from "@tensorflow-models/mobilenet";

const useTfClassify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState([]);
  const predict = async (img) => {
    console.log(img);
    setIsLoading(true);
    // Load the model.
    const model = await MobileNet.load();
    // Classify the image.
    const predictions = await model.classify(img);
    setPredictions(predictions);
    console.log(predictions);
    setIsLoading(false);
  };

  return [predict, predictions, isLoading, setPredictions];
};

export default useTfClassify;
