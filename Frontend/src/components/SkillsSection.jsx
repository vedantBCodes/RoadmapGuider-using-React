import React, { useState } from "react";
import { Link } from "react-router-dom";

const skills = [
  {
    section: "New releases",
    items: [
      { title: "ChatGPT", image: "Images/chatGPTImage.webp", link: "/chatgpt" },
      { title: "Graphic Designing", image: "Images/graphicDesigningImage.webp", link: "/graphicdesigning" },
      { title: "Digital Marketing", image: "Images/digitalMarketingImage.webp", link: "/digitalmarketing" },
      { title: "Video Editing", image: "Images/videoEditingImage2.webp", link: "/videoediting" },
    ],
  },
  {
    section: "Most popular",
    items: [
      { title: "Machine Learning", image: "Images/machineLearningImage.webp", link: "/machinelearning" },
      { title: "Cloud Computing", image: "Images/cloud Developer.webp", link: "/cloudcomputing" },
      { title: "Introducing SQL", image: "Images/introductionToSQL.webp", link: "/sql" },
      { title: "Data Analysts", image: "Images/dataAnalystImage.webp", link: "/dataanalyst" },
    ],
  },
  {
    section: "Top AI and data skills",
    items: [
      { title: "Cyber Security", image: "Images/introductionToCyberSecurity.webp", link: "/cybersecurity" },
      { title: "Artificial Intelligence", image: "Images/artificialIntelligenceImage.webp", link: "/ai" },
      { title: "Programming", image: "Images/introductionToProgramming.webp", link: "/programming" },
      { title: "ChatGPT", image: "Images/chatGPTImage.webp", link: "/chatgpt" },
    ],
  },
];

const SkillsSection = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="skillsPage py-5">
      {/* Buttons */}
      <div className="skills-buttons d-flex justify-content-center mb-4">
        {skills.map((section, index) => (
          <button
            key={index}
            className={`skill-btn mx-2 ${activeSection === index ? "active" : ""}`}
            onClick={() => setActiveSection(index)}
          >
            {section.section}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="container-fluid p-0">
        <div className="row justify-content-center g-2">
          {skills[activeSection].items.map((item, idx) => (
            <div className="col-3 p-1" key={idx}>
              <div className="card skill-card h-100">
                <Link to={item.link} className="atag">
                  <img src={item.image} className="card-img-top skill-img" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Explore the topic of {item.title}.</p>
                    <p className="card-text">
                      <small className="text-body-secondary">Updated recently</small>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>
        {`
          .skill-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .skill-card:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
          .skill-btn {
            background: none;
            border: 2px solid #007bff;
            padding: 8px 16px;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .skill-btn:hover {
            background: #007bff;
            color: white;
          }
          .skill-btn.active {
            background: #007bff;
            color: white;
          }
          .skill-img {
            height: 160px;
            object-fit: cover;
            width: 100%;
          }
          @media (max-width: 576px) {
            .col-3 {
              flex: 0 0 25%;
              max-width: 25%;
            }
            .card-title {
              font-size: 14px;
            }
            .card-text {
              font-size: 12px;
            }
            .skill-img {
              height: 120px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SkillsSection;
