import { Phone } from "lucide-react"
import { AnimatedSection } from "./animated-section"

      export const Footer: React.FC = () => {
        return <>

       <footer className="py-12 text-white bg-slate-900">
         <AnimatedSection>
           <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
             <div className="grid gap-8 md:grid-cols-4">
               <div>
                 <h3 className="mb-4 text-xl font-semibold">HR Solutions</h3>
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
                   <span>+1 (xxx) xxx-4567</span>
                 </div>
               </div>
             </div>
             <div className="pt-8 mt-8 text-center border-t border-slate-800 text-slate-400">
               <p>&copy; 2024 HR Solutions. All rights reserved.</p>
             </div>
           </div>
         </AnimatedSection>
       </footer>
        </>
      }