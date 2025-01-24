'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'LinkedIn', url: '#', icon: '𝕃𝕚' },
    { name: 'GitHub', url: '#', icon: '𝔾𝕚𝕥' },
    { name: 'Discord', url: '#', icon: '𝔻𝕚𝕤' },
  ];

  const quickLinks = [
    { name: 'Documentation', url: '#' },
    { name: 'Whitepaper', url: '#' },
    { name: 'Security', url: '#' },
    { name: 'Community', url: '#' },
  ];

  return (
    <footer id="contact" className="relative w-full bg-gradient-to-b from-black via-purple-950/90 to-indigo-950/90 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Quranium
            </h3>
            <p className="text-gray-300 text-sm">
              Building the uncrackable foundation for the digital future with quantum-resistant blockchain technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
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
              <p>Email: contact@quranium.com</p>
              <p>Location: Silicon Valley, CA</p>
              <p>Support: support@quranium.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
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
              2025 Quranium. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
