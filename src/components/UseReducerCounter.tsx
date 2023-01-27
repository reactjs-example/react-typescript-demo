import { useReducer } from "react";

const INCREMENT: string = "INCREMENT";
const DECREMENT: string = "DECREMENT";
const RESET: string = "RESET";

type StateProps = {
  count: number;
};
type ActionProps = UpdateActionProps 
type UpdateActionProps = {
  type: string
  value: number
};
type ResetActionProps = {
  type: string;
};
const INTIAL_COUNTER_STATE: StateProps = { count: 0 };

function reducerCallback(state: StateProps, action: ActionProps) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.value };
    case DECREMENT:
      return { count: state.count - action.value };
    case RESET:
      return INTIAL_COUNTER_STATE;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatchState] = useReducer(
    reducerCallback,
    INTIAL_COUNTER_STATE
  );

  const incrementHandler = () => {
    dispatchState({ type: INCREMENT, value: 10 });
  };
  const decrementHandler = () => {
    dispatchState({ type: DECREMENT, value: 10 });
  };
  const resetHandler = () => {
    dispatchState({ type: RESET, value: 0 });
  };
  return (
    <>
      <br />
      <button onClick={incrementHandler}>Increment 10</button>
      <button onClick={decrementHandler}>Decrement 10</button>
      <button onClick={resetHandler}>Reset</button>
      {`counter value : ${state.count}`}
    </>
  );
};
