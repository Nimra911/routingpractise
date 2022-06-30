import React, { useState } from 'react'
import UserData from './UserData'
import { useNavigate,useParams
} from 'react-router-dom';
const EditUser = () => {
    let Id 
    const{id}  = useParams();
    console.log('this is id'+id);
    let pos = id-1;
    console.log('position is'+pos);
    let initialFormState;
    UserData.map((users,index)=>
    { if(index===pos)
        {
            Id = users.id;
            initialFormState= { id: users.id,fname: users.fname, lname: users.lname,mail:users.mail }
        }
        console.log('loop');
        // if(index===useNavigate())
        // initialFormState= { id: user.id, fname: user.fname, lname: user.lname,mail:user.mail }
    })
console.log('initial is this'+initialFormState);
    //   = { id: null, fname: '', lname: '',mail:'' }

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
         UserData.splice(pos,1,user);
         navigate('/');
         setUser(initialFormState)

      }}
    >
      <label>FirstName</label>
      <input
        type="text"
        name="fname"
         value={user.fname}
        onChange={inputEvent}
      />
        <label>LastName</label>
      <input
        type="text"
        name="lname"
         value={user.lname}
        onChange={inputEvent}
      />
      <label>email</label>
      <input
        type="text"
        name="mail"
         value={user.mail}
        onChange={inputEvent}
      />
      <button>Update</button>
    </form>
  )
}

export default EditUser