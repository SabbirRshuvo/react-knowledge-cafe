const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="bg-gray-400 my-4  rounded-lg">
      <h3 className="text-lg">{title}</h3>
    </div>
  );
};

export default Bookmark;
