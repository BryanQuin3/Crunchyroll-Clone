import { Skeleton } from "@mui/material";

export const AnimeCardSkeleton = ({ total }) => {
  const totalSkeletons = Array.from({ length: total }, (_, index) => index);
  return totalSkeletons.map((_, index) => {
    return (
      <article className="anime-container" key={index}>
        <div className="skleton-cover">
          <Skeleton
            variant="rectangular"
            width={140}
            height={197}
            className="cover-img"
            style={{ backgroundColor: "#d0d0d0" }}
          />
        </div>
        <Skeleton
          style={{ backgroundColor: "#d0d0d0" }}
          variant="text"
          width={120}
          height={15}
        />
        <Skeleton
          style={{ backgroundColor: "#d0d0d0" }}
          variant="text"
          width={70}
          height={15}
        />
      </article>
    );
  });
};

export default AnimeCardSkeleton;
