import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Heading from "./Components/Heading";
import Options from "./Components/Options";
import VertiaclCard from "./Components/Cards/Vertical Cards/VerticalCard";
import HorizontalCard from "./Components/Cards/Horizontal Cards/HorizontalCard";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex  flex-col flex-1">
          <Navbar />
          <Heading />
          <Options/>
          <VertiaclCard/>
          <HorizontalCard/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
