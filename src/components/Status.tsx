type StatusProps = {
  // value: string
  // one of the values must be given as part of the component
  // ? here indicates value is an optional field for component
  value?: "loading" | "success" | "error";
};

export const StatusComponent = (p: StatusProps) => {
  let { value = "Loading" } = p; // default value when someone not passing as part of the component.
  //here array-destructuring approach used
  if (p.value === "error") {
    value = "Error";
  } else if (p.value === "success") {
    value = "Success";
  }
  return (
    <>
      <br />
      {value}
    </>
  );
};
