import { X } from "lucide-react";
import { useState } from "react";

export const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="sticky top-0 z-50 shadow-sm bg-white/95 backdrop-blur-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-max">
              <span className="w-8 h-8 mr-2">
                <svg
                  className="w-full h-full "
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8416 28.2525V19.505H13.7683H12.695L12.6908 28.1758L12.6867 36.8465L6.34334 30.4641L0 24.0817L9.02881 15.0408L13.1067 10.9575C15.8403 8.22028 20.2759 8.21932 23.0107 10.9554L27.0288 14.9754L36 23.9508L29.6373 30.3249L23.2746 36.699L23.1931 28.102L23.1117 19.505H22.0432H20.9747V28.2525V37H20.0547H19.1347V26.2574V15.5149H18.0615H16.9882V26.2574V37H15.9149H14.8416V28.2525Z"
                    fill="url(#paint0_linear_1_156)"
                  />
                  <circle
                    cx="18"
                    cy="3"
                    r="3"
                    fill="url(#paint1_linear_1_156)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1_156"
                      x1="18"
                      y1="6"
                      x2="18"
                      y2="36.5811"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3B69FB" />
                      <stop offset="1" stopColor="#233E95" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_156"
                      x1="18"
                      y1="0"
                      x2="18"
                      y2="5.91892"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3B69FB" />
                      <stop offset="1" stopColor="#233E95" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-transparent font-regular md:text-2xl text-md bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
                HR Solutions
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="items-center hidden space-x-8 md:flex *:font-poppins">
              <a href="#" className="text-slate-600 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600">
                About
              </a>
              <a
                href="#services"
                className="text-slate-600 hover:text-blue-600"
              >
                Services
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600">
                Contact
              </a>
              <button className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700">
                Join Us
              </button>
            </div>

            <div className="flex flex-col items-center justify-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-[20px] h-max text-slate-600 hover:text-blue-600 outline-none"
              >
                {isMenuOpen ? (
                  <X size={24} />
                ) : (
                  <div className="flex flex-col w-full h-full gap-1">
                    <span className="w-full h-[2px] rounded-md bg-black/70 active:bg-blue-600"></span>
                    <span className="w-[80%] h-[2px] rounded-md bg-black/70 active:bg-blue-600 ml-auto"></span>
                    <span className="w-full h-[2px] rounded-md bg-black/70 active:bg-blue-600"></span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 *:font-poppins">
              <a
                href="#"
                className="block px-3 py-2 text-slate-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>

              <a
                href="#about"
                className="block px-3 py-2 text-slate-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-slate-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-slate-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button
                className="w-full px-3 py-2 text-center text-white bg-blue-800 rounded-md hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
