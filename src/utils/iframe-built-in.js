async function imgToBlobURL(imgElement) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = imgElement.naturalWidth;
    canvas.height = imgElement.naturalHeight;

    context.drawImage(imgElement, 0, 0);

    canvas.toBlob((blob) => {
      if (blob) {
        const blobURL = URL.createObjectURL(blob);
        resolve(blobURL);
      } else {
        reject(new Error("Failed to create blob from canvas"));
      }
    }, "image/png");
  });
}

(async () => {
  try {
    const img = document.querySelector("img");

    if (!img.complete) {
      await new Promise((resolve) => (img.onload = resolve));
    }

    const blobURL = await imgToBlobURL(img);

    window.parent.postMessage({ result: blobURL }, "*");
  } catch (error) {
    window.parent.postMessage({ error: error.message }, "*");
  }
})();
