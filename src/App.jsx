import React from 'react';
import './reset.css'
import './App.css'
import image01 from './assets/images/image-01.jpg';
import image02 from './assets/images/image-02.jpg';
import image03 from './assets/images/image-03.jpg';
import image04 from './assets/images/image-04.jpg';
import image05 from './assets/images/image-05.jpg';
import image06 from './assets/images/image-06.jpg';
import portrait from './assets/images/portrait.jpg';

function App() {

  return (
    <>
      <header>
        <h1>Kevin Hogan</h1>
        <nav>
          <ul>
            <li>
              <a href="#About_Me">About Me</a>
            </li>
            <li>
              <a href="#Work">Work</a>
            </li>
            <li>
              <a href="#Contact_Info">Contact Info</a>
            </li>
            <li>
              <a href="./assets/pdf/Kevin Hogan Resume.pdf">Resume</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="about-me">
          <h2 id="About_Me">About Me</h2>
          <div>
            <img className="portrait" src={portrait} />
            <p>
              I have spent over 30 years in the video game industry as a producer,
              designer, and development director, having worked on some of the
              most successful franchises in the industry&#39;s history including
              NHL Hockey, John Madden Football, Sim City, The Sims, and Monopoly
              Go! I discovered a deep passion for programming as a child teaching
              myself BASIC on my TI-99/4A. During my time as a team leader in
              video gaming I taught myself VBA. I now intend to spend the second
              half of my life focused on pursuing that passion full-time as a web
              application developer.
            </p>
          </div>
        </section>

        <h2 id="Work" className="work-header">Work</h2>
        <section className="row justify-center">
          <div className="card-column">
            <a target="_blank" href="https://kevinchogan.github.io/module-01/">
              <figure className="card">
                <h3 className="card-header">Web Marketing Services</h3>
                <img className="card-image" src={image06} />
                <div className="card-body">
                  Refactored existing code in a web application to include
                  accessibility features, improve code readability, and adhere to
                  semantic HTML element style standards.
                </div>
              </figure>
            </a>
          </div>
        </section>
        <section className="row justify-center">
          <div className="card-column rest">
            <a target="_blank" href="#">
              <figure className="card">
                <h3 className="card-header">Lorem Ipsum</h3>
                <img className="card-image" src={image02} />
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua.
                </div>
              </figure>
            </a>
          </div>
          <div className="card-column rest">
            <a target="_blank" href="#">
              <figure className="card">
                <h3 className="card-header">Dolor Sit</h3>
                <img className="card-image" src={image01} />
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua.
                </div>
              </figure>
            </a>
          </div>
          <div className="card-column rest">
            <a target="_blank" href="#">
              <figure className="card">
                <h3 className="card-header">Consectetur Adipisci Elit</h3>
                <img className="card-image" src={image04} />
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua.
                </div>
              </figure>
            </a>
          </div>
          <div className="card-column rest">
            <a target="_blank" href="#">
              <figure className="card">
                <h3 className="card-header">Corporis Suscipit</h3>
                <img className="card-image" src={image05} />
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua.
                </div>
              </figure>
            </a>
          </div>
          <div className="card-column rest">
            <a target="_blank" href="#">
              <figure className="card">
                <h3 className="card-header">Nulla Pariatur</h3>
                <img className="card-image" src={image03} />
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua.
                </div>
              </figure>
            </a>
          </div>
        </section>
        <section className="contacts">
          <h2 id="Contact_Info">Contact Info</h2>
          <ul>
            <li>Phone Number: <a href="tel:9256990145">925-699-0145</a></li>
            <li>
              Email: <a href="mailto:kchogan@pacbell.net">kchogan@pacbell.net</a>
            </li>
            <li>
              LinkedIn:
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kevin-hogan-aa53392/"
                >Profile</a>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <h3>Made with <span role="img" aria-label="heart">❤️</span> and CSS</h3>
      </footer>
    </>
  )
}

export default App
