// import { useEffect } from 'react'
import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'


const GithubContext = createContext()

export const GithubProvider = ( { children } ) => {

    const initial = {
        users: [],
        user: {},
        loading: false,
        repos: [],
    }

    const [state, dispatch] = useReducer(githubReducer, initial)

    return <GithubContext.Provider value={{ 
        ...state,
        dispatch,
        }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext