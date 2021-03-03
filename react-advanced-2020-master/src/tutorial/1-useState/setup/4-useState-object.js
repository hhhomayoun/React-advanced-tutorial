import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'homi',
    age: 28,
    message: 'come one',
  })
  const changeMessage = () => {
    setPerson({ ...person, message: 'do more' })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type='button' className='btn' onClick={() => changeMessage()}>
        click me{' '}
      </button>
    </>
  )
}

export default UseStateObject
