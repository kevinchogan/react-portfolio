
export default function Card(props) {
    return (
        <div className={props.cardClass}>
        <a target="_blank" href={props.link}>
          <figure className="card">
            <h3 className="card-header">{props.title}</h3>
            <img className="card-image" src={props.image} alt={props.altText}/>
            <div className="card-body">
              {props.description}
            </div>
          </figure>
        </a>
      </div>
    );
  }