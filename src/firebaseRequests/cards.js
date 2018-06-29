import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${constants.firebaseConfig.databaseURL}/mashups.json`)
      .then(response => {
        const cards = [];
        if (response.data !== null) {
          Object.keys(response.data).forEach(key => {
            response.data[key].id = key;
            cards.push(response.data[key]);
          });
          resolve(cards);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default {getRequest};