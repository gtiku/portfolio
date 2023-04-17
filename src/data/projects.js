module.exports = [
  {
    id: 0,
    title: "Portfolio Site",
    isCompleted: true,
    projectType: "Personal Project",
    stackType: "Front-end",
    stackTechonologies: [16, 13, 4, 5, 6, 8, 33],
    highlights: [
      "This site was built in React!",
      "MERN stack",
      "NoSQL database",
    ],
    summary: "",
    cardImage:
      "https://user-images.githubusercontent.com/62849940/229952834-3447e90d-7102-4edb-8ec2-0bbc883859db.png",
    details: [
      {
        image:
          "https://user-images.githubusercontent.com/62849940/229951688-192bc880-9d96-45a3-a6de-0b8e3aba8f02.gif",
        subtitle: "Responsive Design",
        description:
          "This app is designed for mobile, tablet and desktop views.",
      },
      {
        image:
          "https://user-images.githubusercontent.com/62849940/229951713-5255e537-168e-4f0a-94b1-1934bdd3cb2c.gif",
      },
      {
        image:
          "https://user-images.githubusercontent.com/62849940/229950752-94aa125d-b1f4-4ca4-a5a6-29981870a897.png",
        subtitle: "Deployment",
        description:
          "The frontend of this app app is deployed to Github Pages. The backend API is hosted on Heroku with a MongoDB NoSQL database.",
      },
    ],
    github: "https://github.com/gtiku/portfolio",
  },
  {
    id: 7,
    title: "Dad Jokes",
    isCompleted: true,
    projectType: "Hackathon",
    stackType: "Front-end",
    stackTechonologies: [19, 20, 16, 13, 26],
    highlights: [
      "Web API",
      "Vanilla JavaScript",
      "DOM Manipulation",
      "Search Functionality",
      "Responsive Design",
    ],
    summary:
      'For this one-day hackathon project, my team built "Dad Jokes", a simple Web Application using only HTML, CSS, Sass and Vanilla JavaScript. This app enables the user to query a Web API for jokes and then to temporarily "save" and display their favourite jokes on the app. ',
    cardImage:
      "https://github.com/gtiku/dad-jokes/blob/main/assets/images/dad-jokes-main.png?raw=true",
    details: [
      {
        image:
          "https://raw.githubusercontent.com/gtiku/dad-jokes/main/assets/images/dad-jokes-new-joke.png",
        subtitle: "Web API",
        description: `The "New Joke" button will retreive a random joke from the icanhazdadjoke.com API.`,
      },
      {
        image:
          "https://github.com/gtiku/dad-jokes/raw/main/assets/images/dad-jokes-favourite.png",
        subtitle: "Save Jokes",
        description:
          'The "Save Joke" button adds the selected joke to the "Favourite Jokes" section. Since this was an introductory Vanilla JavaScript hackathon project, no persistent data storage system was implemented. As such, the saved "Favourite Jokes" would be deleted upon page reload.',
      },
      {
        image:
          "https://github.com/gtiku/dad-jokes/raw/main/assets/images/dad-jokes-search.png",
        subtitle: "Search Functionality",
        description:
          'When the word "car" is typed in the search bar, the API is queried for jokes including the search term. The most relevant five jokes are displayed and the user can then save any or all of the presented jokes as a "Favourite Joke."',
      },
      {
        subtitle: "Responsive Design",
        description:
          "This app is fully responsive, with views built for mobile, tablet and desktop in Sass.",
      },
    ],
    github: "https://github.com/gtiku/dad-jokes",
    liveUrl: "",
  },
  {
    id: 2,
    title: "InStock",
    isCompleted: true,
    projectType: "Bootcamp Assignment",
    stackType: "Full Stack",
    stackTechonologies: [16, 13, 4, 5, 6, 26, 7, 22, 24],
    highlights: [
      "Group Project",
      "Agile Methodology",
      "CRUD Functionality",
      "Forms",
      "Adherence to UI/UX designs",
      "Responsive Design",
      "Full Stack",
    ],
    summary:
      "InStock is an Inventory Management System for a ficticious Fortune 500 client. This is a full Stack React application with an express.js backend and a MySQL database. ",
    cardImage:
      "https://user-images.githubusercontent.com/62849940/229695522-67229618-c756-492d-9935-13657b42c63a.png",
    details: [
      {
        image:
          "https://marketplace-cdn.atlassian.com/files/2f08dea5-c754-4dda-95ff-3cc3179ba9c5?fileType=image&mode=full-fit",
        subtitle: "Agile Methodology",
        description:
          "As this was a bootcamp group project, my team used Jira to organize tasks according to the Kanban framework. My team found that using a Jira Kanban board facilitated the implementation of Agile Methodology practices by providing a simple structure with which to conduct daily standup meetings, thereby enabling the group to identify problems early and to address them collectively. Since each team member had the opportunity to lead at least one daily standup meeting, together we learned to practise clear and consistent communication.",
      },
      {
        image:
          "https://user-images.githubusercontent.com/62849940/229694618-ad4a5eed-fe5f-4464-bf71-000e94c6b506.png",
        subtitle: "CRUD Functionality",
        description:
          "The InStock Inventory Management System enables the user to manipulate warehouse and inventory data from the frontend React application. The user can add a new warehouse to the database or delete an existing warehouse. The user can also edit information related to an existing warehouse. All of the same functionality (to create, read, update, or delete) is available for data related to inventory items.",
      },
    ],
    github: "https://github.com/gtiku/instock-client",
    liveUrl: "",
  },
  {
    id: 3,
    title: "BrainFlix",
    isCompleted: true,
    projectType: "Bootcamp Assignment",
    stackType: "Full Stack",
    stackTechonologies: [16, 13, 4, 5, 6, 26, 22],
    highlights: [
      "Custom API",
      "Adherence to UI/UX designs",
      "Responsive Design",
    ],
    summary:
      "BrainFlix is a Web Application with a YouTube-like layout that enables users to modify video thumbnails and leave comments. BrainFlix was a bootcamp assignment.",
    cardImage:
      "https://github.com/gtiku/giyona-tiku-brainflix/raw/main/src/assets/images/readme/brainflix.png",
    details: [
      {
        image:
          "https://user-images.githubusercontent.com/62849940/229697683-3882d2df-e10c-458e-abfb-4f757c478002.png",
        subtitle: "Add API Data",
        description:
          "Comments added by users are stored on the API with a timestamp.",
      },
      {
        image:
          "https://user-images.githubusercontent.com/62849940/229697770-48f0273b-db6a-4cd2-a2d6-1b9590af724b.png",
        subtitle: "Form Validation",
        description:
          "All form inputs are validated on the frontend before data is submitted to the API.",
      },
    ],
    github: "https://github.com/gtiku/giyona-tiku-brainflix",
    liveUrl: "",
  },
  {
    id: 4,
    title: "Pomodoro",
    isCompleted: true,
    projectType: "Tutorial",
    stackType: "Python GUI",
    stackTechonologies: [9],
    highlights: [
      "Object Oriented Programming",
      "Python Data Structures",
      "Tkinter library",
      "Graphical User Interface (GUI)",
    ],
    summary: "This simple Pomodoro GUI was built following a tutorial. ",
    cardImage:
      "https://github.com/gtiku/pomodoro/raw/main/images/readme/pomodoro-start.gif",
    details: [
      {
        image:
          "https://github.com/gtiku/pomodoro/raw/main/images/readme/pomodoro-reset.gif",
        subtitle: "Start & Reset",
        description:
          'This Pomodoro timer is set to run four 25 minute "Work" cycles, each followed by a 5 minute "Break" cycle. Every 5th break is a "Long Break" lasting 20 minutes. By clicking the "Reset" button, the timer will be reset to zero and all history of "Work" and "Break" cycles will be cleared.',
      },
    ],
    github: "https://github.com/gtiku/pomodoro",
    liveUrl: "",
  },
  {
    id: 5,
    title: "Pong",
    isCompleted: true,
    projectType: "Tutorial",
    stackType: "Python GUI",
    stackTechonologies: [9],
    highlights: [
      "Object Oriented Programming",
      "Python Data Structures",
      "Graphical User Interface (GUI)",
    ],
    summary:
      "Following a tutorial, I learned how to build a simple Python GUI to replicate the iconic game of Pong.",
    cardImage: "https://github.com/gtiku/pong-game/raw/main/pong-gui.gif",
    details: [
      {
        subtitle: "2 Players",
        description:
          'This is a 2 player game, controlled with the keyboard. Player 1 controls their paddle with the "w" and "s" keys, and Player 2 controls their paddles with the "up" and "down" keys.',
      },
      {
        subtitle: "Speed",
        description:
          "Each time a point is scored, the ball will increase in speed.",
      },
      {
        subtitle: "Scoreboard",
        description: "The scoreboard is updated with each new score.",
      },
    ],
    github: "https://github.com/gtiku/pong-game",
    liveUrl: "",
  },
  {
    id: 6,
    title: "Turtle Crossing",
    isCompleted: true,
    projectType: "Tutorial",
    stackType: "Python GUI",
    stackTechonologies: [9],
    highlights: [
      "Object Oriented Programming",
      "Python Data Types",
      "Graphical User Interface (GUI)",
    ],
    summary:
      'In Turtle Crossing, the player must use the "up" arrow key to help their tutle cross the street while avoiding passing "cars." This game was built following a tutorial.',
    cardImage:
      "https://github.com/gtiku/turtle-crossing-game/raw/main/turtle-gui.gif",
    details: [
      {
        subtitle: "Speed",
        description:
          "Each car object will increase in speed as the player progresses to a higher level.",
      },
      {
        subtitle: "Game Over",
        description: "The game ends when the turtle collides with a car.",
      },
    ],
    github: "https://github.com/gtiku/turtle-crossing-game",
    liveUrl: "",
  },
  {
    id: 8,
    title: "Closet",
    isCompleted: false,
    projectType: "Personal Project",
    stackType: "Full Stack",
    stackTechonologies: [2, 3, 4, 5, 6, 17, 18, 7],
    highlights: ["Still building"],
    summary: "",
    cardImage:
      "https://media.istockphoto.com/id/1332167985/photo/coming-soon-neon-sign-the-banner-shining-light-signboard-collection.jpg?b=1&s=170667a&w=0&k=20&c=Le4B-lJt-jXjeAOdlTQptNvN_DmRwWF19ShNc5VY4a4=",
    details: [
      {
        image: "",
        subtitle: "",
        description: "",
      },
    ],
    github: "",
    liveUrl: "",
  },
  {
    id: 9,
    title: "Archive",
    isCompleted: false,
    projectType: "Personal Project",
    stackType: "Full Stack",
    stackTechonologies: [16, 3, 23, 9, 11, 27],
    highlights: ["Still building"],
    summary: "",
    cardImage:
      "https://media.istockphoto.com/id/1332167985/photo/coming-soon-neon-sign-the-banner-shining-light-signboard-collection.jpg?b=1&s=170667a&w=0&k=20&c=Le4B-lJt-jXjeAOdlTQptNvN_DmRwWF19ShNc5VY4a4=",
    details: [
      {
        image: "",
        subtitle: "",
        description: "",
      },
    ],
    github: "",
    liveUrl: "",
  },
];
