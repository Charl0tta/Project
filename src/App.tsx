import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Auth } from './pages/Auth/Auth';
import {Routes, Route} from "react-router-dom"
import { CreateTimeTable } from './pages/CreateTimeTable/CreateTimeTable';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={"/auth"} element={<Auth/>}/>
        <Route path={"/create"} element={<CreateTimeTable/>}/>
      </Routes>
    </div>
  );
}

export default App;
