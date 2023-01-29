type ListProps = {
  values: string[] | number[];
  handler: (value: string | number) => void;
};

export const ListComponent = ({ values, handler }: ListProps) => {
  return (
    <div>
      String or Number Type Props
      {values.map((value, index) => {
        return (
          <div>
            <button key={Math.random()} onClick={() => handler(value)}>
              Click {index}
            </button>
          </div>
        );
      })}
    </div>
  );
};

/*** generic props */

type ListGenericProps<T> = {
  values: T[];
  handler: (value: T) => void;
};

export const ListGenericComponent = <T extends {}>({
  values,
  handler,
}: ListGenericProps<T>) => {
  return (
    <div>
      Generic Props of type object
      {values.map((value, index) => {
        return (
          <div>
            <button key={Math.random()} onClick={() => handler(value)}>
              Click {index}
            </button>
          </div>
        );
      })}
    </div>
  );
};

/** either string[] or number[] supported */
export const ListGenericComponentStringOrNumber = <T extends string | number>({
  values,
  handler,
}: ListGenericProps<T>) => {
  return (
    <div>
      Generic Props either string or number
      {values.map((value, index) => {
        return (
          <div>
            <button key={Math.random()} onClick={() => handler(value)}>
              Click {index}
            </button>
          </div>
        );
      })}
    </div>
  );
};

/** must have id field as number in an object[] */
export const ListGenericComponentWithIdKey = <T extends { id: number }>({
  values,
  handler,
}: ListGenericProps<T>) => {
  return (
    <div>
      Generic Props with must id field
      {values.map((value, index) => {
        return (
          <div>
            <button key={Math.random()} onClick={() => handler(value)}>
              Click {index}
            </button>
          </div>
        );
      })}
    </div>
  );
};
