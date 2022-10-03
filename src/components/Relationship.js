import React, { useEffect, useState } from 'react'
import { getAllFollowers } from '../api/relationship'
import { FollowersList } from '../views/FollowerList'
const Followers = () => {
  const [followers, setFollowers] = useState([])
  useEffect(() => {
    try {
      getAllFollowers(setFollowers)
    } catch (err) {
      alert(err)
    }
  }, [])
  return (
    followers ? <FollowersList followers={followers} /> : <>Fetching data from source</>
  )
}
export default Followers
