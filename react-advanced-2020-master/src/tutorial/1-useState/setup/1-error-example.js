import React from 'react'

const ErrorExample = () => {
  let title = 'random text'
  const handle = () => {
    title = 'helloo'
    console.log(title)
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handle}>
        click me
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
