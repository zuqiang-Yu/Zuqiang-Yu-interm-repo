import axios from 'axios';

// ─── Axios Instance ───────────────────────────────────────
const api = axios.create({
  baseURL: 'https://api.example.com', // using your base url
  timeout: 10000, // 10 seconds before timeout
  headers: {
    accept: '*/*',
    'x-request-id': crypto.randomUUID(), // Dynamically generated request ID
  },
});

// ─── Request Interceptor ──────────────────────────────────
api.interceptors.request.use(
  (config) => {
    // Retrieve auth token from local storage
    const token = localStorage.getItem('auth_token');

    // Attach token to headers if available
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request setup errors
    return Promise.reject(error);
  },
);

// ─── Test API Request with Cancellation ──────────────────
async function submitOrder(orderData, router) {
  // Set up AbortController for request cancellation
  const controller = new AbortController();

  // Cancel request after 15 seconds if still pending
  const cancelTimeout = setTimeout(() => {
    controller.abort();
  }, 15000);

  try {
    const response = await api.post('/orders', orderData, {
      signal: controller.signal, // Attach cancellation signal
    });

    // Redirect on success
    if (response.data.success) {
      router.push('/orders/confirmation');
    }

    return response.data;
  } catch (error) {
    if (error.name === 'CanceledError') {
      // eslint-disable-next-line no-console
      console.error('Request was cancelled due to timeout.');
    } else if (error.response) {
      // Server responded with 4xx / 5xx
      // eslint-disable-next-line no-console
      console.error(
        `Server error: ${error.response.status}`,
        error.response.data,
      );
    } else {
      // Network error or no response
      // eslint-disable-next-line no-console
      console.error('Network error:', error.message);
    }
    throw error;
  } finally {
    clearTimeout(cancelTimeout); // Clean up timer regardless of outcome
  }
}

// ─── Usage Example ────────────────────────────────────────
await submitOrder(
  { product_id: 'abc123', quantity: 2 },
  router, // using router will not refresh the whole page.
);
