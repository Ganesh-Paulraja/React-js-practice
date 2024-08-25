import React from 'react'
import Props from './components/Props'


function App() {
  return (
    <div className='bg-black p-20'>
      <h1 className='text-red-500 py-14 bg-yellow-500 opacity-80 border rounded'>Hello world</h1>
      <Props name="myName" work="myWork"/>
    </div>
  )
}

export default App
