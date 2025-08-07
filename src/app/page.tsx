'use client'

import { useState, useEffect } from 'react'
import Header from '../app/components/Header'
import HeroSection from '../app/components/HeroSection'
import WorksSection from '../app/components/WorksSection'
import VideoSection from '../app/components/VideoSection'
import AboutSection from '../app/components/AboutSection'
import ResumeSection from '../app/components/ResumeSection'
import ContactSection from '../app/components/ContactSection'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // استفاده از هوک‌های framer-motion برای انیمیشن نرم
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      // نمایش دکمه بعد از مقداری اسکرول
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
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
        <VideoSection />
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




      {/* دکمه بازگشت به بالا با نمایشگر پیشرفت اسکرول */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 sm:bottom-8 left-4 sm:left-6 lg:left-8 z-40"
          >
            <button
              onClick={scrollToTop}
              className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-900/50 backdrop-blur-sm flex items-center justify-center text-white shadow-lg hover:bg-gray-900/70 transition-all focus:outline-none"
              aria-label="بازگشت به بالا"
            >
              <FiArrowUp className="w-6 h-6 z-10" />
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* پس‌زمینه حلقه */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="transparent"
                  stroke="#ffffff"
                  strokeOpacity="0.1"
                  strokeWidth="8"
                />
                {/* حلقه پیشرفت */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="transparent"
                  stroke="url(#progressGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  className="transform -rotate-90 origin-center"
                  style={{ pathLength }} // استفاده مستقیم از مقدار انیمیت شده
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
