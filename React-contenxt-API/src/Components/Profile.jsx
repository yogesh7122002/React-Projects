import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)


    if (!user) return <div>Please Login</div>
    else {
        return <div>
            <h3>Profile</h3>
            <h5>Welcome, {user.username} Password is {user.password}
            </h5>

        </div>

    }


}

export default Profile
