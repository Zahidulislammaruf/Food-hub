import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const Provider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [loading,setloading] = useState(true)

     const createUser = (email,password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }

     const updateUser = (name,photo) =>{
      return  updateProfile(auth.currentUser,{
           displayName: name, 
           photoURL: photo
        })
     }
     const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
     }
     const logOut = ()=>{
        setloading(true)
        return signOut(auth)

     }

    useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
          setUser(currentUser)  
          setloading(false)
        });
        return () =>{
            return unsubscribe

        }
    },[])

    


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;