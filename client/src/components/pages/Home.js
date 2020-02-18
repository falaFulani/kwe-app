import React from "react";
import Questions from "../Questions/Questions";
const Home = () => {
  return (
    <div className="grid-2 ">
      <div>{/*question form */}</div>
      <div>
        <Questions />
      </div>
    </div>
  );
};

export default Home;
