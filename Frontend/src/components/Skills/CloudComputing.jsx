import React from 'react';
import './CloudComputing.css'; // We'll keep your CSS separate
import { NavLink } from "react-router-dom";

const CloudComputing = () => {
  return (
    <div>
      {/* First SubPage */}
      <div id="firstCCSubPage">
        <div>
         <NavLink to="/">
      <img src="/Images/RgLogo.png" alt="Logo" width={70} className="ms-3 mt-4" />
    </NavLink>
          <p className="display-4 ps-5 pt-4">What is cloud computing ?</p>
          <p style={{ paddingLeft: 70 }}>A beginner’s guide</p>
          <br />
          <input type="button" value="Register" />
        </div>
      </div>

      {/* Second SubPage */}
      <div className="container-fluid my-3 mt-0 justify-content-center">
        <div className="row">
          {/* Left navigation */}
          <div className="col-3 me-5 mt-0 pe-0 firstHalf">
            <div className="flex-container">
              <div id="verticle_line"></div>
              <div id="links">
                <a href="#Q1">Overview</a>
                <br />
                <br />
                <a href="#Q2">Architecture of cloud computing</a>
                <br />
                <br />
                <a href="#Q3">Types of Cloud computing</a>
                <br />
                <br />
                <a href="#Q4">Cloud computing Services</a>
                <br />
                <br />
                <a href="#Q5">Benefits of Cloud computing</a>
                <br />
                <br />
                <a href="#Q6">Origin of Cloud computing</a>
                <br />
                <br />
                <a href="#Q7">Resources </a>
                <br />
                <br />
                <a href="#Q8">Frequently asked questions </a>
                <br />
                <br />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div id="information" className="secondHalf col-8">
            {/* Q1 */}
            <section id="Q1">
              <h3>What Is Cloud Computing ?</h3>
              <br />
              <p>
                Cloud computing refers to the use of hosted services, such as data storage, servers, databases,
                networking, and software over the internet. The data is stored on physical servers, which are
                maintained by a cloud service provider. Computer system resources, especially data storage and
                computing power, are available on-demand, without direct management by the user in cloud
                computing.
              </p>
              <p>
                Cloud computing plays a pivotal role in our everyday lives, whether accessing a cloud application
                like Google Gmail, streaming a movie on Netflix or playing a cloud-hosted video game.
              </p>
              <p>
                Cloud computing has also become indispensable in business settings, from small startups to global
                enterprises. Its many business applications include enabling remote work by making data and
                applications accessible from anywhere, creating the framework for seamless omnichannel customer
                engagement and providing the vast computing power and other resources needed to take advantage of
                cutting-edge technologies like generative AI and quantum computing.
              </p>
              <p>
                A cloud services provider (CSP) manages cloud-based technology services hosted at a remote data
                center and typically makes these resources available for a pay-as-you-go or monthly subscription
                fee.
              </p>
            </section>

            {/* Q2 */}
            <section id="Q2">
              <h3>Architecture of cloud computing</h3>
              <img
                src="/Images/Cloud_Computing_images/cloudArchitecutre2.png"
                alt="Cloud Architecture"
                className="img-fluid"
              />
              <br />
              <p>
                Instead of storing files on a storage device or hard drive, a user can save them on cloud, making
                it possible to access the files from anywhere, as long as they have access to the web. The services
                hosted on cloud can be broadly divided into infrastructure-as-a-service (IaaS),
                platform-as-a-service (PaaS), and software-as-a-service (SaaS). Based on the deployment model, cloud
                can also be classified as public, private, and hybrid cloud.
              </p>
              <p>
                Further, cloud can be divided into two different layers, namely, front-end and back-end. The layer
                with which users interact is called the front-end layer. This layer enables a user to access the
                data that has been stored in cloud through cloud computing software.
              </p>
              <p>
                The layer made up of software and hardware, i.e., the computers, servers, central servers, and
                databases, is the back-end layer. This layer is the primary component of cloud and is entirely
                responsible for storing information securely. To ensure seamless connectivity between devices
                linked via cloud computing, the central servers use a software called middleware that acts as a
                bridge between the database and applications.
              </p>
            </section>

            {/* Q3 */}
            <section id="Q3">
              <h3>Types of Cloud Computing</h3>
              <br />
              <p>
                Cloud computing can either be classified based on the deployment model or the type of service. Based
                on the specific deployment model, we can classify cloud as public, private, and hybrid cloud. At the
                same time, it can be classified as infrastructure-as-a-service (IaaS), platform-as-a-service (PaaS),
                and software-as-a-service (SaaS) based on the service the cloud model offers.
              </p>
              <img
                src="/Images/Cloud_Computing_images/typesOfCloud2.png"
                alt="Types of Cloud"
                className="img-fluid"
              />
              <p>
                <b>Private Cloud</b>
                <br />
                In a private cloud, the computing services are offered over a private IT network for the dedicated
                use of a single organization. Also termed internal, enterprise, or corporate cloud, a private cloud
                is usually managed via internal resources and is not accessible to anyone outside the organization.
                Private cloud computing provides all the benefits of a public cloud, such as self-service,
                scalability, and elasticity, along with additional control, security, and customization.
              </p>
              <p>
                <b>Public Cloud</b>
                <br />
                Public cloud refers to computing services offered by third-party providers over the internet. Unlike
                private cloud, the services on public cloud are available to anyone who wants to use or purchase
                them. These services could be free or sold on-demand, where users only have to pay per usage for the
                CPU cycles, storage, or bandwidth they consume.
              </p>
              <p>
                <b>Hybrid Cloud</b>
                <br />
                Hybrid cloud uses a combination of public and private cloud features. The “best of both worlds”
                cloud model allows a shift of workloads between private and public clouds as the computing and cost
                requirements change. When the demand for computing and processing fluctuates, hybrid cloud allows
                businesses to scale their on-premises infrastructure up to the public cloud to handle the overflow
                while ensuring that no third-party data centers have access to their data.
              </p>
            </section>

            {/* Q4 */}
            <section id="Q4">
              <h3>Cloud Computing Services</h3>
              <br />
              <p>
                IaaS (Infrastructure-as-a-Service), PaaS (Platform-as-a-Service), SaaS (Software-as-a-Service) and
                serverless computing are the most common models of cloud services, and it’s not uncommon for an
                organization to use some combination of all four.
              </p>

              {/* IaaS */}
              <div className="container-fluid">
                <div className="row services">
                  <div className="col-3 image">
                    <img
                      src="/Images/Cloud_Computing_images/IaaSImage.png"
                      alt="IaaS"
                      className="img-fluid mt-5"
                    />
                  </div>
                  <div className="col-9">
                    <b>IaaS (Infrastructure-as-a-Service)</b>
                    <br />
                    IaaS (Infrastructure-as-a-Service) provides on-demand access to fundamental computing
                    resources—physical and virtual servers, networking and storage—over the internet on a
                    pay-as-you-go basis. IaaS enables end users to scale and shrink resources on an as-needed
                    basis, reducing the need for high up-front capital expenditures or unnecessary on-premises or
                    "owned" infrastructure and for overbuying resources to accommodate periodic spikes in usage.
                    <br />
                    <br />
                  </div>
                </div>
              </div>

              {/* PaaS */}
              <div className="container-fluid">
                <div className="row services">
                  <div className="col-3 image">
                    <img
                      src="/Images/Cloud_Computing_images/PaaSImage.png"
                      alt="PaaS"
                      className="img-fluid mt-5"
                    />
                  </div>
                  <div className="col-9">
                    <b>PaaS (Platform-as-a-Service)</b>
                    <br />
                    PaaS (Platform-as-a-Service) provides software developers with an on-demand platform—hardware,
                    complete software stack, infrastructure and development tools—for running, developing and
                    managing applications without the cost, complexity and inflexibility of maintaining that
                    platform on-premises. With PaaS, the cloud provider hosts everything at their data center.
                    <br />
                    <br />
                  </div>
                </div>
              </div>

              {/* SaaS */}
              <div className="container-fluid">
                <div className="row services">
                  <div className="col-3 image">
                    <img
                      src="/Images/Cloud_Computing_images/SaaSImage.png"
                      alt="SaaS"
                      className="img-fluid mt-5"
                    />
                  </div>
                  <div className="col-9">
                    <b>SaaS (Software-as-a-Service)</b>
                    <br />
                    SaaS (Software-as-a-Service), also known as cloud-based software or cloud applications, is
                    application software hosted in the cloud. Users access SaaS through a web browser, a dedicated
                    desktop client or an API that integrates with a desktop or mobile operating system. Cloud
                    service providers offer SaaS based on a monthly or annual subscription fee. They may also
                    provide these services through pay-per-usage pricing.
                    <br />
                  </div>
                </div>
              </div>
            </section>

            {/* Q5 */}
            <section id="Q5">
              <h3>Benefits of cloud computing</h3>
              <br />
              <p>
                Compared to traditional on-premises IT that involves a company owning and maintaining physical data
                centers and servers to access computing power, data storage and other resources (and depending on
                the cloud services you select), cloud computing offers many benefits, including the following:
              </p>
              <p>
                <b>Cost-effectiveness</b>
                <br />
                Cloud computing lets you offload some or all of the expense and effort of purchasing, installing,
                configuring and managing mainframe computers and other on-premises infrastructure. You pay only
                for cloud-based infrastructure and other computing resources as you use them.
                <br />
                <br />
                <b>Increased speed and agility</b>
                <br />
                With cloud computing, your organization can use enterprise applications in minutes instead of
                waiting weeks or months for IT to respond to a request, purchase and configure supporting hardware
                and install software. This feature empowers users—specifically DevOps and other development teams—
                to help leverage cloud-based software and support infrastructure.
                <br />
                <br />
                <b>Enhanced strategic value</b>
                <br />
                Cloud computing enables organizations to use various technologies and the most up-to-date
                innovations to gain a competitive edge. For instance, in retail, banking and other customer-facing
                industries, generative AI-powered virtual assistants deployed over the cloud can deliver better
                customer response time and free up teams to focus on higher-level work.
                <br />
              </p>
            </section>

            {/* Q6 */}
            <section id="Q6">
              <h3>Origins of cloud computing</h3>
              <p>
                The origins of cloud computing technology go back to the early 1960s when Dr. Joseph Carl Robnett
                Licklider, an American computer scientist and psychologist known as the "father of cloud computing",
                introduced the earliest ideas of global networking in a series of memos discussing an Intergalactic
                Computer Network. However, it wasn’t until the early 2000s that modern cloud infrastructure for
                business emerged.
                <br />
                <br />
                In 2002, Amazon Web Services started cloud-based storage and computing services. In 2006, it
                introduced Elastic Compute Cloud (EC2), an offering that allowed users to rent virtual computers to
                run their applications. That same year, Google introduced the Google Apps suite (now called Google
                Workspace), a collection of SaaS productivity applications. In 2009, Microsoft started its first SaaS
                application, Microsoft Office 2011. Today, Gartner predicts worldwide end-user spending on the
                public cloud will total USD 679 billion and is projected to exceed USD 1 trillion in 2027.
              </p>
            </section>
</div>
            {/* Q7 */}
<a name="Q7">
    <div>
        <h3 className="text-center">Resources</h3> <br />

<table>
  <tr>
    <td>
      <div className="relatedTopics">
        <p>Related topic</p>
        <h5>What is hybrid cloud ?</h5>
        <p>
          Hybrid cloud combines and unifies public cloud, private cloud, and on-premises
          infrastructure to create a single, flexible, cost-optimal IT infrastructure.
        </p>
        <a href="https://www.ibm.com/topics/hybrid-cloud">read more &#x2192;</a>
      </div>
    </td>
    <td>
      <div className="relatedTopics">
        <p>Related topic</p>
        <h5>What is DevOps ?</h5>
        <p>
          DevOps accelerates delivery of higher quality software by combining and automating
          the work of software development and IT operations teams.
        </p>
        <a href="https://www.ibm.com/topics/devops">read more &#x2192;</a>
      </div>
    </td>
    <td>
      <div className="relatedTopics">
        <p>Related topic</p>
        <h5>What is cloud migration ?</h5>
        <p>
          Cloud migration is the process of moving data, applications and workloads from an
          on-premises data center to a cloud-based infrastructure, or from one cloud
          environment to another, known as cloud-to-cloud migration.
        </p>
        <a href="https://www.ibm.com/topics/cloud-migration">read more &#x2192;</a>
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div className="relatedTopics">
        <p>Related topic</p>
        <h5>Cloud computing fundamentals ?</h5>
        <p>
          In the past decade, information technology (IT) has embarked on the cloud computing
          paradigm. Although cloud computing is only a different way to deliver computer
          resources, rather than a new technology.
        </p>
        <a href="https://developer.ibm.com/articles/cl-cloudintro/">read more &#x2192;</a>
      </div>
    </td>
    <td>
      <div className="relatedTopics">
        <p>Related topic</p>
        <h5>Public cloud vs. private cloud vs. hybrid cloud:</h5>
        <p>
          Private cloud, public cloud and hybrid cloud models all use a mix of the following
          technologies: <br /> Virtualization <br />Management software <br />Automation
        </p>
        <a href="https://www.ibm.com/blog/public-cloud-vs-private-cloud-vs-hybrid-cloud/">read
          more &#x2192;</a>
      </div>
    </td>
    <td>
      <div className="relatedTopics">
        <p>Related topic</p>
        <h5>Hybrid Cloud Architecture</h5>
        <p>
          In this intro video, our guide, Sai Vennam, lays out the three major hybrid cloud
          architecture issues that we're going to cover: Connectivity, Modernization, and Security.
        </p>
        <a href="https://www.youtube.com/watch?v=h_WE-ZFDZJQ">read more &#x2192;</a>
      </div>
    </td>
  </tr>
</table>

    </div>
</a>


            {/* Q8 */}
            <section id="Q8">
              <div id="FrequentlyAskedQuestion">
                <p className="h3">Frequently Asked Questions </p>
                <div>
                  <hr />
                  <details>
                    <summary>What is cloud ?</summary>
                    <br />
                    The cloud is an extensive network of remote servers around the world. These servers store and
                    manage data, run applications, and deliver content and services like streaming videos, web mail,
                    and office productivity software over the internet. Storing your files and data in the cloud frees
                    you from relying on local computers and servers. Instead, you can access your data online from
                    any internet-capable device, whenever and wherever you want.
                    <br />
                  </details>
                </div>
                <div>
                  <hr />
                  <details>
                    <summary>What is Multicloud computing ?</summary>
                    <br />
                    Multicloud computing entails using multiple cloud computing services from more than one cloud
                    provider for the same type of IT solutions or workloads. A multicloud strategy—which may include
                    both private and public clouds—helps organizations mitigate risk and offers them increased
                    workload flexibility. Choosing different offerings and capabilities from more than one cloud
                    provider enables organizations to
                    build solutions that are best suited to their specific IT needs.
                    <br />
                  </details>
                </div>
                <div>
                  <hr />
                  <details>
                    <summary>What skills are required for cloud computing ?</summary>
                    <br />
                    In general, cloud computing does not require technical IT experience. Cloud computing simply
                    refers to the delivery of computing services over the internet, including storage, databases,
                    software, and analytics. Whether you have a basic understanding of computing concepts and
                    terminology or are a more technical worker, you can apply the on-premises computing knowledge and
                    skills you currently have to the cloud.
                    <br />
                  </details>
                </div>
                <div>
                  <hr />
                  <details>
                    <summary>How much does cloud computing cost ?</summary>
                    <br />
                    Cloud providers typically employ a pay-as-you-go pricing model, which means that organizations
                    only pay for the cloud services that they use. This helps companies reduce their operating costs,
                    run their infrastructure more efficiently, and scale their cloud computing costs up or down
                    according to changing business needs. For example, Azure offers pay-as-you-go pricing with no
                    upfront commitment and free services that include popular services free for 12 months and 55+
                    other services free always.
                    <br />
                  </details>
                  <hr />
                </div>
              </div>
            </section>
          </div>
        </div>
      
    </div>
  );
};

export default CloudComputing;
