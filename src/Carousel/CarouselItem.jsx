function CarouselItem({ src, alt }) {
  return (
    <div className="carousel-item">
      <img src={src} alt={alt} />
    </div>
  );
}

export default CarouselItem;