import axios from "axios";
import { useEffect, useState } from "react";

function UserProfile() {
  const [userData,setUserData]= useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/admin");
        setUserData(response.data);
        console.log(response)
      } catch (error) {
        console.error("error fetching the user data",error);
      }
    }

    fetchUserData();
  }, []);
  
  return (
    <>
      <p>this is the start of the profile page</p>
      <h2>User Profile will be displayed here</h2>

      <ul>
        {userData.map((user, index) => {
          return (
            <li key={index}>
              <ul>
                <li>firstname: {user.firstname}</li>
                <li>Username:{user.username}</li>
                <li>email: { user.email}</li>
                <li>role: { user.role}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UserProfile;
