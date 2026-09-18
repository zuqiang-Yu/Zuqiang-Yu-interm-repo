import { render } from '@testing-library/react-native';
import PostList from '../../app/axiospostlist';

// mock axios 模块
jest.mock('axios', () => {
  const mockGet = jest.fn();
  return {
    create: jest.fn(() => ({ get: mockGet })),
    isAxiosError: jest.fn(),
    __mockGet: mockGet, // 暴露出来方便测试里控制
  };
});

// 拿到 mockGet 的引用
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { __mockGet: mockGet, isAxiosError } = require('axios');

describe('PostList — axios', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('display essay title', async () => {
    mockGet.mockResolvedValue({
      data: [{ id: 1, title: 'Test Title', body: 'Test body' }],
    });

    const { findByText } = render(<PostList />);
    expect(await findByText('Test Title')).toBeTruthy();
  });

  it('code 500 error', async () => {
    mockGet.mockRejectedValue({ response: { status: 500 }, request: {} });
    isAxiosError.mockReturnValue(true);

    const { findByText } = render(<PostList />);
    expect(await findByText('server error：500')).toBeTruthy();
  });

  it('internet bad error', async () => {
    mockGet.mockRejectedValue({ response: undefined, request: {} });
    isAxiosError.mockReturnValue(true);

    const { findByText } = render(<PostList />);
    expect(await findByText('internet error, please retry it')).toBeTruthy();
  });
});
