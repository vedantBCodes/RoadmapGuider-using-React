import React, { useEffect } from "react";
import "./Sql.css";
import { FaChevronUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sql() {
  useEffect(() => {
    const arrowButton = document.querySelector(".sql-upArrowButton");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        arrowButton.classList.add("active");
      } else {
        arrowButton.classList.remove("active");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="sql-container">
      {/* First SubPage */}
     

<div id="sql-firstSubPage">
  <NavLink to="/">
    <img
      src="Images/RgLogo.png"
      alt="Logo"
      width="100px"
      className="ms-3 mt-4"
    />
  </NavLink>
</div>


      {/* Sidebar + Q1–Q5 side-by-side */}
      <div className="container-fluid mb-3 justify-content-center">
        <div className="row">
          {/* Sidebar */}
          <div className="col-3 me-5 pe-0 sql-firstHalf">
            <div className="sql-flex-container">
              <div id="sql-verticle-line"></div>
              <div id="sql-links">
                <span><a href="#Q1">Overview</a></span>
                <span><a href="#Q2">Why is SQL important ?</a></span>
                <span><a href="#Q3">Why should you learn SQL ?</a></span>
                <span><a href="#Q4">What Can SQL do ?</a></span>
                <span><a href="#Q5">What are SQL commands ?</a></span>
                <span><a href="#Q6">How to Learn SQL ?</a></span>
                <hr style={{ border: "1px solid black" }} />
                <span><a href="#Q7">Best Free SQL courses</a></span>
              </div>
            </div>
          </div>

          {/* Q1–Q5 */}
          <div id="sql-information" className="col-8 sql-secondHalf">
            {/* Q1 */}
            <a name="Q1">
              <div>
                <h3>What is SQL ?</h3>
                <p>
                  SQL, short for Structured Query Language, is the standard language for communicating with relational databases.
                  It&apos;s a relatively simple language as far as coding goes, but it&apos;s also incredibly powerful.
                  <br /><br />
                  <center>
                    <img
                      src="Images/SQL_Images/secondSubpageBgImage.webp"
                      alt=""
                      className="img-fluid"
                      style={{ borderRadius: "10px" }}
                    />
                  </center>
                  <br />
                  You can write SQL statements to retrieve specific data from large databases, update data on a
                  database, and much more. Relational database management systems like MySQL, Oracle, Microsoft SQL Server,
                  Sybase, and Ingres use SQL.
                </p>
              </div>
            </a>

            {/* Q2 */}
            <a name="Q2">
              <div>
                <h3>Why is SQL important?</h3> <br />
                <p>
                  Structured query language (SQL) is a popular query language that is frequently used in all types of applications.
                  Data analysts and developers learn and use SQL because it integrates well with different programming languages.
                  For example, they can embed SQL queries with the Java programming language to build high-performing data processing
                  applications with major SQL database systems such as Oracle or MS SQL Server. SQL is also fairly easy to learn
                  as it uses common English keywords in its statements.
                </p>
              </div>
            </a>

            {/* Q3 */}
            <a name="Q3">
              <div>
                <h3>Why should you learn SQL ?</h3> <br />
                <p>
                  In our data-hungry world, the ability to successfully work with data is becoming more and more valuable.
                  It&apos;s an in-demand skill and not just for data analysts. Financial teams, programmers, and even non-technical
                  people in marketing, sales, and other functions can all benefit from understanding what it takes to extract the data
                  they need from a large database. <br /><br />
                  You don&apos;t necessarily need to become a SQL all-star, but understanding the basics will teach you how to ask
                  better data-related questions (at the very least).
                </p>
              </div>
            </a>

            {/* Q4 */}
            <a name="Q4">
              <div>
                <h3>What Can SQL do ?</h3> <br />
                <p>
                  &#149; execute queries against a database <br />
                  &#149; retrieve data from a database <br />
                  &#149; insert records in a database <br />
                  &#149; update records in a database <br />
                  &#149; delete records from a database <br />
                  &#149; create new databases <br />
                  &#149; create new tables in a database <br />
                  &#149; can create stored procedures in a database <br />
                  &#149; can create views in a database <br />
                  &#149; can set permissions on tables, procedures, and views <br />
                </p>
              </div>
            </a>

            {/* Q5 */}
            <a name="Q5">
              <div>
                <h3>What are SQL commands ?</h3>
                <p>
                  Structured query language (SQL) commands are specific keywords or SQL statements that developers use to manipulate the data
                  stored in a relational database. You can categorize SQL commands as follows. <br /><br />
                  <b>Data definition language</b> – Create and modify database objects such as tables, views, and indexes.
                  <br /><br />
                  <b>Data query language</b> – Retrieve data stored in relational databases using SELECT.
                  <br /><br />
                  <b>Data manipulation language</b> – Write new information or modify existing records (INSERT, UPDATE, DELETE).
                  <br /><br />
                  <b>Data control language</b> – Manage database access (GRANT, REVOKE).
                  <br /><br />
                  <b>Transaction control language</b> – Automatically make or undo database changes (COMMIT, ROLLBACK).
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* From here onward: full width (Q6, Q7) */}
      {/* Q6 */}
      <a name="Q6">
        <div id="sql-howToLearn">
          <p className="display-6">How to Learn SQL (3 Methods)</p> <br />
          <p>
            There are plenty of online resources that you can use to learn SQL. Let’s look at some effective ways to
            master this language.
          </p>

          <h3>1. Find a YouTube Tutorial</h3>
          <p>
            If you’re looking to learn SQL as fast as possible, YouTube is a great place to start. Rather than
            completing a lengthy course, you can find a tutorial that simplifies the language into its core
            concepts.
            <br /> <br />
            For example, the <a href="https://www.youtube.com/watch?v=h0nxCDiD-zg">SQL for Beginners Tutorial
            </a>will
            teach you how to retrieve data from a database: <br />
            <img src="Images/SQL_Images/howToLearnImage1.jpeg" alt="" className="img-fluid" /> <br />
            Learn SQL for beginners course on YouTube
            In this 45-minute video, you’ll learn the basics of SQL, databases, and Relational Database Management
            Systems. The creator will walk you through installing Microsoft SQL Server and SQL Server Management
            Studio.
            Using these free tools, you can familiarize yourself with tables, primary keys, data types, and more.
          </p>

          <h3>2. Take a Free Course</h3> <br />
          <p>
            Some people prefer structured courses. Fortunately, there are many e-learning materials that focus on
            the
            fundamentals. By completing untimed modules, you can become an SQL developer at your own pace. <br />
            One of the best platforms to learn coding skills is Codecademy. After you create an account, you can
            look
            for beginner courses such as <a href="https://www.codecademy.com/learn/learn-sql">Learn SQL.</a> This
            course
            will teach you how to use SQL to communicate with
            relational databases: <br />
            <img src="Images/SQL_Images/howToLearnImage2.jpeg" alt="" className="img-fluid" />
            In each module, you’ll be able to enter commands, run queries, and use functions to perform database
            operations:
          </p>

          <h3>3. Earn a Certification</h3> <br />
          <p>
            In most cases, you won&apos;t need a college degree to work with SQL. However, you might want to showcase
            your
            coding skills on your resume. When looking for a position that requires knowledge of SQL, having a
            certification can increase your chances of getting hired. <br /> <br />
            Fortunately, you can easily gain a SQL certification online. Coursera’s <a
              href="https://www.coursera.org/learn/intro-sql">Introduction to Structured Query
              Language </a>teaches you how to create a MySQL database. Once you complete the course, you’ll
            receive a
            certificate: <br /> <br />
            <img src="Images/SQL_Images/howToLearnImage3.jpeg" alt="" className="img-fluid" /> <br /> <br />
            Keep in mind that this is the second level in the Web Applications for Everybody Specialization. To get
            up
            to speed, you’ll have to first take the Building Web Applications in PHP course. If you’re already
            familiar
            with PHP, HTML, and CSS, feel free to sign up for the SQL lessons.
          </p>
        </div>
      </a>

      {/* Q7 */}
      <a name="Q7">
        <div id="sql-resources">
          <p className="display-6">Best Free SQL courses</p>
          <p>
            These days, it’s not just data engineers who need to know SQL.
            <br /><br />
            As relational databases continue to proliferate across various fields, such as marketing and sales, a
            new
            cohort of professionals wants to learn SQL.
            <br /><br />
            But there’s no need to shell out a bunch of money to learn these new skills. There are already plenty of
            free SQL learning resources that can teach beginners everything they need to know about SQL. <br /> <br />
            Here are the best free online resources for learning SQL in 2024: <br />
          </p>

          <center>
            <h3><a href="https://www.khanacademy.org/computing/computer-programming/sql">1. Khan Academy</a></h3>
          </center>
          <img src="Images/SQL_Images/resource1.webp" alt="" className="img-fluid" /> <br /> <br />

          <p>
            “Intro to SQL: Querying and managing data” by Khan Academy pairs video tutorials with interactive coding
            challenges for a best-of-both worlds course. <br /> <br />
            Video lessons are shot at the command-line level, clearly demonstrating concepts in the code itself.
            Frequent coding challenges reinforce the educational content with diverse problem sets.<br /> <br />
            This course is recommended for those who want to combine excellent visual lessons with interactive
            coding
            exercises .<br />
          </p>

          <center>
            <h3><a href="https://sqlzoo.net/wiki/SQL_Tutorial">2. SQLZoo</a></h3>
          </center>
          <img src="Images/SQL_Images/resource2.webp" alt="" className="img-fluid" /> <br /> <br />

          <p>
            SQLZoo is an interactive, Wiki-based tutorial that offers lessons and projects for beginners in SQL.
            Students start with basic functions such as COUNT, SUM, and AVG, and end by building intermediate
            projects.
            <br /> <br />
            The lessons center around interactive coding challenges that are meant to be self-explanatory. This is a
            good resource for students who want to learn SQL through small, simple exercises.<br />
          </p>

          <center>
            <h3><a href="https://www.codecademy.com/learn/learn-sql">3. Codecademy</a></h3>
          </center>
          <img src="Images/SQL_Images/resource2.webp" alt="" className="img-fluid" /> <br /> <br />

          <p>
            Codecademy, a leading educational coding platform, offers a free course on SQL. The course is structured
            as
            a series of interactive coding tutorials that guide students from basic functionality to varied,
            long-form
            projects. <br /> <br />
            Codecademy’s deep reservoir of exercises, and the service’s sleek interface, make for a smooth learning
            experience. Recommended for students who want more of a professional feel to the learning process.<br />
          </p>
        </div>
      </a>

      {/* Scroll to Top */}
      <a href="#" className="sql-upArrowButton">
        <FaChevronUp />
      </a>
    </div>
  );
}
