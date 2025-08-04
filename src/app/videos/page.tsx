'use client'

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlayCircle, FiX, FiVideo, FiHome, FiArrowRight } from 'react-icons/fi';
import { videos } from '../../data/videos';
import Header from '../components/Header';
import Link from 'next/link';

const VideoPortfolioPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!selectedVideo && videoRef.current) {
      videoRef.current.pause();
    }
  }, [selectedVideo]);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-10">
        <div className="container-custom">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <FiHome />
              خانه
            </Link>
            <span>/</span>
            <span className="text-white">نمونه کارهای ویدیویی</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              <span className="gradient-text">نمونه کارهای ویدیویی</span>
            </h1>
            <p className="text-gray-400 text-lg">موسیقی در قاب تصویر</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(168, 85, 247, 0.2), 0 10px 10px -5px rgba(168, 85, 247, 0.1)' }}
                onClick={() => setSelectedVideo(video)}
                className="glass-effect rounded-xl overflow-hidden cursor-pointer group"
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
                    <FiPlayCircle className="text-white text-5xl sm:text-6xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <span className="inline-block px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full mb-2">
                    {video.category}
                  </span>
                  <h3 className="font-bold text-white text-base sm:text-lg mb-2 group-hover:text-purple-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            >
              <video
                ref={videoRef}
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full"
              />
              <motion.button
                whileHover={{ scale: 1.2, rotate: 90 }}
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 p-2 bg-white/10 rounded-full text-white z-10"
                aria-label="بستن ویدیو"
              >
                <FiX />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-6 sm:py-8 border-t border-white/10">
        <div className="container-custom text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © ۱۴۰۴ - تمامی حقوق محفوظ است | طراحی شده با ❤️ توسط سجاد باصبری
          </p>
        </div>
      </footer>
    </>
  );
};

export default VideoPortfolioPage;