import { Skeleton } from "@mui/material";

export const AnimeEpisodeCardSkeleton = () => {
  return (
    <div className="episode-card watching">
      <figure className="cover-container ripple">
        <Skeleton
          variant="rectangular"
          width={160}
          height={90}
          style={{ backgroundColor: "#d0d0d0" }}
        />
      </figure>
      <section className="episode-card-body skeleton">
        <div className="episode-info">
          <Skeleton
            variant="rectangular"
            width={120}
            height={15}
            style={{ backgroundColor: "#d0d0d0" }}
          />
        </div>
        <div className="episode-options">
          <Skeleton
            variant="rectangular"
            width={120}
            height={15}
            style={{ backgroundColor: "#d0d0d0" }}
          />
        </div>
      </section>
    </div>
  );
};

export default AnimeEpisodeCardSkeleton;
