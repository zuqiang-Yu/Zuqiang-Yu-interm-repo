import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
} from '../counterSlice';

describe('counterSlice reducer', () => {
  it('returns the initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
    });
  });

  it('increments by 1', () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });

  it('decrements by 1', () => {
    expect(counterReducer({ value: 5 }, decrement())).toEqual({ value: 4 });
  });

  it('increments by a given amount', () => {
    expect(counterReducer({ value: 2 }, incrementByAmount(3))).toEqual({
      value: 5,
    });
  });
});
