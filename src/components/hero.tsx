import { ChevronRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export const Hero: React.FC = () => {
  return <>
      <div className="flex flex-col w-full py-16 bg-white md:py-24 h-max align-center">
        <div className="flex flex-col w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 h-max md:flex-row">
          <div className="items-center lg:grid lg:grid-cols-2 lg:gap-8">
            <AnimatedSection className="h-[20rem] flex flex-col justify-start gap-8">
              <div className="w-full">
                <h1 className="w-full mb-6 text-4xl font-semibold md:text-5xl text-slate-900 md:w-[55%] flex gap-2">
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

}