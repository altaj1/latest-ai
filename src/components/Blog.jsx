import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const Blog = ({ blog }) => {
  const {
    comments_count,
    title,
    reading_time_minutes,
    public_reactions_count,
    published_at,
    description,
    tags,
   
    cover_image,
  } = blog;
  return (
    
      <Link to={`/blog_dtl/${blog.id}`} >
      <div className="card card-compact w-full h-full bg-base-100  shadow-xl">
        <figure>
          <img className="h-72 w-full  rounded-xl" src={cover_image} alt="s" />
        </figure>
        <div className="card-body ">
          <p>{new Date(published_at).toDateString()}</p>
          <h2 className="card-title">{title}</h2>
          <div>
            <p>{tags}</p>
          </div>
          <p>{description}</p>

        </div>
      </div>
      </Link>
    
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
