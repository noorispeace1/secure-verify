import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, LockIcon, AlertTriangleIcon, ChevronDownIcon, UsersIcon, FileCheckIcon, ShieldCheckIcon, InfoIcon } from "@/components/Icons";

export default function Step3Page() {
  return (
    <div className="w-full">
      <div className="mb-10">
        <div className="inline-flex items-center justify-center bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          STEP 3 OF 3
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Verification Details
        </h1>
        <p className="text-slate-600">
          Important information before you proceed.
        </p>
      </div>

      <div className="space-y-4 mb-10">
        {/* FAQ Item 1 */}
        <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden" open>
          <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <UsersIcon className="w-4 h-4" />
              </div>
              <span className="font-medium text-slate-900 text-sm">Who performs the verification?</span>
            </div>
            <span className="transition group-open:rotate-180">
              <ChevronDownIcon className="w-5 h-5 text-slate-400" />
            </span>
          </summary>
          <div className="px-4 pb-4 pt-0 pl-16 text-sm text-slate-600">
            An independent third-party verification provider.
          </div>
        </details>

        {/* FAQ Item 2 */}
        <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
          <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <FileCheckIcon className="w-4 h-4" />
              </div>
              <span className="font-medium text-slate-900 text-sm">Does verification guarantee my job?</span>
            </div>
            <span className="transition group-open:rotate-180">
              <ChevronDownIcon className="w-5 h-5 text-slate-400" />
            </span>
          </summary>
          <div className="px-4 pb-4 pt-0 pl-16 text-sm text-slate-600">
            No. Verification helps us review information, but hiring decisions are made by our team.
          </div>
        </details>

        {/* FAQ Item 3 */}
        <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
          <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <LockIcon className="w-4 h-4" />
              </div>
              <span className="font-medium text-slate-900 text-sm">Who can access my information?</span>
            </div>
            <span className="transition group-open:rotate-180">
              <ChevronDownIcon className="w-5 h-5 text-slate-400" />
            </span>
          </summary>
          <div className="px-4 pb-4 pt-0 pl-16 text-sm text-slate-600">
            Only authorized members of our hiring team receive your verification results.
          </div>
        </details>

        {/* FAQ Item 4 */}
        <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
          <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <ShieldCheckIcon className="w-4 h-4" />
              </div>
              <span className="font-medium text-slate-900 text-sm">Is my information secure?</span>
            </div>
            <span className="transition group-open:rotate-180">
              <ChevronDownIcon className="w-5 h-5 text-slate-400" />
            </span>
          </summary>
          <div className="px-4 pb-4 pt-0 pl-16 text-sm text-slate-600">
            Yes. Your data is encrypted and handled securely in compliance with industry standards.
          </div>
        </details>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-8 pt-6 border-t border-gray-100">
        <div className="lg:w-1/3">
          <div className="text-sm font-medium text-slate-900 mb-1">Verification Fee <span className="text-slate-500 font-normal">(If applicable)</span></div>
          <div className="text-4xl font-bold text-slate-900 mb-1">$29.95</div>
          <div className="text-xs text-slate-500">One-time fee</div>
        </div>
        <div className="lg:w-2/3 flex flex-col gap-3 justify-center">
          <p className="text-sm text-slate-600">
            This fee is charged by our independent verification partner.
          </p>
          <div className="bg-green-50 text-green-800 text-sm p-4 rounded-lg border border-green-100 font-medium">
            If you move forward in our hiring process, we will reimburse this fee at the time of your interview.
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3 items-start mb-10">
        <AlertTriangleIcon className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800 leading-relaxed">
          <span className="font-semibold">Important Note:</span> Completing verification does not guarantee employment. All hiring decisions are made solely by our company.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link href="/start-verification/step-2" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </Link>
        
        <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
          <Link href="/start-verification" className="w-full sm:w-[360px] flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white font-medium py-3.5 px-6 rounded-lg transition-colors shadow-sm gap-2">
            Proceed to Verification
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500">
            <LockIcon className="w-3 h-3" />
            <span>You will be redirected to the verification provider.</span>
          </div>
        </div>

        <Link href="/start-verification/step-2" className="sm:hidden inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
          <ArrowLeftIcon className="w-4 h-4" />
          Back
        </Link>
      </div>

      {/* Step Indicators Bottom */}
      <div className="flex justify-center items-center gap-2 mt-12">
        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        <div className="w-2 h-2 rounded-full bg-blue-700"></div>
      </div>
    </div>
  );
}
