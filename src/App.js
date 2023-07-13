import "./App.css";

import React, { createContext, useState } from "react";
import UserComponent from "./UserComponent";

export const UserContext = createContext();

function App() {
  const [userName, setUserName] = useState("Sriram");
  return (
    <div className="App">
      <UserContext.Provider value={userName}>
        <UserComponent />
      </UserContext.Provider>
    </div>
  );
}

export default App;
