export interface ClassItem {
  id: string;
  name: string;
  category: 'strength' | 'yoga' | 'boxing' | 'group' | 'recovery' | 'personal';
  intensity: 'High' | 'Medium' | 'Low' | 'Extreme';
  duration: string;
  trainer: string;
  trainerRole: string;
  spotsTotal: number;
  spotsAvailable: number;
  time: string;
  day: string;
  image: string;
  description: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  isFeatured?: boolean;
  experience: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  priceMonthly: number;
  priceCurrency: string;
  isPopular?: boolean;
  features: string[];
}

export const INITIAL_CLASSES: ClassItem[] = [
  {
    id: 'cls-1',
    name: 'Metabolic Conditioning & Strength',
    category: 'strength',
    intensity: 'High',
    duration: '60 min',
    trainer: 'Andriy Karpenko',
    trainerRole: 'Head Strength Coach',
    spotsTotal: 12,
    spotsAvailable: 4,
    time: '08:00 AM',
    day: 'Today',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    description: 'High-intensity barbell work, tactical conditioning, and functional movements engineered to push physical boundaries.'
  },
  {
    id: 'cls-2',
    name: 'Ashtanga Flow & Breathwork',
    category: 'yoga',
    intensity: 'Medium',
    duration: '75 min',
    trainer: 'Olena Vlasyuk',
    trainerRole: 'Yoga & Mindset Director',
    spotsTotal: 15,
    spotsAvailable: 6,
    time: '09:30 AM',
    day: 'Today',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop',
    description: 'Deep physical and mental restoration. Synchronize breath with dynamic postural sequences for ultimate balance.'
  },
  {
    id: 'cls-3',
    name: 'Technical Boxing & Heavy Bag',
    category: 'boxing',
    intensity: 'Extreme',
    duration: '60 min',
    trainer: 'Daniel Reed',
    trainerRole: 'Combat Performance Specialist',
    spotsTotal: 10,
    spotsAvailable: 2,
    time: '11:00 AM',
    day: 'Today',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop',
    description: 'Sharpen your rhythm, stance, footwork, and strike precision in a high-octane technical boxing session.'
  },
  {
    id: 'cls-4',
    name: 'Myofascial Recovery & Infrared',
    category: 'recovery',
    intensity: 'Low',
    duration: '45 min',
    trainer: 'Emily Carter',
    trainerRole: 'Mobility & Physical Rehab Lead',
    spotsTotal: 8,
    spotsAvailable: 5,
    time: '04:00 PM',
    day: 'Today',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    description: 'Focused tissue release, active joint mobility work, and hyperbaric recovery protocols to eliminate soreness.'
  },
  {
    id: 'cls-5',
    name: 'HYROX Endurance & Group Circuit',
    category: 'group',
    intensity: 'Extreme',
    duration: '60 min',
    trainer: 'Andriy Karpenko',
    trainerRole: 'Head Strength Coach',
    spotsTotal: 16,
    spotsAvailable: 3,
    time: '05:30 PM',
    day: 'Today',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    description: 'Competitive endurance training blending sled pushes, ergs, kettlebell strength, and partner challenges.'
  },
  {
    id: 'cls-6',
    name: '1-on-1 Biomechanical Sculpting',
    category: 'personal',
    intensity: 'High',
    duration: '60 min',
    trainer: 'Emily Carter',
    trainerRole: 'Mobility & Physical Rehab Lead',
    spotsTotal: 1,
    spotsAvailable: 1,
    time: '07:00 PM',
    day: 'Today',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
    description: 'Bespoke personal coaching tailored precisely to your musculoskeletal structure and specific physique goals.'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'tr-1',
    name: 'Andriy Karpenko',
    role: 'Head Strength & Conditioning Coach',
    specialty: 'Powerlifting, Hypertrophy & Biomechanics',
    experience: '12+ Years',
    bio: 'Andriy specializes in personalized training focused on strength, balance, and long-term results. His approach combines precision, discipline, and a deep understanding of body mechanics.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
    isFeatured: true
  },
  {
    id: 'tr-2',
    name: 'Emily Carter',
    role: 'Mobility & Physical Rehab Lead',
    specialty: 'Kinesiology & Functional Movement',
    experience: '9 Years',
    bio: 'Emily builds bulletproof joint stability and structural resilience, allowing high performers to train harder without injury.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tr-3',
    name: 'Olena Vlasyuk',
    role: 'Yoga & Mindset Director',
    specialty: 'Vinyasa, Breathwork & Somatic Release',
    experience: '10 Years',
    bio: 'Olena guides athletes to master physical tension release and high-pressure focus through breath control and dynamic movement.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tr-4',
    name: 'Daniel Reed',
    role: 'Combat Performance Specialist',
    specialty: 'Boxing, Conditioning & Reaction Speed',
    experience: '8 Years',
    bio: 'Former competitive fighter delivering elite tactical boxing sessions designed to build cardiovascular fortitude and sharp mental reflexes.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-align',
    name: 'ALIGN',
    subtitle: '(Find your inner vector)',
    priceMonthly: 6000,
    priceCurrency: '₴',
    features: [
      'Unlimited access to the main training space',
      'Participation in all group conditioning classes',
      'Access hours: 07:00 – 22:00 daily',
      '1 complimentary guest pass / month',
      'Access to community lectures & workshops'
    ]
  },
  {
    id: 'plan-transit',
    name: 'TRANSIT',
    subtitle: '(Turn a habit into a change)',
    priceMonthly: 9500,
    priceCurrency: '₴',
    isPopular: true,
    features: [
      'Everything included in ALIGN tier',
      '4 1-on-1 personal training sessions / month',
      'Thermal SPA & Hydrotherapy access (1hr daily)',
      '1 Nutritionist consultation / month',
      'Priority class slot reservation window',
      '2 complimentary guest passes / month'
    ]
  },
  {
    id: 'plan-evolve',
    name: 'EVOLVE',
    subtitle: '(Unleash your dormant potential)',
    priceMonthly: 13000,
    priceCurrency: '₴',
    features: [
      'Everything included in TRANSIT tier',
      '8 1-on-1 personal training sessions / month',
      'Personalized biometric training roadmap',
      'Unlimited Thermal SPA & Lounge access',
      'Recovery chamber & cryo therapy access',
      'Full functional diagnostic assessment'
    ]
  },
  {
    id: 'plan-continuum',
    name: 'CONTINUUM',
    subtitle: '(Your transformation is limitless)',
    priceMonthly: 18000,
    priceCurrency: '₴',
    features: [
      'Everything included in EVOLVE tier',
      'Dedicated personal mentor & lead coach',
      'Customized 3x/week private training program',
      '24/7 Concierge & nutrition delivery service',
      'Access to exclusive closed-door events',
      'Unlimited guest passes & private locker'
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Pavlo',
    role: 'Business Owner • 28 y.o.',
    tenure: 'Member since 2023',
    quote: 'Not just a gym, but a space where physical strength meets mental balance and genuine support.',
    focus: 'Body Recomposition & Energy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rotation: '-rotate-3'
  },
  {
    id: 't-2',
    name: 'Julia',
    role: 'IT Specialist • 31 y.o.',
    tenure: '18 months of training',
    quote: 'My trainer helped me reconnect with my body and mind through a deeply personal and thoughtful approach.',
    focus: 'Mental Balance & Posture',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rotation: 'rotate-2'
  },
  {
    id: 't-3',
    name: 'Andrii',
    role: 'Entrepreneur • 35 y.o.',
    tenure: 'Member since 2023',
    quote: 'Where discipline meets clarity. Training here feels structured, intentional, and deeply personal — elevating both body and mindset.',
    focus: 'Performance & Longevity',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rotation: '-rotate-1'
  },
  {
    id: 't-4',
    name: 'Elena',
    role: 'Creative Director • 29 y.o.',
    tenure: 'Member since 2024',
    quote: 'The thermal SPA after high-intensity strength sessions is unbeatable. High focus, zero vanity, immaculate vibe.',
    focus: 'Recovery & Posture Alignment',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rotation: 'rotate-3'
  },
  {
    id: 't-5',
    name: 'Maxim',
    role: 'Venture Partner • 38 y.o.',
    tenure: '2 years of training',
    quote: 'The 1-on-1 biomechanical coaching transformed how I move. No wasted reps, just measurable physical output.',
    focus: 'Hypertrophy & Joint Mobility',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    rotation: '-rotate-2'
  },
  {
    id: 't-6',
    name: 'Sofia',
    role: 'Architect • 32 y.o.',
    tenure: 'Member since 2023',
    quote: 'A sanctuary designed with intentional minimalism. The community and mentors push you far beyond limits.',
    focus: 'Combat Endurance & Boxing',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    rotation: 'rotate-1'
  }
];

export const FAQS = [
  {
    question: 'What is included in the free trial class?',
    answer: 'Your free trial includes full access to the gym facility for the day, a complimentary 60-minute trial class (group or strength), biometric movement scan with a trainer, and full access to our thermal spa amenities.'
  },
  {
    question: 'How long is the trial period and how do I book?',
    answer: 'The trial covers 1 comprehensive trial session plus a 24-hour pass to explore the space. You can easily schedule your trial time slot directly on the website or by clicking any "Book a free trial" button.'
  },
  {
    question: 'How do I cancel or pause my membership?',
    answer: 'Memberships can be paused for up to 60 days per calendar year or cancelled at any time with 7 days advance notice through your Member Dashboard without hidden penalty fees.'
  },
  {
    question: 'Do I need my own equipment or boxing gear?',
    answer: 'No. EVOLUTION provides sanitized premium boxing gloves, hand wraps, workout towels, lockers with biometric locks, and full thermal SPA amenities.'
  }
];
