import React from 'react'
import UserData from './UserData'
import { useParams,useNavigate
} from 'react-router-dom';
const View = () => {
    let navigate =  useNavigate();
    const{id}  = useParams();
    console.log('view is id'+id);
    let pos = id-1;
    console.log(' view position is'+pos);
    console.log(UserData);
  const data= UserData.filter((item,index)=>(item.id)==(id))
  console.log(data,'dtaa')
    return (
        <table>
        <thead>
          <tr>
          <th>First Name</th>
            <th>Last Name</th>
            <th>Mail</th>
          </tr>
        </thead>
        <tbody>
          {UserData.length > 0 ? (
            data.map((users) => (
              <tr key={users.id}>
                <td>{users.fname}</td>
                <td>{users.lname}</td>
                <td>{users.mail}</td>
              </tr>
            )
  
            )
          ) : (
            <tr>
              <td colSpan={3}>No users</td>
            </tr>
          )
          }
    <tr>
          <td>
<button className="button muted-button" onClick={(i)=>
{navigate('/');}}>Back</button>
                </td>
                </tr>
        </tbody>
      </table>
    )
}

export default View
