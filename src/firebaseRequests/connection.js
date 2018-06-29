import firebase from 'firebase';
import constants from '../constants';

const initFirebase = () => {
  return firebase.initializeApp(constants.firebaseConfig);
};

export default initFirebase;