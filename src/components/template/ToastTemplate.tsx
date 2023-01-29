/**
 * toast notificatin comes at diffrent position of the screen
 *  left, right combined tith top, bottom, center
 *
 *  left-top
 *  left-bottom
 *  center
 *
 *  right-top
 *  right-down
 *  center
 */

type Position1 = "left" | "center" | "right"; // template literal
type Position2 = "top" | "bottom" | "center";

type PositionProps = {
  // center-center is invalid combination, so excluded
  position: Exclude<`${Position1} - ${Position2}`, "center - center"> | 'center';
};
export const Toast = ({ position }: PositionProps) => {
  return <><br/>The toast is at {position}</>;
};
