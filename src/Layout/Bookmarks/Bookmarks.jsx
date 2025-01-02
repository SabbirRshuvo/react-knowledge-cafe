import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, marked }) => {
  return (
    <div className="bg-slate-100">
      <h2 className="text-2xl p-2 rounded-lg bg-violet-400 ">
        Spent time on read :{marked}
      </h2>
      <h3 className="text-2xl font-semibold">
        Bookmarked Blogs :{bookmarks.length}
      </h3>
      {bookmarks.map((bookmark, inx) => (
        <Bookmark key={inx} bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmarks;
