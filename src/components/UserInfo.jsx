import React, { useState } from "react"
import Repository from "./Repository"

const UserInfo = (props) => {
  const { userData } = props

  const [repos] = useState(
    userData.repositories.map((repo) => <Repository repo={repo} />)
  )

  const [reposToShow, setReposToShow] = useState(
    userData.first_two_repositories.map((repo) => <Repository repo={repo} />)
  )

  const [allIsLoaded, setAllIsLoaded] = useState(repos.length === 0)

  const handleClick = (e) => {
    let toAdd = []

    for (let i = 0; i < 2; i++) {
      let repo = repos.shift()
      if (repo !== undefined) {
        toAdd.push(repo)
      }
    }

    setReposToShow([...reposToShow, ...toAdd])
    if (repos.length === 0) {
      setAllIsLoaded(true)
    }
  }


  return (
    <div className="user-info">
      <div className="user-card">
        <div className="view-on-github">
          <a
            className="profile-link"
            href={userData.url}
            target="_blank"
            rel="noreferrer"
          >
            <span className="profile-link-text">View on Github</span>{" "}
            <i class="fas fa-link"></i>
          </a>
        </div>
        <img className="user-avatar" src={userData.avatar} alt="user-avatar" />
        <div className="name">
          <div className="full-name">{userData.name}</div>
          <div className="username">@{userData.login}</div>
        </div>
        <div className="stats">
          <div className="stat">
            <div>{userData.repositories_count}</div>
            <div className="stat-name">Repositories</div>
          </div>
          <div className="stat">
            <div>{userData.following}</div>
            <div className="stat-name">Following</div>
          </div>
          <div className="stat">
            <div>{userData.followers}</div>
            <div className="stat-name">Followers</div>
          </div>
        </div>
      </div>
      <h4 className="repositories-header">Repositories</h4>
      <div className="repositories">{reposToShow}{(() => {
        if (!allIsLoaded)
          return (
            <button className="load-more-button" onClick={handleClick}>
              Load More
            </button>
          )
      })()}</div>

    </div>
  )
}

export default UserInfo
