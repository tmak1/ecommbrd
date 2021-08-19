import firebase from 'firebase/app';
import 'firebase/storage';

const initializeFirebase = async (token) => {
  try {
    if (!firebase.apps.length) {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/products/firebaseConfig`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const firebaseConfig = await res.json();
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
    return firebase;
  } catch (error) {
    console.log(error);
  }
};

export default initializeFirebase;
