import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ab
            earum odio illum maxime vitae necessitatibus doloribus maiores
            similique accusamus, optio reprehenderit nihil quaerat praesentium
            quod ullam repellendus voluptates ut.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Kendrik Lim</div>
          <div>2nd September, 2am blablabla</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
