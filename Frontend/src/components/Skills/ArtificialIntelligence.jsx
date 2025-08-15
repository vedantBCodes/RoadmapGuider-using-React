import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./ArtificialIntelligence.css";

export default function ArtificialIntelligence() {
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowUpButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="ai-page-root">
      {/* First subpage */}
      <header id="firstSubPage">
        <NavLink to="/">
          <img
            src="Images/RgLogo.png"
            alt="Logo"
            className="ms-3 mt-4 logo-img"
          />
        </NavLink>
      </header>

      {/* Second subpage */}
      <div className="flex-container">
        {/* Sidebar */}
        <div id="links" className="links-nav">
          <span><a href="#Q1">Overview</a></span>
          <span><a href="#Q2">Why Is Artificial Intelligence Important ?</a></span>
          <span><a href="#Q3">How does AI work ?</a></span>
          <span><a href="#Q4">Benefits of AI</a></span>
          <span><a href="#Q5">How can I use AI ?</a></span>
          <span><a href="#Q6">What are the different types of AI ?</a></span>
          <hr />
          <span><a href="#Q7">Frequently asked questions (FAQ)</a></span>
        </div>

        {/* Main Content */}
        <main id="information">
          {/* Q1 */}
          <section id="Q1">
            <h3>What Is Artificial Intelligence ?</h3>
            <p>
              Artificial intelligence refers to computer systems that are capable of performing tasks traditionally
              associated with human intelligence — such as making predictions, identifying objects, interpreting
              speech and generating natural language. AI systems learn how to do so by processing massive amounts of
              data and looking for patterns to model in their own decision-making. In many cases, humans will
              supervise an AI’s learning process, reinforcing good decisions and discouraging bad ones, but some AI
              systems are designed to learn without supervision.
            </p>
            <p>
              Over time, AI systems improve on their performance of specific tasks, allowing them to adapt to new
              inputs and make decisions without being explicitly programmed to do so. In essence, artificial
              intelligence is about teaching machines to think and learn like humans, with the goal of automating work
              and solving problems more efficiently.
            </p>
          </section>

          {/* Q2 */}
          <section id="Q2">
            <h3>Why Is Artificial Intelligence Important ?</h3>
            <p>
              Artificial intelligence aims to provide machines with similar processing and analysis capabilities as
              humans, making AI a useful counterpart to people in everyday life. AI is able to interpret and sort data
              at scale, solve complicated problems and automate various tasks simultaneously, which can save time and
              fill in operational gaps missed by humans.
            </p>
            <div className="center-image">
              <img
                src="Images/artificial_Intelligence_Images/secondSubPageBgImage.webp"
                alt=""
                className="img-fluid"
              />
            </div>
            <p>
              AI serves as the foundation for computer learning and is used in almost every industry — from healthcare
              and finance to manufacturing and education — helping to make data-driven decisions and carry out
              repetitive or computationally intensive tasks.
            </p>
            <p>
              Many existing technologies use artificial intelligence to enhance capabilities. We see it in smartphones
              with AI assistants, e-commerce platforms with recommendation systems and vehicles with autonomous
              driving abilities. AI also helps protect people by piloting fraud detection systems online and robots
              for dangerous jobs, as well as leading research in healthcare and climate initiatives.
            </p>
          </section>

          {/* Q3 */}
          <section id="Q3">
            <h3>How does AI work ?</h3>
            <p>
              While scientists can take many approaches to building AI systems, machine learning is the most widely
              used today. This involves getting a computer to analyze data to identify patterns that can then be used
              to make predictions.
            </p>
            <p>
              The learning process is governed by an algorithm — a sequence of instructions written by humans that
              tells the computer how to analyze data — and the output of this process is a statistical model encoding
              all the discovered patterns. This can then be fed with new data to generate predictions.
            </p>
            <p>
              Many kinds of machine learning algorithms exist, but neural networks are among the most widely used
              today. These are collections of machine learning algorithms loosely modeled on the human brain, and they
              learn by adjusting the strength of the connections between the network of "artificial neurons" as they
              trawl through their training data. This is the architecture that many of the most popular AI services
              today, like text and image generators, use.
            </p>
            <p>
              Most cutting-edge research today involves deep learning, which refers to using very large neural
              networks with many layers of artificial neurons. The idea has been around since the 1980s — but the
              massive data and computational requirements limited applications. Then in 2012, researchers discovered
              that specialized computer chips known as graphics processing units (GPUs) speed up deep learning. Deep
              learning has since been the gold standard in research.
            </p>
            <p>
              Not all neural networks are the same, however. Different configurations, or "architectures" as they're
              known, are suited to different tasks. Convolutional neural networks have patterns of connectivity
              inspired by the animal visual cortex and excel at visual tasks. Recurrent neural networks, which feature
              a form of internal memory, specialize in processing sequential data.
            </p>
          </section>

          {/* Q4 */}
          <section id="Q4">
            <h3>Benefits of AI</h3>
            <div className="center-image">
              <img
                src="Images/artificial_Intelligence_Images/benifits.jpeg"
                alt=""
                className="img-fluid"
              />
            </div>
            <p><strong>Automating Repetitive Tasks</strong> - Repetitive tasks such as data entry and factory work...</p>
            <p><strong>Solving Complex Problems</strong> - AI’s ability to process large amounts of data...</p>
            <p><strong>Improving Customer Experience</strong> - AI can be applied through user personalization...</p>
            <p><strong>Advancing Healthcare and Medicine</strong> - AI works to advance healthcare...</p>
            <p><strong>Reducing Human Error</strong> - AI is effective for catching mistakes...</p>
          </section>

          {/* Q5 */}
          <section id="Q5">
            <h3>How can I use AI ?</h3>
            <p>
              AI comes in different forms and has become widely available in everyday life. The smart speakers on your
              mantle with Alexa or Google voice assistant built-in are two great examples of AI. Other good examples
              include popular AI chatbots, such as ChatGPT, the new Bing Chat, and Google Bard.
            </p>
            <p>
              When you ask ChatGPT for the capital of a country, or you ask Alexa to give you an update on the
              weather, the responses come from machine-learning algorithms.
            </p>
          </section>

          {/* Q6 */}
          <section id="Q6">
            <h3>What are the different types of AI ?</h3>
            <ol>
              <li><a href="#narrowAI">narrow AI</a></li>
              <li><a href="#generalAL">general AI</a></li>
              <li><a href="#superAI">super AI</a></li>
            </ol>
            <article id="narrowAI">
              <h4>What is narrow AI ?</h4>
              <div className="center-image">
                <img
                  src="Images/artificial_Intelligence_Images/narrow_AI.webp"
                  alt="narrow AI"
                  className="img-fluid"
                />
              </div>
              <p>
                Artificial narrow intelligence (ANI) is crucial to voice assistants like Siri, Alexa, and Google
                Assistant. This category includes intelligent systems designed or trained to carry out specific tasks...
              </p>
            </article>
            <article id="generalAL">
              <h4>What is General AI</h4>
              <div className="center-image">
                <img
                  src="Images/artificial_Intelligence_Images/general_AI.webp"
                  alt="general AI"
                  className="img-fluid"
                />
              </div>
              <p>
                Artificial general intelligence (AGI), or strong AI, is still a hypothetical concept as it involves a
                machine understanding and performing vastly different tasks...
              </p>
            </article>
            <article id="superAI">
              <h4>What is Super AI</h4>
              <div className="center-image">
                <img
                  src="Images/artificial_Intelligence_Images/super_AI.webp"
                  alt="super AI"
                  className="img-fluid"
                />
              </div>
              <p>
                Artificial superintelligence (ASI) is a system that wouldn't only rock humankind to its core but could
                also destroy it...
              </p>
            </article>
          </section>
 </main>
      </div>
          {/* Q7 */}
          <section id="Q7">
            <h3>Frequently Asked Questions</h3>
            <details>
              <summary>Q: What are the challenges surrounding AI models ?</summary>
              <p>
                The biggest challenges AI models face are how to be more power efficient, how to learn from less data...
              </p>
            </details>
            <details>
              <summary>Q: What are the major improvements happening in AI ?</summary>
              <p>
                AI is currently benefiting from more data and more efficient hardware, as well as better AI tools...
              </p>
            </details>
            <details>
              <summary>Q: Is there a way to eliminate bias in AI algorithms ?</summary>
              <p>
                When there’s bias in the data set that trains an AI model, the model will contain the same bias...
              </p>
            </details>
          </section>
       

      {/* Up Arrow Button */}
      <a
        href="#"
        className={`upArrowButton ${showUpButton ? "active" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up" aria-hidden="true" />
      </a>
    </div>
  );
}
