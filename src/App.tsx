import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Auth } from './pages/Auth/Auth';
import { Routes, Route } from "react-router-dom"
import { CreateTimeTable } from './pages/CreateTimeTable/CreateTimeTable';
import { InputData } from './pages/InputData/InputData';
import { ExcelInput } from './pages/ExcelInput/ExcelInput';
import { TimetableGeneration} from './pages/TimetableGeneration/TimetableGeneration';
import { DownloadTimetable } from './pages/DownloadTimetable/DownloadTimetable';
import { TimesInput } from './pages/TimesInput/TimesInput';
// const OffcanvasMenu = require('react-offcanvas-menu-component')
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/create"} element={<CreateTimeTable />} />
        <Route path={"/input-data"} element={<InputData />} />
        <Route path={"/excel-input"} element={<ExcelInput />} />
        <Route path={"/input-data"} element={<InputData />} />
        <Route path={"/excel-input"} element={<ExcelInput />} />
        <Route path={"/timetable-generation"} element={<TimetableGeneration />} />
        <Route path={"/timetable-download"} element={<DownloadTimetable />} />
        <Route path={"/times-input"} element={<TimesInput />} />
      </Routes>
    </div>
  );
}


export default App;
