import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import "./MyLoads.css";

const initialLoads = [
  {
    id: "LD-1001",
    title: "Cement Bags",
    pickup: "Johannesburg",
    delivery: "Cape Town",
    status: "In Transit",
    date: "27 Jul 2026",
  },
  {
    id: "LD-1002",
    title: "Furniture",
    pickup: "Pretoria",
    delivery: "Durban",
    status: "Pending",
    date: "27 Jul 2026",
  },
  {
    id: "LD-1003",
    title: "Food Supplies",
    pickup: "Polokwane",
    delivery: "Bloemfontein",
    status: "Delivered",
    date: "25 Jul 2026",
  },
  { id: "LD-1004", title: "Steel Beams", pickup: "Vereeniging", delivery: "Gqeberha", status: "Delivered", date: "22 Jul 2026" },
  { id: "LD-1005", title: "Retail Stock", pickup: "Cape Town", delivery: "George", status: "Pending", date: "28 Jul 2026" },
  { id: "LD-1006", title: "Agricultural Equipment", pickup: "Kimberley", delivery: "Johannesburg", status: "Cancelled", date: "20 Jul 2026" },
];

const MyLoads = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [loadList, setLoadList] = useState(() => {
    try {
      const saved = localStorage.getItem("tamp-published-loads");
      const parsed = saved ? JSON.parse(saved) : [];
      return [...parsed, ...initialLoads];
    } catch {
      return initialLoads;
    }
  });

  const handleDelete = (id) => {
    const updated = loadList.filter((item) => item.id !== id);
    setLoadList(updated);
    try {
      const storedPublished = JSON.parse(localStorage.getItem("tamp-published-loads") || "[]");
      localStorage.setItem("tamp-published-loads", JSON.stringify(storedPublished.filter((item) => item.id !== id)));
    } catch (err) {
      console.error(err);
    }
  };

  const filteredLoads = loadList.filter((load) => {
    const matchesSearch = Object.values(load).some((value) => String(value).toLowerCase().includes(query.toLowerCase()));
    return matchesSearch && (filter === "All" || load.status === filter);
  });
  return (
    <DashboardLayout>

      <div className="loads-header">

        <div>

          <h1>My Loads</h1>

          <p>
            View and manage all freight loads.
          </p>

        </div>

        <button className="new-load-btn" onClick={() => navigate("/post-load")}>

          <FaPlus />

          New Load

        </button>

      </div>

      {/* SEARCH */}

      <div className="search-bar">

        <FaSearch />

        <input
          placeholder="Search load..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

      </div>

      {/* FILTERS */}

      <div className="filters">

        {["All", "Pending", "In Transit", "Delivered", "Cancelled"].map((status) => <button key={status} className={filter === status ? "active" : ""} onClick={() => setFilter(status)}>{status}</button>)}

      </div>

      {/* TABLE */}

      <div className="loads-table">

        <table>

          <thead>

            <tr>

              <th>ID</th>

              <th>Title</th>

              <th>Pickup</th>

              <th>Delivery</th>

              <th>Status</th>

              <th>Date</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredLoads.map((load) => (

              <tr key={load.id}>

                <td>{load.id}</td>

                <td>{load.title}</td>

                <td>{load.pickup}</td>

                <td>{load.delivery}</td>

                <td>

                  <span
                    className={`status ${load.status
                      .replace(" ", "")
                      .toLowerCase()}`}
                  >
                    {load.status}
                  </span>

                </td>

                <td>{load.date}</td>

                <td>

                  <div className="actions">

                    <button onClick={() => navigate("/shipments")} aria-label={`View ${load.id}`}>

                      <FaEye />

                    </button>

                    <button onClick={() => navigate("/post-load")} aria-label={`Edit ${load.id}`}>

                      <FaEdit />

                    </button>

                    <button className="delete" onClick={() => handleDelete(load.id)} aria-label={`Delete ${load.id}`}>

                      <FaTrash />

                    </button>

                  </div>

                </td>

              </tr>

            ))}
            {!filteredLoads.length && <tr><td colSpan="7" className="empty-state">No loads found. Try another search or filter.</td></tr>}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
};

export default MyLoads;
