import { useState } from 'react'
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
import Dashboard from './pages/Dashboard';
import Grades from './pages/Grades';
import SiteAdministration from './pages/SiteAdministration';

function App() {

  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/course" element={<CourseDetail />} />
          <Route path="/admin" element={<SiteAdministration />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/register-user" element={<RegisterUser />} />
          <Route path="/register-course" element={<RegisterCourse />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/grades" element={<Grades />} />
        </Routes>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App
