import Axios from 'axios';

export const getStore = () => {
  return {
    type: 'GET_STORE', //nama
    payload: Axios.get (`https://fortnite-api.theapinetwork.com/store/get`, {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }), //aksi
  };
};
