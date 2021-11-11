import { useEffect, useRef } from "react";
import { ScrollSpyContext } from "./context";

export const Title = ({ idx }: { idx: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollSpyActions = ScrollSpyContext.getActions();

  useEffect(() => {
    scrollSpyActions.set(`title/${idx}`, ref);
  });

  return <div ref={ref}>Title {idx}</div>;
};
