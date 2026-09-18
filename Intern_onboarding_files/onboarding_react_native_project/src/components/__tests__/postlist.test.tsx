import { render, fireEvent, waitFor } from '@testing-library/react-native';
import PostList from '../../app/postlist';

describe('PostList', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('display loading', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => new Promise(() => {}));

    const { getByText } = render(<PostList />);
    expect(getByText('loading...')).toBeTruthy();
  });

  it('sucess loading and display title', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => [
        { id: 1, title: 'Test Title', body: 'Test body content' },
      ],
    } as Response);

    const { findByText } = render(<PostList />);
    expect(await findByText('Test Title')).toBeTruthy();
  });

  it('display error messages', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Network Error'));

    const { findByText } = render(<PostList />);
    expect(await findByText('request failed, please retry it')).toBeTruthy();
  });

  it('click retry button to send new request', async () => {
    const mockFetch = jest
      .spyOn(global, 'fetch')
      .mockRejectedValue(new Error('fail'));

    const { findByText } = render(<PostList />);
    const retryButton = await findByText('retry');

    await waitFor(() => fireEvent.press(retryButton));

    expect(mockFetch).toHaveBeenCalledTimes(2);
  });

  it('display error code and messages', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: false,
    } as Response);

    const { findByText } = render(<PostList />);
    expect(await findByText('request failed, please retry it')).toBeTruthy();
  });
});
