import React from 'react'
import {useNavigate} from 'react-router-dom';
const Error = () => {
    const navigate = useNavigate();
  return (
<>
<h1>Error page not found!!!!!!</h1>
<button onClick={()=>
    {
        navigate("/");
    }}>Add</button>
</>
  )
}

export default Error
