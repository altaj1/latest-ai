import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Content = () => {
  const data = useLoaderData();
  const {
      comments_count,
      title,
      reading_time_minutes,
      public_reactions_count,
      cover_image,
      published_at,
      description,
      url,
      body_html,
      tags
    } = data;
  return (
    <div>
         <section className="dark:bg-gray-800 dark:text-gray-100 ">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
       
          <div>
          <img
            src={cover_image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          </div>
          <div className="p-6 space-y-2 lg:col-span-5">
           <div>
           {
              tags && 
              tags.map(tag => (
                <a key={tag}
                   rel='noopener noreferrer'
                   href='#'
                   className='px-3 py-1 rounded-sm hover:underline '
                >
                  #{tag}
                </a>
              ))
            }
           </div>
           <div>
            <a href={url}>
            {title}
            </a>
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
           </div>
            
           
          </div>
        
        
      </div>
    </section> 
    </div>
  )
}

Content.propTypes = {}

export default Content