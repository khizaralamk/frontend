import React from 'react'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiYoutube,
  FiMessageCircle
} from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import logo from '../assets/icons/cronaldosports-05.png'

export default function ContactUs() {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left: Branding */}
          <div className="md:w-1/3">
            <img src={logo} alt="Cronaldo Sports Logo" className="h-24 w-auto mb-4" />
            <h2 className="text-4xl font-bold font-['Plus_Jakarta_Sans'] mb-2">Get In Touch</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              We're here to help with your orders, questions, or custom gear requests.
              Reach out any time!
            </p>
          </div>

          {/* Right: Contact Details */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Email */}
            <ContactCard
              icon={<FiMail />}
              title="Email Us"
              subtitle="info@cronaldosports.com"
            />
            {/* Phone */}
            <ContactCard
              icon={<FiPhone />}
              title="Call Us"
              subtitle="+92 300 123 4567"
            />
            {/* Location */}
            <ContactCard
              icon={<FiMapPin />}
              title="Visit Us"
              subtitle="123 Sports Avenue, Lahore, Pakistan"
            />
            {/* WhatsApp */}
            <ContactCard
              icon={<BsWhatsapp />}
              title="WhatsApp"
              subtitle="+92 300 123 4567"
            />
            {/* Live Chat */}
            <ContactCard
              icon={<FiMessageCircle />}
              title="Live Chat"
              subtitle="Chat with us 10AM – 8PM"
            />
            {/* Support Form */}
            <div className="col-span-1 sm:col-span-2 border border-gray-800 p-5 rounded-lg bg-white bg-opacity-5">
              <p className="text-sm text-gray-300 mb-2 font-semibold">Prefer Writing?</p>
              <p className="text-sm text-gray-400 mb-4">Fill out our <a href="#" className="underline hover:text-white">support form</a> and we’ll get back within 24 hours.</p>
              <a
                href="#"
                className="inline-block bg-white text-black text-sm font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Media */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-gray-400 text-sm font-medium">Follow Us:</span>
            {[
              { icon: <FiInstagram />, href: "#" },
              { icon: <FiTwitter />, href: "#" },
              { icon: <FiFacebook />, href: "#" },
              { icon: <FiYoutube />, href: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-10 hover:bg-opacity-30 rounded-full text-gray-300 hover:text-white transition"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Business Hours */}
          <div className="text-center md:text-right text-gray-400 text-sm">
            <p><span className="font-semibold">Business Hours:</span> Mon–Sat, 10AM–8PM</p>
            <p>🚚 Free shipping on orders above Rs. 5,000</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-10 rounded-full text-white text-lg flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-sm mb-1">{title}</h3>
        <p className="text-gray-300 text-sm">{subtitle}</p>
      </div>
    </div>
  )
}
