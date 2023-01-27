import React from "react";

type StyleProps = {
  styles?: React.CSSProperties /** css properties can be string, number or mix of both, So the type is designed by react team */;
};
export const StyleComponent = (props: StyleProps) => {
  return (
    <>
      <div style={{ border: "solid black 1px", margin: "50px" }}>
        Some Text Content
      </div>
      {/** below example is with React.CSSProperties props */}
      <div style={props.styles}>Some new text content</div>
    </>
  );
};
