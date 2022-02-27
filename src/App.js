import './App.css';
import React from "react";
import './nav/AppTopNav';
import AppTopNav from "./nav/AppTopNav";
import AppBottomNav from "./nav/AppBottomNav";
import AppContent from "./main/AppContent";

//https://stackoverflow.com/questions/17141961/css-layout-with-fixed-top-and-bottom-variable-height-middle
function App() {
    return (
        <div className="root-container">
            <div className="root-nav">
                <AppTopNav/>
            </div>
            <div className="root-content">
                <AppContent/>
            </div>
            <div className="root-bottom-nav">
                <AppBottomNav/>
            </div>
        </div>
    );
}

export default App;
