import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToMarks, handleMarked }) => {
  const {
    id,
    author_name,
    cover_img,
    title,
    reading_time,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img
        className="rounded-xl"
        src={cover_img}
        alt={`cover picture of the ${title}`}
      />
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div>
            <img className="w-20 rounded-full" src={author_img} alt="" />
          </div>
          <div className="inline-block">
            <h4 className="font-bold">{author_name}</h4>
            <h5>{posted_date} (4 days ago)</h5>
          </div>
        </div>
        <div className="items-center">
          <p>
            {reading_time} min read
            <button onClick={() => handleAddToMarks(blog)}>
              <IoBookmarkOutline />
            </button>
          </p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-2">Blog page ..{title}</h2>
      <p className="mb-2">
        {hashtags.map((hash, ind) => (
          <span key={ind}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarked(reading_time, id)}
        className="mb-2 bg-sky-500 text-lg px-2 rounded-lg"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
