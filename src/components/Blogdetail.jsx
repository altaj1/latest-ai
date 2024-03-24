import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { saveBlog } from '../Utilits/utlits';

const Blogdetail = () => {
    const [tabIdx, setTabIdx] = useState(0)
    const data = useLoaderData();
    const {
        comments_count,
        title,
        reading_time_minutes,
        public_reactions_count,
        cover_image,
        published_at,
        description
      } = data;
      const handeleBookMarke = (data)=>{
        console.log(data)
        saveBlog(data)

      }
    return (
        <div className='max-w-6xl p-6 mx-auto space-y-5 space-x-0'>
             <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
             {title}
            </h3>
            <div className='flex justify-between items-center'>
               <p>
                <span>{reading_time_minutes}</span> mnt .
               <span className="text-xs dark:text-gray-400">
             {new Date(published_at).toDateString()}
            </span></p> 
            <p>{comments_count} comments . { public_reactions_count} views</p>
            </div>
            <div className='flex   items-center'>
                <Link to={""}
                onClick={()=>setTabIdx(0)}
                className= {`flex justify-center items-center cursor-pointer flex-shrink-0 px-5 py-3 space-x-2 ${
                    tabIdx === 0 ? "border border-b-0" : "border-b" 
                }`}>
                <FaRegBookmark />
                <p>Content</p>
                </Link>
                <Link 
                to="author"
                onClick={()=>setTabIdx(1)}
                className= {`flex justify-center items-center cursor-pointer flex-shrink-0 px-5 py-3 space-x-2 ${
                    tabIdx === 1 ? "border border-b-0" : "border-b" 
                }`}
                >
                <IoMdBook /> 
                 <p>Author</p>
                </Link>
                <div
                onClick={()=>handeleBookMarke(data)} 
                className= {`flex justify-center items-center cursor-pointer flex-shrink-0 px-5 py-3 space-x-2 ${
                    tabIdx === 0 ? "border border-b-0" : "border-b" 
                }`} >
                <MdBookmarkAdd />
                </div>

            </div>

            
              <Outlet></Outlet>
        </div>
    );
};

Blogdetail.propTypes = {
    
};

export default Blogdetail;