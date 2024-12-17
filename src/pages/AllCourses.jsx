import axios from "axios";
import { useEffect, useState } from "react";
import image from '../assets/22589.jpg';

function AllCourses() {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        const fetchCourses = async () => {
            try {
              const response = await axios.get("http://127.0.0.1:3000/course/get-courses");
              
              // getting courses from json object
              const courses = response.data.courses;
              setCourses(courses);
               
            } catch (error) {
                console.log("Error getting courses", error);
            }
        };
        fetchCourses();
    }, []);
    return (
      <>
        <div className="container-courses mx-auto max-w-4xl p-4">
          <h1 className="text-4xl">My Courses</h1>
          <br />
          <h3 className="text-xl">Course Overview</h3>
          <br />
          <hr />
          <br />
          <div className="courses-display text-gray-500">
            <div className="course-search flex justify-between">
              <select
                name="all"
                id="all"
                defaultValue="All"
                className="p-4 pt-2 pb-2 border-2"
              >
                <option value="All">All</option>
                <option value="In progress">In progress</option>
                <option value="Future">Future</option>
                <option value="Past">Past</option>
                <option value="Starred">Starred</option>
                <option value="Removed from view">Removed from view</option>
              </select>
              <input
                className="p-4 pt-2 pb-2 border-2"
                type="search"
                name="search"
                id="search"
                placeholder="Search"
              />
              <select
                name="sort-course"
                id="sort-course"
                className="p-4 pt-2 pb-2 border-2"
                defaultValue="Sort by Course Name"
              >
                <option value="Sort by course name">Sort by course name</option>
                <option value="Sort by last accessed">
                  Sort by last accessed
                </option>
              </select>
              <select
                name="display-type"
                id="display-type"
                className="p-4 pt-2 pb-2 border-2"
                defaultValue="Card"
              >
                <option value="Card">Card</option>
                <option value="List">List</option>
                <option value="Summary">Summary</option>
              </select>
            </div>
            <div className="courses">
                <ul className="flex mt-4 h-52">
                {courses.map((course) => {
                        return (
                            <li key={course.id} className="w-72 border-[0.5px] border-gray">
                              <img src={image} alt="image" />
                              <p>course name: {course.title}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
          </div>
        </div>
      </>
    );
}

export default AllCourses;