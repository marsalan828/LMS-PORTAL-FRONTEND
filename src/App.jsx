import { useState } from 'react'
// import './App.css' 
// not using the react's default css here instead using tailwindcss with the import "./output.css";
import "./output.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

// Import all the pages
import Home from './pages/Home';
import UserProfile from './pages/UserProfile'
import CourseDetail from './pages/CourseDetail';
import AllCourses from './pages/AllCourses';
import RegisterUser from './pages/RegisterUser';
import RegisterCourse from './pages/Registercourse';

function App() {

  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/course" element={<CourseDetail />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/register-course" element={<RegisterCourse />} />
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App
