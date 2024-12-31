import { getIframeImageBlob } from "./iframe";

export const getImgUrl = async () => {
  const warp = document.querySelector(".article__wrap_img");

  if (!warp) {
    throw new Error("No image found");
  }

  const a = warp.querySelector("a");

  if (!a) {
    throw new Error("No image found");
  }

  if (!a.href) {
    throw new Error("No image found");
  }

  const url = a.href;

  return await getIframeImageBlob(url);
};
