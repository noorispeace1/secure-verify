import Link from "next/link";
import { ArrowRightIcon, LockIcon, ShieldCheckIcon } from "./Icons";

export default function Banner() {
  return (
    <div className="w-full bg-white relative overflow-hidden">
      {/* Background soft blue blob/gradient on the right */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
            <ShieldCheckIcon className="w-4 h-4" />
            <span>Independent. Secure. Confidential.</span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Secure Hiring<br />Starts With Trust
          </h1>

          <p className="text-slate-600 text-lg mb-4">
            Professional hiring begins with secure applicant verification.
          </p>

          <p className="text-slate-600 mb-4 leading-relaxed">
            We use an independent verification provider to help confirm applicant information when required during the hiring process.
          </p>

          <p className="text-slate-600 mb-8 leading-relaxed">
            The verification process is designed to protect both applicants and employers through a secure and transparent review.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-6">
            <Link href="/start-verification" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3.5 rounded-lg transition-colors shadow-sm text-base">
              Start Verification
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link href="/learn-more" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-slate-700 font-medium px-8 py-3.5 rounded-lg transition-colors text-base">
              Learn More
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <LockIcon className="w-4 h-4" />
            <span>Your information is protected with industry-standard security.</span>
          </div>
        </div>

        {/* Right Content / Illustration placeholder */}
        <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0 flex justify-center items-center h-[400px] lg:h-[500px]">
          {/* Main Container / Laptop screen mock */}
          <div className="relative w-full max-w-[400px] aspect-[4/3] bg-white rounded-xl shadow-xl border border-gray-100 flex flex-col overflow-hidden z-0">
            <div className="bg-gray-50 h-8 w-full border-b border-gray-100 flex items-center px-4 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            </div>
            <div className="flex-1 p-6 flex flex-col gap-4 bg-slate-50/50">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3 mx-auto"></div>
              <div className="h-3 bg-gray-200 rounded w-1/3 mx-auto"></div>
            </div>
          </div>

          {/* Big Shield Overlaid */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 z-10 drop-shadow-2xl">
            <div className="w-32 h-40 bg-blue-600 rounded-lg transform perspective-[500px] rotate-y-[15deg] flex items-center justify-center shadow-inner relative overflow-hidden" style={{ clipPath: "polygon(50% 0%, 100% 0, 100% 60%, 50% 100%, 0 60%, 0 0)" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-transparent opacity-30"></div>
              <svg className="w-16 h-16 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute top-1/4 right-0 lg:-right-4 bg-white px-4 py-2.5 rounded-lg shadow-lg border border-gray-100 flex items-center gap-3 z-20 animate-[bounce_4s_infinite]">
            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <span className="text-sm font-semibold text-slate-700">Background Check</span>
          </div>

          <div className="absolute bottom-1/4 right-8 lg:right-12 bg-white p-3 rounded-lg shadow-lg border border-gray-100 flex items-center gap-4 z-20 animate-[bounce_5s_infinite]">
             <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
               <LockIcon className="w-4 h-4" />
             </div>
             <div>
                <div className="text-sm font-bold text-slate-800">Identity Verified</div>
                <div className="flex gap-0.5 text-blue-600 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}