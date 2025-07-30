import React from 'react'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiYoutube
} from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'

export default function ContactUs() {
  const contactInfo = [
    {
      icon: <FiMapPin className="text-xl" />,
      title: "Visit Us",
      content: "123 Sports Avenue, Lahore, Pakistan",
      subtitle: "Mon–Sat, 10AM–8PM"
    },
    {
      icon: <FiPhone className="text-xl" />,
      title: "Call Us",
      content: "+92 300 123 4567",
      subtitle: "Available 24/7 for urgent inquiries"
    },
    {
      icon: <FiMail className="text-xl" />,
      title: "Email Us",
      content: "info@cronaldosports.com",
      subtitle: "We'll respond within 24 hours"
    }
  ]

  const socialMedia = [
    { icon: <FiInstagram />, label: "Instagram" },
    { icon: <FiFacebook />, label: "Facebook" },
    { icon: <FiTwitter />, label: "Twitter" },
    { icon: <FiYoutube />, label: "YouTube" },
    { icon: <BsWhatsapp />, label: "WhatsApp" }
  ]

  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black tracking-tight mb-2 font-['Big_Shoulders_Display']">GET IN TOUCH</h2>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {contactInfo.map((info, index) => (
            <ContactItem key={index} info={info} />
          ))}
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-xl font-black tracking-tight mb-4 font-['Big_Shoulders_Display']">FOLLOW US</h3>
          <div className="flex justify-center items-center gap-6">
            {socialMedia.map((social, index) => (
              <SocialIcon key={index} social={social} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ info }: { info: any }) {
  return (
    <div className="text-center space-y-2">
      <div className="flex justify-center mb-2">
        <div className="text-gray-400">
          {info.icon}
        </div>
      </div>
      <h4 className="font-bold text-white font-['Big_Shoulders_Display'] text-lg">{info.title}</h4>
      <p className="text-gray-300 font-['Plus_Jakarta_Sans'] text-sm">{info.content}</p>
      <p className="text-xs text-gray-500 font-['Plus_Jakarta_Sans']">{info.subtitle}</p>
    </div>
  )
}

function SocialIcon({ social }: { social: any }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 border border-gray-700 flex items-center justify-center text-lg text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300">
        {social.icon}
      </div>
      <span className="sr-only">{social.label}</span>
    </div>
  )
}
