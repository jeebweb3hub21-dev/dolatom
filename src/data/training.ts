export interface TrainingProgram {
  id: string
  title: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  summary: string
  outcomes: string[]
}

export const trainingPrograms: TrainingProgram[] = [
  {
    id: 'computer-basics',
    title: 'Computer Basics & Typing',
    duration: '1 month',
    level: 'Beginner',
    summary:
      'A confidence-building introduction for students who are new to computers. Learn the parts of a computer, how to use Windows, manage files and type accurately.',
    outcomes: [
      'Operate a computer and the Windows desktop confidently',
      'Create, organise and back up files and folders',
      'Touch-type at 25+ words per minute',
      'Use email and browse the internet safely',
    ],
  },
  {
    id: 'office-suite',
    title: 'Microsoft Office Essentials',
    duration: '3 months',
    level: 'Beginner',
    summary:
      'Master Word, Excel and PowerPoint for school assignments, projects and future work. Practical exercises based on real academic tasks.',
    outcomes: [
      'Format reports, letters and project write-ups in Word',
      'Build spreadsheets with formulas and charts in Excel',
      'Design clear, professional presentations in PowerPoint',
      'Print, export to PDF and share documents correctly',
    ],
  },
  {
    id: 'graphics-design',
    title: 'Graphics Design Foundations',
    duration: '3 months',
    level: 'Intermediate',
    summary:
      'Learn the principles of design and produce flyers, posters, logos and social media graphics using popular design tools.',
    outcomes: [
      'Apply colour, typography and layout principles',
      'Design flyers, banners and simple logos',
      'Prepare artwork for print and for social media',
      'Build a starter portfolio of 5+ projects',
    ],
  },
  {
    id: 'web-fundamentals',
    title: 'Web Development Fundamentals',
    duration: '6 months',
    level: 'Intermediate',
    summary:
      'Build and publish real websites. Start with HTML and CSS, then add interactivity with JavaScript and learn how the web works.',
    outcomes: [
      'Write clean HTML and CSS for responsive pages',
      'Add interactivity with JavaScript basics',
      'Understand hosting, domains and publishing a site',
      'Complete and present a personal website project',
    ],
  },
  {
    id: 'ict-diploma',
    title: 'Comprehensive ICT Diploma',
    duration: '12 months',
    level: 'Advanced',
    summary:
      'Our full programme combining computer basics, Office, graphics, web fundamentals and an introduction to networking and hardware maintenance.',
    outcomes: [
      'All outcomes from the shorter programmes',
      'Diagnose and fix common hardware and software faults',
      'Set up small networks and shared printers',
      'Graduate with a DCR certificate and project portfolio',
    ],
  },
]

export const trainingDurations = [
  { value: '1', label: '1 month' },
  { value: '3', label: '3 months' },
  { value: '6', label: '6 months' },
  { value: '12', label: '12 months' },
]
