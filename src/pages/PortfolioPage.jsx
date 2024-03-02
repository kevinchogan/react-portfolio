import Projects from '../data/cards.js'
import Card from '../components/UI/Card'

export default function PortfolioPage() {
  const projectList = Projects();

  console.log(projectList[0]);
  const { title, description, link, image } = projectList[0];
    return (
      <>
        <h2 id="Work" className="work-header">Portfolio</h2>
        <section className="row justify-center">
          <Card title={title} description={description} link={link} image = {image}/>
        </section>
        {/* <section className="row justify-center">
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
        </section> */}
      </>
    );
  }
  