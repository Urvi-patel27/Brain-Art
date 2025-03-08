import React from "react";
import "tailwindcss/tailwind.css";
import img1 from "../images/games/4.png";
import img2 from "../images/games/5.png";
import img3 from "../images/games/3.png";
import img4 from "../images/games/7.png";
import img5 from "../images/games/1.png";
import img6 from "../images/games/6.png";
import img7 from "../images/games/8.png";
import img8 from "../images/games/9.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const LastImg = () => {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide slider">
      <div className="flex space-x-4 p-4 snap-x snap-mandatory">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img-${index}`}
            className="w-[300px] h-[400px] object-cover rounded-lg snap-center"
          />
        ))}
      </div>
    </div>
  );
};

export default LastImg;
