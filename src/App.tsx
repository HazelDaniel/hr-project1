import React, { useState, useEffect, useRef, ReactNode } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Users,
  Target,
  Briefcase,
  Phone,
} from "lucide-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Interface for slider items
interface SlideContent {
  title: string;
  description: string;
  image: string;
}

const sliderData: SlideContent[] = [
  {
    title: "Our Vision",
    description: "To create a world of endless possibilities and innovation.",
    image: "https://via.placeholder.com/800x400?text=Our+Vision", // Replace with your own image
  },
  {
    title: "Our Mission",
    description: "Empowering people to achieve their full potential.",
    image: "https://via.placeholder.com/800x400?text=Our+Mission", // Replace with your own image
  },
];

const TimeBasedSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = React.useRef<Slider | null>(null);

  // Slick slider settings
  const settings = {
    dots: true, // Show dots for slide indicators
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 5000, // 5 seconds delay between slides
    arrows: false, // Disable arrow buttons
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="slick-dots">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="w-full max-w-3xl py-10 mx-auto">
      <Slider {...settings} ref={sliderRef}>
        {sliderData.map((slide, index) => (
          <div key={index} className="relative">
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-60 md:h-80"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h2 className="mb-4 text-3xl font-bold">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};


// Hook typing
type UseIntersectionObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [elementRef, isVisible] as const;
};

// Props typing for AnimatedSection
type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// HRLandingPage component typing
type Service = {
  title: string;
  description: string;
  icon: React.FC<{ size?: number; className?: string }>;
};

const HRLandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services: Service[] = [
    {
      title: "Recruitment & Staffing",
      description:
        "Find the perfect talent for your organization with our comprehensive recruitment solutions",
      icon: Users as any,
    },
    {
      title: "HR Consulting",
      description:
        "Expert guidance on HR strategy, policy development, and workplace culture",
      icon: Target as any,
    },
    {
      title: "Training & Development",
      description: "Empower your workforce with customized training programs",
      icon: Briefcase as any,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white h-max">
      {/* Navbar */}
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
                      <stop stop-color="#3B69FB" />
                      <stop offset="1" stop-color="#233E95" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1_156"
                      x1="18"
                      y1="0"
                      x2="18"
                      y2="5.91892"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3B69FB" />
                      <stop offset="1" stop-color="#233E95" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
                HR Solutions
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="items-center hidden space-x-8 md:flex">
              <a href="#" className="text-slate-600 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600">
                About
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600">
                Services
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600">
                Contact
              </a>
              <button className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700">
                Book Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-slate-600 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-slate-600 hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-slate-600 hover:text-blue-600"
              >
                Services
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-slate-600 hover:text-blue-600"
              >
                Contact
              </a>
              <button className="w-full px-3 py-2 text-left text-white bg-blue-600 rounded-md hover:bg-blue-700">
                Book Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col w-full py-16 bg-white md:py-24 h-max align-center">
        <div className="flex flex-col w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 h-max md:flex-row" >
          <div className="items-center lg:grid lg:grid-cols-2 lg:gap-8">
            <AnimatedSection className="h-[20rem] flex flex-col justify-start gap-8">
              <div className="w-full">
                <h1 className="w-full mb-6 text-4xl font-bold md:text-5xl text-slate-900 md:w-[55%] flex gap-2">
                  Put{" "}
                  <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
                    People
                  </span>{" "}
                  First
                </h1>
                <p className="mb-8 text-lg text-slate-600">
                  Fast, user-friendly and engaging - transform HR into people
                  and culture. Streamline your daily operations with our
                  comprehensive HR solutions.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex items-center justify-center px-6 py-3 text-white transition-all duration-300 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                  Book a demo <ChevronRight className="ml-2" size={20} />
                </button>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">75.2%</p>
                    <p className="text-sm text-slate-600">
                      Average daily activity
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">~20k</p>
                    <p className="text-sm text-slate-600">
                      Average daily users
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <div
              className="w-full mt-12 lg:mt-0 md:flex-1 md:h-full h-[15rem] overflow-hidden"
            >
              <img
                src="/images/hero-image.svg"
                alt="HR Dashboard"
                className="w-full h-[15rem] rounded-lg aspect-square"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-slate-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="mb-12 text-3xl font-bold text-center text-slate-900">
              Our Services
            </h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="p-6 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
                  <service.icon className="w-12 h-12 mb-4 text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text" />
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 text-white bg-slate-900">
        <AnimatedSection>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-4">
              <div>
                <h3 className="mb-4 text-xl font-bold">HR Solutions</h3>
                <p className="text-slate-400">
                  Transforming HR processes through innovative technology.
                </p>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="transition-colors text-slate-400 hover:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors text-slate-400 hover:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors text-slate-400 hover:text-white"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors text-slate-400 hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="transition-colors text-slate-400 hover:text-white"
                    >
                      Recruitment
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors text-slate-400 hover:text-white"
                    >
                      HR Consulting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="transition-colors text-slate-400 hover:text-white"
                    >
                      Training
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 font-semibold">Contact Us</h4>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Phone size={20} />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="pt-8 mt-8 text-center border-t border-slate-800 text-slate-400">
              <p>&copy; 2024 HR Solutions. All rights reserved.</p>
            </div>
          </div>
        </AnimatedSection>
      </footer>
    </div>
  );
};

export default HRLandingPage;
