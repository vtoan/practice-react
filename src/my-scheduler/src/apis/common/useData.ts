import { useEffect, useReducer, useState } from 'react';
import httpClient from '../../utils/httpClient';
import { RequestState, requestReducer } from './request.reducer';

export type UseDataReturn<T> = RequestState<T> & {
  refetch: () => void;
};

export function useDataApi<T>(routePath: string): UseDataReturn<T> {
  const [isRefetch, setIsRefetch] = useState(Date.now());
  const [state, dispatch] = useReducer(requestReducer<T>, {
    isError: false,
    isLoading: false,
  });

  useEffect(() => {
    let stillAlive = true;
    dispatch({ type: 'INIT' });
    // Fetching
    httpClient
      .get<T>(routePath)
      .then((resp) => {
        stillAlive && dispatch({ type: 'SUCCESS', payload: resp.data });
      })
      .catch((err) => {
        stillAlive && dispatch({ type: 'FAILED', payload: undefined });
        console.error(err);
      });

    return () => {
      stillAlive = false;
    };
  }, [routePath, isRefetch]);

  function refetch() {
    setIsRefetch(Date.now());
  }

  return { ...state, refetch };
}
