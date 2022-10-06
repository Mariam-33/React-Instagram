import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStory } from "../api/story";
import { StoryShow } from "../views/Story";
import Error from "../views/Error";

const Story = () => {
  const [story, setStory] = useState(null);
  const [error, setError] = useState(null);
  const { story_id } = useParams(null);
  useEffect(() => {
    try {
      const res = getStory(setStory, story_id, setError);
      setStory(res);
    } catch (err) {
      alert(err);
    }
  }, [story_id]);

  return story ? <StoryShow story={story} /> : <Error error={error} />;
};
export default Story;
