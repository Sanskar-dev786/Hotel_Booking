import React from "react";
import Navbar from "./compenents/Navbar";

//import { useLocation } from "react-router-dom";

const App = () => {
  // const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
