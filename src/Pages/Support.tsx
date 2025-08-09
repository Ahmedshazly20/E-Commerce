import React from 'react';
import { FiHelpCircle, FiTruck, FiRotateCcw, FiShield } from 'react-icons/fi';

const Support = () => {
  const supportSections = [
    {
      icon: FiHelpCircle,
      title: 'Help Center',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Our customer support team is here to help you with any questions or concerns. We offer multiple ways to get assistance:
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Contact Methods:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <strong>Live Chat:</strong> Available 24/7 on our website</li>
                <li>• <strong>Email:</strong> support@electrostore.com (Response within 2 hours)</li>
                <li>• <strong>Phone:</strong> 1-800-ELECTRO (Mon-Fri, 8AM-8PM EST)</li>
                <li>• <strong>Help Portal:</strong> Self-service options and FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">What We Can Help With:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Order status and tracking</li>
                <li>• Product information and recommendations</li>
                <li>• Technical support and troubleshooting</li>
                <li>• Account and billing questions</li>
                <li>• Returns and exchanges</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: FiTruck,
      title: 'Shipping Info',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We offer fast, reliable shipping options to get your electronics to you quickly and safely.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Shipping Options:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Standard Shipping (5-7 business days):</strong> Free on orders over $50</li>
                <li>• <strong>Express Shipping (2-3 business days):</strong> $9.99</li>
                <li>• <strong>Overnight Shipping (1 business day):</strong> $19.99</li>
                <li>• <strong>Same-Day Delivery:</strong> Available in select cities for $24.99</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Processing & Tracking:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Orders placed before 2PM EST ship same day</li>
                <li>• Tracking information sent via email within 24 hours</li>
                <li>• Real-time tracking available on our website</li>
                <li>• Signature required for orders over $500</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">International Shipping:</h4>
              <p className="text-gray-600">We ship to over 50 countries worldwide. International shipping costs calculated at checkout. Delivery times vary by destination (7-21 business days).</p>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: FiRotateCcw,
      title: 'Returns',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We want you to be completely satisfied with your purchase. Our hassle-free return policy makes it easy to return or exchange items.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Return Policy:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <strong>14-day return window</strong> from delivery date</li>
                <li>• Items must be in original condition with all accessories</li>
                <li>• Original packaging required for electronics</li>
                <li>• Free return shipping on defective items</li>
                <li>• Restocking fee may apply to opened software/digital products</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Return Process:</h4>
              <ol className="space-y-1 text-gray-600 list-decimal list-inside">
                <li>Log into your account and select "Return Item"</li>
                <li>Choose your reason for return and print prepaid label</li>
                <li>Package item securely with original accessories</li>
                <li>Drop off at any authorized shipping location</li>
                <li>Refund processed within 3-5 business days after receipt</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Non-Returnable Items:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Custom or personalized products</li>
                <li>• Gift cards and digital downloads</li>
                <li>• Items damaged by misuse</li>
                <li>• Products missing serial numbers or UPC codes</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: FiShield,
      title: 'Warranty',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            All products come with comprehensive warranty protection to ensure your investment is protected.
          </p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Warranty Coverage:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <strong>Manufacturer's Warranty:</strong> Included with all products (terms vary by brand)</li>
                <li>• <strong>Extended Warranty:</strong> Optional coverage up to 3 additional years</li>
                <li>• <strong>Accidental Damage:</strong> Available for premium warranty plans</li>
                <li>• <strong>DOA Protection:</strong> 14-day replacement for dead-on-arrival items</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Warranty Duration by Category:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• <strong>Smartphones & Tablets:</strong> 1 year manufacturer + optional 2-year extended</li>
                <li>• <strong>Laptops & Computers:</strong> 1-3 years manufacturer (varies by brand)</li>
                <li>• <strong>TVs & Audio:</strong> 1-2 years manufacturer warranty</li>
                <li>• <strong>Small Electronics:</strong> 90 days to 1 year manufacturer warranty</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">How to Make a Warranty Claim:</h4>
              <ol className="space-y-1 text-gray-600 list-decimal list-inside">
                <li>Contact our warranty department at warranty@electrostore.com</li>
                <li>Provide order number, product serial number, and issue description</li>
                <li>Follow troubleshooting steps if provided</li>
                <li>Receive prepaid shipping label for defective items</li>
                <li>Repair or replacement processed within 7-14 business days</li>
              </ol>
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
            Support
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Support Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {supportSections.map((section, index) => {
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
                    <h2 className="text-3xl font-bold text-primary mb-6">{section.title}</h2>
                    {section.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Support Info */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm border animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Need More Help?</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our support team is available to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors transform hover:scale-105 duration-200"
              >
                Contact Support
              </a>
              <a 
                href="mailto:support@electrostore.com"
                className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;