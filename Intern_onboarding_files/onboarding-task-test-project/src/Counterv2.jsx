import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, selectCount } from './store/counterSlice';

function getMessage(count) {
  if (count < 0) return 'Going negative!';
  if (count === 0) return 'Start counting!';
  if (count < 5) return 'Just getting started';
  if (count < 10) return 'Getting warmer';
  return 'Count is huge!';
}

function Counterv2() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h2 className="text-xl font-bold">Redux Counter</h2>
      <p className="text-4xl font-bold text-blue-600">{count}</p>
      <p className="text-sm text-gray-500">{getMessage(count)}</p>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          -
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counterv2;
