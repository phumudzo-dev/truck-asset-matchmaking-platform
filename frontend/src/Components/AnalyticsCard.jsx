import "./AnalyticsCard.css";

const AnalyticsCard = () => {
  return (
    <div className="analytics-card">

      <div className="analytics-header">

        <div>
          <h2>Shipment Analytics</h2>
          <p>Weekly logistics performance</p>
        </div>

        <select>
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
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