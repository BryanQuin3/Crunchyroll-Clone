import { AnimeInfoBtns } from "./AnimeInfoBtns";
import { StarRating } from "./StarRating";
import { useParams } from "react-router-dom";
import { getAnime } from "../services/getAnime";
import { useEffect, useState } from "react";

export const AnimePage = () => {
  const { idAnime } = useParams();
  const API_URL = `https://api.jikan.moe/v4/anime/${idAnime}`;
  const [anime, setAnime] = useState({
    title: "",
    images: { webp: { large_image_url: "" } },
    score: 0,
    genres: [{ name: "" }],
  });

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await getAnime(API_URL);
        setAnime(response.data || {});
      } catch (error) {
        console.error("Error al cargar el anime:", error);
      }
    };
    fetchAnime();
  }, [API_URL]);

  const { title, images, score, genres } = anime;
  const rating = Math.floor(score / 2);

  return (
    <div className="anime-page-container">
      <div className="current-anime-cover">
        <div className="blurred-cover">
          <img src={images?.webp?.large_image_url} alt={title} />
        </div>
        <img
          className="anime-cover-min"
          src={images?.webp?.large_image_url}
          alt={title}
        />
      </div>
      <section className="anime-page-body">
        <div className="current-anime-info">
          <h1 className="anime-list-title">{title}</h1>
          <p className="anime-genre">
            {genres.map((g, i) => {
              return (
                <span key={i}>{genres[i + 1] ? `${g.name} | ` : g.name}</span>
              );
            })}
          </p>
          {<StarRating rating={rating} />}
        </div>
        <AnimeInfoBtns text="Comenzar a ver t1 e1" />
      </section>
    </div>
  );
};

export default AnimePage;
