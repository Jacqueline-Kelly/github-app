import { useEffect, useState } from 'react'
import Gif from '../layout/Gif'

function UserResults() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const res = await fetch( `${process.env.REACT_APP_github_api_url}`,
        { headers: {
                Authorization: `${process.env.REACT_APP_github_token}`,
            }}
        )
        .then((res) => res.json())
        setUsers(res)
        setLoading(false)
    }
    
    useEffect(() => {
        fetchUsers()    
    },[])

    if(!loading) {

    return(
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map((user) => (
                <h3>{user.login}</h3>
            ))}
        </div>
    )
} else {
    return (
        <Gif />
        )
    }
}

export default UserResults