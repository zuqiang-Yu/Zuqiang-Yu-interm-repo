import { useState } from 'react';

function TodoList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  function handleAdd() {
    if (!input.trim()) return;
    setItems([...items, input]);
    setInput('');
  }

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h2 className="text-xl font-bold">Todo List</h2>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter something..."
          className="border px-3 py-2 rounded"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="w-64">
        {items.map((item, index) => (
          <li key={index} className="border-b py-2 text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
