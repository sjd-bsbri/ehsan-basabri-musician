'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiPlay,
  FiPause,
  FiRotateCcw,
  FiRotateCw,
  FiVolume2,
  FiVolume1,
  FiVolumeX,
  FiHeart,
  FiRepeat,
  FiShuffle,
  FiDownload,
} from 'react-icons/fi'

// Custom Hook for Tooltips
const useTooltip = () => {
  const [tooltip, setTooltip] = useState<{ text: string; visible: boolean }>({ text: '', visible: false });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = (text: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setTooltip({ text, visible: true });
  };

  const hideTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      setTooltip({ text: '', visible: false });
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  }, [])

  return { tooltip, showTooltip, hideTooltip };
};


// Main Component
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
  const [isDragging, setIsDragging] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const { tooltip, showTooltip, hideTooltip } = useTooltip();

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current && !isDragging) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }, [isDragging])

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }, [])

  const handleSongEnd = useCallback(() => {
    setIsPlaying(false)
    if (isRepeat && audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
      setIsPlaying(true)
    }
  }, [isRepeat])

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(error => {
          if (error.name !== 'AbortError') {
            console.error("Autoplay failed:", error);
            setIsPlaying(false);
          }
        });
      }

      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('ended', handleSongEnd);

      // تابع پاک‌سازی
      return () => {
        audio.pause();
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('ended', handleSongEnd);
      };
    }
  }, [track.url, handleTimeUpdate, handleLoadedMetadata, handleSongEnd]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && audioRef.current && duration > 0) {
      const progressBar = progressRef.current
      const clickPositionX = e.clientX - progressBar.getBoundingClientRect().left
      const percentage = clickPositionX / progressBar.offsetWidth
      const newTime = duration * percentage
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleProgressChange(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleProgressChange(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 5;
    }
  };

  const handleBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 5;
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = track.url;
    link.download = `${track.artist} - ${track.title}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const VolumeIcon = volume === 0 ? FiVolumeX : volume < 0.5 ? FiVolume1 : FiVolume2;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="glass-effect rounded-2xl p-4 sm:p-5 shadow-2xl relative"
    >
      <audio ref={audioRef} src={track.url} loop={isRepeat} />

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip.visible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded-md px-2 py-1 shadow-lg z-20"
          >
            {tooltip.text}
          </motion.div>
        )}
      </AnimatePresence>

      {/* {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 left-3 p-2 text-gray-400 hover:text-white transition-colors z-10"
        >
          <FiX />
        </button>
      )} */}

      <div className="flex items-center gap-4">
        <motion.div layoutId={`track-cover-${track.id}`} className="relative w-16 h-16 rounded-md overflow-hidden shadow-lg flex-shrink-0">
          <img
            src={track.cover}
            alt={track.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex-1 min-w-0 text-right">
          <h3 className="text-base font-bold text-white truncate">{track.title}</h3>
          <p className="text-sm text-gray-400 truncate">{track.artist}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
          onMouseEnter={() => showTooltip(isLiked ? 'لغو پسند' : 'پسندیدن')}
          onMouseLeave={hideTooltip}
          className={`p-2 rounded-full transition-colors ${isLiked ? 'text-pink-500' : 'text-gray-400 hover:text-white'
            }`}
        >
          <FiHeart className={`text-xl ${isLiked ? 'fill-current' : ''}`} />
        </motion.button>
      </div>

      <div className="mt-4">
        <div
          ref={progressRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="w-full h-1.5 bg-white/10 rounded-full cursor-pointer group relative"
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1.5">
          <span>{formatTime(duration)}</span>
          <span>{formatTime(currentTime)}</span>
        </div>
      </div>

      <div className="flex items-center justify-center mt-2">
        <motion.button
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          onClick={() => setIsShuffle(!isShuffle)}
          onMouseEnter={() => showTooltip('پخش درهم')} onMouseLeave={hideTooltip}
          className={`p-2 rounded-full transition-colors ${isShuffle ? 'text-purple-400' : 'text-gray-500 hover:text-white'
            }`}
        >
          <FiShuffle className="text-lg" />
        </motion.button>

        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={handleBackward}
            onMouseEnter={() => showTooltip('۵ ثانیه عقب')} onMouseLeave={hideTooltip}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <FiRotateCcw className="text-2xl" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={handlePlayPause}
            onMouseEnter={() => showTooltip(isPlaying ? 'توقف' : 'پخش')} onMouseLeave={hideTooltip}
            className="p-4 bg-white/10 rounded-full text-white shadow-lg hover:bg-white/20 transition-all"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isPlaying ? 'pause' : 'play'}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {isPlaying ? (
                  <FiPause className="text-2xl" />
                ) : (
                  <FiPlay className="text-2xl translate-x-0.5" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            onClick={handleForward}
            onMouseEnter={() => showTooltip('۵ ثانیه جلو')} onMouseLeave={hideTooltip}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <FiRotateCw className="text-2xl" />
          </motion.button>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          onClick={() => setIsRepeat(!isRepeat)}
          onMouseEnter={() => showTooltip('تکرار')} onMouseLeave={hideTooltip}
          className={`p-2 rounded-full transition-colors ${isRepeat ? 'text-purple-400' : 'text-gray-500 hover:text-white'
            }`}
        >
          <FiRepeat className="text-lg" />
        </motion.button>

        {/* دکمه دانلود جدید */}
        <motion.button
          whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
          onClick={handleDownload}
          onMouseEnter={() => showTooltip('دانلود')} onMouseLeave={hideTooltip}
          className="p-2 rounded-full text-gray-500 hover:text-white transition-colors"
        >
          <FiDownload className="text-lg" />
        </motion.button>

        <div className="group relative flex items-center">
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
            className="p-2 text-gray-500 hover:text-white transition-colors"
            onMouseEnter={() => showTooltip('صدا')} onMouseLeave={hideTooltip}
          >
            <VolumeIcon className="text-lg transform scale-x-[1]" />
          </motion.button>
          <div className="absolute bottom-12 right-1/2 translate-x-1/2 w-24 p-2 bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg origin-bottom transition-all scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full h-1 bg-gray-600 rounded-full appearance-none cursor-pointer slider"
              style={{
                direction: 'ltr',
                background: `linear-gradient(to right, #a855f7 ${volume * 100}%, #4b5563 ${volume * 100}%)`
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MusicPlayer