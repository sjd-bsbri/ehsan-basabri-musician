import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
} from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'

export const contactInfo = [
  {
    icon: FiMail,
    title: 'ایمیل',
    value: 'info@ehsanbasabri.com',
    link: 'mailto:info@ehsanbasabri.com'
  },
  {
    icon: FiPhone,
    title: 'تلفن',
    value: '۰۹۱۲ ۳۴۵ ۶۷۸۹',
    link: 'tel:+989123456789'
  },
  {
    icon: FiMapPin,
    title: 'آدرس',
    value: 'قوچان',
    link: '#'
  }
]

export const socialLinks = [
  { icon: FiInstagram, link: '#', color: 'hover:text-pink-500' },
  { icon: FaTelegramPlane, link: '#', color: 'hover:text-blue-500' },
  { icon: FiYoutube, link: '#', color: 'hover:text-red-500' },
  { icon: FiLinkedin, link: '#', color: 'hover:text-blue-600' },
  { icon: FiTwitter, link: '#', color: 'hover:text-blue-400' },
]