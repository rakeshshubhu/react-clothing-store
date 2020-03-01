import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCcUQIY7QUz7iPezHqFXFQmVYvPH9OQfvY",
  authDomain: "shopping-db-284d9.firebaseapp.com",
  databaseURL: "https://shopping-db-284d9.firebaseio.com",
  projectId: "shopping-db-284d9",
  storageBucket: "shopping-db-284d9.appspot.com",
  messagingSenderId: "602321411323",
  appId: "1:602321411323:web:8f7f152abfde6fdba5e45e",
  measurementId: "G-1KKZTXDYQW"
};

export const createUserProfileDocument = async (user, additional) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const { exists } = await userRef.get();

  if (!exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additional
      });
    } catch (error) {
      console.error("Error created user");
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGithub = () => auth.signInWithPopup(provider);

export default firebase;
