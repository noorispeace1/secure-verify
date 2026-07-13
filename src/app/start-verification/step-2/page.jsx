import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, LockIcon, ShieldCheckIcon, UserCircleIcon, FileTextIcon, SendIcon, ScaleIcon, TargetIcon, HeartHandshakeIcon, ClockIcon } from "@/components/Icons";

export default function Step2Page() {
  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          STEP 2 OF 3
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          How Verification Works
        </h1>
        <p className="text-slate-600">
          A simple process to help us know you better.
        </p>
      </div>

      {/* Steps Timeline - Horizontal on Desktop, Vertical on Mobile */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-4 mb-16 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-gray-100 z-0"></div>

        {/* Step 1 */}
        <div className="flex lg:flex-col items-center lg:text-center gap-4 lg:gap-3 z-10 lg:w-1/4">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0 border-2 border-white text-blue-700">
            <UserCircleIcon className="w-6 h-6" />
          </div>
          <div className="flex flex-col lg:items-center">
            <div className="w-6 h-6 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center mb-1 lg:mb-2">1</div>
            <h3 className="font-semibold text-slate-900 text-sm mb-1">Create Your Profile</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              You'll be redirected to our secure portal to create your profile.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex lg:flex-col items-center lg:text-center gap-4 lg:gap-3 z-10 lg:w-1/4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border-2 border-gray-100 text-slate-400">
            <FileTextIcon className="w-6 h-6" />
          </div>
          <div className="flex flex-col lg:items-center">
            <div className="w-6 h-6 rounded-full bg-gray-200 text-slate-500 text-xs font-bold flex items-center justify-center mb-1 lg:mb-2">2</div>
            <h3 className="font-semibold text-slate-900 text-sm mb-1">Provide Information</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Submit the required information for identity, background, and credit review (if applicable).
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex lg:flex-col items-center lg:text-center gap-4 lg:gap-3 z-10 lg:w-1/4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border-2 border-gray-100 text-slate-400">
            <ShieldCheckIcon className="w-6 h-6" />
          </div>
          <div className="flex flex-col lg:items-center">
            <div className="w-6 h-6 rounded-full bg-gray-200 text-slate-500 text-xs font-bold flex items-center justify-center mb-1 lg:mb-2">3</div>
            <h3 className="font-semibold text-slate-900 text-sm mb-1">Verification in Progress</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Our partner verifies your information securely and confidentially.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex lg:flex-col items-center lg:text-center gap-4 lg:gap-3 z-10 lg:w-1/4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border-2 border-gray-100 text-slate-400">
            <SendIcon className="w-6 h-6" />
          </div>
          <div className="flex flex-col lg:items-center">
            <div className="w-6 h-6 rounded-full bg-gray-200 text-slate-500 text-xs font-bold flex items-center justify-center mb-1 lg:mb-2">4</div>
            <h3 className="font-semibold text-slate-900 text-sm mb-1">Results to Employer</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Once complete, results are sent to our hiring team for review.
            </p>
          </div>
        </div>
      </div>

      <div className="border border-gray-100 rounded-xl p-8 mb-8 bg-white">
        <h3 className="text-center font-semibold text-slate-900 mb-8">Why We Do This</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-10 h-10 mx-auto bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mb-3">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <h4 className="font-medium text-slate-900 text-sm mb-1">Safety First</h4>
            <p className="text-xs text-slate-500">Helps ensure a safe work environment for everyone.</p>
          </div>
          
          <div className="text-center">
            <div className="w-10 h-10 mx-auto bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mb-3">
              <ScaleIcon className="w-5 h-5" />
            </div>
            <h4 className="font-medium text-slate-900 text-sm mb-1">Fair Process</h4>
            <p className="text-xs text-slate-500">Every applicant goes through the same verification process.</p>
          </div>
          
          <div className="text-center">
            <div className="w-10 h-10 mx-auto bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mb-3">
              <TargetIcon className="w-5 h-5" />
            </div>
            <h4 className="font-medium text-slate-900 text-sm mb-1">Accurate Decisions</h4>
            <p className="text-xs text-slate-500">Helps us make informed and objective decisions.</p>
          </div>
          
          <div className="text-center">
            <div className="w-10 h-10 mx-auto bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mb-3">
              <HeartHandshakeIcon className="w-5 h-5" />
            </div>
            <h4 className="font-medium text-slate-900 text-sm mb-1">Trust & Integrity</h4>
            <p className="text-xs text-slate-500">We value honesty and transparency in hiring.</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 justify-center text-xs text-blue-700 mb-8 bg-blue-50 border border-blue-100 py-3 px-4 rounded-lg font-medium">
        <ClockIcon className="w-4 h-4" />
        Processing time may vary depending on the verification type.
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/start-verification" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </Link>
        
        <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
          <Link href="/start-verification/step-3" className="w-full sm:w-[360px] flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-medium py-3.5 px-6 rounded-lg transition-colors shadow-sm gap-2">
            Continue to Next Step
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500">
            <LockIcon className="w-3 h-3" />
            <span>You will be redirected to our secure verification partner.</span>
          </div>
        </div>

        <Link href="/start-verification" className="sm:hidden inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </Link>
      </div>
      
      {/* Step Indicators Bottom */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        <div className="w-2 h-2 rounded-full bg-blue-700"></div>
        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
      </div>
    </div>
  );
}
