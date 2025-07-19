// components/WhatsAppSupport.tsx or WhatsAppSupport.jsx
'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatsAppSupport = () => {
  const phoneNumber = '7678181385';

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 group"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={24} />
      <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded -top-10 right-0">
        Need help? Chat now!
      </span>
    </motion.a>
  );
};

export default WhatsAppSupport;
