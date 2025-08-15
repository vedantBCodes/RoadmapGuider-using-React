import React from "react";
import { NavLink } from "react-router-dom";
import "./DigitalMarketing.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DigitalMarketing = () => {
  return (
    <div>
      {/* Hero Section */}
      <div id="firstSubPage">
        <NavLink to="/">
          <img
            src="/Images/RgLogo.png"
            alt="Roadmap Guider Logo"
            width="100px"
            className="ms-3 mt-4"
          />
        </NavLink>
      </div>
      <hr />

      <div className="row">
        {/* Sidebar */}
        <div className="col-12 col-md-3">
          <div id="Questions" style={{ padding: "20px", position: "static" }}>
            <p className="h2">Digital Marketing</p>
            <br />
            <a href="#Q1">What is Digital Marketing ?</a>
            <br />
            <br />
            <a href="#Q2">
              Which Skills Do You Need for Digital Marketing Success ?
            </a>
            <br />
            <br />
            <a href="#Q3">
              Is It Worth Paying for a Digital Marketing Course ?
            </a>
            <br />
            <br />
            <a href="#Q4">How to Learn Digital Marketing at home for Free ?</a>
            <br />
            <br />
            <hr style={{ border: "2px solid black" }} />
            <a href="#eBooks">Top 5 Free Digital Marketing eBooks</a>
            <br />
            <br />
            <a href="#resources">
              Resources To Help You Learn Digital Marketing
            </a>
          </div>

          {/* Related Courses */}
          <div className="relatedCourses mt-5">
            <p className="h4 ps-3">Related Articles</p>
            <p className="ps-3">(Recommended for you)</p>

            <div className="my-4">
              <NavLink to="/graphic-designing">
                <img
                  src="/Images/graphicDesigningImage.webp"
                  alt=""
                  width="370px"
                  height="230px"
                />
                <p className="articleName">What is Graphic Designing ?</p>
              </NavLink>
            </div>

            <div className="my-4">
              <NavLink to="/chatgpt">
                <img
                  src="/Images/chatGPTImage.webp"
                  alt=""
                  width="370px"
                  height="230px"
                />
                <p className="articleName">How to use ChatGPT fluently ?</p>
              </NavLink>
            </div>

            <div className="my-4">
              <NavLink to="/video-editing">
                <img
                  src="/Images/videoEditingImage.webp"
                  alt=""
                  width="370px"
                  height="230px"
                />
                <p className="articleName">What is Video Editing ?</p>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9" id="rightSideOfPage">
          {/* Q1 */}
          <section id="Q1">
            <h3>What is digital marketing ?</h3>
            <p>
              Digital marketing is the use of digital channels to market
              products. Also known as online marketing, digital marketing
              promotes brands and connects them to potential customers via the
              internet. It takes many forms, including:
            </p>
            <ul>
              <li>Search engines</li>
              <li>Websites</li>
              <li>Social media</li>
              <li>Email</li>
              <li>Mobile apps</li>
              <li>Text messaging</li>
              <li>Web-based advertising</li>
            </ul>
            <p>
              Digital marketing uses the same principles as traditional offline
              marketing but in a digital space. It relies on consumer data to
              find a business's target audience and deliver the most relevant
              messaging possible. This is effective, but digital marketing is so
              popular that the biggest challenge today is learning how to stand
              out from the crowd.
            </p>
            <div className="p-5">
              <img
                src="/Images/Digital_Marketing_Images/secondSubpageBgImage.webp"
                alt=""
                className="img-fluid"
              />
            </div>
          </section>

          {/* Q2 */}
          <section id="Q2">
            <h3>Which Skills Do You Need for Digital Marketing Success?</h3>
            <p>
              There are many different facets to digital marketing, and
              providing yourself with a general education in all of these
              different areas — from Search Engine Optimisation (SEO) and social
              media to email marketing — is essential if you are to understand
              how different disciplines work together to drive success.
            </p>
            <p>
              When recruiting digital marketing professionals to join your team,
              you should look for those who possess this general grounding and
              also excel in one to two specialist areas...
            </p>
            <center>
              <img
                src="/Images/Digital_Marketing_Images/TShapedMarketer.png"
                alt="T-shaped marketer"
                className="img-fluid t-shaped-img"
              />
            </center>
          </section>

          {/* Q3 */}
          <section id="Q3">
            <h3>Is It Worth Paying for a Digital Marketing Course ?</h3>
            <p>
              If the success of your business hinges on effective online
              marketing campaigns, like most modern companies, then it is well
              worth paying a one-time fee for a digital marketing certification
              that signals your expertise to potential investors and business
              partners.
            </p>
            <p>
              The Hootsuite{" "}
              <a href="https://education.hootsuite.com/courses/social-marketing-certification">
                Social Media Marketing Certification
              </a>{" "}
              costs $199 USD...
            </p>
          </section>

          {/* Q4 */}
          <section id="Q4">
            <h3>How to Learn Digital Marketing at Home for Free ?</h3>
            <p>
              <b>A Step-By-Step Guide</b> — The good news is that learning the
              skills you need for digital marketing is often possible at home,
              in your spare time, thanks to the wealth of free online resources
              available.
            </p>
            <h5>Step 1 - Study</h5>
            <p>
              Acquire the necessary knowledge by reading free guides online...
            </p>
            <h5>Step 2 - Practice, Practice, Practice</h5>
            <p>
              The best form of education is actively putting into practice...
            </p>
          </section>

          {/* eBooks */}
          <section id="eBooks">
            <h3>Top 5 Free Digital Marketing eBooks</h3>
            <ol>
              <li>
                <a href="https://www.nateliason.com/blog/learn-digital-marketing">
                  How to Get Started with Digital Marketing
                </a>{" "}
                by Nat Eliason.
              </li>
              <li>
                Buffer's{" "}
                <a href="https://buffer.com/library/social-media-marketing-strategy/">
                  25 Actionable Social Media Strategies
                </a>
              </li>
            </ol>
          </section>
        </div>
      </div>

      {/* Full-width Resources Section */}
      <section id="resources" className="container-fluid py-4">
        <div className="container">
          <p className="display-6">
            Resources To Help You Learn Digital Marketing on Your Own
          </p>

          {/* BLOG 1 (already present) */}
          <p className="h3">Blogs</p>
          <h5>
            <a href="https://cxl.com/blog/" target="_blank" rel="noreferrer">
              1. Conversion Optimization & Marketing Blog by CXL
            </a>
          </h5>
          <img
            src="/Images/Digital_Marketing_Images/blog1Image.webp"
            alt="CXL blog"
            className="img-fluid mb-3"
          />
          <p>
            CXL’s blog covers conversion optimisation, copywriting principles,
            and digital analytics. It includes templates and guides to execute
            exact strategies used in experiments.
          </p>

          {/* --- ADDED: BLOG 2 --- */}
          <h5 className="mt-4">
            <a
              href="https://www.marketingprofs.com/resources/type/25/articles/"
              target="_blank"
              rel="noreferrer"
            >
              2. MarketingProfs Articles
            </a>
          </h5>
          <img
            src="/Images/Digital_Marketing_Images/blog2Image.png"
            alt="MarketingProfs"
            className="img-fluid mb-3"
          />
          <p>
            MarketingProfs publishes clear, concise articles across SEO, content
            strategy and social marketing — great for busy readers who want
            practical, trustworthy advice.
          </p>

          {/* --- ADDED: MORE BLOG LINKS (from your original HTML) --- */}
          <div className="mt-4">
            <ol>
              <li>
                Take your pick from the free eBooks on offer from{" "}
                <a
                  href="https://www.emarketinginstitute.org/free-ebooks/"
                  target="_blank"
                  rel="noreferrer"
                >
                  eMarketing Institute
                </a>
                .
              </li>
              <li>
                Learn how to use data visualisation to win over your audience in
                this free eBook from{" "}
                <a
                  href="https://blog.hubspot.com/marketing/great-data-visualization-examples#sm.01dqr75o1d55e7l11991gw7h5byto"
                  target="_blank"
                  rel="noreferrer"
                >
                  HubSpot
                </a>
                .
              </li>
              <li>
                The{" "}
                <a
                  href="https://unbounce.com/landing-page-copywriting/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Conversion Marketer's Guide to Landing Page Copywriting
                </a>{" "}
                — excellent for learning landing-page-driven copy.
              </li>
            </ol>
          </div>

          {/* PODCASTS (ADDED) */}
          <p className="h3 mt-4">Podcasts</p>

          <h5 className="mt-3">
            <a
              href="https://podcast.everyonehatesmarketers.com/"
              target="_blank"
              rel="noreferrer"
            >
              1. Everyone Hates Marketers by Louis Grenier
            </a>
          </h5>
          <img
            src="/Images/Digital_Marketing_Images/podcast1Image.webp"
            alt="Everyone Hates Marketers"
            className="img-fluid mb-3"
          />
          <p>
            “Everyone Hates Marketers” cuts through marketing nonsense —
            interviews with veterans who share practical strategies and honest
            opinions about what actually works.
          </p>

          <h5 className="mt-3">
            <a
              href="https://marketingschool.io/"
              target="_blank"
              rel="noreferrer"
            >
              2. Marketing School (Neil Patel & Eric Siu)
            </a>
          </h5>
          <img
            src="/Images/Digital_Marketing_Images/podcast2Image.webp"
            alt="Marketing School"
            className="img-fluid mb-3"
          />
          <p>
            Marketing School is beginner-friendly and covers quick, actionable
            lessons. The show often answers practical questions such as:
            <ul>
              <li>Is Tumblr still a valuable channel to market on?</li>
              <li>Why aren’t your YouTube ads working?</li>
              <li>Is Amazon better than eBay for e-commerce?</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
