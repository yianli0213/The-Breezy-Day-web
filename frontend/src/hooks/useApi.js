import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for fetching data from API
 * @param {Function} fetchFunction - The API function to call
 * @param {*} initialData - Initial data state
 * @returns {Object} { data, loading, error, refetch }
 */
export function useApi(fetchFunction, initialData = null) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFunction();
      setData(result);
    } catch (err) {
      setError(err);
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { 
    data, 
    loading, 
    error, 
    refetch: fetchData 
  };
}

export default useApi;
