import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MachineLearning.css";

const MachineLearning = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* First Subpage */}
     <div id="firstMLSubPage">
        <NavLink to="/">
          <img
            src="/Images/RgLogo.png"
            alt="Roadmap Guider Logo"
            width="100"
            className="ms-3 mt-4 logo-img"
          />
        </NavLink>
      </div>

      <hr className="custom-hr" />

      {/* Second Subpage */}
      <div className="container-fluid" id="secondSubPage1">
        <div className="row justify-content-center">
          <div className="col-6">
            <img
              src="Images/Machine_Learning_Images/firstSubpageImage.png"
              alt="Machine Learning"
              className="img-fluid"
            />
          </div>
          <div className="col-6">
            <div id="secondSubPage2">
              <p className="display-5">
                How To Learn Machine Learning From Scratch <br />[2024 Guide]
              </p>
              <p>Published on April 17, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Subpage */}
      <div className="thirdSubPage">
        <center>
          <div id="Questions" className="mt-5">
            <p className="display-6">Table of contents</p>
            <div>
              <a href="#Q1">What is Machine Learning ?</a>
              <a href="#Q2">Why Learn Machine Learning ?</a>
              <a href="#Q3">What Does a Machine Learning Engineer Do ?</a>
              <hr className="custom-hr" />
              <a href="#course">Best Machine Learning courses</a>
              <a href="#Tips">Tips for Beginners</a>
              <a href="#books">Best books for Beginners</a>
            </div>
          </div>
        </center>

        {/* Q1 */}
        <a name="Q1"></a>
        <div>
          <p className="h3 mt-5">What is Machine Learning ?</p>
          <p>
            Machine learning (ML) is a branch of artificial intelligence (AI)
            and computer science that focuses on using data and algorithms to
            enable AI to imitate the way that humans learn, gradually improving
            its accuracy. <br />
            <br />
            The term was first coined by the AI pioneer Arthur Samuel, who
            defined ML as the “field of study that gives computers the
            capability to learn without being explicitly programmed.” <br />
            <br />
            Simply put, ML teaches machines to learn from experience, rather
            than being programmed for specific tasks. It is an exciting
            combination of statistics and computer science that enables machines
            to independently identify patterns in data. <br />
            <br />
            Machines are trained to make sense of large quantities of data by
            using various ML models and algorithms. The four basic approaches
            of classical ML are: <br />
            1. Supervised learning <br />
            2. Unsupervised learning <br />
            3. Semi-supervised learning <br />
            4. Reinforcement learning <br />
            <br />
            Machine learning engineers choose their particular machine learning
            algorithm based on the kind of data available and the problem
            they’re trying to solve. As machines analyze more and more data,
            they become “smarter” and can adapt to new tasks and challenges.
            This imitates the way humans learn naturally—gradually building
            skills and improving accuracy. <br />
            <br />
            While ML and AI have generated interest for decades, we now have
            the technology to fully realize its applications. Self-driving cars,
            automated chat boxes, speech recognition systems, and even video
            streaming recommendations all use ML processes.
          </p>
        </div>

        {/* Q2 */}
        <a name="Q2"></a>
        <div>
          <p className="h3">Why learn Machine Learning ?</p>
          <p>
            Machine learning is a skill of the future. Today’s leading
            companies—including Facebook, Google, and Uber—have made ML a
            central part of their operations. And with skyrocketing demand for
            ML professionals, the field faces a major skill shortage. <br />
            <br />
            Understanding ML practically guarantees you a secure and lucrative
            career in the tech industry. With an extensive ML skill set, you can
            provide great value to your employer and boost your relevance in the
            job marketplace. <br />
            <br />
            The field’s exponential growth also means that you’ll have the
            freedom to work in the industry of your choice. The World Economic
            Forum recently stated that “AI, Machine Learning, and automation
            will power the creation of 97 million new jobs by 2025.” As more
            companies embrace the utilities of ML, the average base salary of an
            ML engineer will only continue to rise in the coming years. <br />
            <br />
            Machine learning is key to solving some of the biggest issues of the
            digital age. ML can help overcome critical challenges in banking and
            personal finance, healthcare diagnostics, image and speech
            recognition, and fraud prevention. Solutions to these problems will
            help people and businesses thrive, and contributing to such
            significant progress also creates a sense of great personal
            satisfaction. <br />
            <br />
            The unique blend of engineering, discovery, and business application
            also means that ML can be incredibly fun! It is a vibrant field
            offering plenty of growth opportunities. If you are excited about
            jumping into interesting challenges and finding innovative
            solutions, you’ll enjoy every minute of the hands-on training and
            practice needed to learn ML.
          </p>
        </div>

        {/* Q3 */}
        <a name="Q3"></a>
        <div>
          <p className="h3">What Does a Machine Learning Engineer Do ?</p>
          <p>
            On a day-to-day basis, ML engineers design, develop, test, and
            implement machine learning algorithms. They use programming
            languages like Python, Scala, and Java to perform tasks and automate
            processes. They utilize statistical and programming skills to create
            and train machine learning models. The ultimate goal is to develop
            self-learning applications that are both accurate and efficient.
            <br />
            <br />
            The main responsibilities of an ML engineer include: <br />
            • Study complex computer architectures, data structures, and
            algorithms <br />
            • Work with data engineers to design machine learning systems <br />
            • Manage infrastructure, data, and model pipelines <br />
            • Ensure fidelity of datasets and data representation methods <br />
            • Analyze large datasets to identify patterns and extract insights{" "}
            <br />
            • Develop algorithms based on statistical modeling procedures <br />
          </p>
          <details>
            <summary className="custom-summary">Some extra tips</summary>
            • Build and maintain scalable machine learning solutions in
            production <br />
            • Display end-to-end understanding of data modeling and evaluation
            strategies <br />
            • Liaise with stakeholders and explain complex processes to
            non-programmers <br />
            • Stay abreast of best practices and developments in the field <br />
          </details>
          <p>
            As the scope of the role suggests, an ML engineer needs to be
            proficient in several analytical fields. In addition to proven math
            and programming skills, you will also need to build outstanding
            problem-solving capabilities.
          </p>
        </div>
      </div>
      {/* Courses Section */}
<section id="courses" className="thirdSubPage">
  <a name="course"></a>
  <p className="display-6">Best Machine Learning Courses in 2024 [Free + Paid]</p>
  <br />
  <table>
    <thead>
      <tr>
        <th colSpan="3" className="text-center">Featured Machine Learning Courses</th>
      </tr>
      <tr>
        <th>Courses</th>
        <th>Summary</th>
        <th>Key Information</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <a href="https://www.coursera.org/specializations/machine-learning-introduction?irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=2890636&utm_content=b2c">
            [Coursera] <br />Machine Learning Specialization
          </a>
        </td>
        <td>
          Gain expertise in essential AI concepts and acquire hands-on machine learning skills
        </td>
        <td>
          <b>Certificate:</b> Yes <br />
          <b>Free or Paid:</b> Paid (free to audit) <br />
          <b>Duration:</b> 108 hours
        </td>
      </tr>
      <tr>
        <td>
          <a href="https://www.youtube.com/watch?v=i_LwzRVP7bg">
            [FreeCodeCamp] <br />Machine Learning for Everybody
          </a>
        </td>
        <td>
          Learn the fundamentals of machine learning and the implementation of various concepts using TensorFlow.
        </td>
        <td>
          <b>Certificate:</b> No <br />
          <b>Free or Paid:</b> Free <br />
          <b>Duration:</b> 4 hours
        </td>
      </tr>
      <tr>
        <td>
          <a href="https://www.udemy.com/course/machinelearning/#reviews">
            [Udemy] <br />Machine Learning A-Z: AI, Python & R + ChatGPT Bonus
          </a>
        </td>
        <td>
          Learn to create powerful machine learning algorithms with Python and R from data science professionals.
        </td>
        <td>
          <b>Certificate:</b> Yes <br />
          <b>Free or Paid:</b> Paid <br />
          <b>Duration:</b> 42 hours
        </td>
      </tr>
    </tbody>
  </table>
</section>

{/* Tips for Beginners */}
<section className="thirdSubPage">
  <a name="Tips"></a>
  <p className="display-6">Top 5 Tips for Beginners</p>
  <p>
    If you've chosen to seriously study machine learning, then congratulations! You have a fun and rewarding
    journey ahead of you. <br /><br />
    Here are 5 tips that every beginner should know: <br /><br />
    <b>1. Set concrete goals or deadlines.</b> <br />
    Machine learning is a rich field that's expanding every year. It can be easy to go down rabbit holes.
    Set concrete goals for yourself and keep moving. <br /><br />
    <b>2. Walk before you run.</b> <br />
    You might be tempted to jump into some of the newest, cutting edge sub-fields in machine learning
    such as deep learning or NLP. Try to stay focused on the core concepts at the start. These advanced topics
    will be much easier to understand once you've mastered the core skills. <br /><br />
    <b>3. Alternate between practice and theory.</b> <br />
    Practice and theory go hand-in-hand. You won't be able to master theory without applying it, yet you
    won't know what to do without the theory. <br /><br />
    <b>4. Write a few algorithms from scratch.</b> <br />
    Once you've had some practice applying algorithms from existing packages, you'll want to write a few
    from scratch. This will take your understanding to the next level and allow you to customize them in the
    future. <br /><br />
    <b>5. Seek different perspectives.</b> <br />
    The way a statistician explains an algorithm will be different from the way a computer scientist
    explains it. Seek different explanations of the same topic.
  </p>
</section>

{/* Books Section */}
<section id="Books" className="thirdSubPage">
  <a name="books"></a>
  <p className="display-6">Machine Learning Books for Beginners</p>

  {/* Book 1 */}
<h3>1. The Hundred-Page Machine Learning Book</h3> <br />
<div className="container-fluid">
  <div className="row">
    <div className="col-3 bookImage p-3">
      <img src="Images/Machine_Learning_Images/book1.webp" alt="" className="img-fluid" /> <br /> <br />
      <center>
        <a href="https://www.amazon.in/dp/1999579518?th=1&psc=1&geniuslink=true" className="text-center">
          <input type="button" value="Check price" className="checkPriceBtn" />
        </a>
      </center>
    </div>
    <div className="col-8 bookInfo p-3">
      <div>
        <b>Author(s)</b>- Andriy Burkov <br />
        <b>Pages</b>- 160 <br />
        <b>Latest Edition</b>- First Edition <br />
        <b>Publisher</b>- Andriy Burkov <br />
        <b>Format</b>- Kindle/Hardcover/Paperback <br /> <br />
      </div>
      <div>
        <b>Features</b> <br />
        &#149; Fundamental ML concepts, including evaluation & overfitting <br />
        &#149; Supervised learning via linear regression, logistic regression, & random forests <br />
        &#149; Unsupervised Learning via clustering & dimensionality reduction <br />
        &#149; Deep Learning via neural networks (NN) <br />
      </div>
    </div>
  </div>
</div> <br /> <br />

<h3>2. Machine Learning for Absolute Beginners: A Plain English Introduction</h3> <br />
<div className="container-fluid">
  <div className="row">
    <div className="col-3 bookImage p-3">
      <img src="Images/Machine_Learning_Images/book2.webp" alt="" className="img-fluid" /> <br /> <br />
      <center>
        <a href="https://www.amazon.in/dp/1549617214?th=1&psc=1&geniuslink=true" className="text-center">
          <input type="button" value="Check price" className="checkPriceBtn" />
        </a>
      </center>
    </div>
    <div className="col-8 bookInfo p-3">
      <div>
        <b>Author(s)</b>- Oliver Theobald <br />
        <b>Pages</b>- 179 <br />
        <b>Latest Edition</b>- Third Edition <br />
        <b>Publisher</b>- Scatterplot Press<br />
        <b>Format</b>- Kindle/Paperback/Hardcover <br /> <br />
      </div>
      <div>
        <b>Features</b> <br />
        &#149; Intro to Python language and to use with machine learning<br />
        &#149; Basics of deep learning and Neural Networks (NN) <br />
        &#149; Covers clustering and supervised/unsupervised algorithms <br />
        &#149; The theory behind feature engineering and how to approach it <br />
        &#149; Python ML Libraries, including scikit-learn, NumPy . <br />
      </div>
    </div>
  </div>
</div> <br /> <br />

<h3>3. Machine Learning for Dummies</h3> <br />
<div className="container-fluid">
  <div className="row">
    <div className="col-3 bookImage p-3">
      <img src="Images/Machine_Learning_Images/book3.webp" alt="" className="img-fluid" /> <br /> <br />
      <center>
        <a href="https://www.amazon.in/dp/1119724015?geniuslink=true" className="text-center">
          <input type="button" value="Check price" className="checkPriceBtn" />
        </a>
      </center>
    </div>
    <div className="col-8 bookInfo p-3">
      <div>
        <b>Author(s)</b>- John Paul Mueller and Luca Massaron <br />
        <b>Pages</b>- 464 <br />
        <b>Latest Edition</b>- Second Edition <br />
        <b>Publisher</b>- For Dummies<br />
        <b>Format</b>- Kindle/Paperback <br /> <br />
      </div>
      <div>
        <b>Features</b> <br />
        &#149; Tools and techniques for cleaning and preprocessing data<br />
        &#149; Unsupervised, supervised, and deep learning methods <br />
        &#149; Evaluating model performance with accuracy and F1 score <br />
        &#149; Best practices and tips for feature selection, model selection, and avoiding overfitting <br />
      </div>
    </div>
  </div>
</div>
</section>

    </>
  );
};

export default MachineLearning;
