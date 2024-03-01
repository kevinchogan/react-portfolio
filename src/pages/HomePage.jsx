import portrait from '../assets/images/portrait.jpg';

export default function AboutPage() {
    return (
        <section className="about-me">
          <h2 id="About_Me">About Me</h2>
          <div className="about-container">
            <img className="portrait" src={portrait} />
            <p className="portrait-body">
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
            <p className="portrait-body">
              To that end, I have immersed myself in the web development world working
              with javascript, node.js, jquery, JSON, Express, MySQL, Sequelize, PWA,
              MongoDB, Mongoose, React, and MERN to develop a number of projects viewable 
              on the Portfolio tab of this web site.
            </p>
          </div>
        </section>
    );
  }
  