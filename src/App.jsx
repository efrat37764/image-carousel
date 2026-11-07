import Carousel from "./Carousel/Carousel";

const images = [
  "https://placehold.co/800x450/4f46e5/ffffff?text=1",
  "https://placehold.co/800x450/0ea5e9/ffffff?text=2",
  "https://placehold.co/800x450/10b981/ffffff?text=3",
  "https://placehold.co/800x450/f59e0b/ffffff?text=4",
];

function App() {
  return <Carousel images={images} intervalSeconds={3} />;
}

export default App;