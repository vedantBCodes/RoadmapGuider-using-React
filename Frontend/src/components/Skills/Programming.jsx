import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Programming.css";

const Programming = () => {
  useEffect(() => {
    const arrowButton = document.querySelector(".upArrowButton");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        arrowButton?.classList.add("active");
      } else {
        arrowButton?.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Logo */}
    <header id="firstPSubPage">
        <NavLink to="/">
          <img
            src="Images/RgLogo.png"
            alt="Logo"
            className="ms-3 mt-4 logo-img"
          />
        </NavLink>
      </header>

      {/* Sidebar + Content */}
      <div className="flex-container">
        <div id="verticle_line"></div>

        <div id="links">
          <span>
            <a href="#Q1">Overview</a>
          </span>
          <span>
            <a href="#Q2">How does computer programming work?</a>
          </span>
          <span>
            <a href="#Q3">Difference Between Coding & Programming?</a>
          </span>
          <span>
            <a href="#Q4">What Are the Benefits of Programming?</a>
          </span>
          <span>
            <a href="#Q5">What Are Programming Languages?</a>
          </span>
          <span>
            <a href="#Q6">How to Learn Programming</a>
          </span>
          <hr style={{ border: "1px solid black" }} />
          <span>
            <a href="#Q7">The Best Programming Books</a>
          </span>
          <span>
            <a href="#Q8">Frequently Asked Questions</a>
          </span>
        </div>

        {/* Information */}
        <div id="information">
          {/* Q1 */}
          <section id="Q1">
            <div>
              <h3>What is programming ?</h3>
              <br />
              Programming refers to a technological process for telling a
              computer which tasks to perform in order to solve problems. You
              can think of programming as a collaboration between humans and
              computers, in which humans create instructions for a computer to
              follow (code) in a language computers can understand. <br />{" "}
              <br />
              <center>
                <img
                  src="/Images/Programming_Images/secondSubpageBgImage2.jpeg"
                  className="img-fluid"
                  alt="Programming Overview"
                />
              </center>
              <br />
              Programming enables so many things in our lives. Here are some
              examples: <br /> <br />
              &#149; When you browse a website to find information, contact a
              service provider, or make a purchase, programming allows you to
              interact with the site’s on-page elements, such as sign-up or
              purchase buttons, contact forms, and drop-down menus.
              <br /> <br />
              &#149; The programming behind a mobile app can make it possible
              for you to order food, book a rideshare service, track your
              fitness, access media, and more with ease.
              <br /> <br />
              &#149; Programming helps businesses operate more efficiently
              through different software for file storage and automation and
              video conferencing tools to connect people globally, among other
              things.
              <br /> <br />
            </div>
          </section>

          {/* Q2 */}
          <section id="Q2">
            <div>
              <h3>How does computer programming work ?</h3>
              <br />
              At its most basic, programming tells a computer what to do. First,
              a programmer writes code — a set of letters, numbers, and other
              characters. Next, a compiler converts each line of code into a
              language a computer can understand. Then, the computer scans the
              code and executes it, thereby performing a task or series of
              tasks. Tasks might include displaying an image on a webpage or
              changing the font of a section of text. <br /> <br />
            </div>
          </section>

          <section id="Q3">
            <div>
              <h3>What’s the Difference Between Coding & Programming ?</h3>
              <br />
              You’ll often hear the terms ‘coding’ and ‘programming’ being used
              interchangeably, but some differences are worth noting. <br />{" "}
              <br />
              <b>&#149; Coding:</b> A core element of programming that involves
              translating the logic of a program so that computers can
              understand and execute it. This covers the writing of the lines of
              code that make up the program, so it is more concerned with using
              the syntax of programming languages to communicate with computers.{" "}
              <br /> <br />
              <b>&#149; Programming:</b> This encompasses more than just writing
              code. It usually includes other aspects of software creation, like
              identifying program requirements, translating requirements into
              code, debugging, testing, creating documentation, and more. <br />{" "}
              <br />
              <center>
                <img
                  src="/Images/Programming_Images/codingVsProgrammmingImage3.webp"
                  className="img-fluid"
                  alt="Coding vs Programming"
                />
              </center>
              <br />
              The relationship between coding and programming can be best
              described by considering what’s involved in writing a novel.{" "}
              <br /> <br />
              Coding is akin to writing the sentences and paragraphs that form
              the novel, while programming involves creating broader elements,
              like plot, setting, character development, narrative, etc. <br />{" "}
              <br />
            </div>
          </section>

          <section id="Q4">
            <div>
              <h3> What Are the Benefits of Programming ?</h3>
              <br />
              You may be thinking, okay, this is cool, but why should I bother?
              Technology is everywhere, and the benefit of computer programming
              cannot be overemphasized. <br /> <br />
              For example, you are reading this article because your device is
              programmed to display it to you when you implement the correct
              clicks. Let’s see some reasons why you should care about
              programming. <br />
              <br />
              <b>&#149; Work faster:</b> Computers are amazingly fast, and with
              programming, we can utilize their power to solve complex problems
              that would take us forever. An example is the power of instant
              messaging applications. <br /> <br />
              <b>&#149; Convenience:</b> Most of the convenient ways of doing
              things in our modern world are due to programming. For example,
              due to programming, you can be in the comfort of your home, order
              some food and have it delivered in minutes. <br /> <br />
              <b>&#149; Work 24/7:</b> Computers can work 24/7 without getting
              exhausted or bored! So you can write programs for computers to
              handle mundane and repetitive tasks, giving you free time to spend
              on tasks that require creative thinking. <br /> <br />
              <b>&#149; Career opportunities:</b> There are many career
              prospects when you learn how to program. Most businesses have
              websites and need programmers to create and maintain those
              websites. Other prospects include mobile app development, game
              development, data science, artificial intelligence, and more.{" "}
              <br /> <br />
              <b>&#149; Logical & problem-solving skills:</b> At its core,
              programming is problem-solving. Creating computer programs
              challenges you to think through problems, consider solutions, and
              find the most efficient one, helping you improve your analytical
              skills. So whether you’re using structured programming,
              object-oriented programming, or another approach, you’ll be
              solving problems. <br /> <br />
              <b>&#149; Have fun building cool stuff:</b> You can create your
              own games or applications! Imagine creating your own app, putting
              it on the AppStore or Play Store, and getting thousands of
              downloads! Sounds exciting, right? It’s possible when you learn to
              program. <br /> <br />
            </div>
          </section>

          <section id="Q5">
            <div>
              <h3> What Are Programming Languages ?</h3>
              <br />
              You may be wondering how programmers (humans) pass instructions to
              computers. This is done with programming languages. <br /> <br />
              Human languages like English and Spanish have a syntax to guide
              the composition of phrases and sentences. Programming languages
              also have a syntax that guides how programmers compose the logic
              behind the code written. <br /> <br />
              <b>1. Machine Language</b> <br />
              Ever heard the phrase, ‘computers understand only 1s and 0s’? This
              is machine language (or machine code). It’s a set of binary digits
              (1s and 0s) used by a computer’s CPU to execute directly.
              <br /> <br />
              <center>
                <img
                  src="/Images/Programming_Images/machineLanguageImage.webp"
                  className="img-fluid"
                  alt="Machine Language"
                />
              </center>
              <br />
              A computer has transistors, tiny electric switches with two
              options, on (for 1s) or off (for 0s). The computer’s CPU can read
              combinations of these on/off electric signals and create the
              desired output. In general, machine code is referred to as a
              low-level language.
              <br /> <br />
              <b>2. Assembly Language (ASM)</b>
              <br />
              These were introduced because machine code can be tedious and
              prone to error. So, instead of using binary digits, code is
              written with commands that include symbols and characters. <br />{" "}
              <br />
              <center>
                <img
                  src="/Images/Programming_Images/assemblyLanguageImage.webp"
                  className="img-fluid"
                  alt="Assembly Language"
                />
              </center>
              <br />
              As a computer can only execute 0s and 1s (machine code),
              programmers must use an assembler to translate assembly language
              into machine code before execution. <br /> <br />
              Still, this isn’t human-friendly, and it requires in-depth
              knowledge of computer memory and CPU processes to make sense of
              it. Like machine code, assembly language can also be referred to
              as a low-level language.
              <br /> <br />
              <b>3. Mid-Level Language</b>
              <br />
              When you move away from low-level languages, you tend to encounter
              the higher-level languages that most people think of when they
              hear the term programming language.
              <br /> <br />
              And while it’s okay to bundle these all together, it can help to
              divide these modern languages into two sub-categories, starting
              with mid-level languages.
              <br /> <br />
              These allow you to write in more human-friendly syntax while
              retaining access to a computer system's abstraction layer. You can
              still control the underlying hardware directly, making mid-level
              languages a bridge between lower and higher-level languages.
              <br /> <br />
              <b>4. High-Level Language</b>
              <br />
              Much like mid-level languages, when you hear the term programming
              language, these are often what’s being referred to. Most computer
              programmers use them for their day-to-day activities and work.
              <br /> <br />
              <center>
                <img
                  src="/Images/Programming_Images/highLevelLanguageImage.avif"
                  className="img-fluid"
                  alt="High Level Language"
                />
              </center>
              <br />
              High-level languages use special translators called compilers to
              translate into machine code, allowing computers to execute the
              code logic.
              <br /> <br />
              These languages have a human-friendly syntax and include general
              purpose programming languages like Python, JavaScript, and PHP.
              You can also count domain-specific languages like SQL and HTML as
              high-level.
              <br /> <br />
            </div>
          </section>

          <section id="Q6">
            <div>
              <h3> How to Learn Programming</h3>
              <br />
              If you’re interested in learning programming, here’s some advice
              and steps you can take to ensure a smooth learning journey.
              <br /> <br />
              <b>&#149; Figure out your reasons: </b> Decide why you want to
              learn to program. You may want to switch careers to game
              development or software development, build a passion project, or
              learn as a hobby. Your reason for learning will help you choose
              the best way to set about this exciting journey.
              <br /> <br />
              <b>&#149; Choose a programming language:</b> Many beginners make
              the mistake of learning multiple languages at once, but it’s
              better to pick one to start and learn another later.
              <br /> <br />
              <b>&#149; Choose a learning resource:</b> Learning options include
              taking an online course, reading a book, joining a boot camp, or a
              combination of any of these. Identify your preferred style of
              learning and choose the best option for you.
              <br /> <br />
              <b>&#149; Build projects:</b> As soon as possible, start building
              projects! This will help cement the concepts you’ll learn through
              an online course, book, or tutorial. Build stuff, break it along
              the way, and figure out how to fix things. It’s fun!
              <br /> <br />
              <b>&#149; Join a community:</b> Learning how to code can be hard.
              But when you join a community of like-minded learners, it can be
              less intimidating. Make the most of help from programmers with
              more experience than you.
            </div>
          </section>
           </div>
      </div>

          {/* Q7 Books */}
          <section id="Q7" className="Q7">
            <h3>The Best Programming Books You Need To Read</h3>

            {/* Book 1 */}
            <div className="container-fluid my-4">
              <div className="row">
                <div className="col-3 bookImage p-3">
                  <img
                    src="/Images/Programming_Images/book1.jpeg"
                    alt="Clean Code"
                    className="img-fluid"
                  />
                  <div className="text-center mt-2">
                    <a
                      href="https://www.amazon.in/dp/0132350882?geniuslink=true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <input type="button" value="Check price" />
                    </a>
                  </div>
                </div>
                <div className="col-8 bookInfo p-3">
                  <b>Author(s):</b> Robert C. Martin <br />
                  <b>Pages:</b> 464 <br />
                  <b>Edition:</b> First Edition <br />
                  <b>Publisher:</b> Prentice Hall <br />
                  <b>Format:</b> Kindle/Paperback <br />
                  <br />
                  <b>Features:</b>
                  <ul>
                    <li>Exploration of clean coding principles</li>
                    <li>Insightful case studies</li>
                    <li>Guidance on improving code quality</li>
                    <li>Techniques for writing maintainable code</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Book 2 */}
            <div className="container-fluid my-4">
              <div className="row">
                <div className="col-3 bookImage p-3">
                  <img
                    src="/Images/Programming_Images/book2.jpeg"
                    alt="Introduction to Algorithms"
                    className="img-fluid"
                  />
                  <div className="text-center mt-2">
                    <a
                      href="https://www.amazon.in/s?k=Thomas+H+Cormen+introduction+to+algorithms+3rd+edition&geniuslink=true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <input type="button" value="Check price" />
                    </a>
                  </div>
                </div>
                <div className="col-8 bookInfo p-3">
                  <b>Author(s):</b> Cormen, Leiserson, Rivest, Stein <br />
                  <b>Pages:</b> 1292 <br />
                  <b>Edition:</b> Third Edition <br />
                  <b>Publisher:</b> MIT Press <br />
                  <b>Format:</b> Hardcover/Paperback <br />
                  <br />
                  <b>Features:</b>
                  <ul>
                    <li>In-depth coverage of algorithms</li>
                    <li>Blend of theory & practice</li>
                    <li>Accessible to all levels</li>
                    <li>Ideal for study & reference</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Book 3 */}
            <div className="container-fluid my-4">
              <div className="row">
                <div className="col-3 bookImage p-3">
                  <img
                    src="/Images/Programming_Images/book3.jpeg"
                    alt="The Clean Coder"
                    className="img-fluid"
                  />
                  <div className="text-center mt-2">
                    <a
                      href="https://www.amazon.in/dp/0137081073?geniuslink=true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <input type="button" value="Check price" />
                    </a>
                  </div>
                </div>
                <div className="col-8 bookInfo p-3">
                  <b>Author:</b> Robert C. Martin <br />
                  <b>Pages:</b> 256 <br />
                  <b>Edition:</b> First Edition <br />
                  <b>Publisher:</b> Prentice Hall <br />
                  <b>Format:</b> Kindle/Paperback <br />
                  <br />
                  <b>Features:</b>
                  <ul>
                    <li>Emphasizes professionalism in coding</li>
                    <li>Advice on programming and communication</li>
                    <li>Conflict resolution & time management</li>
                    <li>Ethical software craftsmanship</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Q8 FAQ */}
          <section id="Q8">
            <div id="FrequentlyAskedQuestion">
              <p className="h3">Frequently Asked Questions </p>
              <div>
                <hr />
                <details>
                  <summary>
                    1. What Is the Main Purpose of Programming ?
                  </summary>{" "}
                  <br />
                  It is to maximize the power of computers. Programming allows
                  us to solve problems with computers quickly, cheaply, and
                  efficiently. <br />
                </details>
              </div>
              <div>
                <hr />
                <details>
                  <summary>2. What Software Is Used for Programming ?</summary>{" "}
                  <br />
                  Programming requires us to use various software pieces, some
                  of the most essential being an IDE (Integrated Development
                  Environment) or code editors like Visual Studio Code or Atom
                  and a version control system like Git. <br />
                </details>
              </div>
              <div>
                <hr />
                <details>
                  <summary>
                    3. What Is the Difference Between Coding and Programming ?
                  </summary>{" "}
                  <br />
                  Coding is when we use the syntax of a programming language to
                  write computer programs. Programming entails additional
                  processes like identifying program requirements, debugging,
                  testing, etc. <br />
                </details>
              </div>
            </div>
          </section>
       

      {/* Up Arrow */}
      <a href="#" className="upArrowButton">
        <i className="fas fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default Programming;
