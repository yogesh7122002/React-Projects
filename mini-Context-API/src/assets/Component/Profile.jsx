// import React, { useContext } from 'react'
// import userContext from '../../context/userContext'


// function Profile() {
//     const { user } = useContext(userContext);
//     return (
//         <div>
//             {
//                 user ? <>
//                     <p>username:{user.username}</p>
//                     <p>username:{user.password}</p>
//                 </> : (<>Please Login</>)
//             }

//         </div>
//     )
// }

// export default Profile


import React, { useContext } from 'react';
import userContext from '../../context/userContext';

function Profile() {
    const { user } = useContext(userContext);
    return (
        <div className="profile-box">
            {user ? (
                <>
                    <p>Username: {user.username}</p>
                    <p>Password: {user.password}</p>
                </>
            ) : (
                <p>Please Login</p>
            )}
        </div>
    );
}

export default Profile;
