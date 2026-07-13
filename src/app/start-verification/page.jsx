import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon, InfoIcon, LockIcon } from "@/components/Icons";

export default function Step1Page() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
      {/* Left Content */}
      <div className="flex-1 w-full">
        <div className="inline-flex items-center justify-center bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
          STEP 1 OF 3
        </div>

        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
          We take security seriously so you can feel confident.
        </h1>

        <p className="text-slate-600 mb-8 leading-relaxed">
          To maintain a safe and trustworthy hiring process, we use an independent third-party service to verify important information for selected applicants.
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
            <span className="text-slate-700 font-medium text-sm">Identity Verification</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
            <span className="text-slate-700 font-medium text-sm">Background Check</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
            <span className="text-slate-700 font-medium text-sm">Credit Review (if applicable)</span>
          </div>
        </div>

        <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 flex gap-3 items-start mb-10">
          <InfoIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-600 leading-relaxed">
            This verification is a separate step and is not part of your job application. It helps us make fair and informed hiring decisions.
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start w-full max-w-sm">
          <Link href="/start-verification/step-2" className="flex items-center justify-center w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3.5 px-6 rounded-lg transition-colors shadow-sm gap-2">
            Continue to Next Step
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          
          <div className="flex items-center justify-center gap-2 mt-4 text-xs font-medium text-slate-500 w-full text-center">
            <LockIcon className="w-3.5 h-3.5" />
            <span>You will be redirected to our secure verification partner.</span>
          </div>
        </div>
      </div>

      {/* Right Illustration */}
      <div className="flex-1 w-full flex justify-center items-center py-8 lg:py-0">
        <div className="relative w-full max-w-[340px]">
          {/* Background blobs */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
          
          {/* Main Card */}
          <div className="relative bg-white rounded-xl shadow-xl border border-gray-100 p-6 flex flex-col gap-6 z-10 w-4/5 mx-auto">
            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2 relative">
              <div className="w-10 h-10 bg-slate-800 rounded-full absolute top-4"></div>
              <div className="w-16 h-8 bg-slate-800 rounded-t-full absolute bottom-2"></div>
            </div>
            <div className="space-y-3">
              <div className="h-2.5 bg-gray-200 rounded w-full"></div>
              <div className="h-2.5 bg-gray-200 rounded w-5/6"></div>
              <div className="h-2.5 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>

          {/* Overlapping Shield */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20">
            <div className="w-28 h-32 bg-blue-600 rounded-lg transform flex items-center justify-center shadow-lg relative overflow-hidden" style={{ clipPath: "polygon(50% 0%, 100% 0, 100% 60%, 50% 100%, 0 60%, 0 0)" }}>
              <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Floating Info Tag */}
          <div className="absolute -bottom-6 -right-8 bg-white px-4 py-3 rounded-lg shadow-lg border border-gray-100 z-30 flex items-start gap-3 max-w-[220px]">
            <div className="mt-0.5 text-blue-600 shrink-0">
              <LockIcon className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800 mb-1">Your information is protected.</div>
              <div className="text-[10px] text-slate-500 leading-tight">Handled securely by our independent verification partner.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}