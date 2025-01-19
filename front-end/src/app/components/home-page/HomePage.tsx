export const HomePage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#edece9] font-title">
      <main className="h-full w-full flex items-center justify-center px-4">
        <div className="max-w-6xl w-full flex flex-col items-center gap-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center px-4">
            HERITAGE CRAFTED FOR MODERN DESIGN
          </h1>
          <div className="relative w-full aspect-[16/9] max-h-[70vh]">
            <img 
              src="wabisabi.jpg" 
              alt="Heritage design showcase" 
              className="w-[1200px] h-[600px] object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};