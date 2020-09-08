export const fetchResponse = async ({ URL, method, apiBody, apiHeaders }) => {
  const response = await fetch(URL, {
    method,
    body: method !== 'get' ? JSON.stringify(apiBody) : undefined,
    headers: apiHeaders
  });

  if (!response.ok) {
    console.log('Ошибка ответа:', response.status);
  }

  const data = await response.json();

  const result = { response, data };
  return result;
};
