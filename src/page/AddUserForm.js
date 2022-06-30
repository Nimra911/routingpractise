import React, { useState } from 'react'
import UserData from './UserData'
import { useNavigate,
} from 'react-router-dom';
const AddUserForm = () => {
  const initialFormState = { id: null, fname: '', lname: '',mail:'' }
  const [user, setUser] = useState(initialFormState)
  const navigate =  useNavigate();



  let inputEvent = (e) =>
  {
 let val = e.target.value;
 let name = e.target.name;
//  console.log('inputfield vaue'+val);
//  console.log('inputfield name'+name);
 setUser((pre)=>
 {
   
let Id = UserData.length + 1;
console.log(Id);
 console.log(pre);
 if(name==='fname')
 {
     return{
        id:Id,
         fname:val,
         lname:pre.lname,
         mail:pre.mail,
     } 
 }
 else if(name==='lname')
 {
     return{
        id:Id,
         fname:pre.fname,
         lname:val,
         mail:pre.mail,
     } 
 }
 else if(name==='mail')
 {
     return{
        id:Id,
         fname:pre.fname,
         lname:pre.lname,
         mail:val,
     } 
 }
 })
  }
  console.log(user);

  return (
    
    
   
    <form
      onSubmit={(event) => {
        event.preventDefault()
         UserData.push(user);
         navigate('/');
        setUser(initialFormState)

      }}
    >
      <label>FirstName</label>
      <input
        type="text"
        name="fname"
        // value={user.fname}
        onChange={inputEvent}
      />
        <label>LastName</label>
      <input
        type="text"
        name="lname"
        // value={user.lname}
        onChange={inputEvent}
      />
      <label>email</label>
      <input
        type="text"
        name="mail"
        // value={user.email}
        onChange={inputEvent}
      />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm