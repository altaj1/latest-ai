import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';
import Blog from './Blog';
import { useState } from 'react';

const Blogs = () => {
    const [seeAll, setSeeALL]= useState(false);
    const blogs = useLoaderData();
    const handeleSeeALL =()=>{
        setSeeALL(!seeAll)
    }
    return (
        <div>
            <div>
                <BlogCard blogs = {blogs}></BlogCard>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  items-center  gap-4 lg:px-72'> 
                 {blogs.slice(0, seeAll ? blogs.length : 6).map((blog, idx)=> <Blog key={idx} blog={blog}></Blog>)

                }
                {/* <Blog></Blog> */}
            </div>
           {
            !seeAll && <div className='text-center mt-10 mb-5'>
            <button onClick={handeleSeeALL} type="button" className="btn px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800 hover:bg-slate-300 transparent">See All...</button>
            </div>
           }
        </div>
    );
};

export default Blogs;