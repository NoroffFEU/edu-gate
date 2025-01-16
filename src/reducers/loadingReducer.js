import { initialState } from '../store';

const loadingReducer = (state =  false, { loading, type }) => {
  switch (type) {
  case 'IS_LOADING':
    return loading;
  default:
    return state;
  }
};

export default loadingReducer;
