import "./ActivityCard.css";

const ActivityCard = ({ title, time, color }) => {
  return (
    <div className="activity-card">
      <div
        className="activity-dot"
        style={{ background: color }}
      ></div>

      <div>
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default ActivityCard;