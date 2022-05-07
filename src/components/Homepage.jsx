import React, {useState} from "react"
import getUserData from "../utils"
import RequestError from "./RequestError"

const Homepage = (props) => {
  const { setIsLoading, error, setError, setUserData } = props

  const [username, setUsername] = useState("")

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleSubmit()
    }
  }

  const handleSubmit = async (e) => {
    setIsLoading(true)
    let userData = await getUserData(username)

    if (userData === undefined) {
      setError(true)
    } else {
      setError(false)
      setUserData(userData)
    }
    setIsLoading(false)
  }

  return (
    <div>
      <div className="App">
        <div className="form">
          <h2 className="header">Github Profile Explorer</h2>
          <input
            className="username-input"
            placeholder="Type username"
            onChange={handleChange}
            onKeyPress={handleKeypress}
          />
        </div>
      </div>
      {(() => {
        if (error) return <RequestError />
      })()}
    </div>
  )
}

export default Homepage
