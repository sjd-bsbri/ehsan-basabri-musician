// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiX, FiMusic } from 'react-icons/fi'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation' 
// import { menuItems } from '../../data/menu' 

// const EqualizerIcon = ({ isOpen }: { isOpen: boolean }) => {
//   return (
//     <motion.div
//       className="w-6 h-6 flex flex-col justify-between"
//       animate={isOpen ? "open" : "closed"}
//     >
//       <motion.span
//         className="block h-0.5 bg-current"
//         variants={{
//           closed: { width: '100%' },
//           open: { width: '80%' }
//         }}
//         transition={{ duration: 0.3 }}
//       />
//       <motion.span
//         className="block h-0.5 bg-current"
//         variants={{
//           closed: { width: '60%' },
//           open: { width: '100%' }
//         }}
//         transition={{ duration: 0.3 }}
//       />
//       <motion.span
//         className="block h-0.5 bg-current"
//         variants={{
//           closed: { width: '100%' },
//           open: { width: '60%' }
//         }}
//         transition={{ duration: 0.3 }}
//       />
//     </motion.div>
//   );
// };

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const pathname = usePathname() 

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsOpen(false)
//       }
//     }
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   const getLinkHref = (href: string) => {
//     if (!href.startsWith('#')) {
//       return href;
//     }
//     if (pathname !== '/') {
//       return `/${href}`;
//     }
//     return href;
//   };

//   return (
//     <>
//       <motion.header
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//           scrolled ? 'glass-effect shadow-2xl py-2 sm:py-3' : 'py-3 sm:py-4'
//         }`}
//       >
//         <nav className="container-custom">
//           <div className="flex items-center justify-between">
//             {/* لوگو */}
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center gap-2 sm:gap-3"
//             >
//                 <Link href="/" className="flex items-center gap-2 sm:gap-3">
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
//                         <FiMusic className="text-white text-lg sm:text-xl" />
//                     </div>
//                     <h1 className="text-xl sm:text-2xl font-bold gradient-text">آخشیج</h1>
//                 </Link>
//             </motion.div>

//             {/* منوی دسکتاپ */}
//             <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
//               {menuItems.map((item, index) => (
//                 <motion.li
//                   key={index}
//                   whileHover={{ y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Link
//                     href={getLinkHref(item.href)}
//                     className="flex items-center gap-1.5 lg:gap-2 text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
//                   >
//                     <item.icon className="text-base lg:text-lg" />
//                     <span>{item.title}</span>
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>

//             {/* دکمه منوی موبایل */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden p-2 text-2xl text-gray-300 hover:text-white transition-colors"
//               aria-label="منوی موبایل"
//             >
//               <AnimatePresence initial={false} mode="wait">
//                 <motion.div
//                   key={isOpen ? "close" : "open"}
//                   initial={{ rotate: 45, opacity: 0 }}
//                   animate={{ rotate: 0, opacity: 1 }}
//                   exit={{ rotate: -45, opacity: 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   {isOpen ? <FiX /> : <EqualizerIcon isOpen={isOpen} />}
//                 </motion.div>
//               </AnimatePresence>
//             </button>
//           </div>
//         </nav>
//       </motion.header>

//       {/* منوی موبایل - تمام صفحه */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsOpen(false)}
//               className="fixed inset-0 bg-black/70 z-40 md:hidden"
//             />
            
//             <motion.div
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'tween', duration: 0.3 }}
//               className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-gray-900/95 backdrop-blur-xl z-50 md:hidden"
//             >
//               <div className="p-6">
//                 <ul className="space-y-2">
//                   {menuItems.map((item, index) => (
//                     <motion.li
//                       key={index}
//                       initial={{ x: 50, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ delay: index * 0.1 }}
//                     >
//                       <Link
//                         href={getLinkHref(item.href)}
//                         onClick={() => setIsOpen(false)}
//                         className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-300 transition-all"
//                       >
//                         <item.icon className="text-xl" />
//                         <span className="text-lg">{item.title}</span>
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export default Header


'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiMusic } from 'react-icons/fi'
import Link from 'next/link'
import { usePathname } from 'next/navigation' 
import { menuItems } from '../../data/menu' 

const EqualizerIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div
      className="w-6 h-6 flex flex-col justify-between"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.span
        className="block h-0.5 bg-current"
        variants={{
          closed: { width: '100%' },
          open: { width: '80%' }
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block h-0.5 bg-current"
        variants={{
          closed: { width: '60%' },
          open: { width: '100%' }
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block h-0.5 bg-current"
        variants={{
          closed: { width: '100%' },
          open: { width: '60%' }
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getLinkHref = (href: string) => {
    if (!href.startsWith('#')) {
      return href;
    }
    if (pathname !== '/') {
      return `/${href}`;
    }
    return href;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass-effect shadow-2xl py-2 sm:py-3' : 'py-3 sm:py-4'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between">
            {/* لوگو */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 sm:gap-3"
            >
                <Link href="/" className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center">
                        <FiMusic className="text-white text-lg sm:text-xl" />
                    </div>
                    <h1 className="text-xl sm:text-2xl font-bold gradient-text">آخشیج</h1>
                </Link>
            </motion.div>

            {/* منوی دسکتاپ */}
            <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={getLinkHref(item.href)}
                    className="flex items-center gap-1.5 lg:gap-2 text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    <item.icon className="text-base lg:text-lg" />
                    <span>{item.title}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* دکمه منوی موبایل */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-2xl text-gray-300 hover:text-white transition-colors"
              aria-label="منوی موبایل"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <FiX /> : <EqualizerIcon isOpen={isOpen} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* منوی موبایل - تمام صفحه */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 z-40 md:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-gray-900/95 backdrop-blur-xl z-50 md:hidden"
            >
              <div className="p-6">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={getLinkHref(item.href)}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-300 transition-all"
                      >
                        <item.icon className="text-xl" />
                        <span className="text-lg">{item.title}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header