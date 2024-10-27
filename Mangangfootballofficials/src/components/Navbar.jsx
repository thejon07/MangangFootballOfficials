import React, { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {debounce} from "../utils/debounce";
import {mainfunction} from "../utils/debounce"; // Assuming mainfunction exists
import dreamer from "../assets/dreamer.png";
import search from "../assets/search.png";
import useAuth from '../Private/useAuth';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleGetPostData = useCallback(
    debounce(async (value) => {
      const data = await mainfunction(value);
      setSearchData(data.data);
    }, 500),
    []
  );

  useEffect(() => {
    if (searchValue) {
      handleGetPostData(searchValue);
    }
  }, [searchValue, handleGetPostData]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (id) => {
    navigate(`/readblog/${id}`);
    setSearchValue(""); // Clear the search input after navigation
    setSearchData([]); // Optionally clear the search results after navigation
  };

  return (
    <div className='flex justify-center bg-gray-100 shadow-md'>
      <nav className='w-11/12 lg:w-10/12 flex justify-between items-center h-20 p-3'>
        <Link to="/">
          <div className='object-cover w-24 h-24'>
            <img src={dreamer} alt="Dreamer Logo" />
          </div>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className={`hidden md:flex flex-grow justify-between items-center`}>
          <ul className='flex gap-6 font-semibold text-sm'>
            <Link to="/" className="hover:text-blue-500"><li>Home</li></Link>
            <Link to="/blog" className="hover:text-blue-500"><li>Blog</li></Link>
            <Link to="/about" className="hover:text-blue-500"><li>About Us</li></Link>
            <Link to="/createpost" className="hover:text-blue-500"><li>Post a Blog</li></Link>
            {useAuth() ? 
              <Link to="/dashboard" className="hover:text-blue-500"><li>Dashboard</li></Link> :
              <Link to="/signup" className="hover:text-blue-500"><li>Sign in</li></Link>
            }
          </ul>

          <div className='relative'>
            <div className="flex items-center gap-2">
              <input
                type="search"
                name="search"
                id="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Search'
                className='border pl-2 pr-10 py-1 rounded-lg text-sm w-56'
              />
              <button className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                <img src={search} className='w-5 h-5' alt="Search" />
              </button>
            </div>
            {searchValue && (
              <div className='absolute mt-2 bg-white border rounded-lg shadow-lg p-3 z-40 max-h-60 overflow-y-auto w-full'>
                <ul>
                  {searchData.map((data) => (
                    <li
                      key={data._id}
                      onClick={() => handleNavigate(data._id)}
                      className="p-1 hover:bg-gray-200 rounded-md cursor-pointer"
                    >
                      {data.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className={`md:hidden absolute top-20 left-0 z-40 w-full bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <ul className='flex flex-col gap-4'>
            <Link to="/" onClick={toggleMenu}><li className="hover:text-blue-500">Home</li></Link>
            <Link to="/blog" onClick={toggleMenu}><li className="hover:text-blue-500">Blog</li></Link>
            <Link to="/about" onClick={toggleMenu}><li className="hover:text-blue-500">About Us</li></Link>
            <Link to="/createpost" onClick={toggleMenu}><li className="hover:text-blue-500">Post a Blog</li></Link>
            <Link to="/signup" onClick={toggleMenu}><li className="hover:text-blue-500">Sign in</li></Link>
            <div className='flex flex-col gap-2 mt-4'>
              <input
                type="search"
                name="search"
                id="search"
                placeholder='Search'
                className='border pl-2 py-1 rounded-lg text-sm w-full'
              />
              <button className='w-full flex justify-center border rounded-lg'>
                <img src={search} className='w-6 h-6' alt="Search" />
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
