import React from "react";

// passing text as part of the component tag as shown below
// <tag> here text you pass </tag>
type TextContentProps = {
  children: string;
};

export const TextContentComponent = (p: TextContentProps) => {
  return <div>{p.children}</div>;
};
