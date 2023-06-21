import logo from './logo.svg';
import './App.css';
import Banner from './layouts/Banner';
import Form from './pages/Form';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';


function App() {
  return (


    <>
    
    
    <Router>
      <Navbar></Navbar>
    <Banner></Banner> 
   

      <Routes>

      <Route path='/' element={<Form></Form>}></Route>

      </Routes>
      <Footer></Footer>
   
    </Router>
 

    


    </>
  
  
  )
}

export default App;
