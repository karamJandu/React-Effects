import React, { useState } from "react";
import "./assets/css/style.css";
import Images from "./components/Images";

const App = () => {
  const [title, setTitle] = useState("Hey React");
  const [isShowing, setIsShowing] = useState(false);

  const toggleHandler = () => {
    setIsShowing(!isShowing);
  };

  return (
    <section className="flex justify-center">
      <div className="w-10/12">
        <div className="text-center">
          <div className="my-4">{title}</div>
          <button
            className="p-1 bg-blue-700 text-white"
            onClick={toggleHandler}
          >
            Toggle Image
          </button>
        </div>
        {isShowing ? <Images /> : null}
      </div>
    </section>
  );
};

export default App;
