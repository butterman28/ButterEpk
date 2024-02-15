import { useState } from 'react'
import Header from "./components/header";
import Bio from './components/bio';
import "./css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import image1 from './images/image1.jpg';
// Import Bootstrap scripts
function App() {

  return (
    <div className="app">
      <Header />
      <div className="image">
        <img src={image1} alt="alakoriculture" />      
      </div>
      <Bio /> 
    </div>
  )
}

export default App
