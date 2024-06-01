import React from "react";
import '../../resources/templates.css'
// import "../resources/templates.css";

function Template1() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="template1-parent">
      <div className="top d-flex justify-content-between">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>

        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
          <p>{user.portfolio}</p>

        </div>
      </div>
      <div className="divider mt-3"></div>

      <div className="objective mt-3">
        <h3>objective</h3>
        <hr />
        <p>{user.carreerObjective}</p>
      </div>
      <div className="divider mt-3"></div>

      <div className="education mt-3">
      <h3>Education</h3>
      <hr/>
        {user.education.map((education) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{width:120}}>
                <b>{education.range}: </b>
              </h6>
              <p>
                <b>{education.qualification}</b> with <b>{education.percentage}%</b> in{" "}
                {education.institute}
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="experience mt-3">
      <h3>Experience</h3>
      <hr/>
        {user.experience.map((exp) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{width:120}}>
                <b>{exp.range}: </b>
              </h6>
              <p>
                <b>{exp.company}</b>  in{" "}
               <b> {exp.place}</b>
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="projects mt-3">
      <h3>Projects</h3>
      <hr/>
        {user.projects.map((projects) => {
          return (
            <div className="d-flex flex-column">
              <h6>
                <b>{projects.title} [{projects.range}] </b>
              </h6>
              <p>
                {projects.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="divider mt-3"></div>

      <div className="skills mt-3">
      <h3>Skills</h3>
      <hr/>
        {user.skills.map((skill) => {
          return <p> 
           {skill.technology}
         </p>
        })}
      </div>
    </div>
  );
}

export default Template1;
