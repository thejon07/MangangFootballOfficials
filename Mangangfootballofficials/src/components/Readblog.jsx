import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Readblog() {
    const [data, setdata] = useState({});
    const { id } = useParams();
    const instance = axios.create({
        baseURL: "https://dreamersbackend.onrender.com"
    });

    useEffect(() => {
        readdata();
    }, []);

    const readdata = async () => {
        const response = await instance.get(`/users/readblog/${id}`);
        setdata(response.data.statuscode.data);
        console.log(response);
        return response;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-left text-xs">
                    Tag: <span className='font-semibold'>{data.category}</span>
                </h1>
                <h2 className="text-2xl text-left font-semibold mb-2">{data.title}</h2>
                <div className='mt-2'>
                    <h2 className='text-xs text-gray-600'>
                        Author: <span className='font-semibold'>{data.creator ? data.creator.username : 'Unknown'}</span>
                    </h2>
                    <p className='text-xs text-gray-600'>Date: {data.createdAt ? formatDate(data.createdAt) : 'Unknown'}</p>
                </div>
                {data.file && (
                    <img 
                        src={data.file} 
                        alt={data.title} 
                        className="mt-4 w-full h-auto object-contain rounded-md mb-4"
                    />
                )}
                <p className="text-gray-700 leading-relaxed">
                    {data.content}
                </p>
            </div>
        </div>
    );
}

export default Readblog;
