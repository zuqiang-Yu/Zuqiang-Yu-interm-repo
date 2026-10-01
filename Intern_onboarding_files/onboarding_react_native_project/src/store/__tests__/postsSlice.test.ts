import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import postsReducer, { fetchPosts } from '../postsSlice';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeStore = () => configureStore({ reducer: { posts: postsReducer } });

describe('fetchPosts async thunk', () => {
  afterEach(() => jest.clearAllMocks());

  it('sets status to loading while the request is pending', () => {
    const state = postsReducer(undefined, { type: fetchPosts.pending.type });
    expect(state.status).toBe('loading');
  });

  it('stores posts when the request succeeds', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [{ id: 1, title: 'Hello Redux' }],
    });

    const store = makeStore();
    await store.dispatch(fetchPosts());

    const state = store.getState().posts;
    expect(state.status).toBe('succeeded');
    expect(state.items).toEqual([{ id: 1, title: 'Hello Redux' }]);
  });

  it('stores the error when the request fails', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    const store = makeStore();
    await store.dispatch(fetchPosts());

    const state = store.getState().posts;
    expect(state.status).toBe('failed');
    expect(state.error).toBe('Network Error');
  });
});
