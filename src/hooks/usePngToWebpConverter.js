import { useEffect, useState } from "react";
import sharp from "sharp";

export function usePngToWebpConverter(pngSrc) {
  const [webpSrc, setWebpSrc] = useState(null);

  useEffect(() => {
    const convertToWebP = async () => {
      try {
        const response = await fetch(pngSrc);
        const pngBuffer = await response.arrayBuffer();

        const webpBuffer = await sharp(pngBuffer).webp().toBuffer();

        const webpDataUrl = `data:image/webp;base64,${webpBuffer.toString(
          "base64"
        )}`;
        setWebpSrc(webpDataUrl);
      } catch (error) {
        console.error("Error converting image to WebP:", error);
      }
    };

    if (pngSrc) {
      convertToWebP();
    }
  }, [pngSrc]);

  return webpSrc;
}

export default usePngToWebpConverter;
