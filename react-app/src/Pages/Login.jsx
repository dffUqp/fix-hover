import React from "react";
import { useContext } from "react";
import Myinput from "../Components/UI/input/Myinput";
import { AuthContext } from "../context/context";

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const submitAuth = (event) => {
    event.preventDefault();
    localStorage.setItem('auth', 'true')
    setIsAuth(true);
  };

  return (
    <div>
      <h1>Форма для логина</h1>
      <form onSubmit={submitAuth}>
        <Myinput type="text" placeholder="Login" />
        <Myinput type="text" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
