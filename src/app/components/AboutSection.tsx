'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { stats, skills } from '../../data/about' 
const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">درباره من</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">داستان من و موسیقی</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* تصویر و آمار */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              <div className="relative glass-effect rounded-3xl p-4 sm:p-6 lg:p-8">
                <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mb-6 sm:mb-8">
                  <Image
                  src="/ehsan-basabri-musician/images/ehsan1.jpg"
                    alt="درباره من"
                    fill
                    className="rounded-2xl shadow-2xl object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  />
                </div>
                
                {/* آمار */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-effect rounded-xl p-3 sm:p-4 text-center hover-scale"
                    >
                      <stat.icon className="text-xl sm:text-2xl lg:text-3xl text-purple-400 mx-auto mb-1 sm:mb-2" />
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* محتوا */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-sm sm:prose-base lg:prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                سلام! من احسان باصبری هستم، آهنگساز و تنظیم‌کننده موسیقی با بیش از ۱۲ سال تجربه در صنعت موسیقی. 
                سفر من با موسیقی از کودکی آغاز شد و امروز افتخار همکاری با بزرگترین هنرمندان و پروژه‌های 
                سینمایی کشور را دارم.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                تخصص من در آهنگسازی برای فیلم‌های سینمایی، سریال‌های تلویزیونی و آلبوم‌های موسیقی است. 
                هر پروژه برای من یک داستان جدید است که باید با نت‌های موسیقی روایت شود.
              </p>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                علاوه بر آهنگسازی، در زمینه تنظیم موسیقی، میکس و مسترینگ نیز فعالیت می‌کنم و همواره 
                در تلاش برای خلق آثاری هستم که مخاطب را به دنیایی جدید از احساسات ببرد.
              </p>
            </div>

            {/* مهارت‌ها */}
            <div className="space-y-4 mt-6 sm:mt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">مهارت‌های من</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1.5 sm:mb-2">
                    <span className="text-sm sm:text-base text-gray-300">{skill.name}</span>
                    <span className="text-sm sm:text-base text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection