import { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";

const url = "https://dummyjson.com/recipes?limit=6&select=name,image";

function RecipesCarousel() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadImages() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`שגיאת שרת: ${response.status}`);
                }
                const data = await response.json();
                const imageUrls = data.recipes.map((recipe) => recipe.image);
                setImages(imageUrls);
                setLoading(false);
            }
            catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }

        loadImages();
    }, []);

    if (loading) {
        return <div className="carousel-message">טוען...</div>;
    }

    if (error) {
        return <div className="carousel-message error">{error}</div>;
    }

    return <Carousel images={images} intervalSeconds={4} />;
}

export default RecipesCarousel;