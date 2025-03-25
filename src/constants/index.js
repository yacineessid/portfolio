import budget from '../assets/projects/bugdet-planner.png'
import quiz from '../assets/projects/quiz-foot.png'
import catAdoption from '../assets/projects/cat-adoption.png'
import weatherApp from '../assets/projects/Meteo-app.png'
import todolist from '../assets/projects/Todolist.png'
import fitnessHub from '../assets/projects/fitness-hub.png'
import portfolio from  '../assets/projects/portfolio.png'

export const HERO_CONTENT = `As an aspiring and motivated web developer, I have hands-on experience in the field of web development, focusing on front-end technologies such as HTML5, CSS, JavaScript, and TypeScript, as well as libraries and frameworks like React and Angular. By working in various teams and participating in a wide range of projects, I have gained valuable practical experience and expanded my expertise.`;

export const ABOUT_TEXT = ` My curiosity and thirst for knowledge drive me to constantly seek out new challenges and opportunities to grow. I thrive in environments that encourage innovation and experimentation, where I can push the boundaries of what's possible and learn from every experience. Whether it's mastering a new programming language, exploring emerging technologies, or tackling complex problems, I'm always eager to expand my skill set and embrace the next big challenge.
`;

export const EXPERIENCES = [
  {
    year: "11/2021 - 12/2023",
    role: "Frontend Developer",
    company: "Euro tech conseil.",
    description:'I am responsible for integrating web interfaces using HTML5, CSS, Angular Material, Flex Layout, and Bootstrap, as well as developing reusable Angular components. My role includes integrating backend APIs and creating services for APIs and shared functions. I assist in developing and implementing new features within existing applications and actively participate in optimizing user experience and application performance through continuous improvement of both front-end and back-end components. Additionally, I participate in code reviews to enhance code quality, fix bugs, and resolve code conflicts, ensuring smooth and efficient application operation.',
    technologies: [ "Html5","Css","Javascript","Typescript","Angular","Reactjs","Bootstrap","Angular-material","Git","Gitlab","Sonarquebe"],
  },
  {
    year: "10/2017 - 02/2021",
    role: "Marketing Coordinator",
    company: "Kairouan voyage",
    description: `I am responsible for designing and creating engaging digital brochures and other marketing materials to promote the travel agency's offerings. My role includes entering hotel reservations, as well as requesting and following up on special promotions to ensure optimal customer experiences and satisfaction.`,
    technologies: ["Photoshop", "Canva", "Social Media Platforms"],
  },
  {
    year: "02/2015 - 08/2017",
    role: "Marketing  cordinator",
    company: "Satiha",
    description: `As a Marketing and Web Coordinator at a travel agency, I was responsible for entering all contracts and hotel reservations, as well as updating and maintaining the agency's website to ensure accurate and up-to-date information on travel contracts, hotel bookings, and special promotions. I collaborated with an external development team to implement website improvements, including new features and usability enhancements. Additionally, I created and designed visual content for the website, such as new pages, digital brochures, and graphic elements.`,
    technologies: ["Photoshop", "Canva", "Social Media Platforms"],
  },

  
  
];

export const PROJECTS = [
  {
    title: "Fitness-Hub",
    image: fitnessHub,
    description:"Achieve your fitness goals with our all-in-one fitness website. Access a variety of exercises, fitness guidance, and nutrition tips tailored to your needs. Stay motivated, track your workouts, and maintain a healthy lifestyle with ease.   ",
    link:'https://fitness-hub-beryl.vercel.app/',

    technologies: ["HTML", "CSS", "Angular", "Typescript", "Bootstrap"],
  },
 
  {
    title: "Todolist App",
    image: todolist,
    link:'https://task-trek-fawn.vercel.app/',
    description:
      "Stay organized and boost productivity with our user-friendly to-do list application. Easily create, manage, and prioritize tasks, set reminders, and track your progress to accomplish your goals efficiently.",
    technologies: ["HTML", "CSS", "Angular","Typescript"],
  },
  {
    title: "Weather App",
    image: weatherApp,
    link:'https://sky-cast-liard.vercel.app/',
    description:
      "A simple and intuitive application that provides real-time weather updates and forecasts for your location. Stay informed about current weather conditions, temperature changes, and upcoming forecasts to plan your day effectively.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Budget-planner",
    image: budget,
    description:"Take control of your finances with our comprehensive budget planner application. Track your income, expenses, and savings goals effortlessly. Set budgets for various categories, visualize your spending patterns, and make informed financial decisions.    ",
    link:'https://smart-spend-inky.vercel.app/',

    technologies: ["HTML", "CSS", "Angular","Typescript","bootstrap" ],
  },
  {
    title: "Portfolio",
    image: portfolio,
    description:
      "Welcome to my portfolio, a showcase of my journey as a web developer and a testament to my passion for crafting beautiful, functional, and user-centric digital experiences. Within these virtual walls, you'll find a collection of projects that represent my skills, creativity, and dedication to the craft.",
    technologies: ["HTML", "Tailwindcss", "React",'Vite', "Jsx", "Framer","React-icons"],
  },
  {
    title: "Cat Adoption",
    image: catAdoption,
    description:"Find your purr-fect companion with our cat adoption application. Explore profiles of adorable cats available for adoption, learn about their personalities and preferences, and connect with shelters or individuals to give a loving home to a furry friend.  ",
    link:'    https://meao-manor.vercel.app/',
    technologies: ["HTML", "CSS", "Angular", "Typescript", "Bootstrap"],
  },
  {
    title: "Football-Quiz ",
    image: quiz,
    link:'https://soccer-quiz-nine.vercel.app/',
    description:" Test your football knowledge with our fun and challenging quiz application. Put your passion for football to the test with a wide range of trivia questions covering players, teams, matches, and historical facts. Compete with friends and fellow football enthusiasts to see who knows the most about the beautiful game. ",
    technologies: ["HTML", "CSS", "Angular", "Typescript", "Bootstrap"],
  },
];

export const CONTACT = {
  phoneNo: "+4915510459824 ",
  email: "yacine.essid@gmail.com",
};
