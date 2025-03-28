import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkBtnValidation } from "../utils/validations";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { bg_logo } from "../utils/constants";

const SignInSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null)
  const dispatch = useDispatch();
  const [errMessage, setErrMessage] = useState(null);
  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };
  const handleValidation = () => {
    const err = checkBtnValidation(email.current.value, password.current.value);
    setErrMessage(err);
    if (err) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            // Profile updated!
            // ...
            const {uid, email, displayName} = auth.currentUser
            dispatch(addUser({uid: uid, email: email, displayName: displayName}))
            
          }).catch((error) => {
            setErrMessage(error)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="fixed">
        <img
          className="h-screen w-screen object-cover"
          src={bg_logo}
          alt="bg-image"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[80%] md:w-3/12 absolute bg-black/85 my-22 md:my-40 mx-auto right-0 left-0 rounded-lg"
        >
          <h1 className="text-white text-xl md:text-4xl font-bold m-4 p-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="UserName"
              className="p-4 m-4 text-white border border-amber-50 w-11/12 rounded-lg bg-gray-800"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="p-4 m-4 text-white border border-amber-50 w-11/12 rounded-lg bg-gray-800"
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 m-4 text-white border border-amber-50 w-11/12 rounded-lg bg-gray-800"
          ></input>
          <p className="p-4 m-2 md:m-4 text-red-600">{errMessage}</p>
          <button
            className="p-4 m-4 text-white w-11/12 bg-red-700 rounded-lg"
            onClick={handleValidation}
          >
            {isSignIn ? "SignIn" : "SignUp"}
          </button>
          <button className="text-white p-2 m-4" onClick={handleToggle}>
            {isSignIn
              ? "New To Netflix? SignUp now"
              : "Already Registered? SignIn"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInSignUp;
