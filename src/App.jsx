import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";


function App() {
  
  return (
    <div className="app">
      <Header />
      <UserList/>
    </div>
  );
}

export default App;
