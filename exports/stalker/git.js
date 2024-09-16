import axios from 'axios'

const GITHUB_API_URL = 'https://api.github.com/users'

async function gitStalk(username) {
  if (!username) {
    throw new Error('GitHub username is required.')
  }

  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`)
    const userData = response.data

    const userDetails = {
      login: userData.login,
      id: userData.id,
      name: userData.name,
      company: userData.company,
      blog: userData.blog,
      location: userData.location,
      email: userData.email,
      bio: userData.bio,
      publicRepos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      createdAt: userData.created_at,
      updatedAt: userData.updated_at,
      avatarUrl: userData.avatar_url,
      htmlUrl: userData.html_url,
    }

    return userDetails
  } catch (error) {
    console.error('Error fetching user data:', error)
    throw new Error('Failed to fetch user data from GitHub.')
  }
}

export { gitStalk }
