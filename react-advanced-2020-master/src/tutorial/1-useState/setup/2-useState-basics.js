import React, { useState } from 'react'

const UseStateBasics = () => {
  const [text, setText] = useState('random text')
  const handle = () => {
    if (text === 'random text') {
      setText('hello world')
    } else {
      setText('random text')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handle}>
        click me
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
