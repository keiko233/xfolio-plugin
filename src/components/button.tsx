import { ComponentProps } from "react";
import { cn } from "../utils/classes";

export const Button = ({ className, ...props }: ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "px-4 py-3 bg-zinc-900 transition-all text-xl font-bold font-sans text-white",
        "hover:text-black hover:bg-neutral-100 hover:shadow-2xl hover:shadow-neutral-400",
        className,
      )}
      {...props}
    />
  );
};
