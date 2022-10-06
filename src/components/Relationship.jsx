import React, { useEffect, useState } from "react";
import { getAllFollowers } from "../api/relationship";
import { FollowersList } from "../views/FollowerList";
import Error from "../views/Error";
const Followers = () => {
  const [followers, setFollowers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      getAllFollowers(setFollowers, setError);
    } catch (err) {
      alert(err);
    }
  }, []);
  return followers ? (
    <FollowersList followers={followers} />
  ) : (
    <Error error={error} />
  );
};
export default Followers;
