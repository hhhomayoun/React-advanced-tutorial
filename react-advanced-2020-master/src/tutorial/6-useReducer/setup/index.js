import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
// reducer function

const Index = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const [modal, setModal] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setPeople([...people, { id: new Date().getTime.toString(), name }])
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <button type='submit'>add me</button>
      </form>
      {people.map((person) => {
        return <h2 key={person.id}>{person.name}</h2>
      })}
    </>
  )
}

export default Index
