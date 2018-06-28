import firebase from 'firebase';
import constants from '../constansts';

const initFirebase = () => {
  return firebase.initializeApp(constants.firebaseConfig);
};

export default initFirebase;