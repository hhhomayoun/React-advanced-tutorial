import { getByDisplayValue } from '@testing-library/dom'
import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSub = (e) => {
    e.preventDefault()
    if (name && email) {
      const person = { id: new Date().getTime().toString(), name, email }
      console.log(person)
      setPeople((people) => {
        return [...people, person]
      })
      setName('')
      setEmail('')
    } else {
      console.log('empty values')
    }
  }

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>name:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
        </form>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='email'>email:</label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
        </form>
        <button type='button' onClick={handleSub}>
          submit
        </button>

        {people.map((person) => {
          const { name, email, id } = person
          return (
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
