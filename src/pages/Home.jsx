import { Link } from "react-router-dom";

function Home() {
  const sitename = "Lms Online";
  return (
    <>
      <div className="home-page bg-image-frontend bg-no-repeat bg-cover px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="inner-home bg-white p-6 rounded shadow-lg">
          <h1 className="mb-2 text-center">{sitename}</h1>
          <div className="home-courses mb-2">
            <h1 className="mb-2 text-xl font-bold">My Courses</h1>
            <ul className="space-y-4">
              <li>
                <h2 className="text-lg font-semibold">Soft Skills</h2>
                <p>Teacher: Miss Kainat</p>
              </li>
              <li>
                <h2 className="text-lg font-semibold">Fundamentals</h2>
                <p>Teacher: Sir Mujtaba</p>
              </li>
              <li>
                <h2 className="text-lg font-semibold">Tech</h2>
                <p>Teacher: Sir Amaaz</p>
                <p>Teacher: Sir Jamat</p>
                <p>Teacher: Miss Maryam</p>
              </li>
            </ul>
            <div className="flex justify-center mt-4">
              <Link to="/all-courses" className="text-blue-500 font-semibold">
                All courses
              </Link>
            </div>
          </div>
          <div className="site-announcements">
            <Link to="/forum"></Link>
            <ul className="list-disc list-inside space-y-2">
              <li>Announcement 1</li>
              <li>Announcement 2</li>
              <li>Announcement 3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
