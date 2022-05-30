import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login'
import Register from './signup';
import Emp from './emp';
import Emp2 from './emp2';
import Boss from './boss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="emp" element={<Emp/>} />
          <Route path="emp2" element={<Emp2/>} />
          <Route path="boss" element={<Boss/>} />
        
      </Routes>
    </BrowserRouter>
  );
}