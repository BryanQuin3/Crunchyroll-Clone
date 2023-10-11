/* eslint-disable react/prop-types */
export const AnimeCover = ({ title, images }) => {
  return (
    <section className="current-anime-cover">
      <div className="blurred-cover">
        <img src={images?.webp?.large_image_url} alt={title} />
      </div>
      <img
        className="anime-cover-min"
        src={images?.webp?.large_image_url}
        alt={title}
      />
    </section>
  );
};

export default AnimeCover;
