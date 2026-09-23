import { symbol } from "motion/react-client";

export const nav = [
    {
 id:1,
 title: "Home",
 link: "/"
    },
    {
        id: 2,  
        title: "courses",
        link: "/course"
    },
    {
        id: 3,
        title: "About",
        link: "/"
    },
    
      {
        id: 4,
        title: "Works",
        link: "/"
    },
        {
        id: 5,
        title: "Pricing",
        link: "/"
    }
]



export const courses= [
    {

        id: 1,
        title: "Quran Foundation Course",
        img: "/quran.jpg",
    },
        {

        id: 2,
        title: "Quran Reading with Tajweed",
        img: "/quran.jpg",
    },
            {

        id: 3,
        title: "Quran Memorization (Hifz)",
        img: "/quran.jpg",
    },
       {

        id: 4,
        title: "Tafseer-ul-Quran",
        img: "/quran.jpg",
    },
    {
      
        id: 5,
        title: "Learn Arabic",
        img: "/quran.jpg",  
    }
]


export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "General" | "Classes & Curriculum" | "Tutors" | "Scheduling & Tech";
}

export const FAQS: FAQItem[] = [
  // --- General & Setup ---
  {
    id: "faq-1",
    category: "General",
    question: "How do online Quran classes work?",
    answer: "Our online Quran classes are conducted through live video sessions with certified Quran tutors. Students choose their preferred schedule, join one-to-one interactive classes, and receive personalised guidance based on their level and learning goals.",
  },
  {
    id: "faq-2",
    category: "General",
    question: "How long is the free trial class?",
    answer: "Our free trial class is typically 30 minutes long and allows students and parents to experience our teaching style before registration. No payment or commitment is required.",
  },
  {
    id: "faq-3",
    category: "General",
    question: "What age groups do you teach?",
    answer: "We provide online Quran classes for students of all age groups, including children, teenagers, and adults. Our tutors adapt their teaching methods according to each student's age, level, and learning pace.",
  },
  {
    id: "faq-4",
    category: "General",
    question: "Are classes conducted 1-on-1 or in groups?",
    answer: "We primarily offer 1-on-1 private classes to ensure personalized attention and tailored lesson pacing for every student. Group sessions are also available upon request.",
  },

  // --- Classes & Curriculum ---
  {
    id: "faq-5",
    category: "Classes & Curriculum",
    question: "What courses do you offer?",
    answer: "We offer courses in Qaida for beginners (basic reading), Quran Recitation with Tajweed, Quran Memorization (Hifz), Quran Translation & Tafseer, and Basic Islamic Studies.",
  },
  {
    id: "faq-6",
    category: "Classes & Curriculum",
    question: "How long does each class session last?",
    answer: "Standard sessions typically last 30 to 45 minutes per class. However, duration can be customized depending on the student's age and course requirements.",
  },
  {
    id: "faq-7",
    category: "Classes & Curriculum",
    question: "How long will it take to complete the Quran?",
    answer: "Learning pace varies from student to student depending on their age, dedication, attendance, and starting level. Our tutors provide regular progress reports to track development.",
  },

  // --- Tutors ---
  {
    id: "faq-8",
    category: "Tutors",
    question: "Do you have female Quran teachers?",
    answer: "Yes, we have experienced and certified female Quran teachers available for sisters and children who prefer female instructors.",
  },
  {
    id: "faq-9",
    category: "Tutors",
    question: "Are your Quran tutors qualified and certified?",
    answer: "Yes, all our instructors are qualified Islamic scholars, Hafiz-e-Quran, and experts in Tajweed with years of online teaching experience. They undergo thorough background checks and training before teaching.",
  },

  // --- Scheduling & Tech ---
  {
    id: "faq-10",
    category: "Scheduling & Tech",
    question: "Can I reschedule or cancel a class?",
    answer: "Yes, classes can be rescheduled or cancelled with prior notice. We offer flexible scheduling to accommodate different time zones and family routines.",
  },
  {
    id: "faq-11",
    category: "Scheduling & Tech",
    question: "How do flexible class schedules work?",
    answer: "You can choose class days and times that best fit your routine and time zone. We offer round-the-clock scheduling options.",
  },
  {
    id: "faq-12",
    category: "Scheduling & Tech",
    question: "What software or tools do I need to attend classes?",
    answer: "All you need is a stable internet connection, a computer, tablet, or smartphone, and a video conferencing app like Zoom or Google Meet.",
  },
];

export interface CourseLink {
  id: string;
  title: string;
  link: string;
}

export const COURSE_LINKS: CourseLink[] = [
  {
    id: "qaida-noorania",
    title: "Qaida Noorania",
    link: "#",
  },
  {
    id: "quran-reading-tajweed",
    title: "Quran Reading with Tajweed",
    link: "#",
  },
  {
    id: "quran-memorization-hifz",
    title: "Quran Memorization (Hifz)",
    link: "#",
  },
  {
    id: "tafseer-ul-quran",
    title: "Tafseer-ul-Quran",
    link: "#",
  },
  {
    id: "advanced-tajweed",
    title: "Advanced Tajweed",
    link: "#",
  },
  {
    id: "arabic-language",
    title: "Arabic Language",
    link: "#",
  },
  {
    id: "learn-arabic-online",
    title: "Learn Arabic Online",
    link: "#",
  },
];

export const CurrencyPairs = [
    {
        id: 1,
        title: "USD",
        symbol: "$"
    },
      {
        id: 2,
        title: "GBP",
        symbol: "£"
    },
      {
        id: 3,
        title: "CAD",
        symbol: "C$"
    },
      {
        id: 4,
        title: "AUD",
        symbol: "A$"
    },
    
]