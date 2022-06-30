import React from 'react';
import UserData from './UserData';
// import EditUser from './EditUser';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';


  const UserTable = () => {
    //  let history =  useHistory();
     let navigate =  useNavigate();
  
    return (
        <table className='home__table'>
        <thead className='home__table-th'>
          <tr className='home__table-tr'>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mail</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {UserData.length > 0 ? (
            UserData.map((users,i) => (
              
              <tr className='home__table-tr' key={users.id}>
                <td>{users.fname}</td>
                <td>{users.lname}</td>
                <td>{users.mail}</td>
                <td className=''>
                  <div className='home__button'>
            
          <Link className='home__table-button' to={`edituser/${users.id}`}>Edit</Link>
          <Link className='home__table-button' to={`viewuser/${users.id}`}>View</Link>
                  <button className='home__link' onClick={(i)=>
                  {
 UserData.splice(i,1);
 navigate('/');
                  }
   }
                 >Delete</button>
                 </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
  
  export default UserTable
  