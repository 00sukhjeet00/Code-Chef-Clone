import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Component/Loader";
import { _login } from "../../Store/Action/user";
import LoginComponent from "./component/Login";
import {toast, ToastContainer} from 'react-toastify'
export default function LoginScreen() {
  const [state, setstate] = useState({
    email: "",
    password: "",
  });
  const { isLoading, msg } = useSelector((store) => store.user);
  useEffect(() => {
    toast(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, [msg]);

  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(_login(state));
  };
  return (
    <>
      {isLoading && <Loader />}
      <LoginComponent
        state={state}
        setstate={setstate}
        handleLogin={handleLogin}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
