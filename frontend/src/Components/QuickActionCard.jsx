import "./QuickActionCard.css";

const QuickActionCard = ({ icon, title }) => {
  return (
    <button className="quick-card">
      <div className="quick-icon">{icon}</div>

      <span>{title}</span>
    </button>
  );
};

export default QuickActionCard;