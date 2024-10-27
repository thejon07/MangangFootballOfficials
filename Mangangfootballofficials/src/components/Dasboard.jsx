import React, { useEffect, useState } from 'react';
import { getcurrentuser, logoutuser, getpostbyuserid } from "../utils/handleaxios";
import profile from "../assets/profile.png"; // Placeholder profile image
import "./dashboard.css"; // Ensure your CSS file is imported
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [post, setAllPost] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    handleGetUser();
    handlePost();
  }, []);

  const handleGetUser = async () => {
    try {
      const response = await getcurrentuser();
      setUser(response.data.statuscode.userdata);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  const handlePost = async () => {
    try {
      const allPost = await getpostbyuserid();
      setAllPost(allPost.data.posts);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  const logout = async () => {
    try {
      await logoutuser();
      localStorage.removeItem("isauthenticated");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      navigate("/")
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  return (
    <main className='w-8/12 max-w-6xl mx-auto p-2'> {/* Adjusted padding */}
      {user ? (
        <div className=' flex flex-col md:flex-row items-center bg-white rounded-lg p-4 mb-4 shadow-md'> {/* Adjusted padding and margin */}
          <img src={user.avatar || profile} className='w-20 h-20 rounded-full border-2 border-gray-300' alt="User Avatar" />
          <div className='flex-grow ml-2 text-left'> {/* Reduced margin */}
            <h2 className='text-xl font-bold text-gray-900'>{user.username}</h2> {/* Reduced font size */}
            <h3 className='text-xs text-gray-600'>{user.email}</h3> {/* Reduced font size */}
          </div>
          <button className='mt-2 md:mt-0 bg-red-600 text-white px-4 py-1 rounded-md shadow hover:bg-red-700 transition duration-300' onClick={logout}>LOGOUT</button> {/* Adjusted padding */}
        </div>
      ) : (
        <h2 className="text-center text-sm">Loading user details...</h2>
      )}

      <section className="text-left">
        <h1 className="font-semibold text-lg mb-4">Latest Posts</h1> 
     
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {post && post.length > 0 ? (
            post.map((item) => (
              <Link to={`/readblog/${item._id}`} key={item._id}>
                <div className='border rounded-lg overflow-hidden shadow-md transition transform hover:scale-105 flex flex-col'>
                  <img src={item.file} alt={item.title} className='w-full h-36 object-cover' />
                  <div className='p-4 flex-grow'>
                    <h2 className='font-bold text-md text-gray-900'>{item.title.slice(0,13)}...</h2>
                    <p className='text-xs text-gray-600 mt-1'>{item.content.slice(0, 30)}...</p> 
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h2 className="text-center text-sm col-span-full">No posts available.</h2>
          )}
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
