import PropTypes from 'prop-types';
import React, { createContext, useReducer } from 'react';
import initialState from './reducers/initialState';

const store = createContext();
const { Provider, Consumer } = store;

const StateProvider = ( { children } ) => {
  const [ state, dispatch ] = useReducer((initialState, action) => {
    switch(action.type) {
    case 'IS_FETCHING': {
      const newState = Object.assign(initialState, { isFetching: action.payload.isFetching });
      return newState;
    }
    default:
      throw new Error();
    }
  }, initialState);
  const value = React.useMemo(() => ({ state, dispatch }), [ state ]);
  return <Provider value={ value }>{ children }</Provider>;
};

StateProvider.propTypes = {
  children: PropTypes.object,
};
  
export { Consumer, Provider, StateProvider, store };