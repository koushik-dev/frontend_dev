import "./Details.scss";

const Details = ({ title, children }) => {
  return (
    <details className="details" open>
      <summary className="details__title">{title}</summary>
      <ul>
        {children?.map((c) => (
          <li className="details__item" key={c?.label}>
            <a href={c?.link} target="_blank" rel="noopener noreferrer">
              🔱 &nbsp;&nbsp;{c?.label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default Details;
