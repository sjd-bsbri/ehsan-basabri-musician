'use client'

import { useState, useEffect } from 'react'
import Header from '../app/components/Header'
import HeroSection from '../app/components/HeroSection'
import WorksSection from '../app/components/WorksSection'
import AboutSection from '../app/components/AboutSection'
import ResumeSection from '../app/components/ResumeSection'
import ContactSection from '../app/components/ContactSection'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <WorksSection />
        <AboutSection />
        <ResumeSection />
        <ContactSection />
      </motion.div>

      {/* فوتر */}
      <footer className="py-6 sm:py-8 border-t border-white/10">
        <div className="container-custom text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © ۱۴۰۴ - تمامی حقوق محفوظ است | طراحی شده با ❤️ توسط سجاد باصبری
          </p>
        </div>
      </footer>

      {/* دکمه بازگشت به بالا */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 sm:bottom-8 left-4 sm:left-6 lg:left-8 p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all z-40"
            aria-label="بازگشت به بالا"
          >
            <FiArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  )
}