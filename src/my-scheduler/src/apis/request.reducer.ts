type RequestAction = {
  type: 'INIT' | 'SUCCESS' | 'FAILED';
  payload?: any;
};

export interface RequestState<T> {
  isLoading: boolean;
  isError: boolean;
  data?: T;
}

export const requestReducer = (
  state: RequestState<any>,
  action: RequestAction
): RequestState<any> => {
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
