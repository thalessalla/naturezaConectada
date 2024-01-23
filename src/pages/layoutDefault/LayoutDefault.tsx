import { BrowserRouter, Routes, Route } from "react-router-dom";

import DrawerAppBar from "../../components/header/Header";
import NavBar from "../../components/navBar/NavBar";
import Home from "../home/Home";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import AdminPage from "../adminPage/AdminPage";
import Config from "../config/Config";
import Confirmation from "../confirmation/Confirmation";
import ThankyouPage from "../thankyouPage/ThankyouPage";
import UserPage from "../userPage/UserPage";
import Footer from "../../components/footer/Footer";


function LayoutDefault() {
  return (
    <>
     {/* <BrowserRouter>
      <DrawerAppBar />
      <NavBar />      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminpage" element={ <AdminPage />} />
          <Route path="/config" element={ <Config />} />
          <Route path="/userpage" element={ <UserPage />} />
          <Route path="/confirmation" element={ <Confirmation />} />
          <Route path="/thankyoupage" element={ <ThankyouPage />} />        
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      < Footer /> */}
    </>
  );
}

export default LayoutDefault;