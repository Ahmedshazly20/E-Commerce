import React from 'react'
import { FiUsers, FiTruck, FiShield, FiHeart, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Aboutus() {
 
     const navigate = useNavigate();

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop',
      bio: 'Passionate about bringing cutting-edge technology to everyone.'
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Tech enthusiast with 15 years of experience in e-commerce.'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Creating beautiful and intuitive user experiences.'
    }
  ];

  const values = [
    {
      icon: <FiTruck className="text-3xl" />,
      title: 'Fast Delivery',
      description: 'We ensure your products reach you quickly and safely with our premium shipping partners.'
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: 'Quality Assurance',
      description: 'Every product is thoroughly tested and verified before reaching our customers.'
    },
    {
      icon: <FiHeart className="text-3xl" />,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide 24/7 customer support for all your needs.'
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'Community',
      description: 'Building a community of tech enthusiasts who share our passion for innovation.'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to make technology accessible' },
    { year: '2021', title: '10K+ Customers', description: 'Reached our first major milestone' },
    { year: '2022', title: 'International Expansion', description: 'Expanded to serve customers worldwide' },
    { year: '2023', title: '1M+ Products Sold', description: 'Celebrating one million happy customers' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-96 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
            About Our Store
          </h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We're passionate about bringing you the latest technology and electronics 
            with exceptional service and unbeatable prices.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe technology should be accessible to everyone. Our mission is to provide 
                high-quality electronics at competitive prices while delivering exceptional customer 
                service that exceeds expectations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From the latest smartphones to cutting-edge laptops, we carefully curate our 
                product selection to ensure you're getting the best value for your money.
              </p>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Our Mission"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-xl shadow-sm border text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">The passionate people behind our success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-xl shadow-sm border text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">Key milestones in our growth story</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="bg-white p-6 rounded-xl shadow-sm border text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                <h3 className="font-semibold text-lg mb-3">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 min-h-96 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and discover amazing technology deals today.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto text-lg"
          >
            Shop Now
            <FiArrowRight />
          </button>
        </div>
      </section>
    </div>
  );
  
}

export default Aboutus