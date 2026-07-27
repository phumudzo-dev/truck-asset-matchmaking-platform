import "./Styles/Statcard.css";

const StatCard = ({ title, value, icon, color, onClick }) => {
  return (
    <button className="stat-card" type="button" onClick={onClick} aria-label={`Open ${title}`}>
      <div
        className="stat-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div className="stat-content">
        <h4>{title}</h4>
        <h2>{value}</h2>
      </div>
    </button>
  );
};

export default StatCard;
