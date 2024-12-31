export const downloadFile = (url: string, fileName: string) => {
  if (!url) {
    throw new Error("Blob URL is required");
  }

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;

  document.body.appendChild(anchor);
  anchor.click();

  document.body.removeChild(anchor);
};
