// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import {
//   FiPlay,
//   FiMusic,
//   FiClock,
//   FiAward,
//   FiHeadphones,
//   FiGrid,
//   FiList,
//   FiArrowRight,
//   FiHome
// } from 'react-icons/fi'
// import MusicPlayer from '../components/MusicPlayer'
// import Header from '../components/Header'
// import Link from 'next/link'
// import { categories, samples } from '../../data/samples'

// export default function SampleWorksPage() {
//   const [selectedTrack, setSelectedTrack] = useState<any>(null)
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
//   const [selectedCategory, setSelectedCategory] = useState('همه')

//   const filteredSamples = selectedCategory === 'همه'
//     ? samples
//     : samples.filter(sample => sample.category === selectedCategory)

//   return (
//     <>
//       <Header />
//       <main className="min-h-screen pt-20 pb-10">
//         <div className="container-custom">
//           {/* بردکرامب */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex items-center gap-2 text-sm text-gray-400 mb-8"
//           >
//             <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
//               <FiHome />
//               خانه
//             </Link>
//             <span>/</span>
//             <span className="text-white">نمونه کارها</span>
//           </motion.div>

//           {/* هدر صفحه */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-12"
//           >
//             <div className="flex items-center justify-center gap-3 mb-4">
//               <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
//                 <FiMusic className="text-white text-2xl" />
//               </div>
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
//                 <span className="gradient-text">نمونه کارهای برتر</span>
//               </h1>
//             </div>
//             <p className="text-gray-400 text-lg">بهترین آثار من در یک نگاه</p>
//           </motion.div>

//           {/* فیلترها و نمای نمایش */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="flex flex-col sm:flex-row justify-between gap-4 mb-8"
//           >
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category, index) => (
//                 <motion.button
//                   key={category}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   onClick={() => setSelectedCategory(category)}
//                   className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all ${selectedCategory === category
//                     ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
//                     : 'glass-effect text-gray-300 hover:text-white'
//                     }`}
//                 >
//                   {category}
//                 </motion.button>
//               ))}
//             </div>

//             <div className="flex gap-2">
//               <button
//                 onClick={() => setViewMode('grid')}
//                 className={`p-2 rounded-lg transition-colors ${viewMode === 'grid'
//                   ? 'bg-purple-500/20 text-purple-400'
//                   : 'text-gray-400 hover:text-white'
//                   }`}
//               >
//                 <FiGrid className="text-lg" />
//               </button>
//               <button
//                 onClick={() => setViewMode('list')}
//                 className={`p-2 rounded-lg transition-colors ${viewMode === 'list'
//                   ? 'bg-purple-500/20 text-purple-400'
//                   : 'text-gray-400 hover:text-white'
//                   }`}
//               >
//                 <FiList className="text-lg" />
//               </button>
//             </div>
//           </motion.div>

//           {/* لیست آثار */}
//           <div className={viewMode === 'grid'
//             ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'
//             : 'space-y-4'
//           }>
//             {filteredSamples.map((sample, index) => (
//               <motion.div
//                 key={sample.id}
//                 // layout
//                 // transition={{ duration: 0.4, ease: "easeOut" }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className={`glass-effect rounded-xl overflow-hidden hover:bg-white/5 transition-all group`}
//               >
//                 {selectedTrack && selectedTrack.id === sample.id ? (
//                   <MusicPlayer
//                     track={selectedTrack}
//                     onClose={() => setSelectedTrack(null)}
//                   />
//                 ) : (
//                   <div
//                     onClick={() => setSelectedTrack(sample)}
//                     className={`cursor-pointer w-full h-full ${viewMode === 'list' ? 'flex gap-4 p-4 items-center' : 'p-4'
//                       }`}
//                   >
//                     {viewMode === 'grid' ? (
//                       // نمای گرید
//                       <>
//                         <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
//                           <img
//                             src={sample.cover}
//                             alt={sample.title}
//                             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                             <FiPlay className="text-white text-4xl" />
//                           </div>
//                           {sample.awards.length > 0 && (
//                             <div className="absolute top-2 left-2 p-2 bg-purple-500/80 rounded-lg">
//                               <FiAward className="text-white text-sm" />
//                             </div>
//                           )}
//                         </div>
//                         <h3 className="font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
//                           {sample.title}
//                         </h3>
//                         <p className="text-sm text-gray-400 mb-2">{sample.genre}</p>

//                         {/* ✨ توضیحات اضافه شد */}
//                         <p className="text-xs text-gray-500 mb-3 h-10 line-clamp-2">
//                           {sample.description}
//                         </p>

//                         <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
//                           <span className="flex items-center gap-1">
//                             <FiHeadphones />
//                             {sample.plays}
//                           </span>
//                           <span className="flex items-center gap-1">
//                             <FiClock />
//                             {sample.duration}
//                           </span>
//                         </div>
//                       </>
//                     ) : (
//                       // نمای لیست
//                       <>
//                         <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
//                           <img
//                             src={sample.cover}
//                             alt={sample.title}
//                             className="w-full h-full object-cover"
//                           />
//                           {sample.awards.length > 0 && (
//                             <div className="absolute top-1 left-1 p-1 bg-purple-500/80 rounded">
//                               <FiAward className="text-white text-xs" />
//                             </div>
//                           )}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <h3 className="font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
//                             {sample.title}
//                           </h3>
//                           <p className="text-sm text-gray-400 mb-2">{sample.genre} • {sample.year}</p>

//                           {/* ✨ توضیحات اضافه شد */}
//                           <p className="text-xs text-gray-500 truncate">
//                             {sample.description}
//                           </p>

//                           <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
//                             <span className="flex items-center gap-1">
//                               <FiHeadphones />
//                               {sample.plays}
//                             </span>
//                             <span className="flex items-center gap-1">
//                               <FiClock />
//                               {sample.duration}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="flex items-center">
//                           <FiPlay className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           {/* دکمه بازگشت */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="mt-12 text-center"
//           >
//             <Link href="/">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 glass-effect rounded-full text-white font-semibold flex items-center gap-2 mx-auto hover:bg-white/10 transition-all"
//               >
//                 <FiArrowRight />
//                 بازگشت به صفحه اصلی
//               </motion.button>
//             </Link>
//           </motion.div>
//         </div>
//       </main>
//       <footer className="py-6 sm:py-8 border-t border-white/10">
//         <div className="container-custom text-center">
//           <p className="text-gray-400 text-sm sm:text-base">
//             © ۱۴۰۴ - تمامی حقوق محفوظ است | طراحی شده با ❤️ توسط سجاد باصبری
//           </p>
//         </div>
//       </footer>
//     </>
//   )
// }



'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiPlay,
  FiMusic,
  FiClock,
  FiAward,
  FiHeadphones,
  FiGrid,
  FiList,
  FiArrowRight,
  FiHome
} from 'react-icons/fi'
import MusicPlayer from '../components/MusicPlayer'
import Header from '../components/Header'
import Link from 'next/link'
import { categories, samples } from '../../data/samples'

export default function SampleWorksPage() {
  const [selectedTrack, setSelectedTrack] = useState<any>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('همه')

  const filteredSamples = selectedCategory === 'همه'
    ? samples
    : samples.filter(sample => sample.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-10">
        <div className="container-custom">
          {/* بردکرامب */}
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
            <span className="text-white">نمونه کارها</span>
          </motion.div>

          {/* هدر صفحه */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg">
                <FiMusic className="text-white text-2xl" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="gradient-text">نمونه کارهای برتر</span>
              </h1>
            </div>
            <p className="text-gray-400 text-lg">بهترین آثار من در یک نگاه</p>
          </motion.div>

          {/* فیلترها و نمای نمایش */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-between gap-4 mb-8"
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm transition-all ${selectedCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white'
                    : 'glass-effect text-gray-300 hover:text-white'
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid'
                  ? 'bg-amber-500/20 text-amber-400'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                <FiGrid className="text-lg" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list'
                  ? 'bg-amber-500/20 text-amber-400'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                <FiList className="text-lg" />
              </button>
            </div>
          </motion.div>

          {/* لیست آثار */}
          <div className={viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'
            : 'space-y-4'
          }>
            {filteredSamples.map((sample, index) => (
              <motion.div
                key={sample.id}
                // layout
                // transition={{ duration: 0.4, ease: "easeOut" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`glass-effect rounded-xl overflow-hidden hover:bg-white/5 transition-all group`}
              >
                {selectedTrack && selectedTrack.id === sample.id ? (
                  <MusicPlayer
                    track={selectedTrack}
                    onClose={() => setSelectedTrack(null)}
                  />
                ) : (
                  <div
                    onClick={() => setSelectedTrack(sample)}
                    className={`cursor-pointer w-full h-full ${viewMode === 'list' ? 'flex gap-4 p-4 items-center' : 'p-4'
                      }`}
                  >
                    {viewMode === 'grid' ? (
                      // نمای گرید
                      <>
                        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                          <img
                            src={sample.cover}
                            alt={sample.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <FiPlay className="text-white text-4xl" />
                          </div>
                          {sample.awards.length > 0 && (
                            <div className="absolute top-2 left-2 p-2 bg-amber-500/80 rounded-lg">
                              <FiAward className="text-white text-sm" />
                            </div>
                          )}
                        </div>
                        <h3 className="font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                          {sample.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">{sample.genre}</p>

                        {/* ✨ توضیحات اضافه شد */}
                        <p className="text-xs text-gray-500 mb-3 h-10 line-clamp-2">
                          {sample.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                          <span className="flex items-center gap-1">
                            <FiHeadphones />
                            {sample.plays}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiClock />
                            {sample.duration}
                          </span>
                        </div>
                      </>
                    ) : (
                      // نمای لیست
                      <>
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={sample.cover}
                            alt={sample.title}
                            className="w-full h-full object-cover"
                          />
                          {sample.awards.length > 0 && (
                            <div className="absolute top-1 left-1 p-1 bg-amber-500/80 rounded">
                              <FiAward className="text-white text-xs" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                            {sample.title}
                          </h3>
                          <p className="text-sm text-gray-400 mb-2">{sample.genre} • {sample.year}</p>

                          {/* ✨ توضیحات اضافه شد */}
                          <p className="text-xs text-gray-500 truncate">
                            {sample.description}
                          </p>

                          <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                            <span className="flex items-center gap-1">
                              <FiHeadphones />
                              {sample.plays}
                            </span>
                            <span className="flex items-center gap-1">
                              <FiClock />
                              {sample.duration}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <FiPlay className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* دکمه بازگشت */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass-effect rounded-full text-white font-semibold flex items-center gap-2 mx-auto hover:bg-white/10 transition-all"
              >
                <FiArrowRight />
                بازگشت به صفحه اصلی
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>
      <footer className="py-6 sm:py-8 border-t border-white/10">
        <div className="container-custom text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © ۱۴۰۴ - تمامی حقوق محفوظ است | طراحی شده با ❤️ توسط سجاد باصبری
          </p>
        </div>
      </footer>
    </>
  )
}