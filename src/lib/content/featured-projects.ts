import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Forkify',
      description:
        'A platform that transforms how individuals discover, create, and share recipes',
      tasks:
        'Designed and developed the Forkify application by thoroughly planning the project, implementing a user-friendly interface, creating recipe pages, and integrating real-time recipe search and filtering functionality.',
      url: 'https://github.com/shamshubham/forkify-application',
      repo: 'https://github.com/shamshubham/forkify-application',
      img: 'https://raw.githubusercontent.com/shamshubham/forkify-application/main/screenShots/Capture.JPG',
      tags: ['JS', 'HTML', 'CSS', 'REST APIs'],
    },
    // {
    //   id: getId(),
    //   name: 'Equinix Portal',
    //   description:
    //     'Portal for managing customers and facilitating multi-cloud connectivity through the Open Cloud Exchange.',
    //   tasks:
    //     'I collaborated with my teammates to strategically plan project milestones, develop the Equinix portal, establish a consistent design system, and integrate secure authentication for managing customer access and connectivity services.',
    //   url: 'https://github.com/shamshubham',
    //   img: 'https://user-images.githubusercontent.com/68834718/279476369-2f69466a-71db-4da0-9afd-04f8f0efb621.jpeg',
    //   tags: ['ReactJs', 'NodeJs', 'Express', 'MongoDB'],
    // },
    {
      id: getId(),
      name: 'Z-GenCue',
      description:
        'A streamlined to-do app for managing and prioritizing your tasks effortlessly.',
      tasks:
        "I comprehensively understood the project's requirements and developed a to-do application. This included designing an intuitive user interface for the frontend, setting up the backend infrastructure with a database, and implementing features for task management, reminders, and prioritization., I understood the client's requirements and executed a plan to develop and design an e-commerce platform, including the frontend UI, backend setup with database, APIs, and integration with payment platforms.",
      url: 'https://github.com/shamshubham/todo-app',
      img: 'https://raw.githubusercontent.com/shamshubham/todo-app/master/ss/Capture.JPG',
      tags: [
        'NextJs',
        'JavaScript',
        'TailwindCSS',
        'Heroicons',
        'Local Storage',
      ],
    },
    {
      id: getId(),
      name: 'Mapty',
      description: 'The platform that simplifies tracking sports activities.',
      tasks:
        'Implemented location-based tracking, integrated Google Maps API for precise geolocation, developed custom hooks for activity data management, created intuitive UI components for logging and viewing sports activities, and utilized local storage for persistent data across sessions.',
      url: 'https://github.com/shamshubham/mapty',
      repo: 'https://github.com/shamshubham/mapty',
      img: 'https://raw.githubusercontent.com/shamshubham/mapty/master/screenShots/Capture.JPG',
      tags: ['JS', 'HTML', 'CSS', 'Geolocation API', 'Leaflet'],
    },
    {
      id: getId(),
      name: 'Blog',
      description:
        'A sleek and responsive blog web app for publishing and discovering compelling content.',
      tasks:
        'Engineered a blog web app with real-time commenting, integrated authentication for secure user access, developed reusable UI components for post display and categorization, leveraged custom hooks for streamlined state handling, and employed MONGODB for saving user settings and draft posts.',
      url: 'https://github.com/shamshubham/blog-website-design-react',
      repo: 'https://github.com/shamshubham/blog-website-design-react',
      img: 'https://raw.githubusercontent.com/shamshubham/blog-website-design-react/main/screenShots/Capture.JPG',
      tags: ['ReactJs', 'NodeJs', 'HTML', 'CSS', 'MongoDB'],
    },
  ],
};

export default featuredProjectsSection;
