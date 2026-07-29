import { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";
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

const initialReports = [
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

const createReportItem = (title) => ({
  id: `RPT-${Math.floor(1000 + Math.random() * 9000)}`,
  title,
  generated: new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }),
  status: "Completed",
});

const Reports = () => {
  const [reports, setReports] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("tamp-reports") || "[]");
      return saved.length ? saved : initialReports;
    } catch {
      return initialReports;
    }
  });

  const [loads, setLoads] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tamp-published-loads") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tamp-reports", JSON.stringify(reports));
  }, [reports]);

  const totals = useMemo(() => {
    const totalLoads = loads.length;
    const completedDeliveries = loads.filter((item) => item.status?.toLowerCase() === "delivered").length;
    const deliverySuccess = totalLoads ? Math.round((completedDeliveries / totalLoads) * 100) : 0;
    const totalRevenue = loads.reduce((sum, item) => {
      const amount = Number(item.revenue || 0);
      return sum + (Number.isFinite(amount) ? amount : 0);
    }, 0);

    return {
      totalLoads,
      completedDeliveries,
      totalRevenue,
      deliverySuccess,
    };
  }, [loads]);

  const loadSummaryRows = useMemo(
    () =>
      loads.map((load) => ({
        ID: load.id,
        Title: load.title,
        Cargo: load.cargoType || "",
        Weight: load.weight || "",
        Quantity: load.quantity || "",
        Pickup: load.pickup || load.pickupCity || load.pickupAddress || "",
        Delivery: load.delivery || load.deliveryCity || load.deliveryAddress || "",
        Status: load.status,
        Date: load.date,
        Truck: load.truckType || "",
        Trailer: load.trailerType || "",
        Revenue: load.revenue || "R0",
      })),
    [loads]
  );

  const exportPdf = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const title = "TAMP Load Report";
    const generated = new Date().toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    doc.setFontSize(18);
    doc.text(title, 40, 50);
    doc.setFontSize(11);
    doc.text(`Generated: ${generated}`, 40, 70);
    doc.text(`Total loads: ${totals.totalLoads}`, 40, 88);
    doc.text(`Completed deliveries: ${totals.completedDeliveries}`, 40, 104);
    doc.text(`Delivery success: ${totals.deliverySuccess}%`, 40, 120);
    doc.text(`Total revenue: R${totals.totalRevenue.toLocaleString()}`, 40, 136);

    const headers = ["ID", "Title", "Pickup", "Delivery", "Status", "Date", "Cargo", "Weight", "Qty", "Truck"];
    const columns = [40, 100, 220, 320, 420, 480, 530, 590, 640, 690];
    let y = 170;
    doc.setFontSize(9);
    headers.forEach((header, index) => doc.text(header, columns[index], y));
    y += 14;
    doc.setLineWidth(0.5);
    doc.line(40, y - 6, 750, y - 6);

    loadSummaryRows.forEach((row) => {
      if (y > 760) {
        doc.addPage();
        y = 50;
        headers.forEach((header, index) => doc.text(header, columns[index], y));
        y += 16;
        doc.line(40, y - 6, 750, y - 6);
      }

      const rowValues = [
        row.ID,
        row.Title,
        row.Pickup,
        row.Delivery,
        row.Status,
        row.Date,
        row.Cargo,
        row.Weight,
        row.Quantity,
        row.Truck,
      ];

      rowValues.forEach((value, index) => {
        const text = String(value || "").slice(0, 14);
        doc.text(text, columns[index], y);
      });
      y += 14;
    });

    doc.save(`tamp-load-report-${new Date().getTime()}.pdf`);
  };

  const exportExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(loadSummaryRows);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Loads");
    XLSX.writeFile(workbook, `tamp-load-report-${new Date().getTime()}.xlsx`);
  };

  const downloadReport = (report) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(report.title, 14, 20);
    doc.setFontSize(11);
    doc.text(`Generated: ${report.generated}`, 14, 30);
    doc.text(`Status: ${report.status}`, 14, 37);
    doc.save(`${report.id}.pdf`);
  };

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

          <button onClick={exportPdf}>

            <FaDownload />

            Export PDF

          </button>

          <button className="excel" onClick={exportExcel}>

            <FaFileExcel />

            Export Excel

          </button>

        </div>

      </div>

      {/* KPI CARDS */}

      <div className="report-cards">

        <div className="report-card">

          <FaTruck />

          <h2>{totals.totalLoads}</h2>

          <p>Total Loads</p>

        </div>

        <div className="report-card">

          <FaClipboardCheck />

          <h2>{totals.completedDeliveries}</h2>

          <p>Completed Deliveries</p>

        </div>

        <div className="report-card">

          <FaDollarSign />

          <h2>R{totals.totalRevenue.toLocaleString()}</h2>

          <p>Total Revenue</p>

        </div>

        <div className="report-card">

          <FaChartLine />

          <h2>{totals.deliverySuccess}%</h2>

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

                  <button onClick={() => downloadReport(report)}>

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