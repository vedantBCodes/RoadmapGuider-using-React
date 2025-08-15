import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import "./DataAnalyst.css";

export default function DataAnalyst() {
  // exact inner content from your original #information (no footer included)
  const infoHtml = `
<a name="Q1">
<div>
<h3>What is data analysis?</h3>
<p>
  Data analysis is the process of gleaning insights from data to inform better business decisions. The
  process of analyzing data typically moves through five iterative phases: <br/> <br/>

  1. <b>Identify</b> the data you want to analyze <br/>

  2. <b>Collect</b> the data <br/>

  3. <b>Clean</b> the data in preparation for analysis <br/>

  4. <b>Analyze</b> the data <br/>

  5. <b>Interpret</b> the results of the analysis <br/> <br/>

  Data analysis can take different forms, depending on the question you’re trying to answer. You can
  read more about the types of data analysis here. Briefly, descriptive analysis tells us what
  happened, diagnostic analysis tells us why it happened, predictive analytics forms projections about
  the future, and prescriptive analysis creates actionable advice on what actions to take.
</p>
</div>
</a>

<a name="Q2">
<div>
<h3>Who is a Data Analyst ?</h3>
<p>
  A data analyst collects, processes, and performs analysis of large datasets. Every business, be it
  small or big, generates, and collects data. This data can be in the form of customer feedback,
  accounts, logistics, marketing research, and so on. <br/> <br/>

  A data analyst is a professional who takes this data and figures out numerous measures, such as how
  to improve customer experience, price new materials, and how to reduce transportation costs, to name
  a few. Data Analysts deal with data handling, data modeling, and reporting. <br/> <br/>

  Once you know who is a data analyst, it's paramount to know the roles and responsibilities of a data
  analyst. <br/>
</p>
</div>
</a>

<a name="Q3">
<div>
<h3>What Does a Data Analyst Do ?</h3>
<p>
  Data analysts play a vital role in a modern company, helping to reflect on its work and customer
  base, determining how these factors have affected profits and advising leadership on ways to move
  forward to grow the business. <br/> <br/>

  According to McKenzie, successful data analysts have strong mathematical and statistical skills, as
  well as: <br/>

  1. <b>Analytical skills</b> to gather, view and analyze information <br/>
  2. <b>Numerical skills</b> to measure and statistically analyze data <br/>
  3. <b>Technical skills</b> including software and scripting languages to organize and present data
  <br/>
</p>
</div>
</a>

<a name="Q4">
<div>
<h3>Is Data Analytics a Good Career ?</h3>
<p>
  What Does a Data Analyst Do? Gaining experience as a data analyst may also lead to opportunities in
  related fields. Numerous entrant-level data analysts progress to more senior positions as data
  scientists. Data scientists, like analysts, conduct their work using quantitative and computational
  methods. On the other hand, a scientist might employ cutting-edge techniques to construct models and
  other instruments to shed light on upcoming tendencies. <br/>
</p>
</div>
</a>

<a name="Q5">
<div>
<h3>What Skills Does a Data Analyst Need ?</h3>
<p>
  A combination of soft skills and hard skills will serve you well in preparing to become a data
  analyst. “It’s important to build your technical skills, but also expand your soft skills, which
  will complement your technical skills to offer more advanced and unique insight,” Kushner says <br/>
  <br/>

  Soft skills that are beneficial for this career include: <br/>

  1. Agility <br/>
  2. Flexibility<br/>
  3. Strategic thinking<br/>
  4. Creativity<br/>
  5. Critical thinking<br/>
  6. Curiosity<br/> <br/>

  Hard skills you need for the field include: <br/>

  1. Scripting: SQL, Python, and R<br/>
  2. Statistical programming: R, Python (NumPy, pandas, SciPy), SAS<br/>
  3. Data wrangling and data cleaning<br/>
  4. Data visualization and reporting tools (Tableau, Power BI, Matplotlib, etc.)<br/>
  5. Spreadsheets (Excel/Google Sheets)<br/>
  6. Databases and querying (SQL)<br/>
  7. Probability and statistics fundamentals<br/>
  8. Basic machine learning concepts (optional/plus)<br/>
</p>
</div>
</a>

<a name="Q6">
<p class="display-6">Data analyst roadmap: your 5-step plan</p>
<p>
  We know that career-change can be a daunting prospect, so we’ve broken it down as simply as
  possible. In just five steps, you can go from aspiring data analyst to fully-fledged professional.
  For now, here’s your step-by-step plan of action! <br/> <br/>
</p>

<a name="step1">
<h3> Step 1: Get familiar with the fundamentals</h3>

This first step is all about immersing yourself in the world of data analytics and getting familiar with
some of the key tools and principles. There are two components to this step: <br/> <br/>

1. Embracing the theory behind data analytics <br/>
2. Getting hands-on with some key data analytics tools <br/> <br/>
Before you do anything else, absorb as much theory as you can about data analytics. Read about how data
analytics is being used in the real world, and familiarize yourself with the kinds of analyses that a
data analyst might perform. As a focal point for your reading, we recommend researching the different
types of data analysis and getting to grips with the various data analytics techniques, such as: <br/>

• regression analysis <br/>
• factor analysis <br/>
• cohort analysis <br/>
• cluster analysis <br/>
• time-series analysis <br/> <br/>
</a>

<a name="step2">
<h3> Step 2: Commit to the process with a structured course</h3> <br/>

Now it’s time to get serious about your career-change. While the internet is full of wonderful and free
resources, it won’t give you the structured approach or the hands-on practice that you need. If you want
to become an employable data analyst, the most effective (and rewarding) way to do so is through a
specialized program or course. <br/> <br/>

However, not all data analytics courses are created equal, so this step requires extensive research.
When choosing a program, it’s crucial to find a structure that complements your schedule (especially if
you plan on working and studying at the same time) and fits your budget. Most importantly, however, we
strongly recommend investing in a course that can offer the following: <br/> <br/>

• Expert mentorship and support <br/>
• Career coaching and interview prep <br/>
• Portfolio-building with real projects <br/>
• A clear, beginner-friendly curriculum that ramps up <br/> <br/>
</a>

<a name="step3">
<h3>Step 3: Hone your soft skills</h3><br/>

Soft skills matter just as much as technical skills. Look at the list you’ve already
perfected and identify those that might need more work. Perhaps you’re excellent at conducting research
and solving problems as part of your current role, but haven’t had much experience of giving
presentations. <br/> <br/>

If there’s opportunity for this kind of development within your current workplace, grab it with both
hands. Offer to run a small research project and present your findings to the team, or put your
analytical mindset to work by offering to tackle a specific business problem. This step does require
some creativity, especially if your current role doesn’t immediately lend itself to such opportunities.
<br/> <br/>
</a>

<a name="step4">
<h3>Step 4: Start networking</h3><br/>

It’s the golden rule for every industry: establishing a good network and making connections is
absolutely essential if you want to get your foot in the door. While many of us dread the idea of
“networking”, it doesn’t have to be as uncomfortable as it might sound. In fact, there are many
different types of networking, ranging from a friendly message on LinkedIn to a full-on conference
circuit. <br/> <br/>

As an aspiring data analyst, it’s important to start connecting with like-minded people as early as
possible. Not only does a good network open up potential doors in terms of career prospects; it’s also
an excellent source of mentorship and support as you find your feet in a brand new industry. So where to
start? Here are some excellent ways to network, both online and in person: <br/> <br/>

• <a href="https://www.linkedin.com/">LinkedIn</a> — join some data analytics groups, or simply
connect with analysts in and around your local area. <br/>
• <a href="https://www.meetup.com/">Meetup.com</a> — Meetup offers loads of tech and data meetups
all over the world, ranging from the free and
informal to the more professional events. <br/>
• <b>Your student community</b> — many data analytics courses will offer you ways to get in touch
with your fellow students; virtual coworking sessions, networking events, or simply via a dedicated
Slack channel. <br/> <br/>
</a>

<a name="step5">
<h3>Step 5: Refine your portfolio and prepare for the job market</h3><br/>

The fifth and final step on the roadmap towards becoming a data analyst is to refine your portfolio and
prepare for the job market. <br/> <br/>

Your portfolio is arguably the most important asset you’ll have when it comes to applying for jobs; it
showcases how you work and demonstrates to employers that you’ve not only mastered the right practical
skills, but that you know how to apply them in the real world. <br/> <br/>

As already mentioned, the right data analytics course will have you working on practical projects and
guide you in the creation of a professional portfolio. Your mentor can also help you to polish up your
portfolio and give you tips on how to present it. You can learn how to create a data analytics portfolio
in this guide <br/> <br/>
</a>

<a name="step6">
<h3>6. Data analyst roadmap: next steps</h3><br/>

That just about concludes our data analyst roadmap—you now have a clear, step-by-step plan to follow in
order to learn the necessary skills and break into the industry. Before we go, let’s recap on your plan
of action: <br/> <br/>
1. <b> familiar with the fundamentals:</b> Learn about the different types of analysis and practice using some
formulas in Excel. <br/> <br/>
2. <b> Sign up for a data analytics course:</b> Opt for a certification program that offers expert mentorship,
career coaching, help building your portfolio, and a job <br/> <br/>
3. <b> Hone your soft skills:</b> Refer back to ...r list in section three and make sure you can demonstrate all of
the soft skills needed to become a data analyst. <br/> <br/>
4. <b> Start networking:</b> Join data analytics... groups on LinkedIn, get involved in your student community, and
consider attending local meetups. <br/> <br/>
5. <b> Refine your portfolio and prepare for the... job market:</b> Work with your mentor and your careers coach to
get your professional portfolio ready, optimize your online presence, and start practicing for
interviews. 
</a>

`;

  useEffect(() => {
    const btn = document.querySelector(".da-upArrowButton");
    const onScroll = () => {
      if (window.scrollY > 100) {
        btn?.classList.add("active");
      } else {
        btn?.classList.remove("active");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="da-container">
      {/* Hero / first section */}
      <div id="da-firstSubPage">
        <NavLink to="/">
          <img
            src="Images/RgLogo.png"
            alt="Logo"
            width="100px"
            className="ms-3 mt-4"
          />
        </NavLink>
      </div>

      {/* Sidebar + content */}
      <div className="container-fluid justify-content-center">
        <div className="row">
          {/* Sidebar */}
          <div className="col-3 me-5 pe-0 da-firstHalf">
            <div className="da-flex">
              <div id="da-verticle_line" />
              <div id="da-links">
                <span><a href="#Q1">Overview</a></span>
                <span><a href="#Q2">Who is a Data Analyst ?</a></span>
                <span><a href="#Q3">What Does a Data Analyst Do ?</a></span>
                <span><a href="#Q4">Is Data Analytics a Good Career ?</a></span>
                <span><a href="#Q5">What Skills Does a Data Analyst Need ?</a></span>
                <span><a href="#Q6">Data analyst roadmap</a></span>
                <hr style={{ border: "1px solid black" }} />
                <span><a href="#Q7">Frequently asked questions (FAQ)</a></span>
              </div>
            </div>
          </div>

          {/* Main info */}
          <div id="da-information" className="col-8 da-secondHalf">
            <div
              className="da-inner"
              dangerouslySetInnerHTML={{ __html: infoHtml }}
            />
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <a href="#" className="da-upArrowButton" aria-label="Scroll to top">
        <FaChevronUp />
      </a>
    </div>
  );
}
