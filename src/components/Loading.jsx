import React from "react"
import loadingDarker from "../img/loading-darker.png"
import loadingLighter from "../img/loading-lighter.png"

function Loading() {
  return (
    <div className="App">
      <img
        className="loading loading-lighter"
        src={loadingLighter}
        alt="loading-lighter"
      />
      <img
        className="loading loading-darker"
        src={loadingDarker}
        alt="loading-darker"
      />
    </div>
  )
}

export default Loading
