import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegDotCircle } from "react-icons/fa";

interface ContactInfo {
  title: string;
  value: string;
  icon: JSX.Element;
}

interface FAQ {
  question: string;
  answer: string;
}

interface FormField {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(Object.fromEntries(formData)); // Log form data for debugging
    // Add your form submission logic here
  };

  const contactInfo: ContactInfo[] = [
    { title: "Email", value: "hello@digitalarchitects.com", icon: <FiMail className="text-xl" /> },
    { title: "Phone", value: "(555) 123-4567", icon: <FiPhone className="text-xl" /> },
    { title: "Address", value: "123 Design Street, Creative City, CC 12345", icon: <FiMapPin className="text-xl" /> },
    { title: "Hours", value: "Mon-Fri: 9AM-6PM EST", icon: <FiClock className="text-xl" /> }
  ];

  const faqs: FAQ[] = [
    { question: "How long does it take to build a website?", answer: "Project timelines vary based on complexity, but most websites take 4-8 weeks from start to finish." },
    { question: "Do you provide ongoing support?", answer: "Yes, we offer various maintenance packages to keep your website secure, updated, and performing optimally." },
    { question: "Can you help with SEO?", answer: "Absolutely! We include basic SEO optimization with all projects and offer advanced SEO services." },
    { question: "What's included in your pricing?", answer: "Our pricing includes design, development, testing, launch, and 30 days of post-launch support." }
  ];

  const formFields: FormField[] = [
    { id: "firstName", label: "First Name *", type: "text", required: true, placeholder: "John" },
    { id: "lastName", label: "Last Name *", type: "text", required: true, placeholder: "Doe" },
    { id: "email", label: "Email Address *", type: "email", required: true, placeholder: "john@example.com" },
    { id: "company", label: "Company", type: "text", placeholder: "Your Company" },
    {
      id: "service",
      label: "Service Interested In *",
      type: "select",
      required: true,
      options: [
        { value: "web-design", label: "Web Design" },
        { value: "web-development", label: "Web Development" },
        { value: "ecommerce", label: "E-commerce" },
        { value: "seo", label: "SEO Optimization" },
        { value: "maintenance", label: "Website Maintenance" },
        { value: "consultation", label: "Consultation" }
      ]
    },
    {
      id: "budget",
      label: "Project Budget",
      type: "select",
      options: [
        { value: "5k-10k", label: "$5,000 - $10,000" },
        { value: "10k-25k", label: "$10,000 - $25,000" },
        { value: "25k-50k", label: "$25,000 - $50,000" },
        { value: "50k+", label: "$50,000+" }
      ]
    },
    { id: "message", label: "Project Details *", type: "textarea", required: true, placeholder: "Tell us about your project..." }
  ];

  const renderFormField = (field: FormField) => {
    switch (field.type) {
      case "select":
        return (
          <div className="relative">
            <select
              id={field.id}
              required={field.required}
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select {field.label.toLowerCase().replace(' *', '')}</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <IoIosArrowForward className="text-gray-400 rotate-90" />
            </div>
          </div>
        );
      case "textarea":
        return (
          <textarea
            id={field.id}
            required={field.required}
            rows={5}
            placeholder={field.placeholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        );
      default:
        return (
          <input
            id={field.id}
            type={field.type}
            required={field.required}
            placeholder={field.placeholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Let's discuss your ideas and see how we can help bring them to life
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="shadow-2xl rounded-xl border-0 bg-white p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formFields.slice(0, 2).map(field => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                        {field.label}
                      </label>
                      {renderFormField(field)}
                    </div>
                  ))}
                </div>
                
                {formFields.slice(2, -1).map(field => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    {renderFormField(field)}
                  </div>
                ))}
                
                <div>
                  <label htmlFor={formFields[formFields.length - 1].id} className="block text-sm font-medium text-gray-700 mb-2">
                    {formFields[formFields.length - 1].label}
                  </label>
                  {renderFormField(formFields[formFields.length - 1])}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 [&:hover]:from-blue-700 [&:hover]:to-purple-700 py-4 text-lg font-semibold text-white rounded-md transition-all duration-300 [&:hover]:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-600">
                  {["5+ years of experience", "150+ successful projects", "98% client satisfaction rate", "24/7 support available", "Money-back guarantee"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <FaRegDotCircle className="text-blue-600 mr-3 text-xs" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-2">Free Consultation</h3>
                <p className="text-blue-100 mb-4">
                  Book a 30-minute free consultation to discuss your project and get expert advice.
                </p>
                <button className="w-full bg-white text-blue-600 [&:hover]:bg-gray-100 py-3 px-4 rounded-md font-medium">
                  Schedule Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="[&:hover]:shadow-lg transition-shadow duration-300 bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <HiOutlineLocationMarker className="text-4xl mb-4 mx-auto text-gray-500" />
              <p className="text-gray-600 font-medium">Interactive Map Coming Soon</p>
              <p className="text-sm text-gray-500">Visit us at 123 Design Street, Creative City</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;