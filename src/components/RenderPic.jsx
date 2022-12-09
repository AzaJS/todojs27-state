import React, { useState } from "react";
import human from "../assets/ERraNDUWsAARB2J.jpeg";
import shrek from "../assets/image.jpeg";

const RenderPic = () => {
  const [isHuman, setIsHuman] = useState(true);
  return (
    <div>
      <div>
        {isHuman ? (
          <img src={human} height="150" />
        ) : (
          <img src={shrek} height="150" />
        )}
      </div>
      <button onClick={() => setIsHuman(false)}>Shreck</button>
      <button onClick={() => setIsHuman(true)}>HumanShrek</button>
    </div>
  );
};

export default RenderPic;
