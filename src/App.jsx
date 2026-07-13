import React, {useContext,useEffect} from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

 import { ToastContainer} from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import Home from './pages/Home';
 import {Context} from "./main";
 import axios from "axios";




const App = () => {
  const {isAuthenticated, setIsAuthenticated, setUser} = useContext(Context);
   useEffect(() =>{
    const fetchUser = async () =>{
      try{
        const response = await axios.get("https://vercel-ba1.vercel.app/api/user/patient/me", {withCredentials:true});
        setIsAuthenticated(true);
        setUser(response.data.user);

      } catch (error){
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
   }, [isAuthenticated]);


  return (
    <>
    <BrowserRouter>
   
      <Routes>
        <Route path='/' element={<Home/>}/>
       
      </Routes>
      
      <ToastContainer position='top-center'/>
    </BrowserRouter>
    </>
  )
}

export default App
