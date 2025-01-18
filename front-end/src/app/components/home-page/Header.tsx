export const Header = () => {
  return (
    <div className="w-screen h-[72px] flex justify-center items-center bg-[#edece9]  font-title">
      <div className="flex items-center justify-between w-full px-8">
        <div className="flex gap-4 text-xs">
          <p>Products</p>
          <p>About</p>
          <p>News</p>
        </div>
        <div>
          <img src="adecora.png" alt="" className="w-[120px] h-[60px]" />
        </div>
        <div className="flex gap-4 text-xs">
          <p>Contact</p>
          <p>EN</p>
        </div>
      </div>
    </div>
  );
};
