// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import MusicPlayer from './MusicPlayer'
// import { FiMusic, FiCalendar, FiClock, FiX } from 'react-icons/fi'
// import { categories, tracks } from '../../data/works'

// const WorksSection = () => {
//   const [selectedCategory, setSelectedCategory] = useState('همه')
//   const [selectedTrack, setSelectedTrack] = useState<any>(null)
//   const [showPlayerModal, setShowPlayerModal] = useState(false)

//   const filteredTracks = selectedCategory === 'همه'
//     ? tracks
//     : tracks.filter(track => track.category === selectedCategory)

//   const handleTrackSelect = (track: any) => {
//     setSelectedTrack(track)
//     if (window.innerWidth < 768) {
//       setShowPlayerModal(true)
//     }
//   }

//   const handleClosePlayer = () => {
//     setShowPlayerModal(false);
//     setSelectedTrack(null);
//   }


//   return (
//     <section id="works" className="py-16 sm:py-20">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-8 sm:mb-12"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
//             <span className="gradient-text">آثار موسیقی</span>
//           </h2>
//           <p className="text-gray-400 text-base sm:text-lg">مجموعه‌ای از بهترین آثار من</p>
//         </motion.div>

//         {/* دسته‌بندی‌ها */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 px-2 sm:px-0"
//         >
//           {categories.map((category, index) => (
//             <motion.button
//               key={category}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-3 sm:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm lg:text-base transition-all ${selectedCategory === category
//                   ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
//                   : 'glass-effect text-gray-300 hover:text-white'
//                 }`}
//               // initial={{ opacity: 0, x: -20 }}
//               // animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               {category}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* پلیر موسیقی - دسکتاپ */}
//         {selectedTrack && !showPlayerModal && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="hidden md:block mb-12 max-w-4xl mx-auto"
//           >
//             <MusicPlayer track={selectedTrack} />
//           </motion.div>
//         )}

//         {/* لیست آثار */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ staggerChildren: 0.1 }}
//         >
//           {filteredTracks.map((track, index) => (
//             <motion.div
//               key={track.id}
//               // initial={{ opacity: 0, y: 20 }}
//               // whileInView={{ opacity: 1, y: 0 }}
//               // viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               onClick={() => handleTrackSelect(track)}
//               className="glass-effect rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-white/10 transition-all group"
//             >
//               <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
//                 <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
//                   <img
//                     src={track.cover}
//                     alt={track.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                     <FiMusic className="text-white text-xl sm:text-2xl" />
//                   </div>
//                 </div>

//                 <div className="flex-1 min-w-0">
//                   <h3 className="font-bold text-base sm:text-lg text-white mb-1 group-hover:text-purple-400 transition-colors line-clamp-1">
//                     {track.title}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-gray-400 mb-2 line-clamp-1">{track.album}</p>
//                   <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-500">
//                     <span className="flex items-center gap-1">
//                       <FiClock className="text-xs" />
//                       {track.duration}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <FiCalendar className="text-xs" />
//                       {track.year}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 mb-3 sm:mb-4">
//                 {track.description}
//               </p>

//               <div className="pt-3 sm:pt-4 border-t border-white/10">
//                 <span className="text-xs px-2 sm:px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">
//                   {track.category}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* مودال پلیر موبایل */}
//       <AnimatePresence>
//         {showPlayerModal && selectedTrack && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={handleClosePlayer}
//               className="fixed inset-0 bg-black/80 z-40 md:hidden"
//             />
//             <motion.div
//               initial={{ y: '100%' }}
//               animate={{ y: 0 }}
//               exit={{ y: '100%' }}
//               transition={{ type: 'spring', damping: 15 }}
//               className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
//             >
//               <MusicPlayer
//                 track={selectedTrack}
//                 onClose={handleClosePlayer}
//               />
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }

// export default WorksSection



'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MusicPlayer from './MusicPlayer'
import { FiMusic, FiCalendar, FiClock, FiX } from 'react-icons/fi'
import { categories, tracks } from '../../data/works'

const WorksSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('همه')
  const [selectedTrack, setSelectedTrack] = useState<any>(null)
  const [showPlayerModal, setShowPlayerModal] = useState(false)

  const filteredTracks = selectedCategory === 'همه'
    ? tracks
    : tracks.filter(track => track.category === selectedCategory)

  const handleTrackSelect = (track: any) => {
    setSelectedTrack(track)
    if (window.innerWidth < 768) {
      setShowPlayerModal(true)
    }
  }

  const handleClosePlayer = () => {
    setShowPlayerModal(false);
    setSelectedTrack(null);
  }


  return (
    <section id="works" className="py-16 sm:py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">آثار موسیقی</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">مجموعه‌ای از بهترین آثار من</p>
        </motion.div>

        {/* دسته‌بندی‌ها */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 px-2 sm:px-0"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-5 lg:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm lg:text-base transition-all ${selectedCategory === category
                  ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white'
                  : 'glass-effect text-gray-300 hover:text-white'
                }`}
              // initial={{ opacity: 0, x: -20 }}
              // animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* پلیر موسیقی - دسکتاپ */}
        {selectedTrack && !showPlayerModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden md:block mb-12 max-w-4xl mx-auto"
          >
            <MusicPlayer track={selectedTrack} />
          </motion.div>
        )}

        {/* لیست آثار */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredTracks.map((track, index) => (
            <motion.div
              key={track.id}
              // initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => handleTrackSelect(track)}
              className="glass-effect rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-white/10 transition-all group"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <FiMusic className="text-white text-xl sm:text-2xl" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base sm:text-lg text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-2 line-clamp-1">{track.album}</p>
                  <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FiClock className="text-xs" />
                      {track.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiCalendar className="text-xs" />
                      {track.year}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 mb-3 sm:mb-4">
                {track.description}
              </p>

              <div className="pt-3 sm:pt-4 border-t border-white/10">
                <span className="text-xs px-2 sm:px-3 py-1 rounded-full bg-amber-500/20 text-amber-400">
                  {track.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* مودال پلیر موبایل */}
      <AnimatePresence>
        {showPlayerModal && selectedTrack && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClosePlayer}
              className="fixed inset-0 bg-black/80 z-40 md:hidden"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 15 }}
              className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
            >
              <MusicPlayer
                track={selectedTrack}
                onClose={handleClosePlayer}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export default WorksSection