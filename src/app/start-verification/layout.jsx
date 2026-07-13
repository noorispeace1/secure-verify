import WizardHeader from "@/components/WizardHeader";

export default function VerificationLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 lg:p-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
        
        {/* Header (Inside the card) */}
        <WizardHeader />

        {/* Page Content */}
        <main className="p-6 sm:p-8 lg:p-12">
          {children}
        </main>
      </div>
    </div>
  );
}
