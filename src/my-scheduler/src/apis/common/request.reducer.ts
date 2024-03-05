export interface RequestState<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
}

export type RequestAction<T> = {
  type: 'INIT' | 'SUCCESS' | 'FAILED';
  payload?: T;
};

export const requestReducer = <T>(state: RequestState<T>, action: RequestAction<T>): RequestState<T> => {
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
