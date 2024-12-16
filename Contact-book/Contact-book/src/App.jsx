import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div>
      <Header />
      <ContactList />
    </div>
  );
}

export default App;
