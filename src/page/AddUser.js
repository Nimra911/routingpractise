import React from 'react';

import UserData from './UserData';
import { useNavigate,
 } from 'react-router-dom';
  import '../adduser.css'
 import  { useState } from 'react';
function AddUser() {
   const navigate =  useNavigate();
 

   const[users,setUsers] = useState(UserData);
   const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

//    let onSubmit = (e)=>
//    {
//   e.preventDefault();
// navigate('/')
//    }
//    let inputEvent = (e) =>
//    {
//   let val = e.target.value;
//   let name = e.target.name;
//   console.log('inputfield vaue'+val);
//   console.log('inputfield name'+name);
//   setData((pre)=>
//   {
//   console.log(pre);
//   if(name==='fName')
//   {
//       return{
//           fname:val,
//           lname:pre.lname,
//           mail:pre.mail,
//       } 
//   }
//   else if(name==='lName')
//   {
//       return{
//           fname:pre.fname,
//           lname:val,
//           mail:pre.mail,
//       } 
//   }
//   else if(name==='Mail')
//   {
//       return{
//           fname:pre.fname,
//           lname:pre.lname,
//           mail:val,
//       } 
//   }
//   })
//    }
//   console.log(data);
//     return(
//         <> 
// <form className='form' onSubmit={onSubmit}>
// <h1> Hello </h1>
// <input type="text"
//  placeholder='Enter FirstName'
//   onChange={inputEvent}
//   name ="fName"
// //   value = {data.fname}
//   ></input>
// <br/>
// <input type="text" 
// placeholder='Enter last' 
// onChange={inputEvent}
//   name ="lName"
// //   value = {data.lname}
//   ></input>
//   <br/>
//   <input type="text" 
// placeholder='Enter Mail' 
// onChange={inputEvent}
//   name ="Mail"
// //   value = {data.lname}
//   ></input>
// <br/>
// <button className='btn' type='submit'> click me </button>
// </form>
//     </>
//   );
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
       
        </div>
      </div>
    </div>
  );
  
}

export default AddUser
