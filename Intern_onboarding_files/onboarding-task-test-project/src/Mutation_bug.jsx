import { useState } from 'react';

function Mutation() {
  const [state, setState] = useState({ count: 0 });

  function handleAdd() {
    setState({ count: state.count + 1 });
    console.log('count is now:', state.count); // check the value in console
  }

  function handleReset() {
    setState({ count: 0 });
  }

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h2 className="text-xl font-bold">Mutation Bug fixed</h2>
      <p className="text-4xl font-bold text-green-500">{state.count}</p>
      <button
        onClick={handleAdd}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
      >
        Add (fixed)
      </button>
      <button onClick={handleReset} className="text-sm text-gray-400 underline">
        Reset
      </button>
    </div>
  );
}

export default Mutation;
