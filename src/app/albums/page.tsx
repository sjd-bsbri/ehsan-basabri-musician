// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { 
//   FiMusic, 
//   FiCalendar, 
//   FiClock,
//   FiDisc,
//   FiDownload,
//   FiShare2,
//   FiHeadphones,
//   FiPlay,
//   FiHome,
//   FiArrowRight
// } from 'react-icons/fi'
// import MusicPlayer from '../components/MusicPlayer'
// import Header from '../components/Header'
// import Link from 'next/link'
// import { albums } from '../../data/albums' 

// export default function AlbumsPage() {
//   const [selectedAlbum, setSelectedAlbum] = useState<any>(null)
//   const [selectedTrack, setSelectedTrack] = useState<any>(null)

//   const handleTrackPlay = (album: any, track: any) => {
//     setSelectedTrack({
//       ...track,
//       artist: album.artist,
//       album: album.title,
//       cover: album.cover
//     })
//   }

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
//             {selectedAlbum ? (
//               <>
//                 <button onClick={() => setSelectedAlbum(null)} className="hover:text-white transition-colors">
//                   آلبوم‌ها
//                 </button>
//                 <span>/</span>
//                 <span className="text-white">{selectedAlbum.title}</span>
//               </>
//             ) : (
//               <span className="text-white">آلبوم‌ها</span>
//             )}
//           </motion.div>

//           {!selectedAlbum ? (
//             <>
//               {/* هدر صفحه */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-center mb-12"
//               >
//                 <div className="flex items-center justify-center gap-3 mb-4">
//                   <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
//                     <FiDisc className="text-white text-2xl" />
//                   </div>
//                   <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
//                     <span className="gradient-text">آلبوم‌های موسیقی</span>
//                   </h1>
//                 </div>
//                 <p className="text-gray-400 text-lg">مجموعه آلبوم‌های منتشر شده</p>
//               </motion.div>

//               {/* لیست آلبوم‌ها */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {albums.map((album, index) => (
//                   <motion.div
//                     key={album.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ y: -5 }}
//                     onClick={() => setSelectedAlbum(album)}
//                     className="glass-effect rounded-xl overflow-hidden cursor-pointer group"
//                   >
//                     <div className="relative aspect-square">
//                       <img 
//                         src={album.cover} 
//                         alt={album.title}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-transparent opacity-0 group-hover:opacity-100 group-hover:scale-110  transition-opacity flex items-center justify-center">
//                         <motion.div
//                           initial={{ scale: 0 }}
//                           whileInView={{ scale: 1 }}
//                           className="p-4 bg-white/20 backdrop-blur-sm rounded-full "
//                         >
//                           <FiPlay className="text-white text-3xl translate-x-0.5" />
//                         </motion.div>
//                       </div>
//                     </div>
                    
//                     <div className="p-4">
//                       <h3 className="font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
//                         {album.title}
//                       </h3>
//                       <p className="text-sm text-gray-400 mb-3">{album.genre} • {album.year}</p>
                      
//                       <div className="flex items-center justify-between text-xs text-gray-500">
//                         <span className="flex items-center gap-1">
//                           <FiMusic />
//                           {album.trackCount} قطعه
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <FiClock />
//                           {album.duration}
//                         </span>
//                       </div>
                      
//                       <div className="mt-3 pt-3 border-t border-white/10">
//                         <div className="flex items-center gap-1 text-xs text-gray-400">
//                           <FiHeadphones />
//                           <span>{album.stats.plays} پخش</span>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </>
//           ) : (
//             // نمایش جزئیات آلبوم
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//             >
//               <button
//                 onClick={() => {
//                   setSelectedAlbum(null)
//                   setSelectedTrack(null)
//                 }}
//                 className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
//               >
//                 <FiArrowRight />
//                 بازگشت به آلبوم‌ها
//               </button>

//               <div className="grid lg:grid-cols-3 gap-6">
//                 {/* اطلاعات آلبوم */}
//                 <div className="lg:col-span-1">
//                   <motion.div
//                     whileHover={{ scale: 1.02 }}
//                     className="relative rounded-2xl overflow-hidden shadow-2xl mb-6"
//                   >
//                     <img 
//                       src={selectedAlbum.cover} 
//                       alt={selectedAlbum.title}
//                       className="w-full aspect-square object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                   </motion.div>

//                   <div className="glass-effect rounded-xl p-6 space-y-4">
//                     <h3 className="text-2xl font-bold text-white">{selectedAlbum.title}</h3>
//                     <p className="text-gray-300">{selectedAlbum.description}</p>
                    
//                     <div className="space-y-2 text-sm">
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">سال انتشار</span>
//                         <span className="text-white">{selectedAlbum.year}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">ژانر</span>
//                         <span className="text-white">{selectedAlbum.genre}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">لیبل</span>
//                         <span className="text-white">{selectedAlbum.label}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">تعداد قطعات</span>
//                         <span className="text-white">{selectedAlbum.trackCount}</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-400">مدت زمان</span>
//                         <span className="text-white">{selectedAlbum.duration}</span>
//                       </div>
//                     </div>

//                     <div className="flex gap-3 pt-4">
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="flex-1 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold flex items-center justify-center gap-2"
//                       >
//                         <FiPlay />
//                         پخش همه
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="p-2 glass-effect rounded-lg text-gray-400 hover:text-white"
//                       >
//                         <FiShare2 />
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="p-2 glass-effect rounded-lg text-gray-400 hover:text-white"
//                       >
//                         <FiDownload />
//                       </motion.button>
//                     </div>

//                     {/* آمار */}
//                     <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
//                       <div className="text-center">
//                         <div className="text-lg font-bold text-white">{selectedAlbum.stats.plays}</div>
//                         <div className="text-xs text-gray-400">پخش</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-lg font-bold text-white">{selectedAlbum.stats.likes}</div>
//                         <div className="text-xs text-gray-400">پسند</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-lg font-bold text-white">{selectedAlbum.stats.shares}</div>
//                         <div className="text-xs text-gray-400">اشتراک</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* لیست قطعات و پلیر */}
//                 <div className="lg:col-span-2 space-y-6">
//                   {selectedTrack && (
//                     <MusicPlayer track={selectedTrack} />
//                   )}

//                   <div className="glass-effect rounded-xl p-6">
//                     <h4 className="text-xl font-bold text-white mb-4">لیست قطعات</h4>
//                     <div className="space-y-2">
//                       {selectedAlbum.tracks.map((track: any, index: number) => (
//                         <motion.div
//                           key={track.id}
//                           whileHover={{ x: 5 }}
//                           onClick={() => handleTrackPlay(selectedAlbum, track)}
//                           className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer group transition-all"
//                         >
//                           <span className="text-gray-500 w-8 text-center">{index + 1}</span>
//                           <div className="flex-1">
//                             <h5 className="text-white group-hover:text-purple-400 transition-colors">
//                               {track.title}
//                             </h5>
//                           </div>
//                           <span className="text-sm text-gray-400">{track.duration}</span>
//                           <FiPlay className="text-gray-400 group-hover:text-white transition-colors" />
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}

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
//         <footer className="py-6 sm:py-8 border-t border-white/10">
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
  FiMusic, 
  FiCalendar, 
  FiClock,
  FiDisc,
  FiDownload,
  FiShare2,
  FiHeadphones,
  FiPlay,
  FiHome,
  FiArrowRight
} from 'react-icons/fi'
import MusicPlayer from '../components/MusicPlayer'
import Header from '../components/Header'
import Link from 'next/link'
import { albums } from '../../data/albums' 

export default function AlbumsPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<any>(null)
  const [selectedTrack, setSelectedTrack] = useState<any>(null)

  const handleTrackPlay = (album: any, track: any) => {
    setSelectedTrack({
      ...track,
      artist: album.artist,
      album: album.title,
      cover: album.cover
    })
  }

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
            {selectedAlbum ? (
              <>
                <button onClick={() => setSelectedAlbum(null)} className="hover:text-white transition-colors">
                  آلبوم‌ها
                </button>
                <span>/</span>
                <span className="text-white">{selectedAlbum.title}</span>
              </>
            ) : (
              <span className="text-white">آلبوم‌ها</span>
            )}
          </motion.div>

          {!selectedAlbum ? (
            <>
              {/* هدر صفحه */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg">
                    <FiDisc className="text-white text-2xl" />
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                    <span className="gradient-text">آلبوم‌های موسیقی</span>
                  </h1>
                </div>
                <p className="text-gray-400 text-lg">مجموعه آلبوم‌های منتشر شده</p>
              </motion.div>

              {/* لیست آلبوم‌ها */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {albums.map((album, index) => (
                  <motion.div
                    key={album.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedAlbum(album)}
                    className="glass-effect rounded-xl overflow-hidden cursor-pointer group"
                  >
                    <div className="relative aspect-square">
                      <img 
                        src={album.cover} 
                        alt={album.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-transparent opacity-0 group-hover:opacity-100 group-hover:scale-110  transition-opacity flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          className="p-4 bg-white/20 backdrop-blur-sm rounded-full "
                        >
                          <FiPlay className="text-white text-3xl translate-x-0.5" />
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                        {album.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-3">{album.genre} • {album.year}</p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <FiMusic />
                          {album.trackCount} قطعه
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock />
                          {album.duration}
                        </span>
                      </div>
                      
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <div className="flex items-center gap-1 text-xs text-gray-400">
                          <FiHeadphones />
                          <span>{album.stats.plays} پخش</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            // نمایش جزئیات آلبوم
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <button
                onClick={() => {
                  setSelectedAlbum(null)
                  setSelectedTrack(null)
                }}
                className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <FiArrowRight />
                بازگشت به آلبوم‌ها
              </button>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* اطلاعات آلبوم */}
                <div className="lg:col-span-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl mb-6"
                  >
                    <img 
                      src={selectedAlbum.cover} 
                      alt={selectedAlbum.title}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </motion.div>

                  <div className="glass-effect rounded-xl p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white">{selectedAlbum.title}</h3>
                    <p className="text-gray-300">{selectedAlbum.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">سال انتشار</span>
                        <span className="text-white">{selectedAlbum.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ژانر</span>
                        <span className="text-white">{selectedAlbum.genre}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">لیبل</span>
                        <span className="text-white">{selectedAlbum.label}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">تعداد قطعات</span>
                        <span className="text-white">{selectedAlbum.trackCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">مدت زمان</span>
                        <span className="text-white">{selectedAlbum.duration}</span>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg text-white font-semibold flex items-center justify-center gap-2"
                      >
                        <FiPlay />
                        پخش همه
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 glass-effect rounded-lg text-gray-400 hover:text-white"
                      >
                        <FiShare2 />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 glass-effect rounded-lg text-gray-400 hover:text-white"
                      >
                        <FiDownload />
                      </motion.button>
                    </div>

                    {/* آمار */}
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">{selectedAlbum.stats.plays}</div>
                        <div className="text-xs text-gray-400">پخش</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">{selectedAlbum.stats.likes}</div>
                        <div className="text-xs text-gray-400">پسند</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white">{selectedAlbum.stats.shares}</div>
                        <div className="text-xs text-gray-400">اشتراک</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* لیست قطعات و پلیر */}
                <div className="lg:col-span-2 space-y-6">
                  {selectedTrack && (
                    <MusicPlayer track={selectedTrack} />
                  )}

                  <div className="glass-effect rounded-xl p-6">
                    <h4 className="text-xl font-bold text-white mb-4">لیست قطعات</h4>
                    <div className="space-y-2">
                      {selectedAlbum.tracks.map((track: any, index: number) => (
                        <motion.div
                          key={track.id}
                          whileHover={{ x: 5 }}
                          onClick={() => handleTrackPlay(selectedAlbum, track)}
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 cursor-pointer group transition-all"
                        >
                          <span className="text-gray-500 w-8 text-center">{index + 1}</span>
                          <div className="flex-1">
                            <h5 className="text-white group-hover:text-amber-400 transition-colors">
                              {track.title}
                            </h5>
                          </div>
                          <span className="text-sm text-gray-400">{track.duration}</span>
                          <FiPlay className="text-gray-400 group-hover:text-white transition-colors" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

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