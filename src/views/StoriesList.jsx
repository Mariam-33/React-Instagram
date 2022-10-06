import React from "react";

import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
const StoriesList = ({ stories }) => {
  return (
    <div>
      <h4 className="title">Stories</h4>
      {stories.map((data) => (
        <div key={data.id}>
          <div className="account">{data.user.username}</div>
          <ImageSlider data={data} />
          <br />
          <Link className="link" to={"/stories/" + data.id}>
            {" "}
            Show
          </Link>
        </div>
      ))}
    </div>
  );
};

export { StoriesList };
