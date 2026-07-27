import DashboardLayout from "../../layouts/DashboardLayout";
import {
  FaStar,
  FaSearch,
  FaPen,
} from "react-icons/fa";

import "./Ratings.css";

const reviews = [
  {
    id: 1,
    company: "Swift Logistics",
    rating: 5,
    comment: "Excellent communication and on-time delivery.",
    date: "27 Jul 2026",
  },
  {
    id: 2,
    company: "Cargo Express",
    rating: 4,
    comment: "Very professional service.",
    date: "24 Jul 2026",
  },
  {
    id: 3,
    company: "RoadLink Transport",
    rating: 5,
    comment: "Highly recommended transporter.",
    date: "20 Jul 2026",
  },
];

const Ratings = () => {
  return (
    <DashboardLayout>

      <div className="ratings-header">

        <div>

          <h1>Ratings & Reviews</h1>

          <p>Manage feedback from completed shipments.</p>

        </div>

        <button className="write-review">

          <FaPen />

          Write Review

        </button>

      </div>

      <div className="rating-summary">

        <div className="overall-rating">

          <h2>4.8</h2>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p>Based on 248 Reviews</p>

        </div>

        <div className="rating-search">

          <FaSearch />

          <input
            placeholder="Search reviews..."
          />

        </div>

      </div>

      <div className="reviews-grid">

        {reviews.map((review) => (

          <div
            className="review-card"
            key={review.id}
          >

            <h3>{review.company}</h3>

            <div className="review-stars">

              {[...Array(review.rating)].map((_, index) => (

                <FaStar key={index} />

              ))}

            </div>

            <p>{review.comment}</p>

            <span>{review.date}</span>

          </div>

        ))}

      </div>

    </DashboardLayout>
  );
};

export default Ratings;