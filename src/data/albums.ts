export const albums = [
  {
    id: 1,
    title: 'رویاهای شرقی',
    artist: 'احسان باصبری',
    year: '۱۴۰۲',
    cover: '/images/ehsan1.jpg',
    trackCount: 12,
    duration: '۵۸:۳۴',
    genre: 'کلاسیک فیوژن',
    label: 'استودیو هارمونی',
    description: 'آلبوم رویاهای شرقی، سفری موسیقایی به قلب فرهنگ و هنر شرق با ترکیبی از سازهای سنتی و مدرن',
    tracks: [
      { id: 1, title: 'طلوع', duration: '4:23', url: '/audio/track1.mp3' },
      { id: 2, title: 'نسیم صبح', duration: '5:12', url: '/audio/track2.mp3' },
      { id: 3, title: 'رقص ابریشم', duration: '3:45', url: '/audio/track3.mp3' },
      { id: 4, title: 'باغ رویا', duration: '6:03', url: '/audio/track4.mp3' },
      { id: 5, title: 'آواز کویر', duration: '4:55', url: '/audio/track5.mp3' },
    ],
    stats: {
      plays: '۲.۵ میلیون',
      likes: '۸۵ هزار',
      shares: '۱۲ هزار'
    }
  },
  {
    id: 2,
    title: 'سمفونی طبیعت',
    artist: 'احسان باصبری',
    year: '۱۴۰۱',
    cover: '/images/ehsan2.jpg',
    trackCount: 10,
    duration: '۴۵:۲۰',
    genre: 'موسیقی آرامش‌بخش',
    label: 'موزیک رکوردز',
    description: 'الهام گرفته از صداهای طبیعت، این آلبوم ترکیبی از موسیقی آرامش‌بخش و صداهای طبیعی است',
    tracks: [
      { id: 1, title: 'باران بهاری', duration: '5:10', url: '/audio/nature1.mp3' },
      { id: 2, title: 'جنگل مه‌آلود', duration: '4:35', url: '/audio/nature2.mp3' },
      { id: 3, title: 'دریای آرام', duration: '6:20', url: '/audio/nature3.mp3' },
    ],
    stats: {
      plays: '۱.۸ میلیون',
      likes: '۶۲ هزار',
      shares: '۸ هزار'
    }
  },
]