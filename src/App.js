import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div>
<Navbar></Navbar>

<Routes>

  <Route path="/" element={<Home />}></Route>
  <Route path="login" element={<Login />}></Route>
  <Route path="register" element={<Register />}></Route>
  <Route path="about" element={<About />}></Route>

</Routes>

    </div>
  );
}

export default App;
