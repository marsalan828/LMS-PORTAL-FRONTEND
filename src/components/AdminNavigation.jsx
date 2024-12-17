import { Link } from "react-router-dom";

function AdminNavigation() {
    return (
      <>
        <ul className="max-w-52 flex p-2 gap-2">
          <li className="p-2">
            <Link to="/register-user">Create user</Link>
          </li>
          <li className="p-2">
            <Link to="/register-course">Create Course</Link>
          </li>
        </ul>
      </>
    );
}

export default AdminNavigation;