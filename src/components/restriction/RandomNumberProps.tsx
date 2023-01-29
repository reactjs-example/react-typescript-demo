/** problem with below type is
 * someone can say value = 10, and it is -ve=true, +ve=true, zero=true
 * we are failing to add a restriction here
 */
type RandomNumberProps = {
  value: number;
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};

type RandomNumber = {
  value: number;
};
type PositiveNumber = RandomNumber & {
  isPositive: boolean;
  isNegative?: never; // we are not allowing -ve when the value is +ve
  isZero?: never;
};
type NegativeNumber = RandomNumber & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type Zero = RandomNumber & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberRestrictedProps = PositiveNumber | NegativeNumber | Zero;
export const RandomNumberComponent = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberRestrictedProps) => {
  return <>value is {value}</>;
};
