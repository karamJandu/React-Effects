import React, { useState, useEffect } from "react";
import "./assets/css/style.css";
import Images from "./Images";

const App = () => {
  const [title, setTitle] = useState("Hey React");
  const [isShowing, setIsShowing] = useState(false);

  // component did mount only
  useEffect(() => {
    console.log("App mounted");
  }, []);

  const toggleHandler = () => {
    setIsShowing(!isShowing);
  };

  return (
    <section className="flex justify-center">
      {console.log("re-rendered")}
      <div className="w-1/2">
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
