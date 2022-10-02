import React, { useEffect } from "react";

const Home = (props) => {
  useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch((err) => console.error("ERROR: ", err));
  }, []);

  return <div> hello world</div>;
};

export default Home;
