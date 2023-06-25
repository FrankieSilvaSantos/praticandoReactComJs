import logo from './logo.svg';
import './App.css';
import Banner from './layouts/Banner';
import Form from './pages/Form';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Programacao from './pages/Programacao';
import Editar from './pages/Editar';
import Design from './pages/Design';
import FrontEnd from './pages/FrontEnd';
import DataScience from './pages/DataScience';
import Devops from './pages/Devops';
import Mobile from './pages/Mobile';
import Inovacao from './pages/Inovacao';

function App() {

  const params = useParams()
  return (


    <>
    
    
    <Router>
      <Navbar></Navbar>
    <Banner></Banner> 
   

      <Routes>

      <Route path='/' element={<Form></Form>}></Route>

    <Route path='/programacao' element={<Programacao></Programacao>}></Route>

    <Route path={`/editar/:id`} element={<Editar></Editar>}></Route>

    <Route path='/design' element={<Design></Design>}></Route>

    <Route path='/frontend' element={<FrontEnd></FrontEnd>}></Route>

    <Route path='/datascience' element={<DataScience></DataScience>}></Route>

    <Route path='/devops' element={<Devops></Devops>}></Route>

    <Route path='/mobile' element={<Mobile></Mobile>}></Route>

    <Route path='/inovacao' element={<Inovacao></Inovacao>}></Route>

      </Routes>
      <Footer></Footer>
   
    </Router>
 

    


    </>
  
  
  )
}

export default App;
