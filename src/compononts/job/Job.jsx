import "./style.css";

const Job = ({ title, color, contractType, city, country }) => {
  return (
    <div className={color}>
      <h2>{title}</h2>
      <p>
        {contractType} - {country} - {city}
      </p>
    </div>
  );
};

export default Job;
