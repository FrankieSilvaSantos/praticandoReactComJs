import logo from './logo.svg';
import './App.css';
import Banner from './layouts/Banner';
import Form from './pages/Form';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './layouts/Footer';

function App() {
  return (


    <>
    
    
    <Router>
    <Banner></Banner>
      <Form></Form>

      <Routes>

    

      </Routes>
      <Footer></Footer>
   
    </Router>
 

    


    </>
  
  
  )
}

export default App;
