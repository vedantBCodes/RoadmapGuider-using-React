import React from "react";

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
          <a href="/join">
            <input
              type="submit"
              value="Join For Free"
              className="subscribeBox"
              style={{ width: "150px", color: "blue" }}
            />
          </a>
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