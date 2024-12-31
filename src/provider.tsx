import {
  createContext,
  PropsWithChildren,
  useContext as useReactContext,
  useState,
} from "react";

const Context = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

export const useContext = () => {
  const context = useReactContext(Context);

  if (!context) {
    throw new Error("useContext must be used within a Provider");
  }

  return context;
};

export const Provider = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};
