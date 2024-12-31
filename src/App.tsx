import { Hammer, X } from "lucide-react";
import { Button } from "./components/button";
import { Content } from "./components/content";
import { useContext } from "./provider";
import { cn } from "./utils/classes";

export default function App() {
  const { open, setOpen } = useContext();

  return (
    <>
      <Content />

      <Button
        className={cn(
          "fixed bottom-56 right-0 z-50 p-8",
          open ? "translate-x-full" : "translate-x-0",
          "group",
        )}
        onClick={() => setOpen(true)}
      >
        <Hammer className="size-16 stroke-slate-50 group-hover:stroke-zinc-900" />
      </Button>
    </>
  );
}
