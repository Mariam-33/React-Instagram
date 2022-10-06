import React from "react";
import { Routes, Route } from "react-router-dom";
import Followers from "../components/Relationship";
import Stories from "../components/Stories";
import Story from "../components/Story";
import PageNotFound from "../components/Page404";
import Navbar from "../components/Navbar";
import {
  ROOT_PATH,
  FOLLOWER_PATH,
  STORY_PATH,
  NO_PAGE_PATH,
} from "../Constants";
const Home = () => {
  return (
    <div className="appContent">
      <Navbar />
      <Routes>
        <Route path={ROOT_PATH} element={<Stories />} />
        <Route path={FOLLOWER_PATH} element={<Followers />} />
        <Route path={STORY_PATH} element={<Story />} />
        <Route path={NO_PAGE_PATH} element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Home;
