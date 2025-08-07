'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import { contactInfo, socialLinks } from '../../data/contact' 

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="gradient-text">تماس با من</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">برای همکاری و پروژه‌های جدید</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* فرم تماس */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base text-gray-300 mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 glass-effect rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="نام شما"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base text-gray-300 mb-2">ایمیل</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 glass-effect rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base text-gray-300 mb-2">موضوع</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 glass-effect rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="موضوع پیام"
                  required
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base text-gray-300 mb-2">پیام</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 glass-effect rounded-lg text-white text-sm sm:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder="پیام شما..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white text-sm sm:text-base font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:shadow-xl hover:shadow-purple-500/25 transition-all"
              >
                <FiSend className="text-lg sm:text-xl" />
                ارسال پیام
              </motion.button>
            </form>
          </motion.div>

          {/* اطلاعات تماس */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* اطلاعات */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  // initial={{ opacity: 0, y: 20 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 sm:gap-4 glass-effect rounded-xl p-4 sm:p-6 hover:bg-white/5 transition-all group"
                >
                  <div className="p-2.5 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                    <info.icon className="text-lg sm:text-xl lg:text-2xl text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs sm:text-sm">{info.title}</h4>
                    <p className="text-white text-sm sm:text-base lg:text-lg">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* شبکه‌های اجتماعی */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-4 sm:p-6"
            >
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">
                من را در شبکه‌های اجتماعی دنبال کنید
              </h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2.5 sm:p-3 glass-effect rounded-lg text-gray-400 transition-colors ${social.color}`}
                  >
                    <social.icon className="text-xl sm:text-2xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* نقشه */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-1.5 sm:p-2 h-48 sm:h-56 lg:h-64 overflow-hidden"
            >
              <iframe
    src="https://maps.google.com/maps?q=%D9%85%D8%B4%D9%87%D8%AF%20%D8%AE%DB%8C%D8%A7%D8%A8%D8%A7%D9%86%20%D9%85%D8%AC%D8%AF&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection