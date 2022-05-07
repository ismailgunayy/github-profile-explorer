import React from "react"

const Repository = (props) => {
  const { repo } = props

  return (
    <a
      href={repo.url}
      className="repo"
      target="_blank"
      rel="noreferrer"
      key={repo.name}
    >
      <div>
        <div className="repo-top-line">{repo.name}</div>
        <div className="repo-bottom-line repo-description">{repo.description}</div>
      </div>
      <div>
        <div className="repo-top-line">{repo.stars}</div>
        <div className="repo-bottom-line">Stars</div>
      </div>
    </a>
  )
}

export default Repository
