/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function convertPngToWebp(pngSrc, callback) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const img = new Image();
  img.src = pngSrc;

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0, img.width, img.height);

    canvas.toBlob((webpBlob) => {
      const webpUrl = URL.createObjectURL(webpBlob);
      callback(webpUrl);
    }, "image/webp");
  };
}

export const AnimeCard = ({ anime }) => {
  const titleOfAnime = anime.title;
  const pngSrc = anime.images?.jpg?.large_image_url;
  const gender = anime.genres[0]?.name || "Generic";
  const [webpSrc, setWebpSrc] = useState(null);

  useEffect(() => {
    if (pngSrc) {
      convertPngToWebp(pngSrc, (webpUrl) => {
        setWebpSrc(webpUrl);
      });
    }
  }, [pngSrc]);

  return (
    <article className="anime-container">
      <figure className="img-container">
        <a href={anime.trailer?.url} target="_blank" rel="noreferrer">
          <img src="./img/play.png" alt="" className="play-icon" />
        </a>
        {webpSrc ? (
          <img
            loading="lazy"
            className="cover-img"
            src={webpSrc}
            alt={titleOfAnime}
          />
        ) : (
          <img
            loading="lazy"
            className="cover-img"
            src={pngSrc}
            alt={titleOfAnime}
          />
        )}
      </figure>
      <p className="anime-title">{titleOfAnime}</p>
      <p className="anime-genre">{gender}</p>
    </article>
  );
};

export default AnimeCard;
