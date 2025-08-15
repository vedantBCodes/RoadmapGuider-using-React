import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ChatGptContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 900px; /* Controls the width */
  margin: 0 auto;
  background-color: white;

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 10px;
  }
`;

const Sidebar = styled.div`
  border-right: 2px solid #ddd;
  padding-right: 15px;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    display: block;
    margin: 10px 0;
    color: #333;

    &:hover {
      color: #007bff;
    }
  }
`;

const ChatGpt = () => {
  const questions = [
    {
      id: "Q1",
      title: "What is ChatGPT ?",
      content: (
        <>
          <p>
            ChatGPT is a natural language processing chatbot driven by
            generative AI that allows you to have human-like conversations...
          </p>
          <p>
            It's currently{" "}
            <a href="https://openai.com/blog/chatgpt">
              open to use by the public for free.
            </a>{" "}
            A paid subscription version called ChatGPT Plus...
          </p>
        </>
      ),
    },
    {
      id: "Q2",
      title: "Who made ChatGPT ?",
      content: <p>ChatGPT was created by OpenAI, an AI research company...</p>,
    },
    {
      id: "Q3",
      title: "Who owns ChatGPT currently ?",
      content: <p>OpenAI owns ChatGPT. Microsoft is a major investor...</p>,
    },
    {
      id: "Q4",
      title: "What is ChatGPT used for ?",
      content: <p>ChatGPT has many functions in addition to answering...</p>,
    },
    {
      id: "Q5",
      title: "Is ChatGPT available for free ?",
      content: (
        <p>
          ChatGPT is free to use...{" "}
          <a href="https://www.zdnet.com/article/chatgpt-vs-chatgpt-plus-is-it-worth-the-subscription-fee/">
            subscription option
          </a>{" "}
          ChatGPT Plus...
        </p>
      ),
    },
    {
      id: "Q6",
      title: "How can you access ChatGPT ?",
      content: <p>On April 1, OpenAI stopped requiring users to log in...</p>,
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Sign up to OpenAI",
      img: "Images/ChatGPT_Page Images/step1Image.png",
    },
    {
      step: 2,
      title: "Create an account",
      img: "Images/ChatGPT_Page Images/step2Image.png",
    },
    {
      step: 3,
      title: "Confirm your account",
    },
    {
      step: 4,
      title: "Ask ChatGPT a question",
      img: "Images/ChatGPT_Page Images/step4Image.png",
    },
  ];

  useEffect(() => {
    const arrowButton = document.querySelector(".upArrowButton");
    const onScroll = () => {
      if (window.scrollY > 100) {
        arrowButton.classList.add("active");
      } else {
        arrowButton.classList.remove("active");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ChatGptContainer>
      <ContentWrapper>
        {/* Logo */}
        <div id="firstSubPage" style={{ padding: "10px 0" }}>
          <NavLink to="/">
            <img
              src="Images/RgLogo.png"
              alt="Roadmap Guider Logo"
              width="100px"
              className="ms-3 mt-2"
            />
          </NavLink>
        </div>

        <hr />

        {/* Main Content */}
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3">
            <Sidebar>
              {questions.map((q) => (
                <React.Fragment key={q.id}>
                  <a href={`#${q.id}`}>{q.title}</a>
                </React.Fragment>
              ))}
              <a href="#Q7">How to use ChatGPT ?</a>
            </Sidebar>
          </div>

          {/* Content */}
          <div className="col-lg-9">
            <h2 className="text-center mb-4">
              What is ChatGPT and how to use it?
            </h2>
            <div className="text-center">
              <img
                src="Images/chatGPTBgImage3.webp"
                alt="ChatGPT"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </div>

            {questions.map((q) => (
              <div key={q.id} id={q.id} style={{ marginTop: "40px" }}>
                <h4>{q.title}</h4>
                {q.content}
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: "2px solid black" }} className="mx-5" />

        {/* Steps */}
        <div id="Q7" style={{ padding: "20px" }}>
          <h3 className="text-center mb-3">
            How to use ChatGPT – setting up your account
          </h3>
          <p className="text-center">
            If you want to find out how to use ChatGPT the instructions below
            will get you started...
          </p>

          {steps.map((s) => (
            <div
              key={s.step}
              style={{
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              <p style={{ fontWeight: "bold" }}>
                Step {s.step}: {s.title}
              </p>
              {s.img && (
                <img
                  src={s.img}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Scroll-to-top */}
        <a
          href="#"
          className="upArrowButton"
          style={{
            background: "gray",
            position: "fixed",
            bottom: "16px",
            right: "32px",
            width: "50px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            color: "#1f1f1f",
            textDecoration: "none",
            opacity: 0,
            pointerEvents: "none",
            transition: "all 0.4s",
          }}
        >
          <i className="fas fa-chevron-up"></i>
        </a>
      </ContentWrapper>
    </ChatGptContainer>
  );
};

export default ChatGpt;
