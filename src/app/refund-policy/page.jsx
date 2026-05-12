import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata = {
  title: 'Refund Policy - Shubha IT Solution',
  description: 'Refund Policy of Shubha IT Solution for IT services and solutions.',
};

export default function RefundPolicy() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 z-[-2]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-20 z-[-1]">
        <AnimatedBackground />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl p-8 sm:p-14 border border-slate-100 dark:border-slate-800">
        <h1 className="text-4xl sm:text-5xl font-black mb-6 text-slate-900 dark:text-white">Refund Policy</h1>
        <p className="text-sm font-bold text-slate-500 mb-10 tracking-widest uppercase">Last Updated: {new Date().toLocaleDateString('en-IN')}</p>
        
        <div className="space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Overview</h2>
            <p>At Shubha IT Solution, we strive to deliver the highest quality software development, IT consulting, and digital solutions. Our business operations and service delivery strictly adhere to the professional standards of the Indian IT industry. Due to the customized nature of software development and IT infrastructure services, our refund policy is designed to be fair, transparent, and mutually beneficial.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Milestone-Based Payments</h2>
            <p>Our projects are generally executed on a milestone basis. Upon agreement of the project scope and timeline, the client is required to pay a mobilization advance. Subsequent payments are tied to the successful delivery and approval of predetermined project milestones.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Any advance payment made towards mobilization and project initiation is strictly <strong>non-refundable</strong> once the project team has commenced work.</li>
              <li>Payments made against approved and completed milestones are non-refundable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Cancellation Policy</h2>
            <p>We understand that business requirements can change. If a client wishes to terminate a project prematurely:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>The client must provide a written notice of cancellation.</li>
              <li>All work completed up to the date of cancellation must be paid for in full.</li>
              <li>If the total amount paid by the client exceeds the value of the work completed up to the cancellation date, Shubha IT Solution will issue a prorated refund for the unutilized balance within 15-20 business days.</li>
              <li>If the value of the work completed exceeds the total amount paid, the client is obligated to clear the outstanding balance immediately upon cancellation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Exceptions and Non-Refundable Services</h2>
            <p>The following services are strictly non-refundable under any circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Domain name registration, transfer, or renewal fees.</li>
              <li>Web hosting, cloud server setups (AWS, Azure, GCP), and associated infrastructure costs.</li>
              <li>Third-party software licenses, APIs, or plugin purchases made on behalf of the client.</li>
              <li>Digital marketing, SEO, and paid ad campaign spends once the campaign has been deployed.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Dispute Resolution</h2>
            <p>In the rare event of a dispute regarding service quality or deliverables, we encourage clients to engage in constructive dialogue with our project managers. If the issue remains unresolved, it will be addressed in accordance with the jurisdiction of the courts located in India, as per the governing laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Contact Information</h2>
            <p>For any queries or concerns regarding this refund policy, please contact our billing department:</p>
            <div className="mt-4 p-6 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="font-bold">Shubha IT Solution Billing</p>
                <p>Email: solutionshubhait@gmail.com</p>
                <p>Phone: +91 6307558532</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
