import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Questions from './Questions';


function App() {
    return (
        <div>
          <Sidebar/>
          <Navbar/>
          <Questions/>     
        </div>
    )
}

export default App
