import { useState } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

function Carousel({ images, intervalSeconds = 3 }) {
  const [selected, setSelected] = useState(0);

  function move(step) {
    setSelected((prev) => (prev + step + images.length) % images.length);
  }

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

      <button className="carousel-arrow prev" onClick={() => move(-1)}>‹</button>
      <button className="carousel-arrow next" onClick={() => move(1)}>›</button>

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