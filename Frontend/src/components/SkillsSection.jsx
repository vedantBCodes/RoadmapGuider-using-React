import React, { useState } from "react";
import { Link } from "react-router-dom";

const skills = [
  {
    section: "New releases",
    items: [
      {
        title: "ChatGPT",
        description:
          "ChatGPT is an AI-powered language model developed by OpenAI. This documentation will help you to learn and use ChatGPT fluently.",
        updated: "Last updated 4 months ago",
        image: "Images/chatGPTImage.webp",
        link: "/chatgpt", // Redirects to ChatGpt.jsx
      },
      {
        title: "Graphic Designing",
        description:
          "Graphic design is the creative practice of combining visual elements, typography, and images to communicate messages effectively.",
        updated: "Last updated 3 months ago",
        image: "Images/graphicDesigningImage.webp",
        link: "/graphicdesigning",
      },
      {
        title: "Digital Marketing",
        description:
          "Digital marketing is the promotion of brands to connect with potential customers using the internet and other forms of digital communication.",
        updated: "Last updated 2 months ago",
        image: "Images/digitalMarketingImage.webp",
        link: "/digitalmarketing",
      },
      {
        title: "Video Editing",
        description:
          "Video editing is the process of manipulating and rearranging video shots to create visual projects, such as television shows, movies, and documentaries.",
        updated: "Last updated 1 month ago",
        image: "Images/videoEditingImage2.webp",
        link: "/videoediting",
      },
    ],
  },
  {
    section: "Most popular",
    items: [
      {
        title: "Machine Learning",
        description:
          "Machine learning (ML) is a branch of artificial intelligence (AI) and computer science that focuses on using data and algorithms to enable AI.",
        updated: "Last updated 20 days ago",
        image: "Images/machineLearningImage.webp",
        link: "/machinelearning",
      },
      {
        title: "Cloud computing",
        description:
          "Cloud computing is the on-demand delivery of IT resources, such as computing power, storage, and databases, over the internet.",
        updated: "Last updated 15 days ago",
        image: "Images/cloud Developer.webp",
        link: "/cloudcomputing",
      },
      {
        title: "Introducing SQL",
        description:
          "SQL, short for Structured Query Language, is the standard language for communicating with relational databases. It's a relatively simple language.",
        updated: "Last updated 3 months ago",
        image: "Images/introductionToSQL.webp",
        link: "/sql",
      },
      {
        title: "Data Analysts",
        description:
          "Data analysis is the process of gleaning insights from data to inform better business decisions. This process moves through different iterative phases.",
        updated: "Last updated 3 months ago",
        image: "Images/dataAnalystImage.webp",
        link: "/dataanalyst",
      },
    ],
  },
  {
    section: "Top AI and data skills",
    items: [
      {
        title: "Cyber Security",
        description:
          "Cybersecurity is a subset of information technology associated with safeguarding computer systems and information.",
        updated: "Last updated 1 month ago",
        image: "Images/introductionToCyberSecurity.webp",
        link: "/cybersecurity",
      },
      {
        title: "Artificial Intelligence",
        description:
          "AI is a branch of computer science that aims to build machines capable of performing tasks that require human intelligence.",
        updated: "Last updated 20 days ago",
        image: "Images/artificialIntelligenceImage.webp",
        link: "/ai",
      },
      {
        title: "Programming",
        description:
          "Programming is the process of writing instructions, known as code, for a computer to perform specific tasks or operations.",
        updated: "Last updated 15 days ago",
        image: "Images/introductionToProgramming.webp",
        link: "/programming",
      },
      {
        title: "ChatGPT",
        description:
          "ChatGPT is an AI-powered language developed by OpenAI. This documentation will help you to learn and use ChatGPT fluently.",
        updated: "Last updated 10 days ago",
        image: "Images/chatGPTImage.webp",
        link: "/chatgpt", // Redirects to ChatGpt.jsx
      },
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
        <div className="row skills-row">
          {skills[activeSection].items.map((item, idx) => (
            <div className="col-auto" key={idx}>
              <div className="card skill-card h-100">
                <Link to={item.link} className="atag">
                  <img src={item.image} className="card-img-top skill-img" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text" style={{fontSize:'15px'}}>{item.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary" style={{fontSize:'15px'}}>{item.updated}</small>
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
          .skills-row {
            justify-content: center;
            gap: 8px;
          }
          .skill-card {
            max-width: 240px;
            width: 100%;
            margin: 0;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }
          .skill-card:hover {
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
          .atag {
            text-decoration: none;
            color: inherit;
          }
          .atag:hover {
            text-decoration: none;
          }
          .skill-btn {
            background: none;
            border: 2px solid #000;
            padding: 8px 16px;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .skill-btn:hover {
            background: #000;
            color: white;
          }
          .skill-btn.active {
            background: #000;
            color: white;
          }
          .skill-img {
            height: 160px;
            object-fit: cover;
            width: 100%;
          }
          @media (max-width: 576px) {
            .col-auto {
              flex: 0 0 100%;
              max-width: 100%;
            }
            .skill-card {
              max-width: 350px;
              margin: auto;
            }
            .skill-img {
              height: 140px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default SkillsSection;
