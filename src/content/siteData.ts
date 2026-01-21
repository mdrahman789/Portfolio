export interface Experience {
  id: string
  title: string
  organization: string
  location?: string
  startDate: string
  endDate: string
  description: string[]
  metrics?: string[]
}

export interface Project {
  id: string
  slug: string
  title: string
  role: string
  startDate: string
  endDate: string
  summary: string
  tags: string[]
  impact?: string
  overview: string
  problem: string
  approach: string
  solution: string
  impactDetails: string
  techStack: string[]
  improvements: string[]
}

export interface Leadership {
  id: string
  title: string
  organization: string
  startDate: string
  endDate: string
  description: string[]
  metrics?: string[]
}

export interface SiteData {
  profile: {
    name: string
    location: string
    education: string
    graduationDate: string
    email: string
    github: string
    linkedin: string
    summary: string[]
    jobSeeking: {
      title: string
      description: string
    }
  }
  experiences: Experience[]
  projects: Project[]
  leadership: Leadership[]
  skills: {
    programming: string[]
    frameworks: string[]
    tools: string[]
    languages: string[]
  }
  home: {
    hero: {
      introduction: string
      ctaProjects: string
      ctaContact: string
    }
    whatIDo: {
      title: string
      items: Array<{
        title: string
        description: string
      }>
    }
    metrics: {
      title: string
      items: Array<{
        label: string
        value: string
      }>
    }
    now: {
      title: string
      focused: string
      lookingFor: string
    }
    teaching: {
      title: string
      description: string
    }
  }
  about: {
    title: string
    sections: string[]
  }
}

export const siteData: SiteData = {
  profile: {
    name: 'Md Mahfuzur Rahman',
    location: 'Queens, New York',
    education: 'Computer Science major at CUNY Hunter College with an Economics minor',
    graduationDate: 'May 2026',
    email: 'rahmanmd.mahfuzur404@gmail.com',
    github: 'https://github.com/mdrahman789',
    linkedin: 'https://www.linkedin.com/in/mahfuzurrahman7/',
    summary: [
      'My name is Md Mahfuzur Rahman',
      'I am based in Queens, New York',
      'I am a Computer Science major at CUNY Hunter College with an Economics minor',
      'Expected graduation is May 2026',
      'I build practical software and I care about real outcomes',
      'I enjoy building clean frontend experiences with strong motion and interaction',
      'I also enjoy teaching and community work and I try to bring that patience and clarity into how I build',
    ],
    jobSeeking: {
      title: 'Open to Opportunities',
      description: 'I am open to any job related to technology. I am interested in software engineering, full stack development, frontend and backend roles, production support positions, fintech opportunities, and technology roles in general. I am flexible and eager to contribute to meaningful projects.',
    },
  },
  experiences: [
    {
      id: 'stem-in-action',
      title: 'Instructor',
      organization: 'STEM IN ACTION INC',
      startDate: 'Sep 2024',
      endDate: 'Present',
      description: [
        'Teaching and mentoring students in STEM subjects with a focus on practical application and real-world outcomes.',
      ],
      metrics: [
        '40 plus sessions conducted',
        'Engagement and completion rates up 95 percent',
        'Enrollment increased 40 percent',
      ],
    },
    {
      id: 'community-education',
      title: 'Senior Instructor',
      organization: 'Community Education Center',
      startDate: 'Jul 2017',
      endDate: 'Present',
      description: [
        'Leading educational sessions and supervising classes to ensure high-quality learning experiences.',
      ],
      metrics: [
        'Presented to 1,000 plus peers',
        'Supervised classes up to 35 students',
        '95 percent compliance rate',
      ],
    },
    {
      id: 'headstarter-ai',
      title: 'Software Engineering Fellow',
      organization: 'Headstarter AI',
      startDate: 'Jul 2024',
      endDate: 'Sep 2024',
      description: [
        'Fellowship program focused on software engineering practices and building real-world applications.',
      ],
    },
  ],
  projects: [
    {
      id: 'cashvelo',
      slug: 'cashvelo',
      title: 'Cashvelo Budgeting and Finance Application',
      role: 'AI Engineer and Full Stack Developer',
      startDate: 'Oct 2025',
      endDate: 'Present',
      summary: 'A comprehensive budgeting and finance application that automates transaction categorization from bank statements.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'AI', 'Full Stack'],
      impact: 'Manual entry reduced around 90 percent',
      overview: 'Cashvelo is a full-stack budgeting application designed to simplify personal finance management. The platform automatically processes bank statements, extracts transactions, and categorizes them intelligently, significantly reducing manual data entry.',
      problem: 'Managing personal finances requires constant manual entry of transactions from bank statements, which is time-consuming and error-prone. Users often struggle to maintain accurate budgets because tracking expenses manually becomes tedious.',
      approach: 'I built a solution that combines PDF parsing, automated transaction extraction, and intelligent categorization. The system processes bank statements uploaded by users, extracts all transactions using PapaParse, and then categorizes them automatically based on transaction patterns and merchant information.',
      solution: 'The application uses React with Vite for the frontend, Node.js and Express for the backend, and MongoDB for data storage. I implemented 10 plus REST endpoints to handle user authentication, statement uploads, transaction processing, and budget management. The PDF parsing system can extract and categorize 100 plus transactions per statement with high accuracy. Five plus user flows ensure a smooth experience from onboarding to budget tracking.',
      impactDetails: 'The automated transaction categorization has reduced manual entry by around 90 percent. Users can now upload their bank statements and have their transactions automatically organized, saving hours of work each month. The system handles complex statements with multiple transaction types and maintains accuracy across different bank formats.',
      techStack: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'PapaParse', 'REST APIs', 'JavaScript', 'HTML', 'CSS'],
      improvements: [
        'Add machine learning models for more accurate transaction categorization',
        'Implement budget forecasting and spending predictions',
        'Add multi-currency support for international transactions',
        'Create mobile app versions for iOS and Android',
        'Enhance the UI with more detailed financial visualizations and dashboards',
      ],
    },
    {
      id: 'wildlife-sos',
      slug: 'wildlife-sos',
      title: 'Wildlife SOS Save Our Species',
      role: 'Frontend Developer',
      startDate: 'Apr 2025',
      endDate: 'May 2025',
      summary: 'A responsive event website with RSVP functionality and dark mode support designed to increase engagement for wildlife conservation events.',
      tags: ['React', 'Frontend', 'Responsive Design', 'Dark Mode'],
      impact: 'Registration completion up 35 percent, time on page up 20 percent',
      overview: 'Wildlife SOS is an event website created to promote wildlife conservation events and facilitate attendee registration. The site features a clean, modern design with responsive layouts and dark mode support.',
      problem: 'The previous event registration process had low completion rates and poor user engagement. The website lacked responsive design, making it difficult to use on mobile devices, and did not offer a dark mode option that many users prefer.',
      approach: 'I redesigned the website with a focus on user experience and accessibility. The new design emphasizes clear calls to action, smooth interactions, and responsive layouts that work seamlessly across all devices. I implemented a dark mode toggle to cater to user preferences.',
      solution: 'Built with React and styled with modern CSS practices, the website features a responsive grid layout that adapts to different screen sizes. The RSVP form is streamlined and user-friendly, with clear validation and feedback. Dark mode is implemented with smooth transitions and preference persistence. The site includes engaging visuals and clear information hierarchy to guide users through the event details and registration process.',
      impactDetails: 'The redesigned website led to a 35 percent increase in registration completion rates and a 20 percent increase in time on page. The responsive design improved mobile engagement significantly, and the dark mode feature received positive feedback from users. The overall user experience improvements have made the event registration process more accessible and effective.',
      techStack: ['React', 'HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      improvements: [
        'Add email confirmation system for RSVPs',
        'Implement calendar integration for event reminders',
        'Add social sharing features for events',
        'Create an admin dashboard for managing events and attendees',
        'Enhance accessibility features with better screen reader support',
      ],
    },
  ],
  leadership: [
    {
      id: 'alpfa',
      title: 'Director of Community Outreach',
      organization: 'ALPFA Hunter College',
      startDate: 'Oct 2024',
      endDate: 'May 2025',
      description: [
        'Led community outreach initiatives and coordinated events to connect students with professional opportunities.',
        'Organized networking events and sustainability programs that brought together students and professionals.',
      ],
      metrics: [
        'Events for 50 plus students',
        'Networked with 100 plus professionals',
        'Coordinated a tree planting sustainability event',
      ],
    },
  ],
  skills: {
    programming: ['Python', 'JavaScript', 'C++', 'SQL'],
    frameworks: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Framer Motion', 'NumPy', 'scikit-image', 'PapaParse'],
    tools: ['MongoDB', 'Git and GitHub', 'REST APIs', 'JSON', 'HTML', 'CSS', 'Excel'],
    languages: ['English', 'Bengali', 'Arabic (read and write)', 'Hindi (conversational)', 'Urdu (conversational)'],
  },
  home: {
    hero: {
      introduction: 'I build practical software and care about real outcomes. I enjoy creating clean frontend experiences with strong motion and interaction.',
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
    },
    whatIDo: {
      title: 'What I Do',
      items: [
        {
          title: 'Frontend Development',
          description: 'Building clean, interactive user interfaces with React and modern web technologies. Focus on performance, accessibility, and user experience.',
        },
        {
          title: 'Full Stack Solutions',
          description: 'Creating end-to-end applications with React, Node.js, and MongoDB. Designing RESTful APIs and database schemas that scale.',
        },
        {
          title: 'Problem Solving',
          description: 'Identifying real problems and building practical solutions. Whether it is automating manual processes or improving user workflows.',
        },
        {
          title: 'Teaching & Mentoring',
          description: 'Sharing knowledge and supporting others. Teaching has taught me patience and clarity, which I bring to how I build software.',
        },
      ],
    },
    metrics: {
      title: 'Impact by the Numbers',
      items: [
        {
          label: 'Sessions Conducted',
          value: '40+',
        },
        {
          label: 'Engagement Increase',
          value: '95%',
        },
        {
          label: 'Manual Entry Reduction',
          value: '90%',
        },
        {
          label: 'Registration Completion',
          value: '35%',
        },
      ],
    },
    now: {
      title: 'Now',
      focused: 'Currently working on Cashvelo, improving transaction categorization accuracy and adding new features for budget forecasting. Also continuing my teaching work at STEM IN ACTION INC and the Community Education Center.',
      lookingFor: 'I am open to opportunities in software engineering, full stack development, frontend and backend roles, production support, fintech, and technology roles in general. I am flexible and excited to contribute to meaningful projects.',
    },
    teaching: {
      title: 'Building with Teaching in Mind',
      description: 'Teaching has shaped how I approach building software. The patience and clarity I practice in the classroom translates to thoughtful code, clear documentation, and user-friendly interfaces. I believe software should be accessible and understandable, not just functional.',
    },
  },
  about: {
    title: 'About Me',
    sections: [
      'I am a Computer Science major at CUNY Hunter College with an Economics minor, expected to graduate in May 2026. I am based in Queens, New York, where I balance my studies, teaching work, and building software.',
      'What I care about most in building software is creating real value. I focus on practical outcomes over flashy features. Whether it is reducing manual work through automation or improving user engagement through better design, I want the things I build to make a meaningful difference.',
      'My experience in teaching and community work has given me a unique perspective on how people interact with technology. I have learned that clarity and patience are essential, not just in teaching, but in building software that people actually want to use. This mindset influences everything from how I write code to how I design user experiences.',
      'I enjoy the process of solving problems, from identifying what needs to be fixed to implementing a solution and measuring its impact. I find satisfaction in the details, whether it is crafting smooth animations with Framer Motion or optimizing database queries for better performance.',
    ],
  },
}
