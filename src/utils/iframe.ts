import builtInScript from "./iframe-built-in.js?raw";

export const getIframeImageBlob = async (url: string): Promise<{
  url: string;
  cleanUp: () => void;
}> => {
  return await new Promise((resolve, reject) => {
    const iframe = document.createElement("iframe");

    iframe.style.display = "none";

    document.body.appendChild(iframe);

    const cleanUp = () => {
      window.removeEventListener("message", messageHandler);
      document.body.removeChild(iframe);
    };

    const messageHandler = (event: MessageEvent) => {
      if (event.source === iframe.contentWindow) {
        if (event.data.error) {
          reject(new Error(event.data.error));
        } else {
          if (event.data.result) {
            resolve({
              url: event.data.result,
              cleanUp,
            });
          }
        }
      }
    };

    window.addEventListener("message", messageHandler);

    iframe.src = url;

    iframe.onload = () => {
      const scriptContent = builtInScript;

      if (iframe.contentDocument) {
        const script = iframe.contentDocument.createElement("script");
        script.textContent = scriptContent;
        iframe.contentDocument.body.appendChild(script);
      }
    };
  });
};
