// import React from 'react'

export default function PrivacyPolicy() {
  return (
      <section className="w-full max-h-[68vh] overflow-y-scroll">
        <hr className="border-red-500 mb-6" />

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">1. Information We Collect</h2>

            <h3 className="text-lg font-medium text-black mb-2">a. Personal Information</h3>
            <ul className="list-disc list-inside mb-4">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing and shipping addresses</li>
            <li>Payment information</li>
            </ul>

            <h3 className="text-lg font-medium text-black mb-2">b. Non-Personal Information</h3>
            <ul className="list-disc list-inside mb-4">
            <li>Device information (e.g., IP address, browser type, operating system)</li>
            <li>Usage data (e.g., pages visited, time spent on our platform)</li>
            <li>Location data (e.g., approximate geographic location based on your IP address)</li>
            </ul>

            <h3 className="text-lg font-medium text-black mb-2">c. Information You Provide Voluntarily</h3>
            <ul className="list-disc list-inside">
            <li>Feedback, inquiries, or other communications sent to us</li>
            <li>Information submitted through forms, surveys, or account registration</li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside">
            <li>Provide, personalize, and maintain our Services</li>
            <li>Process transactions and send confirmations</li>
            <li>Communicate with you about updates, promotions, and new features</li>
            <li>Enhance the functionality and security of our platform</li>
            <li>Comply with legal obligations</li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">3. How We Share Your Information</h2>
            <p className="mb-4">We do not sell or rent your personal information. However, we may share your information with:</p>

            <h3 className="text-lg font-medium text-black mb-2">a. Service Providers</h3>
            <p className="mb-4">Third-party vendors who assist us in operating our platform, such as payment processors, hosting providers, and analytics services.</p>

            <h3 className="text-lg font-medium text-black mb-2">b. Legal and Regulatory Authorities</h3>
            <p className="mb-4">We may disclose your information to comply with legal obligations or respond to lawful requests by public authorities.</p>

            <h3 className="text-lg font-medium text-black mb-2">c. Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of our assets, your information may be transferred as part of that transaction.</p>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">4. Data Security</h2>
            <p>We implement industry-standard measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of data transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">5. Your Rights and Choices</h2>
            <p className="mb-4">You have the following rights regarding your personal information:</p>

            <h3 className="text-lg font-medium text-black mb-2">a. Access and Correction</h3>
            <p className="mb-4">You can request access to or correction of your personal data.</p>

            <h3 className="text-lg font-medium text-black mb-2">b. Opt-Out</h3>
            <p className="mb-4">You can opt out of receiving marketing communications by following the unsubscribe instructions included in our emails.</p>

            <h3 className="text-lg font-medium text-black mb-2">c. Data Deletion</h3>
            <p className="mb-4">You may request the deletion of your personal information, subject to legal and contractual obligations.</p>

            <h3 className="text-lg font-medium text-black mb-2">d. Data Portability</h3>
            <p>You can request a copy of your data in a structured, machine-readable format.</p>

            <p className="mt-4">To exercise these rights, please contact us at <a href="mailto:evolve985@gmail.com" className="text-red-500">evolve985@gmail.com</a>.</p>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">6. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar technologies to enhance your experience, analyze usage, and deliver targeted advertisements. You can manage your cookie preferences through your browser settings.</p>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">7. Third-Party Links</h2>
            <p>Our Services may contain links to third-party websites or applications. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.</p>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">8. Children's Privacy</h2>
            <p>Our Services are not directed at individuals under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it.</p>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">9. International Users</h2>
            <p>If you are accessing our Services from outside <span className="text-gray-900">Nigeria</span>, please note that your information may be transferred to and processed in countries where data protection laws may differ from those in your jurisdiction.</p>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">10. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the "Effective Date" updated. Your continued use of our Services constitutes your acceptance of the revised policy.</p>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">11. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
            <address className="text-gray-700">
            <p><span className="font-bold">Evolve Tech Group</span></p>
            <p>Email: <a href="mailto:evolve985@gmail.com" className="text-red-500">evolve985@gmail.com</a></p>
            {/* <p>Address: <span className="text-gray-900">[Insert Company Address]</span></p> */}
            </address>
        </section>

        <p className="mt-8 text-gray-700">Thank you for trusting Evolve Tech Group. Your privacy is important to us.</p>
      </section>
  )
}
