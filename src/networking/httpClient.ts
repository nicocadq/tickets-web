type HttpClientParams = {
  params?: { headers?: object },
  method: 'GET' | 'PUT' | 'DELETE' | 'POST';
  endpoint: string,
  data?: Object,
};

export const httpClient = (
  {
    params, method, endpoint, data
  } : HttpClientParams
) => {
  let headers = { 'Content-Type': 'application/json' };

  if (params?.headers) {
    headers = { ...headers, ...params.headers };
  }

  return fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, {
    method,
    body: JSON.stringify(data),
    headers
  })
    .then((res) => res.json())
    .catch(({ response }) => {
      if (!response) {
        throw new Error('Connection error');
      }

      if (response?.message) {
        throw new Error(response.message);
      }

      throw new Error('An error occurred, try again later.');
    });
};
