import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Banner from './layouts/Banner';
import Form from './pages/Form';

function App() {
  return (


    <>
    
    <Router>

      <Banner></Banner>
      <Form></Form>

    <Routes>

    <Route path='./banner' element={<Banner></Banner>}></Route>

    <Route path='./' element={<Form></Form>}></Route>

    </Routes>


    </Router>


    </>
  
  
  )
}

export default App;
