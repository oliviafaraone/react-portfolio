import React from 'react';
import pic from "../../assets/pic.jpg";

function About() {
    return (
      <section >
          <h2>About Me</h2>
          <p>Hello my name is Olivia and blah blah blah</p>
          <img
                src={pic}
                alt={"headshot"}
                className="img-thumbnail mx-1"/>
      </section>
    );
  }
  
  export default About;