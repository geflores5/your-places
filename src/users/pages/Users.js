import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Giovanni Flores',
      image:
        'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
      places: 3,
    },
  ]
  return <UsersList items={USERS} />
}

export default Users
