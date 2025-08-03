'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WaveSurfer from 'wavesurfer.js'
import { 
  FiPlay, 
  FiPause, 
  FiSkipBack, 
  FiSkipForward, 
  FiVolume2,
  FiDownload,
  FiHeart,
  FiRepeat,
  FiShuffle,
  FiX
} from 'react-icons/fi'

interface Track {
  id: number
  title: string
  artist: string
  album: string
  duration: string
  url: string
  cover: string
}

interface MusicPlayerProps {
  track: Track
  onClose?: () => void
}

const MusicPlayer = ({ track, onClose }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isLiked, setIsLiked] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [showVolume, setShowVolume] = useState(false)
  
  const waveformRef = useRef<HTMLDivElement>(null)
  const wavesurfer = useRef<WaveSurfer | null>(null)

  useEffect(() => {
    if (waveformRef.current && track.url) {
      // تنظیم ارتفاع waveform بر اساس سایز صفحه
      const waveHeight = window.innerWidth < 640 ? 40 : 60
      
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#a855f7',
        progressColor: '#ec4899',
        cursorColor: '#ffffff',
        barWidth: window.innerWidth < 640 ? 2 : 3,
        barRadius: 3,
        responsive: true,
        height: waveHeight,
        normalize: true,
        backend: 'WebAudio',
      })

      wavesurfer.current.load(track.url)

      wavesurfer.current.on('ready', () => {
        setDuration(wavesurfer.current!.getDuration())
        wavesurfer.current!.setVolume(volume)
      })

      wavesurfer.current.on('audioprocess', () => {
        setCurrentTime(wavesurfer.current!.getCurrentTime())
      })

      wavesurfer.current.on('finish', () => {
        setIsPlaying(false)
        if (isRepeat) {
          wavesurfer.current!.play()
          setIsPlaying(true)
        }
      })

      return () => {
        wavesurfer.current?.destroy()
      }
    }
  }, [track.url, volume, isRepeat])

  const handlePlayPause = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause()
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (wavesurfer.current) {
      wavesurfer.current.setVolume(newVolume)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect rounded-2xl p-4 sm:p-6 shadow-2xl"
    >
      {/* دکمه بستن در موبایل */}
      {onClose && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 left-4 p-2 glass-effect rounded-full text-gray-400 hover:text-white transition-colors md:hidden"
        >
          <FiX className="text-xl" />
        </motion.button>
      )}

      {/* اطلاعات آهنگ */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
        >
          <img 
            src={track.cover} 
            alt={track.title}
            className="w-full h-full object-cover"
          />
          <AnimatePresence>
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center"
              >
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 sm:w-1 bg-white rounded-full"
                      animate={{
                        height: [8, 20, 8],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="flex-1 text-center sm:text-right">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-1">{track.title}</h3>
          <p className="text-sm sm:text-base text-gray-400 line-clamp-1">{track.artist}</p>
          <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">{track.album}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          className={`p-2 sm:p-3 rounded-full transition-colors ${
            isLiked ? 'text-pink-500' : 'text-gray-400 hover:text-white'
          }`}
        >
          <FiHeart className={`text-lg sm:text-xl ${isLiked ? 'fill-current' : ''}`} />
        </motion.button>
      </div>

      {/* Waveform */}
      <div className="mb-4">
        <div ref={waveformRef} className="w-full" />
      </div>

      {/* زمان */}
      <div className="flex justify-between text-xs sm:text-sm text-gray-400 mb-4">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* کنترل‌های پخش */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsShuffle(!isShuffle)}
          className={`p-1.5 sm:p-2 rounded-full transition-colors ${
            isShuffle ? 'text-purple-500' : 'text-gray-400 hover:text-white'
          }`}
        >
          <FiShuffle className="text-base sm:text-xl" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors"
        >
          <FiSkipBack className="text-xl sm:text-2xl" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePlayPause}
          className="p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all"
        >
          {isPlaying ? (
            <FiPause className="text-xl sm:text-2xl" />
          ) : (
            <FiPlay className="text-xl sm:text-2xl translate-x-0.5" />
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors"
        >
          <FiSkipForward className="text-xl sm:text-2xl" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsRepeat(!isRepeat)}
          className={`p-1.5 sm:p-2 rounded-full transition-colors ${
            isRepeat ? 'text-purple-500' : 'text-gray-400 hover:text-white'
          }`}
        >
          <FiRepeat className="text-base sm:text-xl" />
        </motion.button>
      </div>

      {/* کنترل صدا و دانلود */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* دکمه صدا در موبایل */}
        <button
          onClick={() => setShowVolume(!showVolume)}
          className="sm:hidden p-2 text-gray-400 hover:text-white transition-colors"
        >
          <FiVolume2 className="text-lg" />
        </button>
        
        {/* آیکون صدا در دسکتاپ */}
        <FiVolume2 className="hidden sm:block text-gray-400" />
        
        {/* اسلایدر صدا */}
        <div className={`flex-1 ${showVolume ? 'block' : 'hidden sm:block'}`}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-gray-700 rounded-full appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #a855f7 ${volume * 100}%, #374151 ${volume * 100}%)`
            }}
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 text-gray-400 hover:text-white transition-colors"
        >
          <FiDownload className="text-lg sm:text-xl" />
        </motion.button>
      </div>
    </motion.div>
  )
}

export default MusicPlayer





// // components/MusicPlayer.tsx
// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import WaveSurfer from 'wavesurfer.js'
// import { 
//   FiPlay, 
//   FiPause, 
//   FiSkipBack, 
//   FiSkipForward, 
//   FiVolume2,
//   FiDownload,
//   FiHeart,
//   FiRepeat,
//   FiShuffle,
//   FiX,
//   FiVolumeX
// } from 'react-icons/fi'

// interface Track {
//   id: number
//   title: string
//   artist: string
//   album: string
//   duration: string
//   url: string
//   cover: string
// }

// interface MusicPlayerProps {
//   track: Track
//   onClose?: () => void
// }

// const MusicPlayer = ({ track, onClose }: MusicPlayerProps) => {
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [currentTime, setCurrentTime] = useState(0)
//   const [duration, setDuration] = useState(0)
//   const [volume, setVolume] = useState(0.7)
//   const [previousVolume, setPreviousVolume] = useState(0.7)
//   const [isLiked, setIsLiked] = useState(false)
//   const [isRepeat, setIsRepeat] = useState(false)
//   const [isShuffle, setIsShuffle] = useState(false)
//   const [showVolume, setShowVolume] = useState(false)
//   const [isDragging, setIsDragging] = useState(false)
  
//   const waveformRef = useRef<HTMLDivElement>(null)
//   const wavesurfer = useRef<WaveSurfer | null>(null)
//   const progressRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (waveformRef.current && track.url) {
//       const waveHeight = window.innerWidth < 640 ? 40 : 60
      
//       wavesurfer.current = WaveSurfer.create({
//         container: waveformRef.current,
//         waveColor: '#a855f7',
//         progressColor: '#ec4899',
//         cursorColor: '#ffffff',
//         barWidth: window.innerWidth < 640 ? 2 : 3,
//         barRadius: 3,
//         responsive: true,
//         height: waveHeight,
//         normalize: true,
//         backend: 'WebAudio',
//       })

//       wavesurfer.current.load(track.url)

//       wavesurfer.current.on('ready', () => {
//         setDuration(wavesurfer.current!.getDuration())
//         wavesurfer.current!.setVolume(volume)
//       })

//       wavesurfer.current.on('audioprocess', () => {
//         if (!isDragging) {
//           setCurrentTime(wavesurfer.current!.getCurrentTime())
//         }
//       })

//       wavesurfer.current.on('finish', () => {
//         setIsPlaying(false)
//         if (isRepeat) {
//           wavesurfer.current!.play()
//           setIsPlaying(true)
//         }
//       })

//       return () => {
//         wavesurfer.current?.destroy()
//       }
//     }
//   }, [track.url, volume, isRepeat])

//   const handlePlayPause = () => {
//     if (wavesurfer.current) {
//       wavesurfer.current.playPause()
//       setIsPlaying(!isPlaying)
//     }
//   }

//   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newVolume = parseFloat(e.target.value)
//     setVolume(newVolume)
//     if (wavesurfer.current) {
//       wavesurfer.current.setVolume(newVolume)
//     }
//   }

//   const handleMuteToggle = () => {
//     if (volume > 0) {
//       setPreviousVolume(volume)
//       setVolume(0)
//       if (wavesurfer.current) {
//         wavesurfer.current.setVolume(0)
//       }
//     } else {
//       setVolume(previousVolume)
//       if (wavesurfer.current) {
//         wavesurfer.current.setVolume(previousVolume)
//       }
//     }
//   }

//   // Progress bar handlers
//   const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (progressRef.current && wavesurfer.current && duration > 0) {
//       const rect = progressRef.current.getBoundingClientRect()
//       const x = e.clientX - rect.left
//       const percentage = x / rect.width
//       const newTime = percentage * duration
//       wavesurfer.current.seekTo(percentage)
//       setCurrentTime(newTime)
//     }
//   }

//   const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     setIsDragging(true)
//     handleProgressClick(e)
//   }

//   const handleProgressMouseMove = (e: MouseEvent) => {
//     if (isDragging && progressRef.current && wavesurfer.current && duration > 0) {
//       const rect = progressRef.current.getBoundingClientRect()
//       const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
//       const percentage = x / rect.width
//       const newTime = percentage * duration
//       setCurrentTime(newTime)
//       wavesurfer.current.seekTo(percentage)
//     }
//   }

//   const handleProgressMouseUp = () => {
//     setIsDragging(false)
//   }

//   useEffect(() => {
//     if (isDragging) {
//       document.addEventListener('mousemove', handleProgressMouseMove)
//       document.addEventListener('mouseup', handleProgressMouseUp)
//       return () => {
//         document.removeEventListener('mousemove', handleProgressMouseMove)
//         document.removeEventListener('mouseup', handleProgressMouseUp)
//       }
//     }
//   }, [isDragging, duration])

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60)
//     const secs = Math.floor(seconds % 60)
//     return `${mins}:${secs.toString().padStart(2, '0')}`
//   }

//   const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="glass-effect rounded-2xl p-4 sm:p-6 shadow-2xl"
//     >
//       {/* دکمه بستن در موبایل */}
//       {onClose && (
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={onClose}
//           className="absolute top-4 left-4 p-2 glass-effect rounded-full text-gray-400 hover:text-white transition-colors md:hidden"
//         >
//           <FiX className="text-xl" />
//         </motion.button>
//       )}

//       {/* اطلاعات آهنگ */}
//       <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6">
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shadow-lg flex-shrink-0"
//         >
//           <img 
//             src={track.cover} 
//             alt={track.title}
//             className="w-full h-full object-cover"
//           />
//           <AnimatePresence>
//             {isPlaying && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/50 flex items-center justify-center"
//               >
//                 <div className="flex gap-1">
//                   {[1, 2, 3].map((i) => (
//                     <motion.div
//                       key={i}
//                       className="w-0.5 sm:w-1 bg-white rounded-full"
//                       animate={{
//                         height: [8, 20, 8],
//                       }}
//                       transition={{
//                         duration: 1,
//                         repeat: Infinity,
//                         delay: i * 0.15,
//                       }}
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.div>

//         <div className="flex-1 text-center sm:text-right">
//           <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-1">{track.title}</h3>
//           <p className="text-sm sm:text-base text-gray-400 line-clamp-1">{track.artist}</p>
//           <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">{track.album}</p>
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsLiked(!isLiked)}
//           className={`p-2 sm:p-3 rounded-full transition-colors ${
//             isLiked ? 'text-pink-500' : 'text-gray-400 hover:text-white'
//           }`}
//         >
//           <FiHeart className={`text-lg sm:text-xl ${isLiked ? 'fill-current' : ''}`} />
//         </motion.button>
//       </div>

//       {/* Progress Bar جدید */}
//       <div className="mb-6">
//         <div 
//           ref={progressRef}
//           className="relative h-2 bg-gray-700 rounded-full cursor-pointer group"
//           onMouseDown={handleProgressMouseDown}
//           onClick={handleProgressClick}
//         >
//           {/* پیشرفت */}
//           <motion.div
//             className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
//             style={{ width: `${progressPercentage}%` }}
//           />
          
//           {/* دایره کنترل */}
//           <motion.div
//             className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
//             style={{ left: `${progressPercentage}%`, marginLeft: '-8px' }}
//             animate={{ scale: isDragging ? 1.2 : 1 }}
//           />
//         </div>
        
//         {/* زمان */}
//         <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-2">
//           <span>{formatTime(currentTime)}</span>
//           <span>{formatTime(duration)}</span>
//         </div>
//       </div>

//       {/* Waveform مخفی */}
//       <div ref={waveformRef} className="hidden" />

//       {/* کنترل‌های پخش */}
//       <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsShuffle(!isShuffle)}
//           className={`p-1.5 sm:p-2 rounded-full transition-colors ${
//             isShuffle ? 'text-purple-500' : 'text-gray-400 hover:text-white'
//           }`}
//         >
//           <FiShuffle className="text-base sm:text-xl" />
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors"
//           onClick={() => {
//             if (wavesurfer.current) {
//               wavesurfer.current.seekTo(0)
//               setCurrentTime(0)
//             }
//           }}
//         >
//           <FiSkipBack className="text-xl sm:text-2xl" />
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={handlePlayPause}
//           className="p-3 sm:p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all"
//         >
//           {isPlaying ? (
//             <FiPause className="text-xl sm:text-2xl" />
//           ) : (
//             <FiPlay className="text-xl sm:text-2xl translate-x-0.5" />
//           )}
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors"
//         >
//           <FiSkipForward className="text-xl sm:text-2xl" />
//         </motion.button>

//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsRepeat(!isRepeat)}
//           className={`p-1.5 sm:p-2 rounded-full transition-colors ${
//             isRepeat ? 'text-purple-500' : 'text-gray-400 hover:text-white'
//           }`}
//         >
//           <FiRepeat className="text-base sm:text-xl" />
//         </motion.button>
//       </div>

//       {/* کنترل صدا و دانلود */}
//       <div className="flex items-center gap-2 sm:gap-4">
//         {/* دکمه صدا در موبایل */}
//         <button
//           onClick={() => setShowVolume(!showVolume)}
//           className="sm:hidden p-2 text-gray-400 hover:text-white transition-colors"
//         >
//           {volume === 0 ? <FiVolumeX className="text-lg" /> : <FiVolume2 className="text-lg" />}
//         </button>
        
//         {/* آیکون صدا در دسکتاپ */}
//         <button
//           onClick={handleMuteToggle}
//           className="hidden sm:block p-2 text-gray-400 hover:text-white transition-colors"
//         >
//           {volume === 0 ? <FiVolumeX /> : <FiVolume2 />}
//         </button>
        
//         {/* اسلایدر صدا */}
//         <div className={`flex-1 ${showVolume ? 'block' : 'hidden sm:block'}`}>
//           <input
//             type="range"
//             min="0"
//             max="1"
//             step="0.01"
//             value={volume}
//             onChange={handleVolumeChange}
//             className="w-full h-1 bg-gray-700 rounded-full appearance-none cursor-pointer slider"
//             style={{
//               background: `linear-gradient(to right, #a855f7 ${volume * 100}%, #374151 ${volume * 100}%)`
//             }}
//           />
//         </div>
        
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="p-2 text-gray-400 hover:text-white transition-colors"
//         >
//           <FiDownload className="text-lg sm:text-xl" />
//         </motion.button>
//       </div>
//     </motion.div>
//   )
// }

// export default MusicPlayer