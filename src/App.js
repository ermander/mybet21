import React from 'react';

// COMPONENTS
import NavBar from "./components/NavbBar"
import ContactForm from "./components/ContactForm"

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ContactForm />
    </div>
  );
}

export default App;
