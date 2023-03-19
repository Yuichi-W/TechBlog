import useSWR from 'swr';
import { useEffect, useState } from 'react';

const baseURL = "http://localhost:3000/";

export const Fetcher = ({ endpoint }: { endpoint: string }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseURL}${endpoint}`);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return {
    data,
    isLoading,
    isError,
  };
};