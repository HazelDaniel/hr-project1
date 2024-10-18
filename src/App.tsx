import React, { useState, useMemo } from "react";
import { Users, Target, Briefcase } from "lucide-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavBar } from "./components/nav-bar";
import { AnimatedSection } from "./components/animated-section";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer";

interface SlideContent {
  title: string;
  description: string;
  image: string;
}

const sliderData: SlideContent[] = [
  {
    title: "Our Vision",
    description: "To create a world of endless possibilities and innovation.",
    image: "/images/compressed/hr-1.jpg",
  },
  {
    title: "Our Mission",
    description: "Empowering people to achieve their full potential.",
    image: "/images/compressed/hr-2.jpg",
  },
];

const TimeBasedSlider: React.FC = () => {
  const [_, setCurrentSlide] = useState<number>(0);
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      beforeChange: (_: number, next: number) => setCurrentSlide(next),
      appendDots: (dots: React.ReactNode) => (
        <div>
          <ul className="slick-dots">{dots}</ul>
        </div>
      ),
    }),
    []
  );

  return (
    <div className="w-full h-[40rem]">
      <Slider {...settings} ref={sliderRef}>
        {sliderData.map((slide, index) => (
          <div key={index} className="relative h-[30rem]">
            <img
              src={slide.image}
              alt={slide.title}
              className="object-cover w-full h-full"
            />

            <div className="absolute inset-0 flex items-center justify-center h-full bg-black bg-opacity-75">
              <div className="text-center text-white">
                <h2 className="mb-4 text-3xl font-semibold">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

type Service = {
  title: string;
  description: string;
  icon: "users" | "target" | "briefcase";
};

const HRLandingPage: React.FC = () => {
  const iconClasses = useMemo(() => "mb-4 text-red", []);

  const services: Service[] = [
    {
      title: "Recruitment & Staffing",
      description:
        "Find the perfect talent for your organization with our comprehensive recruitment solutions",
      icon: "users",
    },
    {
      title: "HR Consulting",
      description:
        "Expert guidance on HR strategy, policy development, and workplace culture",
      icon: "target",
    },
    {
      title: "Training & Development",
      description: "Empower your workforce with customized training programs",
      icon: "briefcase",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white h-max">
      <NavBar />

      <Hero />

      <section
        className="flex flex-col w-full py-16 bg-white md:py-24 h-max align-center"
        id="about"
      >
        <h2 className="mb-12 text-3xl font-medium text-center text-slate-900 font-poppins">
          About Us
        </h2>
        <TimeBasedSlider />
      </section>

      {/* Services Section */}
      <section className="py-16 bg-slate-50" id="services">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="mb-12 text-3xl font-medium text-center text-slate-900 font-poppins">
              Our Services
            </h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="p-6 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
                  <>
                    {service.icon == "briefcase" ? (
                      <Briefcase className={iconClasses} color="#cdcdcd" />
                    ) : service.icon === "target" ? (
                      <Target className={iconClasses} color="#cdcdcd" />
                    ) : service.icon === "users" ? (
                      <Users className={iconClasses} color="#cdcdcd" />
                    ) : null}
                  </>
                  <h3 className="mb-2 text-xl font-semibold text-slate-700">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HRLandingPage;
