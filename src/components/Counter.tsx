import { useState } from 'react';

interface IState {
  counter: number;
  user: string;
}

export function Counter() {
  const initialState: IState = {
    counter: 0,
    user: 'Pepe',
  };

  const [state, setState] = useState(initialState);

  return (
    <>
      <div>
        <p>{state.counter}</p>
        <div>
          <button
            onClick={() => {
              setState({ ...state, counter: state.counter + 1 });
            }}
          >
            Sumar 1
          </button>
          <button
            onClick={() => {
              setState({ ...state, counter: state.counter - 1 });
            }}
          >
            Restar 1
          </button>
        </div>
      </div>
    </>
  );
}
