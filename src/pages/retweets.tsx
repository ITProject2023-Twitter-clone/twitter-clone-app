import React from 'react'
import NoItem from '~/components/atoms/noItem'
import UserCard from '~/components/organisms/userCard'

const Retweets = () => {
    const users = [...Array(0)]
  return (
    <div className="flex h-full flex-col items-center space-y-2 pt-16">
      {users.length === 0 ? (
        <div className="my-auto">
          <NoItem item="リツイート" />
        </div>
      ) : (
        ""
      )}
      {users.map((_) => (
        <UserCard />
      ))}
    </div>
  )
}

export default Retweets