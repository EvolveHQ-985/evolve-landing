// import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-black pb-5 md:px-12 lg:px-24 w-full max-h-[68vh] overflow-y-scroll">
      {/* <h1 className="text-2xl font-bold text-red-500 mb-6">Terms and Conditions</h1> */}
      {/* <p className="text-sm text-gray-700 mb-4">Effective Date: <span className="text-gray-900">15-05-2024</span></p> */}

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing or using the services provided by Evolve Tech Group ("we," "our," or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must not use our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">2. Use of Services</h2>
        <p>
          You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions. Prohibited activities include, but are not limited to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Violating any applicable laws or regulations</li>
          <li>Infringing on the rights of others</li>
          <li>Uploading or distributing malicious software</li>
          <li>Attempting to gain unauthorized access to our systems</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">3. Intellectual Property</h2>
        <p>
          All content, trademarks, and intellectual property displayed on our platform are the property of Evolve Tech Group or our licensors. You may not reproduce, distribute, or create derivative works without prior written consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">4. User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately of any unauthorized use of your account.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Evolve Tech Group shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">6. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to our services at any time for violations of these Terms and Conditions or any applicable law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">7. Governing Law</h2>
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of <span className="text-gray-900">Evolve Tech Group</span>, without regard to its conflict of law principles.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">8. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms and Conditions at any time. Changes will be effective upon posting, and your continued use of our services constitutes acceptance of the updated terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">9. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms and Conditions, please contact us at:
        </p>
        <address className="text-gray-700">
          <p><span className="font-bold">Evolve Tech Group</span></p>
          <p>Email: <a href="mailto:evolve985@gmail.com" className="text-red-500">evolve985@gmail.com</a></p>
          {/* <p>Address: <span className="text-gray-900">[Insert Company Address]</span></p> */}
        </address>
      </section>

      <p className="mt-8 text-gray-700">
        Thank you for choosing Evolve Tech Group. We appreciate your trust in us.
      </p>
    </div>
  );
};

export default TermsAndConditions;
