import React from 'react';

// COMPONENTS
import NavBar from "./components/NavbBar"
import ContactForm from "./components/ContactForm"
import BonusInfo from './components/BonusInfo';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GuadagniInfo from './components/GuadagniInfo';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <BonusInfo />
      <GuadagniInfo/>
      <ContactForm />
    </div>
  );
}

export default App;
