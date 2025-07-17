
import React from 'react';
import { Users, Award, Clock, Heart, Shield, Star } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Dentists",
      description: "Our skilled dental team brings years of experience and continuous education to provide the best care."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Modern Equipment",
      description: "State-of-the-art dental technology ensures precise diagnosis and comfortable treatments."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flexible Hours",
      description: "Convenient appointment slots including evenings and weekends to fit your schedule."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Gentle Care",
      description: "We prioritize patient comfort with gentle techniques and a caring approach to dentistry."
    }
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "5000+", label: "Happy Patients" },
    { number: "15+", label: "Dental Procedures" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              About Smile Dental Care
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              For over a decade, we've been dedicated to providing exceptional dental care to families 
              in our community. Our commitment to excellence, combined with the latest dental technology 
              and a gentle approach, has made us the trusted choice for comprehensive oral healthcare.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="text-blue-600 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern dental clinic"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Modern Dental Clinic</h3>
                <p className="text-white/90">Experience comfort and quality care</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">5000+</div>
                <div className="text-sm text-gray-600">Happy Patients</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1 flex items-center justify-center">
                  4.9 <Star className="h-6 w-6 text-yellow-400 fill-current ml-1" />
                </div>
                <div className="text-sm text-gray-600">Patient Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Why Patients Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-xl">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Safe & Sterile Environment</h4>
              <p className="text-gray-600 text-sm">Strict sterilization protocols and safety measures for your protection</p>
            </div>
            <div className="p-6 bg-cyan-50 rounded-xl">
              <Heart className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Comfortable Experience</h4>
              <p className="text-gray-600 text-sm">Pain-free treatments with sedation options available</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600 text-sm">Guaranteed quality treatments with follow-up care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
