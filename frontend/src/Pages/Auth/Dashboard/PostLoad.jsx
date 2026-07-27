import DashboardLayout from "../../layouts/DashboardLayout";
import "./PostLoad.css";

const PostLoad = () => {
  return (
    <DashboardLayout>

      <div className="page-header">

        <h1>Create New Load</h1>

        <p>
          Complete the information below to publish a freight load.
        </p>

      </div>

      <form className="postload-form">

        {/* LOAD DETAILS */}

        <div className="form-card">

          <h2>Load Details</h2>

          <div className="grid-2">

            <div>

              <label>Load Title</label>

              <input
                type="text"
                placeholder="Example: Cement Bags"
              />

            </div>

            <div>

              <label>Cargo Type</label>

              <select>

                <option>Select Cargo</option>

                <option>General Goods</option>

                <option>Food</option>

                <option>Construction</option>

                <option>Furniture</option>

                <option>Fuel</option>

              </select>

            </div>

            <div>

              <label>Weight (kg)</label>

              <input
                type="number"
                placeholder="25000"
              />

            </div>

            <div>

              <label>Quantity</label>

              <input
                type="number"
                placeholder="150"
              />

            </div>

          </div>

        </div>

        {/* PICKUP */}

        <div className="form-card">

          <h2>Pickup Information</h2>

          <div className="grid-2">

            <input placeholder="Pickup Address" />

            <input placeholder="City" />

            <input placeholder="Province" />

            <input type="date" />

          </div>

        </div>

        {/* DELIVERY */}

        <div className="form-card">

          <h2>Delivery Information</h2>

          <div className="grid-2">

            <input placeholder="Delivery Address" />

            <input placeholder="City" />

            <input placeholder="Province" />

            <input type="date" />

          </div>

        </div>

        {/* VEHICLE */}

        <div className="form-card">

          <h2>Vehicle Requirements</h2>

          <div className="grid-2">

            <select>

              <option>Truck Type</option>

              <option>Flatbed</option>

              <option>Refrigerated</option>

              <option>Tanker</option>

              <option>Box Truck</option>

            </select>

            <select>

              <option>Trailer Type</option>

              <option>Single</option>

              <option>Double</option>

            </select>

            <select>

              <option>Temperature Controlled?</option>

              <option>Yes</option>

              <option>No</option>

            </select>

            <select>

              <option>Hazardous Goods?</option>

              <option>Yes</option>

              <option>No</option>

            </select>

          </div>

        </div>

        {/* NOTES */}

        <div className="form-card">

          <h2>Additional Notes</h2>

          <textarea
            rows="6"
            placeholder="Provide any extra instructions..."
          ></textarea>

        </div>

        {/* BUTTONS */}

        <div className="button-group">

          <button
            type="button"
            className="cancel-btn"
          >
            Cancel
          </button>

          <button
            type="button"
            className="draft-btn"
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