import React from 'react'

const UserMenu = ({user}) => {
  
  return (
    <div className='absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-lg border z-50'>
        <div className='flex items-center gap-3 p-4 border-b'>
            <p>{user?.fistname}</p>
        </div>
    </div>
  )
}

export default UserMenu