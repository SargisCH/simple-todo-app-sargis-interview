import React from 'react'
import { useUserStore } from '../store/userStore'

export default function UserSelector({ onChange, value }) {
  const users = useUserStore(state => state.users)
  return (
    <select className='user-selector' onChange={(e) => onChange(e.target.value)} value={value}>
      {
        users.length ? users.map(user => {
          return <option value={user.username} key={user.id}>{user.username}</option>
        }) : <option>No users</option>
      }
    </select>

  )
}
