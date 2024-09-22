import React, { useState, useRef } from "react";
import pic from "../img/pic.jpeg";

const Resume = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    setMousePos({ x, y });
  };

  // Skills data stored in an array of objects
  const skills = [
    { name: "HTML", percentage: 85 },
    { name: "CSS", percentage: 65 },
    { name: "JavaScript", percentage: 75 },
    { name: "React", percentage: 95 },
  ];

  return (
    <>
      <main className="resume_main">
        <div className="heading">
          <h1>Resume</h1>
          <div className="scroll">
            <i className="bx bxs-chevron-down"></i>
          </div>
        </div>

        <div className="profile">
          <div className="profile_left">
            <img src={pic} alt="Profile" />
          </div>
          <div className="profile_right">
            <p>
              Hello! I’m Akash Patil. Web designer from USA, California, San
              Francisco. I have rich experience in web site design and building,
              also I am good at WordPress. I love to talk with you about our
              unique.
            </p>
            <div className="details_area">
              <div className="first_area">
                <p>
                  <span>Age: </span>25
                </p>
                <p>
                  <span>Address: </span>Uran-Islampur
                </p>
              </div>
              <div className="second_area">
                <p>
                  <span>Residence: </span>India
                </p>
                <p>
                  <span>Phone: </span>+91 7020701560
                </p>
              </div>
              <div className="third_area">
                <p>
                  <span>Freelance: </span>Available
                </p>
                <p>
                  <span>E-mail: </span>krantiakash5@gmail.com
                </p>
              </div>
            </div>
            <a
              href=" "
              className="resume_btn"
              ref={btnRef}
              onMouseMove={handleMouseMove}
              style={{
                "--x": `${mousePos.x}px`,
                "--y": `${mousePos.y}px`,
              }}
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="skills">
          <div className="coding_skills">
            <h1 className="title">Coding Skills</h1>
            <div className="skill_area">
              {skills.map((skill, index) => (
                <div key={index} className={`area area_${index + 1}`}>
                  <div className="progress" style={{ "--i": skill.percentage }}>
                    <h3>{skill.percentage}%</h3>
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
