import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCnT5SQgfBLbky16R5Dh-mDWSMgyTjg3Q",
  authDomain: "personal-aea02.firebaseapp.com",
  projectId: "personal-aea02",
  storageBucket: "personal-aea02.appspot.com",
  messagingSenderId: "317797291324",
  appId: "1:317797291324:web:a18c0c471207511e8efa39"
};

const app = initializeApp(firebaseConfig);

export default app;