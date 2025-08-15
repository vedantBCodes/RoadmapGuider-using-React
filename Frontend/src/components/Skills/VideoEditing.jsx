// VideoEditing.jsx
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./VideoEditing.css";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoEditing = () => {
  useEffect(() => {
    const arrowButton = document.querySelector(".upArrowButton");
    const onScroll = () => {
      if (!arrowButton) return;
      if (window.scrollY > 100) {
        arrowButton.classList.add("active");
      } else {
        arrowButton.classList.remove("active");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <div id="firstVISubPage">
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
        {/* Left column (training + related) */}
        <div className="col-12 col-md-4 m-3">
          <div>
            <img
              src="/Images/Video_Editing Images/trainingImage.webp"
              alt="training"
              id="trainingImage"
              className="img-fluid"
            />

            <div className="training p-4">
              <p className="h5">We'll provide you personalized training options right away.</p>
              <br />
              <form>
                <input type="text" placeholder="  Name" className="mb-3 form-control" />
                <input type="email" placeholder=" Email" className="mb-3 form-control" />
                <input type="number" placeholder=" Phone Number" className="mb-3 form-control" />
                <div className="text-center submit">
                  <input type="submit" className="btn btn-light" />
                </div>
                <br />
                <br />
              </form>
              <p>We never sell or share your information</p>
            </div>
          </div>

          {/* Related courses */}
          <div className="relatedCourses mt-5">
            <p className="h4">Related Articles</p>
            <div className="my-4">
              <NavLink to="/graphic-designing">
                <img
                  src="/Images/graphicDesigningImage.webp"
                  alt="graphic"
                  width="100%"
                  height="auto"
                />
                <p className="articleName">What is Graphic Designing ?</p>
              </NavLink>
            </div>

            <div className="my-4">
              <NavLink to="/chatgpt">
                <img
                  src="/Images/chatGPTImage.webp"
                  alt="chatgpt"
                  width="100%"
                  height="auto"
                />
                <p className="articleName">How to use ChatGPT fluently ?</p>
              </NavLink>
            </div>

            <div className="my-4">
              <NavLink to="/digital-marketing">
                <img
                  src="/Images/digitalMarketingImage.webp"
                  alt="digital"
                  width="100%"
                  height="auto"
                />
                <p className="articleName">What is Digital Marketing ?</p>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Right/main content */}
        <div className="col-12 col-md-7">
          <p className="display-5">How to learn video editing</p>
          <p>Published on April 14, 2024</p>

          <div className="text-center mb-4">
            <img
              src="/Images/Video_Editing Images/firstPageBgImage.jpeg"
              alt="video editing hero"
              className="img-fluid"
            />
          </div>

          <p>
            Whether you want to learn video editing for a career change, as a hobby, or as a side career, there are a number
            of ways to learn video editing including courses, university programs, and online training. If you are seeking to
            enter the video editing industry, now is a good time as the video editing industry is projected to grow in the coming
            years. Here are several ways to begin learning video editing:
          </p>

          <h3>Learn video editing with classes and workshops</h3>
          <p>
            One way to learn video editing is through classes and workshops. Intensive workshops can get you started with most
            common video editing applications over a number of days.
          </p>

          <p>
            The American Graphics Institute offers courses for the most commonly used editing software, including Premiere Pro
            courses along with Final Cut courses for learning video editing as well as After Effects courses for learning special
            effects. Courses for these applications are offered for both introductory and experienced editors, and prepare students
            for work in video, television, and broadcast fields. These video editing classes can be taken online or in person.
          </p>

          <h3>University programs for learning video editing</h3>
          <p>
            For those interested in a long-term, holistic approach to learning video editing there are four-year undergraduate
            degrees available in film and cinema. These programs often combine study of theory and principles along with project-based
            learning, allowing students to graduate with experience and connections that help them apply for industry jobs or begin
            their own video editing business.
          </p>

          <h3>Online tutorials for learning video editing</h3>
          <p>
            If you are looking to casually learn video editing, there are free online tutorials that can help you navigate the
            workspaces of video editing software, including how to customize an interface, manage media, and trim clips.
          </p>

          <h3>Independent options for learning video editing</h3>
          <p>
            Another way to learn video editing software is by gathering footage, uploading the clips, and playing around with sequencing
            and other effects. Video editing is a trade that requires hands-on learning; researching and watching tutorials only gets
            you so far. Still, it’s informative to research basic uses and shortcuts by going through the software’s user guide.
          </p>

          <h3>Learn video editing advanced techniques to boost income</h3>
          <p>
            Credibility and experience improve the likelihood of being chosen to edit a project. One way to become a skilled video editor
            is by actively seeking out job opportunities. Pitching video editing proposals to local businesses or placing work bids on freelance
            websites can help novice video editors build a diverse portfolio and demo reel. Another way to compete for project bids is by taking
            classes or getting a video editing certificate.
          </p>

          <h3>Learning video editing for starting a career</h3>
          <p>
            It is possible to establish yourself as a successful video editor without getting a formal degree. Taking individual courses or a short
            term certificate can provide the foundational skills needed without the cost of a four-year degree.
          </p>
        </div>
      </div>

      {/* FAQ (middle part you provided) */}
      <div className="row justify-content-center mt-4">
        <div id="FrequentlyAskedQuestion" className="col-12 col-lg-8">
          <p className="h4">Frequently Asked Questions about Video Editing</p>

          <div className="Question">
            <details>
              <summary>What is video editing ?</summary>
              <br />
              <p>
                Video editing is the process of putting various video shots together and arranging them in a way that has a logical and artistic flow.
                When you edit a video, you play a key role in the postproduction process. As an editor, you'll have more footage than you'll need for
                the finished product, so you have to make sure you choose the best shots that will improve the final version of the project. Editing
                involves removing shots that aren't necessary or don't fit, making sure that the continuity between the shots that you use is correct,
                and ensuring the proper transition between scenes.
              </p>
            </details>
          </div>

          <div className="Question">
            <details>
              <summary>What are typical careers that rely on video editing skills?</summary>
              <br />
              <p>
                Once you've learned video editing, you can use those skills in a career in the entertainment industry or in the field of advertising.
                Film and television studios and advertising agencies need editors with the ability to create compelling videos, so knowing how to edit
                can give you a leg up in either industry. Local news stations also need video editors who can put together news reports, often with
                fast deadlines. You can edit videos for corporations, either as a freelance editor or on staff with a company's communications department.
                There are also opportunities for you to strike out on your own as a video editor for family events like weddings and birthday parties.
              </p>
            </details>
          </div>

          <div className="Question">
            <details>
              <summary>How can online courses on Coursera help me learn video editing ?</summary>
              <br />
              <p>
                Online courses on Coursera can give you a broad base of knowledge about video editing, such as the basics of filmmaking, as well as
                practical applications that allow you to use what you've learned in your career. Courses can guide you in mastering specific software,
                discovering how visual storytelling transfers across other media, and learning how to understand the audiences you seek to reach.
              </p>
            </details>
          </div>

          <div className="Question">
            <details>
              <summary>What are the benefits of taking an online Video Editing course ?</summary>
              <br />
              <p>
                Online Video Editing courses offer a convenient and flexible way to enhance your knowledge or learn new Video Editing skills. Choose
                from a wide range of Video Editing courses offered by top universities and industry leaders tailored to various skill levels.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Best video editing software cards */}
      <div className="container-fluid p-0 mt-5">
        <p className="h4 mt-3" style={{ marginLeft: "200px" }}>The best video editing software</p>

        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card mb-4">
              <a href="https://www.adobe.com/products/premiere.html" target="_blank" rel="noreferrer">
                <img
                  src="/Images/Video_Editing Images/adobeEditor.avif"
                  className="card-img-top img-fluid"
                  alt="Adobe Premiere Pro"
                />
                <div className="card-body">
                  <h5 className="card-title">Adobe Premiere Pro</h5>
                  <p className="card-text">It is for the best professional video editor overall.</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="card mb-4">
              <a href="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank" rel="noreferrer">
                <img
                  src="/Images/Video_Editing Images/davinciEditor.avif"
                  className="card-img-top img-fluid"
                  alt="DaVinci Resolve"
                />
                <div className="card-body">
                  <h5 className="card-title">DaVinci Resolve</h5>
                  <p className="card-text">It is the best free video editor on Windows and Mac.</p>
                </div>
              </a>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="card mb-4">
              <a href="https://www.apple.com/final-cut-pro/" target="_blank" rel="noreferrer">
                <img
                  src="/Images/Video_Editing Images/finalCutProEditor.avif"
                  className="card-img-top img-fluid"
                  alt="Final Cut Pro"
                />
                <div className="card-body">
                  <h5 className="card-title">Final Cut Pro</h5>
                  <p className="card-text">It is for Mac users who need a professional tool set.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Up-arrow button */}
      <a href="#" className="upArrowButton" onClick={handleScrollTop}>
        <i className="fas fa-chevron-up" aria-hidden="true"></i>
      </a>
    </>
  );
};

export default VideoEditing;
