import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          background: theme.primary.bg_color,
          color: theme.primary.text_color,
        }}
      >
        Theme context
      </div>
    </>
  );
};
