import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import "./PostLoad.css";

const PostLoad = () => {
  const navigate = useNavigate();
  const [loadData, setLoadData] = useState({
    title: "",
    cargoType: "",
    weight: "",
    quantity: "",
    pickupAddress: "",
    pickupCity: "",
    pickupProvince: "",
    pickupDate: "",
    deliveryAddress: "",
    deliveryCity: "",
    deliveryProvince: "",
    deliveryDate: "",
    truckType: "",
    trailerType: "",
    temperatureControlled: "",
    hazardousGoods: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoadData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !loadData.title ||
      !loadData.cargoType ||
      !loadData.pickupAddress ||
      !loadData.deliveryAddress
    ) {
      alert("Please complete all required fields.");
      return;
    }

    console.log(loadData);

    alert("Load submitted successfully!");

    setLoadData({
      title: "",
      cargoType: "",
      weight: "",
      quantity: "",
      pickupAddress: "",
      pickupCity: "",
      pickupProvince: "",
      pickupDate: "",
      deliveryAddress: "",
      deliveryCity: "",
      deliveryProvince: "",
      deliveryDate: "",
      truckType: "",
      trailerType: "",
      temperatureControlled: "",
      hazardousGoods: "",
      notes: "",
    });
    navigate("/my-loads");
  };

  return (
    <DashboardLayout>

      <div className="page-header">

        <h1>Create New Load</h1>

        <p>
          Complete the information below to publish a freight load.
        </p>

      </div>

      <form className="postload-form" onSubmit={handleSubmit}>

        {/* LOAD DETAILS */}

        <div className="form-card">

          <h2>Load Details</h2>

          <div className="grid-2">

            <div>

              <label>Load Title</label>

              <input
                type="text"
                name="title"
                value={loadData.title}
                onChange={handleChange}
                placeholder="Example: Cement Bags"
              />

            </div>

            <div>

              <label>Cargo Type</label>

              <select
                name="cargoType"
                value={loadData.cargoType}
                onChange={handleChange}
              >

                <option value="">Select Cargo</option>

                <option value="General Goods">General Goods</option>

                <option value="Food">Food</option>

                <option value="Construction">Construction</option>

                <option value="Furniture">Furniture</option>

                <option value="Fuel">Fuel</option>

              </select>

            </div>

            <div>

              <label>Weight (kg)</label>

              <input
                type="number"
                name="weight"
                value={loadData.weight}
                onChange={handleChange}
                placeholder="25000"
              />

            </div>

            <div>

              <label>Quantity</label>

              <input
                type="number"
                name="quantity"
                value={loadData.quantity}
                onChange={handleChange}
                placeholder="150"
              />

            </div>

          </div>

        </div>

        {/* PICKUP */}

        <div className="form-card">

          <h2>Pickup Information</h2>

          <div className="grid-2">

            <input
              name="pickupAddress"
              value={loadData.pickupAddress}
              onChange={handleChange}
              placeholder="Pickup Address"
            />

            <input
              name="pickupCity"
              value={loadData.pickupCity}
              onChange={handleChange}
              placeholder="City"
            />

            <input
              name="pickupProvince"
              value={loadData.pickupProvince}
              onChange={handleChange}
              placeholder="Province"
            />

            <input
              type="date"
              name="pickupDate"
              value={loadData.pickupDate}
              onChange={handleChange}
            />

          </div>

        </div>

        {/* DELIVERY */}

        <div className="form-card">

          <h2>Delivery Information</h2>

          <div className="grid-2">

            <input
              name="deliveryAddress"
              value={loadData.deliveryAddress}
              onChange={handleChange}
              placeholder="Delivery Address"
            />

            <input
              name="deliveryCity"
              value={loadData.deliveryCity}
              onChange={handleChange}
              placeholder="City"
            />

            <input
              name="deliveryProvince"
              value={loadData.deliveryProvince}
              onChange={handleChange}
              placeholder="Province"
            />

            <input
              type="date"
              name="deliveryDate"
              value={loadData.deliveryDate}
              onChange={handleChange}
            />

          </div>

        </div>

        {/* VEHICLE */}

        <div className="form-card">

          <h2>Vehicle Requirements</h2>

          <div className="grid-2">

            <select
              name="truckType"
              value={loadData.truckType}
              onChange={handleChange}
            >

              <option value="">Truck Type</option>

              <option value="Flatbed">Flatbed</option>

              <option value="Refrigerated">Refrigerated</option>

              <option value="Tanker">Tanker</option>

              <option value="Box Truck">Box Truck</option>

            </select>

            <select
              name="trailerType"
              value={loadData.trailerType}
              onChange={handleChange}
            >

              <option value="">Trailer Type</option>

              <option value="Single">Single</option>

              <option value="Double">Double</option>

            </select>

            <select
              name="temperatureControlled"
              value={loadData.temperatureControlled}
              onChange={handleChange}
            >

              <option value="">Temperature Controlled?</option>

              <option value="Yes">Yes</option>

              <option value="No">No</option>

            </select>

            <select
              name="hazardousGoods"
              value={loadData.hazardousGoods}
              onChange={handleChange}
            >

              <option value="">Hazardous Goods?</option>

              <option value="Yes">Yes</option>

              <option value="No">No</option>

            </select>

          </div>

        </div>

        {/* NOTES */}

        <div className="form-card">

          <h2>Additional Notes</h2>

          <textarea
            rows="6"
            name="notes"
            value={loadData.notes}
            onChange={handleChange}
            placeholder="Provide any extra instructions..."
          ></textarea>

        </div>

        {/* BUTTONS */}

        <div className="button-group">

          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/my-loads")}
          >
            Cancel
          </button>

          <button
            type="button"
            className="draft-btn"
            onClick={() => { localStorage.setItem("tamp-load-draft", JSON.stringify(loadData)); alert("Draft saved on this device."); }}
          >
            Save Draft
          </button>

          <button
            type="submit"
            className="publish-btn"
          >
            Publish Load
          </button>

        </div>

      </form>

    </DashboardLayout>
  );
};

export default PostLoad;
