import React from 'react'
import Counter from './Component/Counter'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

const App = () => {
  return (

  <Provider store={store}>
      <Counter/>
 </Provider>
  )
}

export default App
