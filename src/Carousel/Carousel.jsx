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

      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={
              index === selected ? "carousel-dot active" : "carousel-dot"
            }
            onClick={() => setSelected(index)}
            aria-label={`מעבר לתמונה ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;