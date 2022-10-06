import React, { useEffect, useState } from "react";
import { getAllStories } from "../api/stories";
import { StoriesList } from "../views/StoriesList";
import Error from "../views/Error";
const Stories = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      getAllStories(setStories, setError);
    } catch (err) {
      alert(err);
    }
  }, []);
  return stories ? <StoriesList stories={stories} /> : <Error error={error} />;
};
export default Stories;
