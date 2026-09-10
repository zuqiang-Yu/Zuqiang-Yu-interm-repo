import { useSelector } from 'react-redux';
import { selectCount } from './store/counterSlice';

function DisplayA() {
  const count = useSelector(selectCount);

  return (
    <div className="p-4 border rounded text-center">
      <p className="text-sm text-gray-400">Component A</p>
      <p className="text-3xl font-bold text-blue-500">{count}</p>
    </div>
  );
}

export default DisplayA;
