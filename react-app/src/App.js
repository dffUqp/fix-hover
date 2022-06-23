import React from "react";

import { BrowserRouter } from "react-router-dom";

import "./styles/App.css";
import AppRoute from "./Components/AppRoute";
import Navbar from "./Components/UI/navbar/Navbar";
import { AuthContext } from "./context/context";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(localStorage.getItem("auth"));
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRoute />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
