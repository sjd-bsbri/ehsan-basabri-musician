// 'use client'

// import { useState, useEffect } from 'react' // ایمپورت کردن هوک‌ها
// import { motion } from 'framer-motion'
// import { FiPlay, FiHeadphones } from 'react-icons/fi'
// import Image from 'next/image'
// import Link from 'next/link'

// const HeroSection = () => {
//   const [soundBarHeights, setSoundBarHeights] = useState<number[]>([])

//   useEffect(() => {
//     const heights = Array(5).fill(0).map(() => Math.random() * 30 + 15);
//     setSoundBarHeights(heights);
//   }, []); 

//   return (
//     <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 sm:pt-20">
//       {/* پس‌زمینه انیمیشنی */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-10 sm:top-20 right-5 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-300" />
//       </div>

//       <div className="container-custom z-10">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* محتوای متنی */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center lg:text-right order-2 lg:order-1"
//           >
//             <motion.h2 
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <span className="gradient-text">احسان باصبری</span>
//             </motion.h2>
            
//             <motion.p
//               className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               آهنگساز و تنظیم‌کننده موسیقی
//             </motion.p>

//             <motion.p
//               className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//             >
//               خلق ملودی‌هایی که روح را لمس می‌کنند و احساسات را به رقص در می‌آورند
//             </motion.p>

//             <motion.div
//               className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//             >
//               <Link href="/sample-works">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm sm:text-base font-semibold flex items-center gap-2 sm:gap-3 justify-center hover:shadow-xl hover:shadow-purple-500/25 transition-all cursor-pointer"
//                 >
//                   <FiPlay />
//                   پخش نمونه کارها
//                 </motion.div>
//               </Link>
              
//               <Link href="/albums">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass-effect rounded-full text-white text-sm sm:text-base font-semibold flex items-center gap-2 sm:gap-3 justify-center hover:bg-white/10 transition-all cursor-pointer"
//                 >
//                   <FiHeadphones />
//                   گوش دادن به آلبوم
//                 </motion.div>
//               </Link>
//             </motion.div>

//             {/* نوارهای صوتی انیمیشنی */}
//             <motion.div
//               className="flex gap-1.5 sm:gap-2 justify-center lg:justify-start mt-8 sm:mt-12"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//             >
//               {/* 3. از state برای رندر کردن نوارها استفاده می‌کنیم */}
//               {soundBarHeights.map((height, index) => (
//                 <motion.div
//                   key={index}
//                   className="w-0.5 sm:w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
//                   style={{
//                     height: `${height}px`, // استفاده از ارتفاع ذخیره شده در state
//                     animationDelay: `${index * 0.15}s`
//                   }}
//                   animate={{
//                     scaleY: [1, 1.5, 1],
//                     transition: {
//                       duration: 1,
//                       repeat: Infinity,
//                       delay: index * 0.15
//                     }
//                   }}
//                 />
//               ))}
//             </motion.div>
//           </motion.div>

//           {/* تصویر */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative order-1 lg:order-2"
//           >
//             <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
//               <div className="relative glass-effect rounded-3xl p-4 sm:p-6 lg:p-8 h-full flex items-center justify-center">
//                 <div className="relative w-full h-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto">
//                   <Image
//                     src="/images/ehsan2.jpg"
//                     alt="آهنگساز"
//                     fill
//                     className="rounded-2xl object-cover shadow-2xl"
//                     sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection



'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiHeadphones, FiMusic } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'

const FloatingMusicNotesAnimation = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-24 w-full" />;
  }

  const notes = Array.from({ length: 12 });

  return (
    <div className="relative w-full max-w-xs h-28 mt-8 sm:mt-12 flex items-center justify-center overflow-hidden">
      {notes.map((_, index) => {
        const duration = Math.random() * 6 + 6; 
        const delay = Math.random() * 5;
        const x = Math.random() * 100;
        const scale = Math.random() * 0.7 + 1.0; 

        return (
          <motion.div
            key={index}
            className="absolute text-purple-400"
            style={{
              left: `${x}%`,
              scale: scale,
            }}
            initial={{ 
              y: 100,
              opacity: 0 
            }}
            animate={{
              y: -30, 
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FiMusic />
          </motion.div>
        );
      })}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 sm:pt-20">
      {/* پس‌زمینه انیمیشنی */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-300" />
      </div>

      <div className="container-custom z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* محتوای متنی */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right order-2 lg:order-1"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="gradient-text">احسان باصبری</span>
            </motion.h2>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              آهنگساز و تنظیم‌کننده موسیقی
            </motion.p>

            <motion.p
              className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              خلق ملودی‌هایی که روح را لمس می‌کنند و احساسات را به رقص در می‌آورند
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="/sample-works">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm sm:text-base font-semibold flex items-center gap-2 sm:gap-3 justify-center hover:shadow-xl hover:shadow-purple-500/25 transition-all cursor-pointer"
                >
                  <FiPlay />
                  پخش نمونه کارها
                </motion.div>
              </Link>
              
              <Link href="/albums">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 glass-effect rounded-full text-white text-sm sm:text-base font-semibold flex items-center gap-2 sm:gap-3 justify-center hover:bg-white/10 transition-all cursor-pointer"
                >
                  <FiHeadphones />
                  گوش دادن به آلبوم
                </motion.div>
              </Link>
            </motion.div>

            {/* انیمیشن جدید نت‌های موسیقی */}
            <div className="flex justify-center lg:justify-start">
              <FloatingMusicNotesAnimation />
            </div>
          </motion.div>

          {/* تصویر */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
              <div className="relative glass-effect rounded-3xl p-4 sm:p-6 lg:p-8 h-full flex items-center justify-center">
                <div className="relative w-full h-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto">
                  <Image
                    src="/images/ehsan2.jpg"
                    alt="آهنگساز"
                    fill
                    className="rounded-2xl object-cover shadow-2xl"
                    sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 350px, 400px"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection




