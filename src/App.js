import './App.css';
import React from "react";
import './nav/AppTopNav';
import AppTopNav from "./nav/AppTopNav";
import AppBottomNav from "./nav/AppBottomNav";
import AppContent from "./main/AppContent";

//https://stackoverflow.com/questions/17141961/css-layout-with-fixed-top-and-bottom-variable-height-middle
function App() {
  return (
    <div>
      <AppTopNav/>
      <AppContent/>
      <AppBottomNav/>
    </div>
  );
}

export default App;
