import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaDownload,
  FaFileExcel,
  FaTruck,
  FaClipboardCheck,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";

import "./Reports.css";

const reports = [
  {
    id: "RPT-001",
    title: "Monthly Shipment Report",
    generated: "27 Jul 2026",
    status: "Completed",
  },
  {
    id: "RPT-002",
    title: "Revenue Summary",
    generated: "25 Jul 2026",
    status: "Completed",
  },
  {
    id: "RPT-003",
    title: "Delivery Performance",
    generated: "22 Jul 2026",
    status: "Completed",
  },
];

const Reports = () => {
  return (
    <DashboardLayout>

      <div className="reports-header">

        <div>

          <h1>Reports & Analytics</h1>

          <p>
            View business insights and export reports.
          </p>

        </div>

        <div className="export-buttons">

          <button>

            <FaDownload />

            Export PDF

          </button>

          <button className="excel">

            <FaFileExcel />

            Export Excel

          </button>

        </div>

      </div>

      {/* KPI CARDS */}

      <div className="report-cards">

        <div className="report-card">

          <FaTruck />

          <h2>152</h2>

          <p>Total Loads</p>

        </div>

        <div className="report-card">

          <FaClipboardCheck />

          <h2>138</h2>

          <p>Completed Deliveries</p>

        </div>

        <div className="report-card">

          <FaDollarSign />

          <h2>R1.8M</h2>

          <p>Total Revenue</p>

        </div>

        <div className="report-card">

          <FaChartLine />

          <h2>94%</h2>

          <p>Delivery Success</p>

        </div>

      </div>

      {/* CHART PLACEHOLDER */}

      <div className="chart-card">

        <div className="chart-header">

          <h2>Monthly Shipment Performance</h2>

          <select>

            <option>Last 6 Months</option>

            <option>Last Year</option>

          </select>

        </div>

        <div className="chart-bars">

          <div className="bar jan"></div>
          <div className="bar feb"></div>
          <div className="bar mar"></div>
          <div className="bar apr"></div>
          <div className="bar may"></div>
          <div className="bar jun"></div>

        </div>

        <div className="months">

          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>

        </div>

      </div>

      {/* REPORT TABLE */}

      <div className="report-table">

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Report</th>

              <th>Date Generated</th>

              <th>Status</th>

              <th>Download</th>

            </tr>

          </thead>

          <tbody>

            {reports.map((report) => (

              <tr key={report.id}>

                <td>{report.id}</td>

                <td>{report.title}</td>

                <td>{report.generated}</td>

                <td>

                  <span className="completed">

                    {report.status}

                  </span>

                </td>

                <td>

                  <button>

                    <FaDownload />

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
};

export default Reports;