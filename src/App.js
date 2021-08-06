import "./App.css";
import { getHomeList, getMovieInfo } from "./Tmdb";
import { useEffect, useState } from "react";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getHomeList();
      //Carrega a lista de filmes
      setMovieList(list);

      //Escolhe o filme destacado
      const originals = list.filter((item) => item.slug === "originals");
      const randonChosen = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );
      const chosen = originals[0].items.results[randonChosen];
      const chosenInfo = await getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  return (
    <div>
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
