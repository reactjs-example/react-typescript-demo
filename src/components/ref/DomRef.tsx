import { useEffect, useRef } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!); /** not null as null! */

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
};
