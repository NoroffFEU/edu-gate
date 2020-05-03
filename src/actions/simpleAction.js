export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  });
};

export const isFetching = status => dispatch => {
  dispatch({
    type: 'IS_FETCHING',
    payload: status,
  });
};
