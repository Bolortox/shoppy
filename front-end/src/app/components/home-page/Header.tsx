export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-[#edece9] font-title z-50">
      <nav className="h-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <button className="hover:text-gray-600 transition-colors">
              Products
            </button>
            <button className="hover:text-gray-600 transition-colors">
              About
            </button>
            <button className="hover:text-gray-600 transition-colors">
              News
            </button>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src="adecora.png"
              alt="Adecora Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-6 text-sm">
            <button className="hover:text-gray-600 transition-colors">
              Contact
            </button>
            <button className="hover:text-gray-600 transition-colors">
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
