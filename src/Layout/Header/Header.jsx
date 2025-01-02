import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex w-10/12 mx-auto justify-between my-5 items-center border-b-2 py-4">
      <h2 className="text-3xl font-semibold">Knowledge Cafe</h2>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
