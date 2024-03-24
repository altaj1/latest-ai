import React, { useEffect, useState } from 'react';
import { getBlogs } from '../Utilits/utlits';
import Blog from './Blog';

const BookMark = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        const saveBlogs = getBlogs();
        setBlogs(saveBlogs) 
    }, [])
    return (
       
            <div className=' px-28  mt-20 h-full'>
          <div className='grid grid-cols-3 gap-7 h-full'>
          {
            blogs.map(blog =>(
                <Blog
                key={blog.id}
                blog={blog}
                >

                </Blog>
            ))
           }
          </div>
          
         
          
            
        
        </div>
    );
};

export default BookMark;