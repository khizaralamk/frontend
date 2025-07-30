import React from 'react'
import { FiStar, FiUsers, FiPackage, FiAward, FiHeart } from 'react-icons/fi'

export default function TestimonialsAndNumbers() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "Professional Footballer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Cronaldo Sports has the best quality football gear I've ever used. Their jerseys are comfortable and durable, perfect for both training and matches."
    },
    {
      id: 2,
      name: "Fatima Ali",
      role: "Sports Coach",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I've been ordering team uniforms from Cronaldo Sports for years. Their customer service is exceptional and the quality never disappoints."
    },
    {
      id: 3,
      name: "Usman Hassan",
      role: "University Student",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Great prices and fast delivery! The sports equipment I bought exceeded my expectations. Highly recommend for any sports enthusiast."
    }
  ]

  const stats = [
    {
      icon: <FiUsers className="text-2xl" />,
      number: "50K+",
      label: "Happy Customers",
      description: "Satisfied sports enthusiasts"
    },
    {
      icon: <FiPackage className="text-2xl" />,
      number: "100K+",
      label: "Products Sold",
      description: "Quality sports equipment"
    },
    {
      icon: <FiAward className="text-2xl" />,
      number: "15+",
      label: "Years Experience",
      description: "In sports retail"
    },
    {
      icon: <FiHeart className="text-2xl" />,
      number: "98%",
      label: "Customer Satisfaction",
      description: "Based on reviews"
    }
  ]

  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black tracking-tight mb-4 font-['Big_Shoulders_Display']">WHAT OUR CUSTOMERS SAY</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-['Plus_Jakarta_Sans']">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with Cronaldo Sports.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-16 mb-24">
          {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Numbers Section */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black tracking-tight mb-4 font-['Big_Shoulders_Display']">OUR NUMBERS SPEAK FOR THEMSELVES</h3>
            <p className="text-gray-600 text-lg font-['Plus_Jakarta_Sans']">
              Trusted by thousands of sports enthusiasts across Pakistan
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialItem({ testimonial }: { testimonial: any }) {
  return (
    <div className="space-y-6">
      {/* Rating */}
      <div className="flex items-center">
        {[...Array(testimonial.rating)].map((_, i) => (
          <FiStar key={i} className="text-black fill-current w-5 h-5" />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed font-['Plus_Jakarta_Sans'] text-lg">
        "{testimonial.text}"
      </p>
      
      {/* Customer Info */}
      <div className="flex items-center pt-4 border-t border-gray-100">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-black font-['Big_Shoulders_Display']">{testimonial.name}</h4>
          <p className="text-sm text-gray-500 font-['Plus_Jakarta_Sans']">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}

function StatItem({ stat }: { stat: any }) {
  return (
    <div className="text-center space-y-4">
      <div className="text-gray-400 mb-4">
        {stat.icon}
      </div>
      <div className="text-6xl font-black text-black font-['Big_Shoulders_Display']">{stat.number}</div>
      <div className="font-bold text-black font-['Big_Shoulders_Display'] text-lg">{stat.label}</div>
      <div className="text-sm text-gray-500 font-['Plus_Jakarta_Sans']">{stat.description}</div>
    </div>
  )
} 