import React from "react";
import ImageSlider from "./ImageSlider";
import "../assets/stylesheets/storieslist.css";
const StoryShow = ({ story }) => {
  return (
    <div>
      <h4 className="title">Stories</h4>
      <div className="account">{story.user.username}</div>
      <ImageSlider data={story} />
      <br />
    </div>
  );
};

export { StoryShow };
