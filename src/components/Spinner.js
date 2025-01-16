import React, { useContext } from 'react';

import Loader from '../../svgIcons/Loader';
import { CommonContext } from '../../context/commonContext';

const Spinner = () => {
  const { commonState } = useContext(CommonContext);
  return (
    <div>
      { commonState.isFetching && <Loader /> }
    </div>
  );
};

export default Spinner;