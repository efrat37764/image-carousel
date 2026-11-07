import { useState } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

function Carousel({ images, intervalSeconds = 3 }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="carousel">
      {images.map(
        (image, index) =>
          index === selected && (
            <CarouselItem
              key={index}
              src={image}
              alt={`תמונה ${index + 1}`}
            />
          )
      )}
    </div>
  );
}

export default Carousel;