import axios from 'axios'
// import GithubContext from './GithubContext'

const GITHUB_URL = process.env.REACT_APP_github_api_url
const GITHUB_TOKEN = process.env.REACT_APP_github_token
   

const github_client = axios.create({
    baseURL: GITHUB_URL,
    headers: {Authorization: `token ${GITHUB_TOKEN}`},
})

export const searchUsers = async( text ) => {
    
    const params = new URLSearchParams({
        q: text
    })
    const response = await github_client.get(`/search/users?${params}`, {timeout:1500} )
    return response.data.items
}


export const getUserAndRepos = async( login ) => {
    const [user, repos] = await Promise.all([
        github_client.get(`/users/${login}`),
        github_client.get(`/users/${login}/repos`),
    ])
    return { user: user.data, repos: repos.data }
}
