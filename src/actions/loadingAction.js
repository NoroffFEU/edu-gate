
// action type
const IS_LOADING = 'IS_LOADING';


//action creator
export const loadingAction = status =>  {
  return {
    type: IS_LOADING,
    loading: status
  }
};
