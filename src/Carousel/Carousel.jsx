import CarouselItem from "./CarouselItem";
import "./Carousel.css";

function Carousel({ images, intervalSeconds = 3 }) {
  return (
    <div className="carousel">
      {images.map((image, index) => (
        <CarouselItem
          key={index}
          src={image}
          alt={`תמונה ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default Carousel;