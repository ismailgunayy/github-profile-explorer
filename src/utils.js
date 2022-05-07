const API_URL = "https://api.github.com/users/"
const WEBSITE_URL = "https://github.com/"

export const getUserData = async (username) => {
  username = username.replace("@", "")
  let status = undefined
  let repositories = []

  const response = await fetch(`${API_URL}${username}`).then((response) => {
    status = response.status
    return response.json()
  })

  if (status !== 200) {
    return undefined
  }

  const repositories_from_api = await fetch(`${API_URL}${username}/repos`).then(
    (response) => response.json()
  )

  let firstTwoRepositories = [modifyRepo(repositories_from_api[0]), modifyRepo(repositories_from_api[1])]

  for (let i = 2; i < repositories_from_api.length; i++) {
    repositories[i] = modifyRepo(repositories_from_api[i])
  }

  const userData = {
    avatar: response.avatar_url,
    followers: response.followers,
    following: response.following,
    login: username,
    name: response.name,
    first_two_repositories: firstTwoRepositories,
    repositories: repositories,
    repositories_count: response.public_repos,
    url: `${WEBSITE_URL}${username}`,
  }

  return userData
}

const modifyRepo = (repo) => {
  return {
    description: repo.description,
    name: repo.name,
    stars: repo.stargazers_count,
    url: `${WEBSITE_URL}${repo.owner.login}/${repo.name}`,
  }
}

export default getUserData
