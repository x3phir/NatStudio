'use client'

import { Mail, MessageCircle, Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-gradient-to-b from-purple-900 to-pink-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h2 className="font-heading text-3xl text-white mb-4">
              NatStudio
            </h2>
            <p className="font-body text-purple-200 mb-6">
              Creating adorable digital art and illustrations for creative minds everywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 font-body text-purple-200">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#how-to-order" className="hover:text-white transition-colors">
                  How to Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Methods */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:oceanatss@gmail.com"
                className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors font-body"
              >
                <Mail className="w-5 h-5" />
                oceanatss@gmail.com
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors font-body"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/oceanatss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors font-body"
              >
                <Heart className="w-5 h-5" />
                @oceanatss
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="font-heading text-2xl text-white mb-6">
            Send Me a Message
          </h3>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.target as HTMLFormElement
              const name = (form.elements.namedItem('name') as HTMLInputElement).value
              const email = (form.elements.namedItem('email') as HTMLInputElement).value
              const title = (form.elements.namedItem('title') as HTMLInputElement).value
              const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
              const subject = encodeURIComponent(`Project Inquiry from ${name}`)
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject: ${title}\n\nMessage:\n${message}`)
              window.location.href = `mailto:oceanatss@gmail.com?subject=${subject}&body=${body}`
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-6 py-3 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/50 font-body focus:outline-none focus:border-white/50 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-3 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/50 font-body focus:outline-none focus:border-white/50 transition-colors"
              />
            </div>
            <input
              type="text"
              name="title"
              placeholder="Project Title"
              className="w-full px-6 py-3 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/50 font-body focus:outline-none focus:border-white/50 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows={5}
              required
              className="w-full px-6 py-3 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-white/50 font-body focus:outline-none focus:border-white/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-heading py-3 rounded-full transition-all transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-purple-200 text-sm mb-4 md:mb-0">
              &copy; {currentYear} NatStudio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://instagram.com/oceanatss" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white transition-colors">
                <Heart className="w-6 h-6" />
              </a>
              <a href="mailto:oceanatss@gmail.com" className="text-purple-200 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
