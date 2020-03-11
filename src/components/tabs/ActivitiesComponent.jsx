import React from "react";

import "../../assets/styles/activitiescomponent.scss";

function ActivitiesComponent() {
  return (
    <div>
      <div className="activity-item">
        <div className="activity-progress">
          <span className="activity-start"></span>
          <div className="vl"></div>
          <span className="activity-end"></span>
        </div>
        <div className="activity-progress-details">
          03/10/2020 11:02
          <div>Contact Added (Manually) </div>
          with name Gilbert by You
        </div>
      </div>
    </div>
  );
}

export default ActivitiesComponent;
