import React, { useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./Home";
import Office_Information from './pages/Office_Information/Office_Information';
import Login_Screen from './pages/Login_Screen/Login_Screen';
import Token from './pages/Token/Token'
import Password_Reset from './pages/Password_Reset/Password_Reset';
import Create_Account from './pages/Create_Account/Create_Account'
import Home_Screen from './pages/Home_Screen/Home_Screen'
import Create_Office from './pages/Create_Office/Create_Office'
import Admin_Information from './pages/Admin_Information/Admin_Information'
import Create_Administrator from './pages/Create_Administrator/Create_Administrator'
import Edit_Administrator from './pages/Edit_Administrator/Edit_Administrator'

import Active_Directory from "./pages/Active_Directory/Active_Directory";
import Active_Administrator from "./pages/Active_Administrator/Active_Administrator"
import Administrator_History from "./pages/Administrator_History/Administrator_History"
import Directory_History from "./pages/Directory_History/Directory_History"
import Password_Recovery from "./pages/Password_Recovery/Password_Recovery";
import Edit_Office from "./pages/Edit_Office/Edit_Office"
import AuthContext from './contexts/AuthContext'

function App() {

  const context = useContext(AuthContext);

  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login_Screen/>}/>
          <Route 
            path="/Home" 
            element={<Home_Screen/>}
          />
          <Route 
            path="/Create_Account" 
            element={<Create_Account/>}
          />
          <Route 
            path="/Admin_Information/:adminid" 
            element={<Admin_Information />}
          />
          <Route 
            path="/Password_Recovery" 
            element={<Password_Recovery/>}
          />
          <Route 
            path="/Password_Reset/:token" 
            element={<Password_Reset/>}
          />
          <Route 
            path="/Create_Office" 
            element={<Create_Office/>}
          />
          <Route 
            path="/Edit_Office/:officeid" 
            element={<Edit_Office />}
          />
          <Route 
            path="/Create_Administrator" 
            element={<Create_Administrator/>}
          />
          <Route 
            path="/Login_Screen" 
            element={<Login_Screen/>}
          />
          <Route 
            path="/Token" 
            element={<Token/>}
          />
          <Route 
            path='/Edit_Administrator/:adminid' 
            element={<Edit_Administrator />}
          />
          <Route 
            path="/Office_Information/:officeid" 
            element={<Office_Information />}
          />
          <Route 
            path="/Active_Directory" 
            element={<Active_Directory/>}
          />
          <Route 
            path="/Active_Administrator" 
            element={<Active_Administrator/>}
          />
          <Route 
            path="/Administrator_History" 
            element={<Administrator_History/>}
          />
          <Route 
            path="/Directory_History" 
            element={<Directory_History/>}
          /> 
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
