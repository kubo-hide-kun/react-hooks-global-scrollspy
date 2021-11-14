import { useEffect, useRef } from "react";
import { useGlobalScrollSpy, useGlobalScrollSpyOf } from "./scrollSpy";

export const Title = ({ idx }: { idx: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [activeEntry] = useGlobalScrollSpy();
  const [isActive, { registerElement }] = useGlobalScrollSpyOf(`title/${idx}`);

  useEffect(() => {
    registerElement(ref);
  }, [registerElement]);

  return (
    <div ref={ref}>
      {activeEntry?.key} - Title {idx} - {isActive ? "o" : "x"}
    </div>
  );
};
