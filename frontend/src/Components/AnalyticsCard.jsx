import { useState } from "react";
import "./AnalyticsCard.css";

const AnalyticsCard = ({ onClick }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("This Week");

  const handleSelectClick = (e) => {
    e.stopPropagation();
  };

  const handleSelectChange = (e) => {
    e.stopPropagation();
    const value = e.target.value;
    setSelectedTimeframe(value);
    onClick?.(value);
  };

  return (
    <div
      className="analytics-card"
      role="button"
      tabIndex="0"
      onClick={() => onClick?.(selectedTimeframe)}
      onKeyDown={(event) => event.key === "Enter" && onClick?.(selectedTimeframe)}
      aria-label="Open reports and analytics"
    >
      <div className="analytics-header">
        <div>
          <h2>Shipment Analytics</h2>
          <p>Weekly logistics performance</p>
        </div>

        <select
          value={selectedTimeframe}
          onClick={handleSelectClick}
          onChange={handleSelectChange}
        >
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
          <option value="This Year">This Year</option>
        </select>
      </div>

      <div className="chart-placeholder">
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
        <div className="bar bar4"></div>
        <div className="bar bar5"></div>
        <div className="bar bar6"></div>
        <div className="bar bar7"></div>
      </div>

      <div className="chart-labels">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
};

export default AnalyticsCard;
