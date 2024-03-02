import { useEffect, useReducer } from 'react';
import httpClient from '../../utils/httpClient';

export interface RequestState<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
}

type RequestAction<T> = {
  type: 'INIT' | 'SUCCESS' | 'FAILED';
  payload?: T;
};

const requestReducer = <T>(
  state: RequestState<T>,
  action: RequestAction<T>
): RequestState<T> => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };

    case 'FAILED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      throw new Error('Unknown action: ' + action.type);
  }
};

export function useDataApi<T>(routePath: string): RequestState<T> {
  const [state, dispatch] = useReducer(requestReducer<T>, {
    isError: false,
    isLoading: false,
  } as RequestState<T>);

  useEffect(() => {
    let stillAlive = true;
    dispatch({ type: 'INIT' });
    // Fetching
    httpClient
      .get(routePath)
      .then((resp) => {
        stillAlive && dispatch({ type: 'SUCCESS', payload: resp.data as T });
      })
      .catch((err) => {
        stillAlive && dispatch({ type: 'FAILED', payload: undefined });
        console.error(err);
      });

    return () => {
      stillAlive = false;
    };
  }, [routePath]);

  return state;
}
