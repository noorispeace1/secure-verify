import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import { ArrowRightIcon, ClockIcon, FileCheckIcon, LockIcon, ShieldCheckIcon, UsersIcon, ZapIcon } from "@/components/Icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />

      {/* 4 Feature Cards Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Trusted Process</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Independent verification ensures a fair and secure hiring experience.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">
              <LockIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Applicant Privacy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your data is handled confidentially and never shared with employers.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Secure & Compliant</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We follow strict security standards and applicable laws and regulations.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center">
              <ClockIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Fast & Efficient</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Verifications are completed quickly to keep your application moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Verification Matters Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-blue-700 font-semibold text-sm tracking-wider uppercase mb-3">
              WHY VERIFICATION MATTERS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Verification Matters
            </h2>
            <p className="text-slate-600">
              Modern hiring requires accurate applicant information. Our verification process helps support a fair and secure recruitment experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <UsersIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Identity Review</h3>
                <p className="text-sm text-slate-600">
                  We confirm your identity using secure and reliable verification methods.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <LockIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Background Review</h3>
                <p className="text-sm text-slate-600">
                  We review background information to help employers make informed decisions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <FileCheckIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Employment Eligibility</h3>
                <p className="text-sm text-slate-600">
                  We help verify your work authorization status as required by the employer.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <ZapIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Secure Processing</h3>
                <p className="text-sm text-slate-600">
                  All information is encrypted and processed through secure systems.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/learn-more-process" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-slate-700 font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm text-sm">
              Learn More About the Process
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
