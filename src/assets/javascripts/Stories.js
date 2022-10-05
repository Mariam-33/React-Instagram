import React, { useEffect, useState } from 'react'
import { getAllStories } from '../../api/stories'
import { StoriesList } from '../../views/StoriesList'
const Stories = () => {
  const [stories, setStories] = useState([])
  useEffect(() => {
    try {
      getAllStories(setStories)
    } catch (err) {
      alert(err)
    }
  }, [])
  return (
    stories ? <StoriesList stories={stories} /> : <>Fetching data from source</>
  )
}
export default Stories
