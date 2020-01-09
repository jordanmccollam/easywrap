import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/animation.css';
// import './css/bootstrap-lumen.css';
import './css/style.css';
import Navbar from "./components/Navbar";
import GiftBubble from "./components/GiftBubble";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import RecipientsBar from "./components/RecipientsBar";
import Recommender from "./components/Recommender";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container-fluid">
        {/* <GiftBubble/> */}
        {/* <Login/> */}
        {/* <SignUp/> */}
        <RecipientsBar/>
        <Recommender/>
      </div>
    </div>
  );
}

export default App;
