'use client';

import { motion } from 'framer-motion';
import { FOOTER_CONTENT } from '@/constants/content';

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full bg-gradient-to-b from-black via-purple-950/90 to-indigo-950/90 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              {FOOTER_CONTENT.brand.name}
            </h3>
            <p className="text-gray-300 text-sm">
              {FOOTER_CONTENT.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_CONTENT.quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.url}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: {FOOTER_CONTENT.contact.email}</p>
              <p>Location: {FOOTER_CONTENT.contact.location}</p>
              <p>Support: {FOOTER_CONTENT.contact.support}</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Follow Us</h4>
            <div className="flex space-x-4">
              {FOOTER_CONTENT.socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-800/50 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {FOOTER_CONTENT.legal.copyright}
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              {FOOTER_CONTENT.legal.links.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  className="hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
