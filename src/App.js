import React from "react";
import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts";
import Routes from "./routes";
function App() {
  return (
    <div style={{ height: "100%" }}>
      <NavBar />
      <Routes />
    </div>
  );
}

export default App;
