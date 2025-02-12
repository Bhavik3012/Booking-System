import { useState } from "react";
import "./App.css";
import { LoginForm } from "./components/login-form";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <LoginForm />
      <Footer />
    </>
  );
}

export default App;
