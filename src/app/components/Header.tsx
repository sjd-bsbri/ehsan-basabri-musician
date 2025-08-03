'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMusic, FiHome, FiUser, FiMail, FiFileText } from 'react-icons/fi'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // بستن منو هنگام تغییر سایز
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const menuItems = [
    { title: 'خانه', icon: FiHome, href: '#home' },
    { title: 'آثار', icon: FiMusic, href: '#works' },
    { title: 'درباره من', icon: FiUser, href: '#about' },
    { title: 'رزومه', icon: FiFileText, href: '#resume' },
    { title: 'تماس', icon: FiMail, href: '#contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass-effect shadow-2xl py-2 sm:py-3' : 'py-3 sm:py-4'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between">
            {/* لوگو */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <FiMusic className="text-white text-lg sm:text-xl" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold gradient-text">آهنگساز</h1>
            </motion.div>

            {/* منوی دسکتاپ */}
            <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 lg:gap-2 text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    <item.icon className="text-base lg:text-lg" />
                    <span>{item.title}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* دکمه منوی موبایل */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-2xl text-gray-300 hover:text-white transition-colors"
              aria-label="منوی موبایل"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* منوی موبایل - تمام صفحه */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* پس‌زمینه تاریک */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 z-40 md:hidden"
            />
            
            {/* منوی کشویی */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-gray-900/95 backdrop-blur-xl z-50 md:hidden"
            >
              <div className="p-6">
                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="mb-8 text-2xl text-gray-300 hover:text-white transition-colors"
                  aria-label="بستن منو"
                >
                  <FiX />
                </button> */}
                
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                      >
                        <item.icon className="text-xl" />
                        <span className="text-lg">{item.title}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header