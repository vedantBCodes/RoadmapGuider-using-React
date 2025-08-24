import React from "react";
import { Link } from "react-router-dom";

const JoinSection = () => {
  return (
    <div className="joinPage mb-3 py-4">
      <div className="row justify-content-center">
        <div className="col-4">
          <p className="display-6">
            Take the next step toward your personal and professional goals with
            RoadmapGuider.
          </p>
          <p>
            Join now to receive personalized recommendations from the full
            RoadmapGuider catalog.
          </p>
          <Link to="/join/step1">
            <input
              type="submit"
              value="Join For Free"
              className="subscribeBox"
              style={{ width: "150px", color: "blue" }}
            />
          </Link>
        </div>
        <div className="col-3">
          <img
            src="Images/joinPageImage.png"
            alt="Join RoadmapGuider"
            style={{ width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
