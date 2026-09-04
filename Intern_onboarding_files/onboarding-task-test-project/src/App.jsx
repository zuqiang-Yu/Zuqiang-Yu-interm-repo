/* eslint-disable react/prop-types */
import { useState, useCallback, memo } from 'react';

const Button = memo(function Button({ onClick, label }) {
  console.log(`Button "${label}" 重新渲染了`);
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {label}
    </button>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // const handleSubmit = useCallback(() => {
  // console.log('submitted')
  // }, [])
  const handleSubmit = () => {
    console.log('submitted');
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-2xl font-bold">useCallback Demo</h1>

      <p className="text-lg">Count: {count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Count +1
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="border px-3 py-2 rounded"
      />

      <Button onClick={handleSubmit} label="Submit" />
    </div>
  );
}

export default App;
