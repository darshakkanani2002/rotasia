import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Registration from './admin/RegistrationForm/Registration';
import Login from './components/login';
import Otp from './components/otp';
import Dashboard from './components/dashboard'
import { Provider, useSelector } from 'react-redux';
import store from './Features/store';
import PrivateRoute from './PrivateRoute';
import AdminDashboard from './admin/AdminDashboard';

function App() {
  return (
    <Provider store={store}>
      <div className="App header-margin">
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path='/admin' element={<Login />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/admin/registration' element={<Registration />} />
            <Route path='/*' element={<AdminDashboard />} />
            <Route element={<PrivateRoute />}>
              {/* <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route> */}
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider>
    // <div className="App">
    //   <Router>
    //     <Header></Header>
    //     <Routes>
    //       <Route path='/' element={<Login></Login>}></Route>
    //       <Route path='/admin' element={<Login></Login>}></Route>
    //       <Route path='/admin/dashboard' element={<AdminDashboard/>}></Route>
    //       <Route path='/admin/dashboard/adminauth' element={<Adminauth/>}></Route>
    //       <Route path='/otp' element={<Otp></Otp>}></Route>
    //       <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
    //       <Route path='/registration' element={<Registration></Registration>}></Route>
    //     </Routes>
    //   </Router>
    // </div>
  );
}

export default App;