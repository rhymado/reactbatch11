const initialState = {
  storeList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const storeList = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_STORE_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_STORE_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_STORE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        storeList: action.payload.data,
      };

    default:
      return state;
  }
};

export default storeList;
