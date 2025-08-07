// SkillsSection.jsx
import React from "react";
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
  return (
    <div className="skillsPage py-5">
      {skills.map((section, index) => (
        <div className="container-fluid p-0" key={index}>
          <h4 className="text-center mb-4">{section.section}</h4>
          <div className="row justify-content-center">
            {section.items.map((item, idx) => (
              <div className="col-2 ms-3" key={idx}>
                <div className="card">
                  <Link to={item.link} className="atag">
                    <img src={item.image} className="card-img-top img-fluid" alt={item.title} />
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
      ))}
    </div>
  );
};

export default SkillsSection;
