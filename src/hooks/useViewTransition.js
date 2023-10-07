import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

export const useViewTransition = (url) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    if (!document.startViewTransition) {
      navigate(url);
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => {
        const url = e.target
          .closest("a")
          .href.slice(window.location.origin.length);
        if (url.includes("search")) {
          //cortar la parte de search para que no se vea en la url
          const search = url.slice(url.indexOf("/anime"));
          navigate(search);
          return;
        }
        navigate(
          e.target.closest("a").href.slice(window.location.origin.length)
        );
      });
    });
  };
  return { handleClick };
};

export default useViewTransition;
