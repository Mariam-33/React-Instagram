// import logo from './logo.svg';
import React  from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Followers from './components/Relationship'
import Stories from './components/Stories'
import Story from './components/Story'
import PageNotFound from './components/Page404'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Navbar />
        <Routes>
        <Route path='/' element={<Stories />} />
        <Route path='/follower' element={<Followers />} />
        <Route path='/stories/:story_id' element={<Story />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
