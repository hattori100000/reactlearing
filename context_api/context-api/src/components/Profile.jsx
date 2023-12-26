import React from 'react'
import UserContext from '../context/UserContext'

function Profile() {

const {user } = UserContext(UserContext)
if (!user) return <h1>Not loggin </h1>

  return (
    <div>Profile: {user}

    <h1>More Component </h1>
    </div>
  )
}

export default Profile