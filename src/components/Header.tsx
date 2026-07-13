import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoSideName from "../assets/SitecraftersLogoSideName1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/50 backdrop-blur-md border-b border-slate-700/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logoSideName}
              alt="Sitecrafters"
              className="h-14 w-50"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-white hover:text-purple-500 duration-500 hover:border-b-2 border-purple-500 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-white hover:text-purple-500 duration-500 hover:border-b-2 border-purple-500 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="text-white hover:text-purple-500 duration-500 hover:border-b-2 border-purple-500 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="text-white hover:text-purple-500 duration-500 hover:border-b-2 border-purple-500 transition-colors">
              Portfolio
            </button>
            {/* <button onClick={() => scrollToSection("pricing")} className="text-white hover:text-purple-500 duration-500 hover:border-b-2 border-purple-500 transition-colors">
              Pricing
            </button> */}
            <button onClick={() => scrollToSection("testimonials")} className="text-white hover:text-purple-500 duration-500 hover:border-b-2 border-purple-500 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-white hover:text-purple-500 duration-500 hover:border-b-2 border-purple-500 transition-colors">
              Contact
            </button>
            <Button
              className="bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-600 duration-500 hover:from-purple-700 hover:to-purple-400 hover:text-black text-white border-0"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 h-screen w-full bg-slate-900 z-50 flex flex-col px-6 py-8 space-y-6">
            {/* Header row inside menu */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={logoSideName}
                  alt="Sitecrafters"
                  className="h-8 w-auto"
                />
              </div>
              <button
                className="text-white"
                onClick={() => setIsMenuOpen(false)}
                title="Close menu"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 mt-10">
              <button onClick={() => scrollToSection("home")} className="text-white text-lg hover:text-purple-500 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="text-white text-lg hover:text-purple-500 transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="text-white text-lg hover:text-purple-500 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="text-white text-lg hover:text-purple-500 transition-colors text-left">
                Portfolio
              </button>
              {/* <button onClick={() => scrollToSection("pricing")} className="text-white text-lg hover:text-purple-500 transition-colors text-left">
                Pricing
              </button> */}
              <button onClick={() => scrollToSection("testimonials")} className="text-white text-lg hover:text-purple-500 transition-colors text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-white text-lg hover:text-purple-500 transition-colors text-left">
                Contact
              </button>
              <Button
                className="bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-600 text-white text-lg px-6 py-3 rounded-xl"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
