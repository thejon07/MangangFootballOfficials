import React from 'react';
import { useNavigate } from 'react-router-dom';
import completed from "../assets/completed.svg"

function Popup() {
  const navigate = useNavigate();

  const handleredirecttodashboard = () => {
    navigate('/dashboard');
  };

  return (
    <>
      <div className='flex justify-center items-center h-screen flex-col text-center'>
        <img src={completed} className='w-10 h-10 mb-2' alt="" />
        <h1 className='text-2xl mb-4'>You have successfully created your account</h1>
        <button
          onClick={handleredirecttodashboard}
          className='px-4 py-2 bg-black text-white rounded hover:bg-blue-600'
        >
          Go to Dashboard
        </button>
      </div>
    </>
  );
}

export default Popup;
