import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('deafualt user')

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(response.statusText)
        }
      })
      .then((person) => {
        const { login } = person
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  })

  if (isLoading) {
    return <h1>loading...</h1>
  }
  if (isError) {
    return <h1>error...</h1>
  }

  return (
    <>
      <h1>{user}</h1>
    </>
  )
}

export default MultipleReturns
