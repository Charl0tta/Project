import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Main } from './pages/Main/Main';
import { Auth } from './pages/Auth/Auth';
import { Registration } from './pages/Registration/Registration';
import { Routes, Route } from "react-router-dom"
import { CreateTimeTable } from './pages/CreateTimeTable/CreateTimeTable';
import { InputData } from './pages/InputData/InputData';
import { ExcelInput } from './pages/ExcelInput/ExcelInput';
import { TimetableGeneration} from './pages/TimetableGeneration/TimetableGeneration';
import { DownloadTimetable } from './pages/DownloadTimetable/DownloadTimetable';
import { TimesInput } from './pages/TimesInput/TimesInput';
import { Cabinet } from './pages/Cabinet/Cabinet';
// const OffcanvasMenu = require('react-offcanvas-menu-component')
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path={"/*"} element={<Main />} />
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/lk"} element={<Cabinet />} />
        <Route path={"/registration"} element={<Registration />} />
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
