import { getDatabase, push, ref } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCnT5SQgfBLbky16R5Dh-mDWSMgyTjg3Q",
  authDomain: "personal-aea02.firebaseapp.com",
  projectId: "personal-aea02",
  storageBucket: "personal-aea02.appspot.com",
  messagingSenderId: "317797291324",
  appId: "1:317797291324:web:a18c0c471207511e8efa39",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const stats_db = getDatabase(
  app,
  "https://personal-aea02-default-rtdb.firebaseio.com/"
);
const OnAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback);
};
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

const logout = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
  }
};

const PushEvent = (sessionID, data) => {
  if (sessionID) {
    if (data){
      let time = Date.now()
      push(ref(stats_db, sessionID), {...data, time});
      return time
    }else{
      console.error("No data provided");
    }
  } else {
    console.error("No sessionID");
  }
  return 0

};

export { login, logout, OnAuthStateChanged, PushEvent };
