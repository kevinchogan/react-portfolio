import image01 from '../assets/images/image-01.jpg';
import image02 from '../assets/images/image-02.jpg';
import image03 from '../assets/images/image-03.jpg';
import image04 from '../assets/images/image-04.jpg';
import image05 from '../assets/images/image-05.jpg';
import image06 from '../assets/images/image-06.jpg';

export default function PortfolioPage() {
    return (
      <>
        <h2 id="Work" className="work-header">Portfolio</h2>
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
      </>
    );
  }
  