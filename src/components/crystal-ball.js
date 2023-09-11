import React from "react";

export default function CrystalBall({ data }) {
  console.log("crystal " + data);

  if ((data = "null")) {
    return (
      <div>
        <img
          src={require("../media/Crystal-ball.png")}
          className="crystal-ball"
        />
      </div>
    );
  } else {
    return null;
  }
}
