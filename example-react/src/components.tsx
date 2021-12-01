import { useEffect, useRef, FC, Fragment } from "react";
import { useGlobalScrollSpyOf } from "react-hooks-global-scrollspy";

export const Section: FC<{
  title: string;
  content: string;
}> = ({ title, content }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [, { registerElement }] = useGlobalScrollSpyOf(title);

  useEffect(() => {
    registerElement(ref);
  }, [registerElement]);

  return (
    <Fragment>
      <h2 className="group flex whitespace-pre-wrap" ref={ref}>
        {title}
      </h2>
      <p>{content}</p>
    </Fragment>
  );
};
