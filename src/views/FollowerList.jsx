import React from "react";
import "../assets/stylesheets/followerlist.css";
import { Image } from "cloudinary-react";
const FollowersList = ({ followers }) => {
  return (
    <div className="container-box">
      <h2>Followers</h2>
      {followers.map((data) => (
        <div className="data-box" key={data.id}>
          <Image
            className="profile"
            cloudName="storageforwork"
            publicId={data.image.url}
          />
          <div className="acc-name">{data.username}</div>
        </div>
      ))}
    </div>
  );
};
export { FollowersList };
