import { useEffect, useState } from "react";

const baseURL = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  const fetchRandomBeer = async () => {
    try {
      const response = await fetch(baseURL);
      if (response.status === 200) {
        const randomBeer = await response.json();
        setRandomBeer(randomBeer);
      }
    } catch (error) {
      console.error("Error fecthing random beer:", error);
    }
  };

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  return randomBeer ? (
    <div>
      <img src={randomBeer.image_url} alt={randomBeer.name} />
      <h1>{randomBeer.name}</h1>
      <h4>{randomBeer.tagline}</h4>
      <p>First Brewed: {randomBeer.first_brewed}</p>
      <p>Attenuation Level: {randomBeer.attenuation_level}</p>
      <h5>{randomBeer.description}</h5>
      <p>Contributed by: {randomBeer.contributed_by}</p>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default RandomBeersPage;
