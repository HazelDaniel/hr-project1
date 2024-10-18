import { ChevronRight } from "lucide-react";
import { AnimatedSection } from "./animated-section";

export const Hero: React.FC = () => {
  return (
    <>
      <div className="flex flex-col w-full py-16 bg-white md:py-24 h-max align-center">
        <div className="flex flex-col w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 h-max md:flex-row">
          <div className="items-center lg:grid lg:grid-cols-2 lg:gap-8">
            <AnimatedSection className="h-[20rem] flex flex-col justify-start gap-8">
              <div className="w-full">
                <h1 className="w-full mb-6 text-4xl font-semibold md:text-5xl text-slate-900 md:w-[55%] flex gap-2 *:font-poppins">
                  Put{" "}
                  <span className="relative inline-flex text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text">
                    People
                    <svg
                      viewBox="0 0 88 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-[-18px] w-full h-4"
                    >
                      <path
                        d="M1.33472 2.99855C5.76744 2.12124 10.3262 1.86515 14.8294 1.62755C29.7316 0.841243 44.7731 1.10836 59.6613 1.89195C64.352 2.13883 69.8351 2.1701 74.5857 2.92021C75.3145 3.03527 73.1102 2.89081 72.3725 2.90062C70.7869 2.92171 69.1935 2.98463 67.6132 3.11607C62.8269 3.51417 57.9429 4.45207 53.3939 6.02456C50.9891 6.85583 48.8677 8.1756 46.5878 9.26602C46.4822 9.31651 46.1511 9.4315 46.2646 9.40312C46.9757 9.22535 47.6404 8.89471 48.3407 8.67844C52.9085 7.26793 57.5275 6.20254 62.325 6.07353C66.3864 5.96432 70.5483 6.3481 74.5368 7.12137C74.8554 7.18315 76.2505 7.79048 76.2505 7.22909"
                        stroke="#9d9d9d"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>

                  </span>{" "}
                  First
                </h1>
                <p className="mb-8 font-sans text-lg text-slate-600">
                  Fast, user-friendly and engaging - transform HR into people
                  and culture. Streamline your daily operations with our
                  comprehensive HR solutions.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex items-center justify-center px-6 py-3 text-white transition-all duration-300 rounded-md bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                  Be a member <ChevronRight className="ml-2" size={20} />
                </button>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-2xl font-semibold text-slate-900">
                      75.2%
                    </p>
                    <p className="text-sm text-slate-600">
                      Average daily activity
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-slate-900">
                      ~20k
                    </p>
                    <p className="text-sm text-slate-600">
                      Average daily users
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <div className="w-full mt-12 lg:mt-0 md:flex-1 md:h-full h-[15rem] overflow-hidden">
              <img
                src="/images/hero-image.svg"
                alt="HR Dashboard"
                className="w-full h-[15rem] rounded-lg aspect-square mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
