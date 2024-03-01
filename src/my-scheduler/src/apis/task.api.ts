import httpClient from '../utils/httpClient';
import { useEffect, useReducer } from 'react';
import { RequestState, requestReducer } from './request.reducer';

const taskPath: string = '/tasks';
export function useTasksApi(): RequestState<any> {
  const [state, dispatch] = useReducer(requestReducer, {
    isError: false,
    isLoading: false,
  } as RequestState<any>);

  useEffect(() => {
    let stillAlive = true;
    dispatch({ type: 'INIT' });
    // Fetching
    httpClient
      .get(taskPath)
      .then((resp) => {
        stillAlive && dispatch({ type: 'SUCCESS', payload: resp.data });
      })
      .catch((err) => {
        stillAlive && dispatch({ type: 'FAILED', payload: null });
        console.error(err);
      });

    return () => {
      stillAlive = false;
    };
  }, []);

  return state;
}
