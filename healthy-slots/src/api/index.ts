import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqIEjCyRjKmjX2q_3VudAFwdUd-YQaBis",
  authDomain: "healthy-slots-385dc.firebaseapp.com",
  projectId: "healthy-slots-385dc",
  storageBucket: "healthy-slots-385dc.appspot.com",
  messagingSenderId: "4882856622",
  appId: "1:4882856622:web:d0edb6f49324c9204dcb3f",
  measurementId: "G-9XHB7DKJDS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addPastDoneRecipe = async (recipeId: string) => {
  try {
    const ref = doc(db, "users", "VPZY4P66gWSo8BE9n2F1");
    const docSnap = await getDoc(ref);
    const data = docSnap.data();

    if (data) await updateDoc(ref, { recipes: [...data.recipes, recipeId] });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getPastDoneRecipe = async () => {
  try {
    const ref = doc(db, "users", "VPZY4P66gWSo8BE9n2F1");
    const docSnap = await getDoc(ref);
    const data = docSnap.data();

    if (data) return data.recipes;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
