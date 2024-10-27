import { CarouselCustomNavigation } from "../components/Carousel";
import React, { useEffect, useState } from 'react';
import Computer1 from "../assets/computer1.png";
import rect from "../assets/rect.png";
import "./home.css";
import profile from "../assets/profile.png";
import { getallpost} from '../utils/handleaxios'
import { Link } from "react-router-dom";

function Home() {
  const [post,setPost] = useState([])
  useEffect(()=>{
    const handlegetpost = async()=>{
      const response = await getallpost();
      console.log(response.data.statuscode.data)
      setPost(response.data.statuscode.data)
      return response
    }
    handlegetpost()
  },[])
  return (
    <>
      <div className="text-center mx-auto w-full md:w-10/12 lg:w-8/12 px-4">
        {/* Hero Section */}
        <section className="inline-block">
          <img className="w-full" src={Computer1} alt="" />
        </section>

        {/* Floating Card */}
        <div className="relative mx-auto w-full h-auto p-4 floating sm:z-10 bg-white shadow-xl rounded-2xl -mt-20 sm:w-10/12 md:w-8/12 lg:w-80 lg:absolute lg:left-72 lg:top-1/2 lg:-translate-y-1/2 lg:-mt-0">
          <button className="float-left text-xs mt-4 bg-blue-800 border text-white px-2 py-1 rounded">
            Technology
          </button>
          <h1 className="font-bold text-xl text-left pt-2 clear-left">
            The Impact of Technology on<br /> the Workplace: How <br /> Technology is Changing
          </h1>
          <div>
            <ul className="profile-color flex gap-4 items-center mt-3">
              <li>
                <img className="w-6 h-6" src={profile} alt="Profile" />
              </li>
              <li className="text-xs">
                Bijon Mangang
              </li>
              <li className="text-xs">
                29 August 2024
              </li>
            </ul>
          </div>
        </div>



        {/* Latest Post Section */}
        <section className="text-left mt-10 pl-4">
          <h1 className="font-semibold mb-4">Latest Post</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {/* Post Cards */}
            {post.map((post, i) => (
             <Link to={`/readblog/${post._id}`}>
              <div key={post._id} className="w-full border rounded-xl p-2">
                <img src={post.file} alt="Post" className="w-full h-36 object-cover rounded-lg" />
                <div className="mt-2 flex flex-col">
                  <button className="text-xs bg-blue-800 border text-white px-2 py-1 rounded w-max">
                    Technology
                  </button>
                  <p className="text-left font-semibold mt-4">
                   {post.content.slice(0,20)}...
                  </p>
                </div>
                <div>
                  <ul className="profile-color flex gap-4 items-center mt-3">
                    <li>
                      <img className="w-6 h-6" src={profile} alt="Profile" />
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
      </div>
    </>
  );
}

export default Home;
