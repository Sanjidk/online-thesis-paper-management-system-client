import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import UploadReport from './Pages/Reports/UploadReport';
import ReportList from './Pages/Reports/ReportList';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="upload" element={<UploadReport />}></Route>
        <Route path="list" element={<ReportList />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
