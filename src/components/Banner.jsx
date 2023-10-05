/* eslint-disable react/prop-types */
export const Banner = ({ smallIMG, bigIMG }) => {
  return (
    <section className="banner ripple">
      <img
        loading="lazy"
        className="banner-img-sm"
        src={smallIMG}
        alt="banner"
      />
      <img loading="lazy" className="banner-img-xl" src={bigIMG} alt="banner" />
    </section>
  );
};

export default Banner;
