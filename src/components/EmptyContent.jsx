/* eslint-disable react/prop-types */
export const EmptyContent = ({ message, buttonText, srcImage }) => {
  return (
    <div className="crunchylist-page">
      <img src={srcImage} alt="empty crunchylist image" />
      <p>{message}</p>
      <button className="btn-crunchy ripple">{buttonText}</button>
    </div>
  );
};

export default EmptyContent;
