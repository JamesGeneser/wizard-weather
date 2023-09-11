import React from "react";

export default function CrystalBall({ searched }) {
  console.log("crystal " + searched);

  return (
    <div>
      <img
        src={require("../media/Crystal-ball.png")}
        className="crystal-ball"
      />
    </div>
  );
}
