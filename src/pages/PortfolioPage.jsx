import Projects from '../data/cards.js'
import Card from '../components/UI/Card'

export default function PortfolioPage() {
  const projectList = Projects();

    return (
      <>
        <h2 id="Work" className="work-header">Portfolio</h2>
        <section className="row justify-center">
          {projectList.map((project) => {
              const { title, description, link, image, cardClass, altText } = project;
              return <Card title={title} description={description} link={link} image={image} cardClass={cardClass} altText={altText}/>
          })}
        </section>
      </>
    );
  }
  