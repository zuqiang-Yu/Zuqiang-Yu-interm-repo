/* eslint-disable react/prop-types */
import { useState } from 'react';

function Counter({ name }) {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h2 className="text-xl font-bold">Counter</h2>
      <p className="text-4xl font-bold text-blue-600">{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
      >
        Click me
      </button>
    </div>
  );
}

export default Counter;
