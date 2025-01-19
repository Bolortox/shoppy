export const Footer = () => {
  return (
    <footer className="w-full bg-[#edece9] font-title">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-8">
      
          <div className="col-span-1">
            <img 
              src="adecora.png" 
              alt="Adecora Logo" 
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-sm">
              Heritage crafted for modern design
            </p>
          </div>

     
          <div className="col-span-1">
            <h3 className="text-sm font-medium mb-4">Products</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">Interior</a>
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">Furniture</a>
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">Decor</a>
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">Essentials</a>
            </div>
          </div>

      
          <div className="col-span-1">
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">About</a>
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">News</a>
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">Contact</a>
              <a href="#" className="text-sm hover:text-gray-600 transition-colors">Careers</a>
            </div>
          </div>

        
          <div className="col-span-1">
            <h3 className="text-sm font-medium mb-4">Contact</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm">456 Design Street</p>
              <p className="text-sm">City, Country 18357</p>
              <p className="text-sm">+486 268 537 194</p>
              <p className="text-sm">info@adecora.com</p>
            </div>
          </div>
        </div>

        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-xs">© 2024 Adecora. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-xs hover:text-gray-600 transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs hover:text-gray-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};