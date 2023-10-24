import genres from "../mocks/genres.json";
export const GenresPage = () => {
  return (
    <main className="genres-pages-container">
      {genres.data.map((genre) => {
        return (
          <figure className="cover-container ripple" key={genre.id}>
            <img src={genre.srcCover} alt="" className="img-cover" />
            <img src={genre.srcIcon} alt="" className="play-icon" />
            <figcaption>{genre.name}</figcaption>
          </figure>
        );
      })}
    </main>
  );
};

export default GenresPage;
