import { render, fireEvent } from '@testing-library/react-native';
import Counter from '../Counter';

describe('Counter', () => {
  it('initial value should be 0', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('0')).toBeTruthy();
  });

  it('press + number will incremental 1', () => {
    const { getByText } = render(<Counter />);
    fireEvent.press(getByText('+'));
    expect(getByText('1')).toBeTruthy();
  });

  it('press reset number will reset to 0', () => {
    const { getByText } = render(<Counter />);
    fireEvent.press(getByText('+'));
    fireEvent.press(getByText('Reset'));
    expect(getByText('0')).toBeTruthy();
  });
});
