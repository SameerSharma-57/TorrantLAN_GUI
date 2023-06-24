import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Home from "./Routes/home";
import About from "./Routes/about";




function App() {

  

  return (
    <>
      <BRouter>
        <Navbar />
        

        <Routes>
          <Route path="about" exact Component={About}/>
          
          <Route path="/*" element={<Home/>} />
        </Routes>
      </BRouter>
    </>
  );
}

export default App;
