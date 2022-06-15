import { useState, useCallback } from 'react';

const useFetch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        body: JSON.stringify(
          requestConfig.body ? requestConfig.body : undefined
        ),
        headers: requestConfig.headers ? requestConfig.headers : {},
      });
      if (!response.ok) {
        throw new Error('Request failed.');
      }
      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);
  return { error, sendRequest, isLoading };
};

export default useFetch;
