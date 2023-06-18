import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./gallery.css";
import image_1 from "../assets/image_1.jpg";
import image_2 from "../assets/image_2.jpg";
import image_3 from "../assets/image_3.jpg";
import image_4 from "../assets/image_4.jpg";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="p-4">
    <img src={image_1} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="p-4">
    <img src={image_2} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="p-4">
    <img src={image_3} onDragStart={handleDragStart} role="presentation" />
  </div>,
  <div className="p-4">
    <img src={image_4} onDragStart={handleDragStart} role="presentation" />
  </div>,
];

const Gallery = () => {
  const responsive = {
    0: {
      items: 1,
    },

    768: {
      items: 2,
      itemsFit: "contain",
    },

    1024: {
      items: 3,
      itemsFit: "contain",
    },
  };
  return (
    <AliceCarousel
      items={items}
      itemsFit="contain"
      autoPlay={true}
      infinite={true}
      responsive={responsive}
      animationDuration={800}
      disableDotsControls={true}
      autoPlayInterval={2000}
      renderPrevButton={() => {
        return (
          <button
            className="bg-prime/70 w-[20px] h-[20px] text-yellow-500 p-0 relative top-[4px] right-[4px] rounded-full hover:bg-prime hover:text-white"
            onClick={onclick}
          >
            <span class="material-symbols-outlined text-[20px]">
              chevron_left
            </span>
          </button>
        );
      }}
      renderNextButton={() => {
        return (
          <button
            className="bg-prime/70 w-[20px] h-[20px] text-yellow-500 p-0 relative top-[4px] left-[4px] rounded-full hover:bg-prime hover:text-white"
            onClick={onclick}
          >
            <span class="material-symbols-outlined text-[20px]">
              chevron_right
            </span>
          </button>
        );
      }}
    />
  );
};

export default Gallery;
