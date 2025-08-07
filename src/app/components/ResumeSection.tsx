'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiAward, FiBook, FiCalendar } from 'react-icons/fi'
import { experiences, education, awards } from '../../data/resume' 

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">رزومه و تجربیات</span>
          </h2>
          <p className="text-gray-400 text-lg">مسیر حرفه‌ای من در موسیقی</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* تجربیات کاری */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <FiBriefcase className="text-2xl text-purple-400" />
              <h3 className="text-2xl font-bold text-white">تجربیات کاری</h3>
            </motion.div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover:bg-white/5 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <p className="text-purple-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 flex items-center gap-2 mt-2 md:mt-0">
                    <FiCalendar />
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* تحصیلات و جوایز */}
          <div className="space-y-8">
            {/* تحصیلات */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <FiBook className="text-2xl text-purple-400" />
                <h3 className="text-2xl font-bold text-white">تحصیلات</h3>
              </motion.div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  // initial={{ opacity: 0, y: 20 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 mb-4 hover:bg-white/5 transition-all"
                >
                  <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-purple-400 mb-2">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* جوایز */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <FiAward className="text-2xl text-purple-400" />
                <h3 className="text-2xl font-bold text-white">جوایز و افتخارات</h3>
              </motion.div>

              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  // initial={{ opacity: 0, y: 20 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 mb-4 hover:bg-white/5 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                      <FiAward className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white">{award.title}</h4>
                      <p className="text-purple-400 text-sm">{award.event} - {award.year}</p>
                      <p className="text-gray-300 text-sm mt-1">{award.work}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeSection