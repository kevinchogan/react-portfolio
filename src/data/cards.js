import csscImage from '../assets/images/cssc.png'
import image02 from '../assets/images/image-02.jpg'
import image03 from '../assets/images/image-03.jpg'
import image04 from '../assets/images/image-04.jpg'
import image05 from '../assets/images/image-05.jpg'
import image06 from '../assets/images/image-06.jpg'


const Projects = () => {
    const projectList = [
    {
        "id": 1,
        "title": "Club Sandwich Sandwich Club",
        "description": "An easy-to-use website for viewing, rating, and adding your favorite sandwich recipes",
        "link": "https://club-sandwich-sandwich-club-ddb63265b5d8.herokuapp.com/",
        "image": csscImage,
        "cardClass": "card-column",
        "altText": "altTextTBD"
    },
    {
        "id": 2,
        "title": "Lorem Ipsum",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        "link": "#",
        "image": image02,
        "cardClass": "card-column rest",
        "altText": "altTextTBD"
    },
    {
        "id": 3,
        "title": "Dolor Sit",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        "link": "#",
        "image": image03,
        "cardClass": "card-column rest",
        "altText": "altTextTBD"
    },
    {
        "id": 4,
        "title": "Consectetur Adipisci Elit",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        "link": "#",
        "image": image04,
        "cardClass": "card-column rest",
        "altText": "altTextTBD"
    },
    {
        "id": 5,
        "title": "Corporis Suscipit",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        "link": "#",
        "image": image05,
        "cardClass": "card-column rest",
        "altText": "altTextTBD"
    },
    {
        "id": 6,
        "title": "Nulla Pariatur",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
        "link": "#",
        "image": image06,
        "cardClass": "card-column rest",
        "altText": "altTextTBD"
    }
]
return projectList
}

export default Projects