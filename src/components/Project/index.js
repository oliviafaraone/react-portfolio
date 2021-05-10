import React from 'react';
import img1 from "../../assets/run.png";
import img2 from "../../assets/nps.png";
import img3 from "../../assets/pets.png";
import img4 from "../../assets/weather.png";
import img5 from "../../assets/scheduler.png";
import img6 from "../../assets/blog.png";

function Project() {

    const projects = [
        {title: "Run Buddy", image: img1, link: "https://oliviafaraone.github.io/run-buddy/", git: "https://github.com/oliviafaraone/run-buddy"},
        {title: "CA NPS", image: img2, link: "https://hlry.github.io/california-camping-planner/", git: "https://github.com/hlry/california-camping-planner"},
        {title: "Pets R Us", image: img3, link: "https://polar-lowlands-05168.herokuapp.com/", git: "https://github.com/hlry/Pet-Adoption"},
        {title: "Weather Dashboard", image: img4, link: "https://oliviafaraone.github.io/Weather-Dashboard/", git: "https://github.com/oliviafaraone/Weather-Dashboard"},
        {title: "Work Scheduler Dashboard", image: img5, link: "https://oliviafaraone.github.io/Work-Day-Scheduler/", git: "https://github.com/oliviafaraone/Work-Day-Scheduler"},
        {title: "Tech Blog", image: img6, link: "https://salty-bastion-65171.herokuapp.com/", git: "https://github.com/oliviafaraone/tech-blog"}
    ]
    return (
      <section >
          <h2>Portfolio</h2>
        <ul className="list-group">
        {projects.map((project) => (
              <li className="list-group-item" key={project.title}>
              <img
                src={project.image}
                alt={project.title}
                className="img-thumbnail mx-1"/>
                <a href={project.link}> Deployed Site</a>
                <a href={project.git}> GitHub</a>
              </li>
            ))}
        </ul>

      </section>
    );
  }
  
  export default Project;