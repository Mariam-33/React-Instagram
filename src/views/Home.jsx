import React  from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Followers from '../assets/javascripts/Relationship'
import Stories from '../assets/javascripts/Stories'
import Story from '../assets/javascripts/Story'
import PageNotFound from '../components/Page404'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <div className="appContent">
      <Navbar />
        <Routes>
        <Route path='/' element={<Stories />} />
        <Route path='/follower' element={<Followers />} />
        <Route path='/stories/:story_id' element={<Story />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
  </div>
  )
}

export default Home
