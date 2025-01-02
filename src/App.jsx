import { useState } from "react";
import "./App.css";
import Blogs from "./Layout/Blogs/Blogs";
import Header from "./Layout/Header/Header";
import Bookmarks from "./Layout/Bookmarks/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [marked, setMarked] = useState(0);
  const handleMarked = (time, id) => {
    setMarked(marked + time);
    const remainingBokmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBokmarks);
  };
  const handleAddToMarks = (blog) => {
    const newAddToMark = [...bookmarks, blog];
    setBookmarks(newAddToMark);
  };
  return (
    <>
      <Header />
      <div className="md:flex md:w-10/12 mx-auto gap-4">
        <Blogs
          handleMarked={handleMarked}
          handleAddToMarks={handleAddToMarks}
        />
        <Bookmarks marked={marked} bookmarks={bookmarks} />
      </div>
    </>
  );
}

export default App;
