import React from 'react';
import {
  BrowserRouter  ,

  Routes,
  Route
 

} from 'react-router-dom';
import EditUser from './page/EditUser';
import Home from './page/Home';
// import AddUserForm from './page/AddUserForm';
import Navbar from './page/Navbar';
import Error from './page/Error';

import AddUserForm from './page/AddUserForm';
import View from './page/View';

function App() {
  return (
    <>
  
  {/* <Home/>
  <EditUser/>
  <AddUser/>
  <ViewForm/> */}
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='edituser/:id' element={<EditUser/>} />
    <Route path='viewuser/:id' element={<View/>} />
    <Route path='adduserform' element={<AddUserForm/>} />
    <Route  path="*" element =  {<Error/>}/>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
