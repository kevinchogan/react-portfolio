import csscImage from '../assets/images/cssc.png'
import logo from '../assets/images/logo.png'
import ecommerce from '../assets/images/ecommerce.png'
import emptracker from '../assets/images/emptracker.png'
import weather from '../assets/images/weather.png'
import beer from '../assets/images/beer.png'
import socialnetwork from '../assets/images/socialnetwork.png'
import quiz from '../assets/images/quiz.png'
import readme from '../assets/images/readme.png'
import techblog from '../assets/images/techblog.png'

const Projects = () => {
    const projectList = [
    {
        "id": 1,
        "title": "Club Sandwich Sandwich Club",
        "description": "An easy-to-use website for viewing, rating, and adding your favorite sandwich recipes.  The application includes encrypted user authentication, a SQL database for storing sandwich recipes, user information, and ratings, and full CRUD API implementation for all stored data.",
        "link": "https://club-sandwich-sandwich-club-ddb63265b5d8.herokuapp.com/",
        "gitHub": "https://github.com/philsloan/Club-Sandwich-Sandwich-Club",
        "tech": [
            "html/CSS",
            "Node.js",
            "dotenv",
            "bcrypt",
            "express",
            "express-session",
            "MySQL",
            "sequelize",
            "handlebars",
        ],
        "video": "",
        "image": csscImage,
        "cardClass": "card-column",
        "altText": "Image of the club sandwich sandwich club website"
    },
    {
        "id": 2,
        "title": "Tech Blog",
        "description": "CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts.",
        "link": "https://tech-blog-kevin-52708dd36d86.herokuapp.com/",
        "gitHub": "https://github.com/kevinchogan/tech-blog",
        "tech": [
            "html/CSS",
            "Node.js",
            "dotenv",
            "bcrypt",
            "express",
            "express-session",
            "MySQL",
            "sequelize",
            "handlebars",
        ],
        "video": "",
        "image": techblog,
        "cardClass": "card-column rest",
        "altText": "Image of the tech blog website"
    },
    {
        "id": 3,
        "title": "Logo Maker",
        "description": "A Node.js command-line application that prompts the user to select a color, shape, and text to create a logo and save it as an SVG file. Includes a suite of auto-tests utilizing Jest.",
        "link": "",
        "gitHub": "https://github.com/kevinchogan/logo-maker",
        "tech": [
            "Node.js",
            "Inquirer",
            "Jest",
        ],
        "video": "https://youtu.be/lCa20vam9GE",
        "image": logo,
        "cardClass": "card-column rest",
        "altText": "Image of the logo maker application running in a VS Code terminal"
    },
    {
        "id": 4,
        "title": "E-commerce Backend",
        "description": "The back end for an e-commerce site using Express.js API and Sequelize to interact with a MySQL database.",
        "link": "https://ecommerce-backend-kevin-0fba4610ffb4.herokuapp.com/api/products",
        "gitHub": "https://github.com/kevinchogan/e-commerce-backend",
        "tech": [
            "Node.js",
            "Dotenv",
            "Express",
            "MySQL",
            "Sequelize",
            "Insomnia",
        ],
        "video": "https://www.youtube.com/watch?v=q-3N93Op4s0",
        "image": ecommerce,
        "cardClass": "card-column rest",
        "altText": "Image of the e-commerce backend API calls being made in Insomnia"
    },
    {
        "id": 5,
        "title": "Employee Tracker",
        "description": "A command-line application to manage a company's employee database.",
        "link": "",
        "gitHub": "https://github.com/kevinchogan/employee-tracker",
        "tech": [
            "Node.js",
            "Dotenv",
            "Inquirer",
            "Express",
            "MySQL",
        ],
        "video": "https://youtu.be/CPEJyDaeMLE",        
        "image": emptracker,
        "cardClass": "card-column rest",
        "altText": "Image of the employee tracker application running in a VS Code terminal"
    },
    {
        "id": 6,
        "title": "Weather Dashboard",
        "description": "A weather dashboard for showing the 5 day weather forecast for the city of your choice. Utilizes JQuery & JQuery UI to prompt the user to enter a city and fetch data from openweather.com to display weather for that city.",
        "link": "https://kevinchogan.github.io/weather-dashboard/",
        "gitHub": "https://github.com/kevinchogan/weather-dashboard",
        "tech": [
            "HTML/CSS",
            "Javascript",
            "JQuery",
            "JQuery UI",
            "Bootstrap",
            "Moment.js",
            "Open Weathermap API",
        ],
        "video": "",          
        "image": weather,
        "cardClass": "card-column rest",
        "altText": "Image of the weather dashboard web site"
    },
    {
        "id": 7,
        "title": "Beer Is Poetic",
        "description": "This website allows you to search a city for a list of breweries and will generate a satellite image of the city as well as a random beer-related poem.",
        "link": "https://jonsantosdev.github.io/beer-is-poetic/",
        "gitHub": "https://github.com/jonsantosdev/beer-is-poetic",
        "tech": [
            "HTML/CSS",
            "Javascript",
            "JQuery",
            "JQuery UI",
            "Tailwinds",
            "Open Brewery DB API",
            "NASA Planetary Earth API",
            "PoetryDB.org API"
        ],
        "video": "",          
        "image": beer,
        "cardClass": "card-column rest",
        "altText": "Image of the beer and poetry web site"
    },
    {
        "id": 8,
        "title": "Social Network API",
        "description": "An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
        "link": "",
        "gitHub": "https://github.com/kevinchogan/social-network-api",
        "tech": [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Insomnia",
            "Dotenv",
        ],
        "video": "https://youtu.be/ZhuGKlcfDqw",          
        "image": socialnetwork,
        "cardClass": "card-column rest",
        "altText": "Image of the social network backend API calls being made in Insomnia"
    },
    {
        "id": 9,
        "title": "Code Quiz",
        "description": "A timed coding quiz with multiple-choice questions. Utilizes vanilla html. css, and javascript to present a series of web-development related questions.",
        "link": "https://kevinchogan.github.io/code-quiz/",
        "gitHub": "https://github.com/kevinchogan/code-quiz",
        "tech": [
            "HTML/CSS",
            "Javascript",
        ],
        "video": "",          
        "image": quiz,
        "cardClass": "card-column rest",
        "altText": "Image of the code quiz website"
    },
    {
        "id": 10,
        "title": "Readme Generator",
        "description": "A node.js application that prompts for project information and automatically generates a high-quality README.md file using that information.",
        "link": "",
        "gitHub": "https://github.com/kevinchogan/readme-generator",
        "tech": [
            "Node.js",
            "Inquirer",
        ],
        "video": "https://youtu.be/Wr1VyWIsC-I",          
        "image": readme,
        "cardClass": "card-column rest",
        "altText": "Image of the readme generator application running in a VS Code terminal"
    },
]
return projectList
}

export default Projects