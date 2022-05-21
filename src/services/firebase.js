import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBIHYb0wEHsV2MS4fLU52NasMTX-EHQFGE",
  authDomain: "ecommerce-react-js-julian.firebaseapp.com",
  projectId: "ecommerce-react-js-julian",
  storageBucket: "ecommerce-react-js-julian.appspot.com",
  messagingSenderId: "268218933197",
  appId: "1:268218933197:web:62435bc2e04659c9996e84"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db