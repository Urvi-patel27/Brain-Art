import React from "react";
import "tailwindcss/tailwind.css";
import img1 from "../images/resource/Home _ Default (2) 2.png";
import img2 from "../images/resource/Home _ Select Option (1) 2.png";
import img3 from "../images/resource/Provider (1) 1.png";
import img4 from "../images/resource/Edit Profile (1) 1.png";
import img5 from "../images/resource/Sign In (1) 1.png";
import img6 from "../images/resource/All Cards (1) 1.png";
import img7 from "../images/resource/Add Card Details (1) 1.png";
import img8 from "../images/resource/Manage Notifications 2.png";
import img9 from "../images/resource/Home _ Booking Done (3) 1.png";
import "../Events/eventlast.css";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const EventLast = () => {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white overflow-x-auto">
    <div className="container">
      <div className="flex space-x-4 p-4 justify-center slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img-${index}`}
            className=" justify-center h-[410px] object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default EventLast;
