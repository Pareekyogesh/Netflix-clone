import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Headerr";
import Login from "./Components/Login/Login";
import Signin from "./Components/Signin/Signin";
import Upcoming from "./Components/Upcoming/Upcoming";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
         
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
         
      </Routes>
      <Routes>
        <Route path="/signin" element={<Signin/>} />
         
      </Routes>
      <Routes>
        <Route path="/upcoming" element={<Upcoming/>} />   
      </Routes>
     
      </BrowserRouter>
  
      
   
  
    
  
  );
}

export default App;
