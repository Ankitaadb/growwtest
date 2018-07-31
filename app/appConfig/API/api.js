export async function api({ absoluteUrl, method, data, headers }) {
    try {
      const response = await fetch(absoluteUrl, {
        method,
        headers,
        body: data
      });
      const responseJson = await response.json();
      if (!response.ok || response.status !== 200) {
        throw responseJson;
      }
      return responseJson;
    } catch (error) {
      return Promise.reject(error);
    }
  }