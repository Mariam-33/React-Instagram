import { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { getStory } from '../../api/story'
import { StoryShow } from '../../views/Story'
const Story = () => {
  const [story, setStory] = useState(null)
  const {story_id} = useParams(null);
  useEffect(() => {
      const res = getStory(setStory,story_id)
      setStory(res)
  },[story_id])
  return (
    story ? <StoryShow story={story} /> : <>Fetching data from source</>
  )
}
export default Story
