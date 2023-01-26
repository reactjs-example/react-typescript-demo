import React from "react";

/**
 * below is events associated with btn. btn event is MouseEvent.
 * It has 2 handlers click, click1, click2
 * click: when btn click happen and no params or events captured
 * click1: when event captured on btn click
 * clieck2: btn event and id is being passed. this id is useful when we are playing with records having id from database.
 */
type ButtonEventProps = {
  click?: () => void;
  click1?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  click2: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
export const ButtonComponent = (props: ButtonEventProps) => {
  return (
    <div>
      <button onClick={props.click}>Click Here</button>
      <button onClick={props.click1}>Click Here 1</button>
      <button onClick={(event) => props.click2(event, 12)}>Click Here </button>
    </div>
  );
};

/**
 * here on change event for input type text to capture the changed content
 */
type InputTextEventProps = {
  value: string;
  change: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
};

export const InputTextComponent = (props: InputTextEventProps) => {
  const handleChangeValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    console.log(id, event);
  };
  return (
    <>
      <input
        type="text"
        value={props.value}
        onChange={(event) => {
          props.change(event, 14);
          
            /** the handler method change passed as props */
          
        }}
      />

      <input
        type="text"
        value={props.value}
        onChange={(event) => {
          handleChangeValue(event, 15);
          {
            /** the handler method #handleChangeValue defined inside component */
          }
        }}
      />
    </>
  );
};
