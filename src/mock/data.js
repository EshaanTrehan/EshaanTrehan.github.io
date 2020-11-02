import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Eshaan Trehan',
  subtitle: 'I am a software developer',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi',
  paragraphTwo: 'Hello',
  paragraphThree: 'Howdy',
  resume: 'https://drive.google.com/file/d/1knjzwj7gUnFS9h_CAgFpjgGOGIUDMWG0/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'My website',
    info: 'I have created this',
    info2: 'This is mine',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  /*{
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },*/
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'eshaan.trehan@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/eshaan-trehan-39345a150/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/EshaanTrehan',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
