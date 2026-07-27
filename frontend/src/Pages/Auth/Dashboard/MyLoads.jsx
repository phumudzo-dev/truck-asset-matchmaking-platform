import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaSearch,
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import "./MyLoads.css";

const loads = [
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
];

const MyLoads = () => {
  return (
    <DashboardLayout>

      <div className="loads-header">

        <div>

          <h1>My Loads</h1>

          <p>
            View and manage all freight loads.
          </p>

        </div>

        <button className="new-load-btn">

          <FaPlus />

          New Load

        </button>

      </div>

      {/* SEARCH */}

      <div className="search-bar">

        <FaSearch />

        <input
          placeholder="Search load..."
        />

      </div>

      {/* FILTERS */}

      <div className="filters">

        <button className="active">
          All
        </button>

        <button>Pending</button>

        <button>In Transit</button>

        <button>Delivered</button>

        <button>Cancelled</button>

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

            {loads.map((load) => (

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

                    <button>

                      <FaEye />

                    </button>

                    <button>

                      <FaEdit />

                    </button>

                    <button className="delete">

                      <FaTrash />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  );
};

export default MyLoads;