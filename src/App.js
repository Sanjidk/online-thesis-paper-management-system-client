import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import UploadReport from './Pages/Reports/UploadReport';
import RequireAuth from './Pages/Login/RequireAuth';

import Dashboard from './Pages/Dashboard/Dashboard';
import Notice from './Pages/Dashboard/Notice';
import UserList from './Pages/Dashboard/UserList';
import ReportList from './Pages/Dashboard/ReportList';
import CreateNotice from './Pages/Dashboard/CreateNotice';
import CheckPlagiarism from './Pages/Dashboard/CheckPlagiarism';

function App() {
  return (
    <div> 
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register></Register>}></Route>

        <Route path="dashboard" element={
        <RequireAuth>
        <Dashboard />
          </RequireAuth>
        }>
        <Route index element={<Notice />}></Route>
        <Route path='createNotice' element={<CreateNotice />}></Route>
        <Route path='plagiarism' element={<CheckPlagiarism />}></Route>
        <Route path='upload' element={<UploadReport />}></Route>
        <Route path='users' element={<UserList />}></Route>
        <Route path='reportList' element={<ReportList />}></Route>
        </Route>


        <Route path="register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
