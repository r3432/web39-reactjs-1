import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (


    <>
     <h1>
    404 not found
   </h1>
   <h3>Quay lai:</h3>
   <button>
    <Link to='/'>Home Page</Link>
   </button>
    </>
  
  )
}

export default NotFound
