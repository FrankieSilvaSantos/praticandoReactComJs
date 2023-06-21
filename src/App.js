import logo from './logo.svg';
import './App.css';
import Banner from './layouts/Banner';
import Form from './pages/Form';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Programacao from './pages/Programacao';


function App() {
  return (


    <>
    
    
    <Router>
      <Navbar></Navbar>
    <Banner></Banner> 
   

      <Routes>

      <Route path='/' element={<Form></Form>}></Route>

    <Route path='/programacao' element={<Programacao></Programacao>}></Route>

      </Routes>
      <Footer></Footer>
   
    </Router>
 

    


    </>
  
  
  )
}

export default App;
