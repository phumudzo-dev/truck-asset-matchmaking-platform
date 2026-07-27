import "./RecentLoadsTable.css";

const loads = [
  {
    id: "LD-1001",
    route: "Johannesburg → Cape Town",
    transporter: "Swift Logistics",
    status: "In Transit",
    date: "27 Jul 2026",
  },
  {
    id: "LD-1002",
    route: "Pretoria → Durban",
    transporter: "Fast Freight",
    status: "Pending",
    date: "27 Jul 2026",
  },
  {
    id: "LD-1003",
    route: "Polokwane → Bloemfontein",
    transporter: "Cargo Express",
    status: "Delivered",
    date: "26 Jul 2026",
  },
  {
    id: "LD-1004",
    route: "Nelspruit → Gqeberha",
    transporter: "RoadLink",
    status: "Cancelled",
    date: "25 Jul 2026",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Delivered":
      return "status delivered";
    case "Pending":
      return "status pending";
    case "In Transit":
      return "status transit";
    case "Cancelled":
      return "status cancelled";
    default:
      return "status";
  }
};

const RecentLoadsTable = () => {
  return (
    <div className="table-card">
      <div className="table-header">
        <h2>Recent Loads</h2>
        <button>View All</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Load ID</th>
            <th>Route</th>
            <th>Transporter</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {loads.map((load) => (
            <tr key={load.id}>
              <td>{load.id}</td>
              <td>{load.route}</td>
              <td>{load.transporter}</td>

              <td>
                <span className={getStatusClass(load.status)}>
                  {load.status}
                </span>
              </td>

              <td>{load.date}</td>

              <td>
                <button className="view-btn">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentLoadsTable;