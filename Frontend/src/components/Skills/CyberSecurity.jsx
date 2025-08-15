import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";
import "./CyberSecurity.css";

export default function CyberSecurity() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="cs-page">
      {/* Hero / first section */}
      <div id="cs-firstSubPage">
        <NavLink to="/">
          <img
            src="Images/RgLogo.png"
            alt="RoadmapGuider Logo"
            width="100px"
            className="ms-3 mt-4"
          />
        </NavLink>
      </div>

      {/* Main grid: sidebar + content */}
      <div className="container-fluid justify-content-center" id="cs-container">
        <div className="row">
          {/* Sidebar */}
          <aside className="col-3 me-5 pe-0 cs-firstHalf" aria-label="Page navigation">
            <div className="cs-flex-container">
              <div id="cs-verticle_line" aria-hidden="true" />
              <nav id="cs-links" aria-label="Sections">
                <span><a href="#Q1">Overview</a></span>
                <span><a href="#Q2">Why Is Cybersecurity Important ?</a></span>
                <span><a href="#Q3">Basic Education Requirements for Cybersecurity Jobs</a></span>
                <span><a href="#Q4">Soft Skills Needed In Cybersecurity</a></span>
                <span><a href="#Q5">How to Master Cybersecurity</a></span>
                <span><a href="#Q6">Tips to learn cyber security</a></span>
                <hr />
                <span><a href="#Q7">Frequently asked questions (FAQ)</a></span>
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main id="cs-information" className="col-8 cs-secondHalf">
            <section id="Q1" aria-labelledby="q1-heading">
              <h3 id="q1-heading">What is cybersecurity?</h3>
              <p>
                Cybersecurity is a subset of information technology associated with safeguarding computer systems
                and information. There are many types of cybersecurity threats, including theft, hacking, viruses,
                and more. The computer security field has grown as more devices become internet-enabled and more
                services are moved online.
              </p>

              <p>
                Cyberattacks may result in stolen credit card information, personal details, and other sensitive
                data. Security breaches typically occur when organizations’ and companies’ data centers are compromised.
                They can impact banks, retail stores, online websites, and anywhere else consumers use their digital
                information. Hackers also use fraudulent emails and social media to access sensitive data from end-users.
                IT and cybersecurity experts are responsible for assessing security risks in order to better protect customers.
              </p>
            </section>

            <section id="Q2" aria-labelledby="q2-heading">
              <h3 id="q2-heading">Why Is Cybersecurity Important ?</h3>
              <p>
                Data breaches expose sensitive information to people with malicious intent – think things like passwords,
                credit card information, phone numbers, protected health information, and sensitive documents (copyrights,
                trade secrets, patents, and so on).
              </p>
              <p>
                But information theft is often not the only goal of a cyberattack — hackers and bad actors also attack
                infrastructure controls and compromise data integrity. With the power of AI tools, these cyber threats are
                only projected to increase in both frequency and complexity.
              </p>
              <p>
                Therefore, it’s critical at both the individual and organizational level to secure the data that so many rely on.
              </p>
            </section>

            <section id="Q3" aria-labelledby="q3-heading">
              <h3 id="q3-heading">Basic Education Requirements for Cybersecurity Jobs</h3>
              <p>
                This is likely the first thing you googled – “Do you need a bachelor’s degree to get a Cybersecurity job?”
                Cybersecurity is a vast field with a variety of roles. There are no universal “basic education requirements”
                that apply across the board. Many entry-level cybersecurity jobs do not require a bachelor’s degree in
                cybersecurity or related fields. For more senior roles, a degree or specific certifications may be required.
                Transferable skills often let people break into the field without a formal degree.
              </p>
            </section>

            <section id="Q4" aria-labelledby="q4-heading">
              <h3 id="q4-heading">Soft Skills Needed In Cybersecurity</h3>
              <p>
                While technical skills are important, soft skills matter too. Cybersecurity professionals should be able to:
              </p>
              <ul>
                <li>Communicate risks clearly to non-technical stakeholders</li>
                <li>Think critically to investigate incidents</li>
                <li>Show attention to detail when auditing logs and configurations</li>
                <li>Collaborate across teams to implement fixes</li>
              </ul>

              <p>Other valuable soft skills include:</p>
              <ol>
                <li>Management skills (time, people, project management)</li>
                <li>Problem-solving</li>
                <li>Verbal and written communication</li>
                <li>Presentation</li>
                <li>Independence</li>
                <li>Leadership</li>
                <li>Logical reasoning</li>
                <li>Creativity</li>
                <li>Willingness to learn</li>
                <li>Integrity</li>
              </ol>
            </section>

            <section id="Q5" aria-labelledby="q5-heading">
              <h3 id="q5-heading">How to Master Cybersecurity</h3>
              <p>
                Learning cybersecurity can be manageable if you follow the right approach and use the right tools to develop
                your skill set. Leveraging transferable skills speeds up the journey:
              </p>
              <ul>
                <li><b>Coding/Programming:</b> Familiarity with Python, JavaScript, SQL helps understand malware, scripts, and vulnerabilities.</li>
                <li><b>Data Analysis:</b> Useful for interpreting breach data and attack patterns.</li>
                <li><b>Network Administration:</b> Helps understand attack propagation and securing networks.</li>
                <li><b>System Administration:</b> Managing/securing OSes aids in endpoint protection.</li>
                <li><b>Digital Forensics:</b> Useful for investigating breaches and analyzing attacks.</li>
                <li><b>Project Management:</b> Helps lead security initiatives and implement fixes effectively.</li>
              </ul>

              <h4>Start With the Basics</h4>
              <p>
                Have a foundational understanding of:
                <br /><b>Software skills:</b> cloud security, operating systems, office suites, antivirus tools.
                <br /><b>Data:</b> types and classifications, when to call a forensic expert.
                <br /><b>Programming languages:</b> basics required to work in the field.
                <br /><b>Networks:</b> firewalls, IDS, VPNs.
                <br /><b>Cybersecurity laws:</b> FISMA and related legislation.
                <br /><b>Ethical hacking:</b> familiarity with tools like Nmap, Wireshark, Kali Linux, and basic pen-testing techniques.
              </p>

              <h4>Take a Course</h4>
              <p>
                Use credible online platforms or bootcamps (self-paced or intensive) to learn fundamentals. Here are a few
                course providers mentioned in your source:
              </p>
              <ul>
                <li><b>Springboard</b> — Springboard’s Cybersecurity Career Track (mentors + job assistance).</li>
                <li><b>edX</b> — Courses from established institutions (e.g., University of Washington Introduction to Cybersecurity).</li>
                <li><b>Coursera</b> — Many cybersecurity courses and specializations (e.g., Intro to Cybersecurity from NYU).</li>
                <li><b>Udemy</b> — Wide catalog of practical cybersecurity courses (filter by “Beginner Favorites”).</li>
              </ul>
            </section>

            <section id="Q6" aria-labelledby="q6-heading">
              <h3 id="q6-heading" className="display-6">Tips to learn cyber security</h3>

              <h4>1. Build a foundation with an introductory course.</h4>
              <p>
                Intro courses typically cover tools & attack vectors, compliance & standards, OS/network/data security,
                incident response, penetration testing, and threat intelligence.
              </p>

              <h4>2. Evaluate your passion for technology.</h4>
              <p>
                Passion helps make challenging topics easier — join communities to stay motivated and learn from peers.
              </p>

              <h4>3. Learn a little every day.</h4>
              <p>
                Short, consistent study (e.g., 15 minutes daily) with specific goals accelerates progress.
              </p>

              <h4>4. Become an ethical hacker.</h4>
              <div id="cs-ethicalHacking" className="cs-ethicalBox">
                <strong>What is ethical hacking?</strong>
                <p>
                  The EC-Council defines ethical hacking as “the process of detecting vulnerabilities in an application,
                  system, or organization’s infrastructure that an attacker can use to exploit an individual or organization.”
                  In other words, ethical hacking is a legal, authorized attempt to break into a system to find and fix vulnerabilities.
                </p>
              </div>

              <p>
                Free, gamified practice sites:
                <br />• <a href="https://www.hackthebox.com/">Hack the Box</a>
                <br />• <a href="https://hack.me/">Hack.me</a>
                <br />• <a href="https://hackthissite.org/">Hack This Site</a>
                <br />• <a href="https://owasp.org/www-project-webgoat/">WebGoat</a>
              </p>

              <h4>5. Practice in simulated environments.</h4>
              <p>
                Typical lab elements:
                <br />1. A <b>cloud environment</b> to host VMs
                <br />2. A <b>target machine</b> to attack
                <br />3. An <b>attack box</b> for planning/performing attacks
              </p>

              <h4>6. Mix it up with workplace skills.</h4>
              <p>
                Improve communication and cross-functional collaboration skills; hiring managers value critical thinking.
              </p>

              <h4>7. Earn a certification.</h4>
              <p>
                Certifications both teach and validate skills. Common certs listed in the file include:
                CompTIA Security+, CompTIA Network+, CompTIA CSA+, Cisco CCNA, CISSP, CISA (ISACA) and vendor certs. Many
                employers ask for certifications alongside practical experience.
              </p>

              <h4>Find a Specialty</h4>
              <p>
                Common specialties: <b>Application security</b>, <b>Network security</b>, <b>Penetration testing</b>.
                Pen testers identify vulnerabilities, report findings, and work with devs/auditors to remediate issues.
              </p>
            </section>

            <section id="Q7" aria-labelledby="q7-heading">
              <div id="cs-FrequentlyAskedQuestion">
                <p id="q7-heading" className="h3">Frequently Asked Questions</p>

                <details>
                  <summary>Is cybersecurity a lot of math?</summary>
                  <p>
                    Cybersecurity is generally not considered math-heavy. On the job you typically need a basic understanding
                    of binary math and logic. Cryptography roles are an exception and may require more advanced math.
                  </p>
                </details>

                <hr />

                <details>
                  <summary>Is cybersecurity a good career?</summary>
                  <p>
                    Yes — demand is high. The source cites many open positions and competitive pay; BLS median for information
                    security analysts reported around $112,000 in the US at the time of writing.
                  </p>
                </details>

                <hr />

                <details>
                  <summary>Is a cybersecurity degree hard?</summary>
                  <p>
                    Compared to a CS degree, cybersecurity programs often have fewer high-level math/science requirements,
                    though coursework can still be technical and challenging.
                  </p>
                </details>

                <hr />

                <details>
                  <summary>Does data analysis require coding?</summary>
                  <p>
                    Not strictly day-to-day, but Python/R and SQL are very helpful when cleaning, analyzing, and visualizing data.
                  </p>
                </details>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Scroll-to-top button */}
      <a
        href="#"
        className={`cs-upArrowButton ${showScroll ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </a>
    </div>
  );
}
