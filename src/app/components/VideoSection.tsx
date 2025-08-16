// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiPlayCircle, FiX, FiVideo } from 'react-icons/fi'
// import { videos } from '../../data/videos'

// const VideoSection = () => {
//   const [selectedVideo, setSelectedVideo] = useState<any>(null)

//   const videoRef = useRef<HTMLVideoElement>(null);

//   // افکت برای توقف ویدیو هنگام بسته شدن مودال
//   useEffect(() => {
//     if (!selectedVideo && videoRef.current) {
//       videoRef.current.pause();
//     }
//   }, [selectedVideo]);

//   return (
//     <section id="videos" className="py-16 sm:py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />
      
//       <div className="container-custom relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-12"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
//             <span className="gradient-text">نمونه کارهای ویدیویی</span>
//           </h2>
//           <p className="text-gray-400 text-base sm:text-lg">موسیقی در قاب تصویر</p>
//         </motion.div>

//         {/* گالری ویدیوها */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {videos.map((video, index) => (
//             <motion.div
//               key={video.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(168, 85, 247, 0.2), 0 10px 10px -5px rgba(168, 85, 247, 0.1)' }}
//               onClick={() => setSelectedVideo(video)}
//               className="glass-effect rounded-xl overflow-hidden cursor-pointer group"
//             >
//               <div className="relative aspect-video">
//                 <img 
//                   src={video.thumbnailUrl} 
//                   alt={video.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
//                   <FiPlayCircle className="text-white text-5xl sm:text-6xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
//                 </div>
//               </div>
//               <div className="p-4 sm:p-5">
//                 <span className="inline-block px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full mb-2">
//                   {video.category}
//                 </span>
//                 <h3 className="font-bold text-white text-base sm:text-lg mb-2 group-hover:text-purple-400 transition-colors">
//                   {video.title}
//                 </h3>
//                 <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">{video.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* مودال پخش ویدیو */}
//       <AnimatePresence>
//         {selectedVideo && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelectedVideo(null)}
//               className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//             >
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//                 onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن مودال با کلیک روی ویدیو
//                 className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
//               >
//                 <video
//                   ref={videoRef}
//                   src={selectedVideo.videoUrl}
//                   controls
//                   autoPlay
//                   className="w-full h-full"
//                 />
//                 <motion.button
//                   whileHover={{ scale: 1.2, rotate: 90 }}
//                   onClick={() => setSelectedVideo(null)}
//                   className="absolute top-3 right-3 p-2 bg-white/10 rounded-full text-white z-10"
//                   aria-label="بستن ویدیو"
//                 >
//                   <FiX />
//                 </motion.button>
//               </motion.div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }

// export default VideoSection



'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlayCircle, FiX, FiVideo } from 'react-icons/fi'
import { videos } from '../../data/videos'

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<any>(null)

  const videoRef = useRef<HTMLVideoElement>(null);

  // افکت برای توقف ویدیو هنگام بسته شدن مودال
  useEffect(() => {
    if (!selectedVideo && videoRef.current) {
      videoRef.current.pause();
    }
  }, [selectedVideo]);

  return (
    <section id="videos" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent" />
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">نمونه کارهای ویدیویی</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">موسیقی در قاب تصویر</p>
        </motion.div>

        {/* گالری ویدیوها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(245, 158, 11, 0.2), 0 10px 10px -5px rgba(245, 158, 11, 0.1)' }}
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
                <span className="inline-block px-3 py-1 text-xs bg-amber-500/20 text-amber-400 rounded-full mb-2">
                  {video.category}
                </span>
                <h3 className="font-bold text-white text-base sm:text-lg mb-2 group-hover:text-amber-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* مودال پخش ویدیو */}
      <AnimatePresence>
        {selectedVideo && (
          <>
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
                onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن مودال با کلیک روی ویدیو
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
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default VideoSection