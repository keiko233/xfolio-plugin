import { ImageDown, LoaderCircle, X } from "lucide-react";
import { ComponentProps, useState, useTransition } from "react";
import { useContext } from "../provider";
import { cn } from "../utils/classes";
import { downloadFile } from "../utils/download";
import { getImgUrl } from "../utils/element";
import { formatError } from "../utils/format";
import { Button } from "./button";

const Item = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("flex items-center justify-between gap-8", className)}
      {...props}
    />
  );
};

const Label = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn("text-2xl font-bold text-neutral-100", className)}
      {...props}
    />
  );
};

const TitleComponent = () => {
  const { setOpen } = useContext();

  return (
    <Item>
      <Label>Xfolio Tools</Label>

      <Button className="p-3 group" onClick={() => setOpen(false)}>
        <X className="stroke-slate-50 group-hover:stroke-zinc-900" />
      </Button>
    </Item>
  );
};

const DownloadComponent = () => {
  const [isPending, startTransition] = useTransition();

  const [message, setMessage] = useState<string | null>(null);

  const handleClick = () => {
    if (isPending) {
      return;
    }

    startTransition(async () => {
      try {
        const {url, cleanUp} = await getImgUrl();

        downloadFile(url, `${url.split("/").pop()}.png` || "image.png");

        setTimeout(() => {
          cleanUp();
        }, 5000);
      } catch (error) {
        setMessage(formatError(error));

        console.error(error);
      }
    });
  };

  return (
    <>
      <Item>
        <Label>Download Image</Label>

        <Button className="p-3 group" onClick={handleClick}>
          {isPending ? (
            <LoaderCircle className="stroke-slate-50 group-hover:stroke-zinc-900 animate-spin" />
          ) : (
            <ImageDown className="stroke-slate-50 group-hover:stroke-zinc-900" />
          )}
        </Button>
      </Item>

      {message && <div className="text-neutral-100">{message}</div>}
    </>
  );
};

export const Content = () => {
  const { open } = useContext();

  return (
    <div
      className={cn(
        "fixed bottom-56 right-0 z-50 bg-zinc-900 p-8 transition-all",
        "flex flex-col gap-6",
        open ? "translate-x-0" : "translate-x-full",
      )}
    >
      <TitleComponent />

      <DownloadComponent />
    </div>
  );
};
