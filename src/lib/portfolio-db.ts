export interface Experience {
  id: string;
  event: string;
  role: string;
  description: string;
  tasks: string[];
  year: string;
  yearEnd?: string;
  images?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  sourceUrl: string;
  image: string;
}

export const experiences: Experience[] = [
  {
    id: 'experience_01',
    event: 'Aku Masuk ITB 2025',
    role: 'Music Division Staff',
    description: 'Introduction to public masses about ITB and its campus.',
    tasks: ['Write and produce the theme song'],
    year: '2025',
  },
  {
    id: 'experience_02',
    event: 'GiG! 15: Jazztalgia',
    role: 'Project Manager',
    description: 'Jazz gig by new members of ITBJazz.',
    tasks: [
      'Conceptualize an innovative concert',
      'Plan and organize a profitable event in 1 month',
    ],
    year: '2025',
  },
  {
    id: 'experience_03',
    event: 'Impact 5.0',
    role: 'Visual Design Division Staff',
    description: 'Math, physics, and informatics competition by the students of Sekolah Teknologi Elektro dan Informatika - Komputasi ITB.',
    tasks: ['Design graphic assets for physical and online publication of the event'],
    year: '2025',
  },
  {
    id: 'experience_04',
    event: 'Jazz Aula Timur 2025',
    role: 'Event Organizer Division Staff',
    description: 'Yearly concert by ITBJazz showcasing the talents of members and guest star, Teddy Adhitya.',
    tasks: [
      'Conceptualize a concert showcasing a combination of music genres and jazz',
      'Operate the visuals of each performance',
    ],
    year: '2025',
  },
  {
    id: 'experience_05',
    event: 'Makrab STEI-K\'24',
    role: 'Head of Operations',
    description: 'Excursion for first year students of Sekolah Teknologi Elektro dan Informatika - Komputasi ITB as a means of tying them together.',
    tasks: ['Provide consumption for participants', 'Procure sound and lighting systems for night gig'],
    year: '2025',
  },
  {
    id: 'experience_06',
    event: 'KAT ITB 2025',
    role: 'Mentor',
    description: 'Introductory period for new ITB students.',
    tasks: [
      'Guide new ITB students through orientation events',
      'Provide necessary knowledge for new ITB students in order to become a member of KM ITB',
    ],
    year: '2025',
  },
  {
    id: 'experience_07',
    event: 'BP ITBJazz #Jazzademia',
    role: 'Vice Head of Curriculum',
    description: 'Executive board of student unit ITBJazz.',
    tasks: [
      'Produce The Catz Module, 4 documents containing fundamentals of piano, guitar, bass, and drums',
      'Oversee the production of The Kroyokeanjes Lead Sheet, a document containing guidelines for orientation of future members of ITBJazz',
    ],
    year: '2025',
    yearEnd: '2026',
  },
  {
    id: 'experience_08',
    event: 'Jazz Aula Barat #9',
    role: 'Operations Division Staff',
    description: 'Yearly legacy concert by ITBJazz showcasing the talents of Ermy Kulit and Sandhy Sondoro.',
    tasks: ['Procure logistic needs for the event', 'Performed as a guitar player for the opening band'],
    year: '2025',
  },
  {
    id: 'experience_09',
    event: 'Dies Natalis ke-43 HMIF ITB',
    role: 'Head of Event Organizer',
    description: 'Festivities to celebrate the 43rd anniversary of HMIF ITB.',
    tasks: ['Organize a ceremonial event to honour HMIF ITB', 'Organize a sharing and games session with alumni'],
    year: '2025',
  },
  {
    id: 'experience_10',
    event: 'Kroyokeanjes 2025',
    role: 'Vice Head of Mentor Development',
    description: 'Orientation for new members of student organization ITBJazz.',
    tasks: ['Train mentors to provide necessary help to future ITBJazz members'],
    year: '2025',
    yearEnd: '2026',
  },
  {
    id: 'experience_11',
    event: 'DE HMIF ITB Lakara',
    role: 'People Development Division Intern',
    description: 'Executive board of student union HMIF ITB.',
    tasks: ['Organize a pre-orientation event for future HMIF ITB members', 'Oversee the selection of heads of organizing committees'],
    year: '2025',
    yearEnd: '2026',
  },
  {
    id: 'experience_12',
    event: 'Wisuda Oktober 2025 HMIF ITB',
    role: 'Field Division Staff',
    description: 'Festivities to celebrate the graduation of HMIF ITB members.',
    tasks: ['Ensure the safety and comfort of HMIF ITB graduates during the graduation parade', 'Act as percussions during the graduation parade'],
    year: '2025',
  },
  {
    id: 'experience_13',
    event: 'Jazz Aula Timur 2026',
    role: 'General Secretary',
    description: 'Yearly concert by ITBJazz showcasing the talents of members and guest stars. Adikara and Wijaya 80.',
    tasks: ['Help the project officer with executive decisions', 'Provide administrative needs for organizing committee', 'Perform as a bass player for the opening band for Wijaya 80'],
    year: '2026',
  },
  {
    id: 'experience_14',
    event: 'Wisuda April 2026 HMIF ITB',
    role: 'Field Division Staff',
    description: 'Festivities to celebrate the graduation of HMIF ITB members.',
    tasks: ['Ensure the safety and comfort of HMIF ITB graduates during the graduation parade', 'Act as percussions during the graduation parade'],
    year: '2026',
  },
  {
    id: 'experience_15',
    event: 'DE HMIF ITB Prisma',
    role: 'People Development Division Staff',
    description: 'Executive board of student union HMIF ITB.',
    tasks: ['Oversee and help the orientation of new HMIF ITB members', 'Oversee the selection of heads of organizing committees'],
    year: '2026',
    yearEnd: 'Present',
  },
  {
    id: 'experience_16',
    event: 'Sekolah Mentor KAT ITB 2026',
    role: 'Head of Materials and Methods',
    description: 'Training program for future mentors of KAT ITB 2026.',
    tasks: [
      'Design a curriculum for future mentors of KAT ITB 2026',
      'Train mentors to provide necessary help to future mentors of KAT ITB 2026',
      'Design a scoring matrix for the selection of future mentors of KAT ITB 2026',
    ],
    year: '2026',
    yearEnd: 'Present',
  },
];

export const projects: Project[] = [
  {
    id: 'oop_final_project',
    title: 'Object Oriented Programming Final Project',
    description: 'A cooking game complete with GUI made with Java and JavaFX for a 3rd semester subject.',
    stack: ['Java', 'JavaFX'],
    sourceUrl: 'https://github.com/rnfaizi/K02_B_Tubes-OOP.git',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'iot_final_project',
    title: 'Internet of Things Final Project',
    description: 'A smart parking system prototype to detect filled parking slots and illegal parking made with ESP32 microcontrollers complete with a dashboard for a 4th semester subject.',
    stack: ['C', 'HTML'],
    sourceUrl: 'https://youtu.be/lJAE66GhE9s?si=Z-GmKIiZiHS_JaHY',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
  },
];

export const getExperiences = () => experiences;
export const getProjects = () => projects;
export const getExperienceById = (id: string) => experiences.find((item) => item.id === id);
export const getProjectById = (id: string) => projects.find((item) => item.id === id);
