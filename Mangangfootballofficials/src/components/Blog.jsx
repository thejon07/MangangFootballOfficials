import React, { useEffect, useState } from 'react';
import { getallpost } from "../utils/handleaxios";
import { Link } from 'react-router-dom';
import rect from "../assets/rect.png"; // Assuming rect image placeholder
import profile from "../assets/profile.png"; // Assuming profile image placeholder

function Blog() {
  const [post, setAllpost] = useState([]);

  useEffect(() => {
    handlegetusers();
  }, []);

  const handlegetusers = async () => {
    const user = await getallpost();
    console.log(user);
    setAllpost(user.data.statuscode.data);
  };

  let refresh = localStorage.getItem("refresh_token");
  console.log(refresh, "this is a refresh token");

  if (post.length === 0) {
    return (
      <h1 className="flex justify-center mt-40 font-semibold text-lg">
        Unfortunately, there are no posts available.
      </h1>
    );
  }

  return (
    <section className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12 mx-auto pt-5 h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {post && post.map((post) => (
          <Link key={post._id} to={`/readblog/${post._id}`} className="group">
            <div className="border rounded-xl p-2 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                className="w-full h-36 object-cover rounded-lg"
                src={post.file || rect} // Fallback to rect if no image is available
                alt={post.title}
              />
              <div className="mt-2 flex flex-col">
                <button className="text-xs bg-blue-800 border text-white px-2 py-1 rounded w-max">
                  Technology
                </button>
                <p className="text-left font-semibold mt-4 line-clamp-2">
                  {post.title.slice(0,20)}...
                </p>
              </div>
              <div className="mt-3">
                <ul className="profile-color flex gap-2 items-center">
                  <li>
                    <img className="w-6 h-6 rounded-full" src={profile} alt="Profile" />
                  </li>
                  <li className="text-xs">Bijon Mangang</li>
                  <li className="text-xs">29 August 2024</li>
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blog;
