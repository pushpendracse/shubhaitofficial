import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata = {
  title: 'Privacy Policy - Shubha IT Solution',
  description: 'Privacy Policy of Shubha IT Solution as per Indian IT Industry standards.',
};

export default function PrivacyPolicy() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 z-[-2]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-20 z-[-1]">
        <AnimatedBackground />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl p-8 sm:p-14 border border-slate-100 dark:border-slate-800">
        <h1 className="text-4xl sm:text-5xl font-black mb-6 text-slate-900 dark:text-white">Privacy Policy</h1>
        <p className="text-sm font-bold text-slate-500 mb-10 tracking-widest uppercase">Last Updated: {new Date().toLocaleDateString('en-IN')}</p>
        
        <div className="space-y-8 text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
            <p>Welcome to Shubha IT Solution. We are committed to protecting your personal information and your right to privacy in compliance with the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 of India.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
            <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, and project-related technical specifications.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. How We Use Collected Information</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>To improve customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
              <li><strong>To personalize user experience:</strong> We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
              <li><strong>To process payments:</strong> We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
              <li><strong>To send periodic emails:</strong> We may use the email address to send User information and updates pertaining to their order or inquiry.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Data Security</h2>
            <p>We adopt industry-standard data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site. Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Sharing Your Personal Information</h2>
            <p>We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above in accordance with Indian Cyber Laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Changes to This Privacy Policy</h2>
            <p>Shubha IT Solution has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Contacting Us</h2>
            <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:</p>
            <div className="mt-4 p-6 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800">
                <p className="font-bold">Shubha IT Solution</p>
                <p>Email: solutionshubhait@gmail.com</p>
                <p>Phone: +91 6307558532, +91 9528658256</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
