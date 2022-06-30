import React from 'react'
import '../home.css'
import UserTable from './UserTable';
const Home = () => {
  return (
    <>
    <div className="main">
    <div className='home__heading'><h1 className='home__heading-text'>home is here</h1></div>
   
<UserTable/>
</div>
    </>
  )
}

export default Home
