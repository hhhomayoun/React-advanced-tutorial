import React, { useState, useEffect } from 'react'
// show hide

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button
        className='btn'
        onClick={() => {
          setShow(!show)
        }}
      >
        show/hide
      </button>
      {show && <Item />}
    </>
  )
}
const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const getSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', getSize)
    return () => {
      window.removeEventListener('resize', getSize)
    }
  })
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size:{size}</h2>
    </div>
  )
}

export default ShowHide
