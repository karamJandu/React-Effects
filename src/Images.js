import React, { useEffect, useState } from "react";

const Images = () => {
  // const [myInterval, setMyInterval] = useState(null);

  // component did mount
  useEffect(() => {
    console.log("Image Component Mount");
    const interval = setInterval(() => {
      console.log("Hello");
    }, 1000);

    return () => {
      console.log("Image Component Unmount");
      clearInterval(interval);
    };
  }, []);

  return (
    <img src="https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1348&q=80" />
  );
};

export default Images;

// export default class Images extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Images component started");
//   }

//   componentDidMount() {
//     console.log("Image componet mounted");
//   }

//   render() {
//     console.log("Image Component rendered");

//   }
// }
