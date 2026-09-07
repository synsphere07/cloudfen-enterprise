import { motion } from 'framer-motion';
import { Globe, MessageSquare, Share2 } from 'lucide-react';
import React from 'react';

const FooterSection = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white p-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p>Headquarters: 4080 McGinnis Ferry Rd, Suite 1005, Alpharetta GA 30005</p>
          <p>Phone/Fax: +1 7705746149</p>
          <p>Email: <a href="mailto:info@cloudfen.com" className="text-cyan-500 hover:underline">info@cloudfen.com</a></p>
        </div>
        <form className="flex flex-col mt-4">
          <input type="text" placeholder="Full Name" className="p-2 mb-2 border rounded" required />
          <input type="email" placeholder="Email Address" className="p-2 mb-2 border rounded" required />
          <textarea placeholder="Message" className="p-2 mb-2 border rounded" required></textarea>
          <button type="submit" className="bg-cyan-500 text-white p-2 rounded">SEND MESSAGE</button>
        </form>
      </div>
      <div className="text-center mt-8">
        <p>© {new Date().getFullYear()} CloudFen. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Globe className="h-5 w-5 text-white cursor-pointer hover:text-cyan-400" />
          <MessageSquare className="h-5 w-5 text-white cursor-pointer hover:text-cyan-400" />
          <Share2 className="h-5 w-5 text-white cursor-pointer hover:text-cyan-400" />
        </div>
      </div>
    </motion.footer>
  );
};

export default FooterSection;