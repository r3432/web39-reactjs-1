import React, { useState } from 'react'

const Counter = () => {

  const [count,setCont]=useSelector(0);
const handleIncrement = ()=>{
setCont(count+1)
}


const handelDecrement = ()=>{
  setCont(count-1)
}

  return (
    <>
    <button onClick={handleIncrement}>+</button>
<h1>{count}</h1>
    <button onClick={handelDecrement}>+</button>
    </>
  )
}

export default Counter
