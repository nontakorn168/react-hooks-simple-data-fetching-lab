// create your App component here
import { useEffect, useState } from "react";
import React from "react";

function App() {
    const [randomDog, setRamdomDog] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(
        () => {
            fetch("https://dog.ceo/api/breeds/image/random") 
                .then((r) => r.json())
                .then((data) => {
                    setRamdomDog(data.message);
                    setIsLoaded(true);
                }
                );
        }, []
    )
        if (!isLoaded) return <h3>Loading...</h3>;

    return (
        <div>
            <img src={randomDog} alt="A Random Dog" />
        </div>

    )
}

export default App;
