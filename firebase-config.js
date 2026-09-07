import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAsNoPpZcx8f0SDtT8tGn5dSprfSih-O6A",
  authDomain: "mursal-32c5b.firebaseapp.com",
  databaseURL: "https://mursal-32c5b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mursal-32c5b",
  storageBucket: "mursal-32c5b.firebasestorage.app",
  messagingSenderId: "54704644504",
  appId: "1:54704644504:web:bc5606f8532c29edc08bed"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
