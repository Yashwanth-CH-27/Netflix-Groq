import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { netflix_logo, user_logo } from "../utils/constants";
import { addGptPage } from "../utils/gptToogleSlice";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const user = useSelector((store) => store.user);
  const gptHomeToggleState = useSelector(store => store?.gptToogleState?.gptState)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-full h-auto flex justify-between mt-[-10px]">
      <div className="z-10 flex gap-0 md:gap-2 w-2/12 md:w-6/12">
        <img className="w-20 md:w-40 h-15 md:h-20 mx-3 md:mx-7 my-3" src={netflix_logo} alt="logo" />
        {user && <div className="my-7 md:my-7">
          <button className="bg-red-800 p-1 text-[15px] md:font-bold w-[200%] md:w-full md:p-3 rounded-lg" onClick={()=> {
            dispatch(addGptPage())
          }}>{gptHomeToggleState ? "⏴Home" : "⌕Groq Search"}</button>
        </div>}
      </div>
      {user && (
        <div className="m-3 p-4 z-10">
          <div className="flex md:mr-10 gap-2">
            <img className="md:w-12 md:h-12 rounded-lg" src={user_logo} alt="" />
            <button
              className="cursor-pointer"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              ▼
            </button>
          </div>
          {dropDown && (
            <div className="md:ml-7 my-1 md:my-4  bg-black text-white rounded-lg text-center">
              <p className="border-b border-gray-600 p-1 text-[13px]">
                {user?.displayName}
              </p>
              <button className="p-1 text-[12px]" onClick={handleClick}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
