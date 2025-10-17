// Mock data pour la démo investisseur

// Helper function to get dates within the last week
const getRecentDate = (daysAgo: number) => {
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  date.setHours(Math.floor(Math.random() * 24))
  date.setMinutes(Math.floor(Math.random() * 60))
  return date.toISOString()
}

// Helper function to get random recent signup dates (last 90 days)
const getRandomSignupDate = () => {
  const date = new Date()
  const daysAgo = Math.floor(Math.random() * 90) // Random dans les 90 derniers jours
  date.setDate(date.getDate() - daysAgo)
  date.setHours(Math.floor(Math.random() * 24))
  date.setMinutes(Math.floor(Math.random() * 60))
  return date.toISOString()
}

export const mockSubscribers = [
  {
    id: '1',
    email: 'john.smith@gmail.com',
    full_name: 'John Smith',
    phone: '+1 555 123 4567',
    created_at: getRandomSignupDate(),
    cvs_count: 5,
    last_cv_date: getRecentDate(1), // 1 jour
    status: 'active',
    job_preferences: {
      keywords: ['Full Stack Developer', 'React', 'Node.js'],
      locations: ['New York', 'San Francisco', 'Remote'],
    },
  },
  {
    id: '2',
    email: 'sarah.johnson@gmail.com',
    full_name: 'Sarah Johnson',
    phone: '+44 20 7946 0958',
    created_at: getRandomSignupDate(),
    cvs_count: 3,
    last_cv_date: getRecentDate(2), // 2 jours
    status: 'active',
    job_preferences: {
      keywords: ['Data Scientist', 'Python', 'Machine Learning'],
      locations: ['London', 'Berlin', 'Remote'],
    },
  },
  {
    id: '3',
    email: 'mohamed.ali@gmail.com',
    full_name: 'Mohamed Ali',
    phone: '+971 50 123 4567',
    created_at: getRandomSignupDate(),
    cvs_count: 4,
    last_cv_date: getRecentDate(3), // 3 jours
    status: 'active',
    job_preferences: {
      keywords: ['DevOps Engineer', 'AWS', 'Kubernetes'],
      locations: ['Dubai', 'Abu Dhabi', 'Remote'],
    },
  },
  {
    id: '4',
    email: 'maria.garcia@gmail.com',
    full_name: 'Maria Garcia',
    phone: '+34 91 123 4567',
    created_at: getRandomSignupDate(),
    cvs_count: 6,
    last_cv_date: getRecentDate(1), // 1 jour
    status: 'active',
    job_preferences: {
      keywords: ['UX/UI Designer', 'Figma', 'Product Design'],
      locations: ['Madrid', 'Barcelona', 'Remote'],
    },
  },
  {
    id: '5',
    email: 'david.chen@gmail.com',
    full_name: 'David Chen',
    phone: '+65 8123 4567',
    created_at: getRandomSignupDate(),
    cvs_count: 7,
    last_cv_date: getRecentDate(4), // 4 jours
    status: 'active',
    job_preferences: {
      keywords: ['Product Manager', 'Agile', 'Scrum'],
      locations: ['Singapore', 'Hong Kong', 'Remote'],
    },
  },
  {
    id: '6',
    email: 'emma.williams@gmail.com',
    full_name: 'Emma Williams',
    phone: '+61 2 9876 5432',
    created_at: getRandomSignupDate(),
    cvs_count: 2,
    last_cv_date: getRecentDate(5), // 5 jours
    status: 'active',
    job_preferences: {
      keywords: ['Digital Marketing', 'SEO', 'Content Strategy'],
      locations: ['Sydney', 'Melbourne', 'Remote'],
    },
  },
  {
    id: '7',
    email: 'alex.mueller@gmail.com',
    full_name: 'Alex Mueller',
    phone: '+49 30 1234 5678',
    created_at: getRandomSignupDate(),
    cvs_count: 4,
    last_cv_date: getRecentDate(2), // 2 jours
    status: 'active',
    job_preferences: {
      keywords: ['Backend Developer', 'Java', 'Microservices'],
      locations: ['Berlin', 'Munich', 'Remote'],
    },
  },
  {
    id: '8',
    email: 'priya.sharma@gmail.com',
    full_name: 'Priya Sharma',
    phone: '+91 98765 43210',
    created_at: getRandomSignupDate(),
    cvs_count: 5,
    last_cv_date: getRecentDate(3), // 3 jours
    status: 'active',
    job_preferences: {
      keywords: ['Business Analyst', 'SQL', 'Power BI'],
      locations: ['Bangalore', 'Mumbai', 'Remote'],
    },
  },
]

export const mockStats = {
  totalSubscribers: 12847,
  activeSubscribers: 11523,
  totalCVsProcessed: 8654,
  totalEmailsSent: 156428,
  todayEmailsSent: 1847,
  avgCVScore: 78,
  jobOffersAvailable: 2847,
  newJobsToday: 127,
  successRate: 94.2,
  avgResponseTime: '2.3 min',
}

export const mockRecentActivity = [
  {
    id: '1',
    type: 'cv_upload',
    user: 'Maria Garcia',
    action: 'Uploaded new CV',
    timestamp: getRecentDate(0), // Today
    status: 'success',
  },
  {
    id: '2',
    type: 'email_sent',
    user: 'John Smith',
    action: 'Enhanced CV email sent',
    timestamp: getRecentDate(1),
    status: 'success',
  },
  {
    id: '3',
    type: 'cv_upload',
    user: 'Priya Sharma',
    action: 'Uploaded new CV',
    timestamp: getRecentDate(1),
    status: 'success',
  },
  {
    id: '4',
    type: 'job_match',
    user: 'Alex Mueller',
    action: '12 new matching job offers',
    timestamp: getRecentDate(2),
    status: 'success',
  },
  {
    id: '5',
    type: 'email_sent',
    user: 'Sarah Johnson',
    action: 'Daily jobs email sent',
    timestamp: getRecentDate(2),
    status: 'success',
  },
]

export const mockEmailLogs = [
  {
    id: '1',
    recipient: 'john.smith@gmail.com',
    recipient_name: 'John Smith',
    subject: '💼 8 new job opportunities for you',
    type: 'daily_jobs',
    status: 'sent',
    sent_at: getRecentDate(0),
    opened: true,
    clicked: true,
    jobs_count: 8,
  },
  {
    id: '2',
    recipient: 'sarah.johnson@gmail.com',
    recipient_name: 'Sarah Johnson',
    subject: '💼 6 new job opportunities for you',
    type: 'daily_jobs',
    status: 'sent',
    sent_at: getRecentDate(1),
    opened: true,
    clicked: false,
    jobs_count: 6,
  },
  {
    id: '3',
    recipient: 'mohamed.ali@gmail.com',
    recipient_name: 'Mohamed Ali',
    subject: '💼 12 new job opportunities for you',
    type: 'daily_jobs',
    status: 'sent',
    sent_at: getRecentDate(1),
    opened: false,
    clicked: false,
    jobs_count: 12,
  },
  {
    id: '4',
    recipient: 'maria.garcia@gmail.com',
    recipient_name: 'Maria Garcia',
    subject: '✨ Your enhanced CV is ready!',
    type: 'cv_enhanced',
    status: 'sent',
    sent_at: getRecentDate(1),
    opened: true,
    clicked: true,
    cv_score: 89,
  },
  {
    id: '5',
    recipient: 'david.chen@gmail.com',
    recipient_name: 'David Chen',
    subject: '💼 9 new job opportunities for you',
    type: 'daily_jobs',
    status: 'sent',
    sent_at: getRecentDate(2),
    opened: true,
    clicked: true,
    jobs_count: 9,
  },
  {
    id: '6',
    recipient: 'priya.sharma@gmail.com',
    recipient_name: 'Priya Sharma',
    subject: '✨ Your enhanced CV is ready!',
    type: 'cv_enhanced',
    status: 'sent',
    sent_at: getRecentDate(2),
    opened: true,
    clicked: true,
    cv_score: 86,
  },
  {
    id: '7',
    recipient: 'alex.mueller@gmail.com',
    recipient_name: 'Alex Mueller',
    subject: '💼 7 new job opportunities for you',
    type: 'daily_jobs',
    status: 'sent',
    sent_at: getRecentDate(3),
    opened: true,
    clicked: false,
    jobs_count: 7,
  },
  {
    id: '8',
    recipient: 'john.smith@gmail.com',
    recipient_name: 'John Smith',
    subject: '✨ Your enhanced CV is ready!',
    type: 'cv_enhanced',
    status: 'sent',
    sent_at: getRecentDate(4),
    opened: true,
    clicked: true,
    cv_score: 92,
  },
]

export const mockJobOffers = [
  {
    id: '1',
    title: 'Senior Full Stack Engineer',
    company: 'Google',
    location: 'Mountain View, CA (Remote)',
    description: 'Join our team to build next-generation cloud infrastructure and applications.',
    salary: '$150,000-$220,000/year',
    job_type: 'Full-time',
    skills: ['React', 'Node.js', 'TypeScript', 'GCP'],
    posted_date: getRecentDate(1),
    matched_users: 847,
  },
  {
    id: '2',
    title: 'Lead Data Scientist',
    company: 'Amazon Web Services',
    location: 'Seattle, WA (Hybrid)',
    description: 'Drive ML/AI initiatives for cloud-scale data processing systems.',
    salary: '$180,000-$250,000/year',
    job_type: 'Full-time',
    skills: ['Python', 'TensorFlow', 'AWS', 'Spark'],
    posted_date: getRecentDate(2),
    matched_users: 623,
  },
  {
    id: '3',
    title: 'DevOps Architect',
    company: 'Microsoft Azure',
    location: 'London, UK (Remote)',
    description: 'Design and implement enterprise-scale cloud infrastructure.',
    salary: '£90,000-£140,000/year',
    job_type: 'Full-time',
    skills: ['Azure', 'Kubernetes', 'Terraform', 'CI/CD'],
    posted_date: getRecentDate(1),
    matched_users: 492,
  },
  {
    id: '4',
    title: 'Principal UX Designer',
    company: 'Meta',
    location: 'Remote Worldwide',
    description: 'Shape the future of social experiences for billions of users.',
    salary: '$160,000-$230,000/year',
    job_type: 'Full-time',
    skills: ['Figma', 'User Research', 'Design Systems', 'Prototyping'],
    posted_date: getRecentDate(3),
    matched_users: 378,
  },
  {
    id: '5',
    title: 'Senior Product Manager',
    company: 'Stripe',
    location: 'San Francisco, CA (Remote)',
    description: 'Lead product strategy for payment infrastructure products.',
    salary: '$170,000-$240,000/year',
    job_type: 'Full-time',
    skills: ['Product Strategy', 'Agile', 'Data Analysis', 'API Design'],
    posted_date: getRecentDate(2),
    matched_users: 534,
  },
]

