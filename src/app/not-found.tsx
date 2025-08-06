'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FiDisc, FiHome } from 'react-icons/fi';

const Turntable = () => {
  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
      <div className="absolute w-full h-full bg-fuchsia-500/10 rounded-full blur-3xl"></div>

      <motion.div
        className="w-full h-full rounded-full flex items-center justify-center bg-gray-800 shadow-2xl border-4 border-gray-700/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-11/12 h-11/12 rounded-full border-t-2 border-gray-600/50"></div>
        
        <div className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center shadow-inner">
          <FiDisc className="text-white/70 text-4xl" />
        </div>
        <div className="absolute w-4 h-4 rounded-full bg-gray-800 border-2 border-gray-500"></div>
      </motion.div>

      <motion.div
        className="absolute w-40 h-10 -right-20 top-8 origin-bottom-left"
        initial={{ rotate: -15 }}
        animate={{ rotate: [-15, -12, -15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-full h-2 bg-gray-500 rounded-full"></div>
        <div className="absolute w-6 h-6 bg-gray-400 rounded-full -top-2 right-0 border-4 border-gray-600"></div>
      </motion.div>
    </div>
  );
};


export default function NotFound() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-200 overflow-hidden p-6">
      <motion.div
        className="text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Turntable />

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mt-16 tracking-wider"
          variants={itemVariants}
        >
          این شیار پیدا نشد
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mt-4 max-w-lg text-gray-400"
          variants={itemVariants}
        >
          به نظر می‌رسد این صفحه از آرشیو ما خارج شده. اجازه دهید شما را به ترک اصلی بازگردانیم.
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-12">
          <Link href="/">
            <button className="group flex items-center justify-center px-8 py-3 bg-transparent border-2 border-fuchsia-500 text-fuchsia-400 font-bold rounded-full shadow-lg hover:bg-fuchsia-500 hover:text-white hover:scale-105 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-fuchsia-400">
              <FiHome className="ml-2 transition-transform duration-300" />
              بازگشت به صفحه اصلی
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}


