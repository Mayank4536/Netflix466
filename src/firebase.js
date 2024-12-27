import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyC05xxJck552YUxgEyQVhpA3vXb0ivOaY0",
  authDomain: "netflix-clone-5a4e6.firebaseapp.com",
  projectId: "netflix-clone-5a4e6",
  storageBucket: "netflix-clone-5a4e6.firebasestorage.app",
  messagingSenderId: "673436787666",
  appId: "1:673436787666:web:9f92c02128137ae5285e0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Here's We create a SignUp functions
const signup = async (name,email,password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth,email,password);
      const user = res.user;
      await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email
      });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

//Here's We create a Login function
const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

//Here's We create a LogOut function
const logout = async () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};