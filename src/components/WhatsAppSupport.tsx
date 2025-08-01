"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppSupport = () => {
  const phoneNumber = "7678181385";

  return (
    <motion.a
      // Initial state remains the same (hidden)
      initial={{ opacity: 0, scale: 0.5 }}
      
      // Animate to a pulsing state
      animate={{
        opacity: 1,
        scale: [1, 1.05, 1], // Keyframes for the pulse
      }}

      // Add a hover effect
      whileHover={{
        scale: 1.15,
        rotate: 10,
      }}

      // Add a tap effect
      whileTap={{ scale: 0.9 }}

      // Transition settings for the pulse animation
      transition={{
        duration: 2, // Slower, more gentle pulse
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
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