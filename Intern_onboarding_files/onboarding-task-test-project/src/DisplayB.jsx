import { useSelector } from 'react-redux';
import { selectCount } from './store/counterSlice';

function DisplayB() {
  const count = useSelector(selectCount);

  return (
    <div className="p-4 border rounded text-center">
      <p className="text-sm text-gray-400">Component B</p>
      <p className="text-3xl font-bold text-purple-500">{count}</p>
    </div>
  );
}

export default DisplayB;
