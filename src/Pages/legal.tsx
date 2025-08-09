import React from 'react';
import { FiFileText, FiBook, FiEye, FiAlertTriangle } from 'react-icons/fi';

const Legal = () => {
  const legalSections = [
    {
      icon: FiEye,
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: January 2024',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            This Privacy Policy describes how ElectroStore collects, uses, and protects your personal information when you use our website and services.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Information We Collect:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <strong>Personal Information:</strong> Name, email address, phone number, billing and shipping addresses</li>
                <li>• <strong>Payment Information:</strong> Credit card details processed securely through encrypted payment processors</li>
                <li>• <strong>Account Information:</strong> Username, password, order history, and preferences</li>
                <li>• <strong>Usage Data:</strong> Website analytics, browsing behavior, and device information</li>
                <li>• <strong>Communications:</strong> Customer service interactions, reviews, and feedback</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">How We Use Your Information:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Processing and fulfilling your orders</li>
                <li>• Providing customer support and responding to inquiries</li>
                <li>• Sending order confirmations, shipping updates, and important notices</li>
                <li>• Personalizing your shopping experience and product recommendations</li>
                <li>• Improving our website, products, and services</li>
                <li>• Preventing fraud and ensuring platform security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Information Sharing:</h4>
              <p className="text-gray-600">
                We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who help us operate our business, such as payment processors, shipping companies, and analytics providers. These partners are bound by confidentiality agreements and may only use your information for specified purposes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Your Rights and Choices:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Access and update your personal information through your account settings</li>
                <li>• Opt out of marketing communications at any time</li>
                <li>• Request deletion of your account and associated data</li>
                <li>• Contact us to request a copy of your data or corrections</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: FiBook,
      title: 'Terms of Service',
      lastUpdated: 'Last updated: January 2024',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            These Terms of Service govern your use of the ElectroStore website and services. By accessing or using our platform, you agree to be bound by these terms.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Acceptance of Terms:</h4>
              <p className="text-gray-600">
                By creating an account, making a purchase, or using our website, you acknowledge that you have read, understood, and agree to these Terms of Service and our Privacy Policy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Account Responsibilities:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Provide accurate and complete information during registration</li>
                <li>• Maintain the security of your account credentials</li>
                <li>• Notify us immediately of any unauthorized use of your account</li>
                <li>• You are responsible for all activities under your account</li>
                <li>• Only one account per person is permitted</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Prohibited Uses:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Using the platform for any illegal or unauthorized purpose</li>
                <li>• Attempting to gain unauthorized access to our systems</li>
                <li>• Uploading or transmitting harmful code, viruses, or malware</li>
                <li>• Violating any intellectual property rights</li>
                <li>• Engaging in fraudulent activities or chargebacks abuse</li>
                <li>• Reselling products for commercial purposes without authorization</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Orders and Payments:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• All orders are subject to acceptance and product availability</li>
                <li>• Prices are subject to change without notice</li>
                <li>• Payment must be received before order processing</li>
                <li>• We reserve the right to cancel orders for any reason</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Limitation of Liability:</h4>
              <p className="text-gray-600">
                ElectroStore shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our platform or products, even if we have been advised of the possibility of such damages.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: FiFileText,
      title: 'Cookie Policy',
      lastUpdated: 'Last updated: December 2023',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            This Cookie Policy explains how ElectroStore uses cookies and similar technologies to enhance your browsing experience and improve our services.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">What Are Cookies:</h4>
              <p className="text-gray-600">
                Cookies are small text files stored on your device when you visit websites. They help websites remember your preferences, login status, and other information to provide a better user experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Types of Cookies We Use:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Essential Cookies:</strong> Required for basic website functionality, shopping cart, and security features</li>
                <li>• <strong>Performance Cookies:</strong> Help us understand how visitors use our website to improve performance</li>
                <li>• <strong>Functional Cookies:</strong> Remember your preferences, language settings, and personalized features</li>
                <li>• <strong>Marketing Cookies:</strong> Track your browsing habits to show relevant advertisements and measure campaign effectiveness</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Third-Party Cookies:</h4>
              <p className="text-gray-600">
                We work with trusted partners who may place cookies on your device to provide analytics, advertising, and social media features. These include Google Analytics, Facebook Pixel, and payment processors.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Managing Cookies:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Use our cookie preference center to customize your settings</li>
                <li>• Adjust your browser settings to block or delete cookies</li>
                <li>• Note that disabling cookies may affect website functionality</li>
                <li>• Essential cookies cannot be disabled for security reasons</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Cookie Retention:</h4>
              <p className="text-gray-600">
                Session cookies are deleted when you close your browser. Persistent cookies remain on your device for the period specified in the cookie or until you delete them manually. Most of our cookies expire within 12 months.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: FiAlertTriangle,
      title: 'Disclaimer',
      lastUpdated: 'Last updated: January 2024',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            The following disclaimers apply to your use of the ElectroStore website and the products and services we offer.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Product Information:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Product descriptions, images, and specifications are provided for general information purposes</li>
                <li>• While we strive for accuracy, we cannot guarantee that all product information is complete or error-free</li>
                <li>• Actual product colors may vary from images due to monitor settings and lighting conditions</li>
                <li>• Product features and specifications may change without notice from manufacturers</li>
                <li>• Always refer to manufacturer documentation for the most current product information</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Pricing and Availability:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• All prices are subject to change without notice</li>
                <li>• Product availability is not guaranteed until order confirmation</li>
                <li>• Promotional prices and discounts are subject to terms and conditions</li>
                <li>• We reserve the right to correct pricing errors at any time</li>
                <li>• Sale prices may not be combined with other offers unless specified</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Technical Support:</h4>
              <p className="text-gray-600">
                While we provide general product support, we are not responsible for product installation, configuration, or technical issues beyond our control. For detailed technical support, please contact the product manufacturer directly.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Third-Party Links:</h4>
              <p className="text-gray-600">
                Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of these external sites. Use of third-party websites is at your own risk.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Limitation of Liability:</h4>
              <p className="text-gray-600">
                ElectroStore's liability is limited to the maximum extent permitted by law. We shall not be liable for any damages arising from the use of our website, products, or services, including but not limited to direct, indirect, incidental, or consequential damages.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Changes to Disclaimer:</h4>
              <p className="text-gray-600">
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of any modifications.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Legal
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Important legal information and policies.
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {legalSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div 
                key={section.title}
                className="bg-white p-8 rounded-lg shadow-sm border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-primary text-2xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-3xl font-bold text-primary">{section.title}</h2>
                      <span className="text-sm text-gray-500">{section.lastUpdated}</span>
                    </div>
                    {section.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Notice */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm border animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Legal Questions?</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our legal policies or need clarification on any terms, please don't hesitate to contact us.
            </p>
            <a 
              href="/contact"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors transform hover:scale-105 duration-200"
            >
              Contact Legal Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;