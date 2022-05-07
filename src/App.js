import "./App.css"
import { useState } from "react"
import Homepage from "./components/Homepage"
import Loading from "./components/Loading"
import UserInfo from "./components/UserInfo"

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [userData, setUserData] = useState(undefined)

  if (isLoading) return <Loading />
  else if (userData !== undefined) {
    return <UserInfo userData={userData} />
  } else
    return (
      <Homepage
        error={error}
        setError={setError}
        setIsLoading={setIsLoading}
        setUserData={setUserData}
      />
    )
}

export default App
