import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';



export const CommonContext = createContext();

const CommonContextProvider = props => {
  const initialState = {
    isFetching: false,
  };

  const [ commonState, setCommonState ] = useState(initialState);


  return (<CommonContext.Provider value={ { setCommonState, commonState } }>
    { props.children }
  </CommonContext.Provider>);
};

CommonContextProvider.propTypes = {
  children: PropTypes.object,
};

export default CommonContextProvider;
