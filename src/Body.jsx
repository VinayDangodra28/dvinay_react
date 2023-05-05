import React, { useEffect } from "react";
import { Link } from "react-router-dom";


function Body() {

  function myFunction() {
    var nav_h = document.getElementById("nav-h")
    nav_h.classList.toggle("open");
    nav_h.classList.remove('close');
  }
  
  // Closing the dropdown if the user clicks outside of it
  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = () => {
    var nav_h = document.getElementById("nav-h");
    nav_h.classList.add("close");
  }
    return (
        <>
  <div className="nav-button">
    <button onClick={myFunction}>
      <img src={require('./images/lines.jpeg')} alt="" id="nav-button" />
    </button>
  </div>
  <div className="main">
    <header id="body-header">
      <section id="navigation" className="textcenter">
        <div id="name-social-container">
          <div className="textcenter">
            <h1 id="my-name">
              <a
                className="nodec white name-head"
                href="https://www.google.com/search?q=vinay+dangodra&source=hp&ei=zn6aYKm6KYye9QOduarABw&iflsig=AINFCbYAAAAAYJqM3uaoxnGnXRT2cL_OgvhETLyt6YUg&oq=vinay+dangodra&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgAToICAAQ6gIQjwE6AggAOgUIABCxAzoFCC4QsQM6CwguELEDEMcBEKMCOggIABCxAxCDAToICC4QsQMQgwE6CwguELEDEIMBEJMCOgIILjoICC4QxwEQrwE6BQguEJMCOgQIABAKOgQIABANOggIABANEAUQHjoICAAQCBANEB46BggAEBYQHjoICAAQFhAKEB46AggmOgYIABANEB46CggAEAgQDRAKEB46BwghEAoQoAFQ3gxY7JIBYOiwAWgIcAB4A4ABjhqIAeTiAZIBCzUtMi42LjkuNC4ymAEAoAEBqgEHZ3dzLXdperABCg&sclient=gws-wiz&ved=0ahUKEwip2bTL1sHwAhUMT30KHZ2cCngQ4dUDCAY&uact=5"
              >
                &lt;Vinay Dangodra&gt;
              </a>
            </h1>
          </div>
        </div>
      </section>
    </header>
    {/*about starts here*/}
    
    <section id="about" className="text-center">
      <div className="my-image">
        <a href={require('./images/me.jpg')} className="nodec">
          <img src={require('./images/me.jpg')} alt="" className="my-photo" />
        </a>
      </div>
      <div className="about-text">
        <p>
          I'm a BCA student at{" "}
          <a
            href="https://www.ksil.org.in/"
            target="_blank"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Kirandevi Saraf Institute of complete learning
          </a>
          . I'm a beginner web developer hunting for work experience and
          knowledge. I can make static websites as well as dynamic websites but
          I still have to learn databse. I know to use windows and linux
          properly. I also can manage social media and do video editing.
        </p>
      </div>
    </section>
    {/*skills section starts*/}
    <section id="skills" className="text-center">
      <div className="section-heading">
        <span>
          <i className="fas fa-chalkboard-teacher" />
        </span>
        <span>
          <h2>SKILLS</h2>
        </span>
      </div>
      <div className="skills-show">
        <div className="skill">
          <div className="python progresss">
            <span>Python</span>
          </div>
        </div>
        <div className="skill">
          <div className="c progresss">
            <span>C</span>
          </div>
        </div>
        <div className="skill">
          <div className="flask progresss">
            <span>Flask</span>
          </div>
        </div>
        <div className="skill">
          <div className="mysql progresss">
            <span>MySQL</span>
          </div>
        </div>
        <div className="skill">
          <div className="numpy progresss">
            <span>Numpy</span>
          </div>
        </div>
        <div className="skill">
          <div className="pandas progresss">
            <span>Pandas</span>
          </div>
        </div>
        <div className="skill">
          <div className="matplotlib progresss">
            <span>Matplotlib</span>
          </div>
        </div>
        {/* <div class="skill">
              <div class="sklearn progresss">
                  <span>Scikitlearn</span>
              </div>
          </div>
          <div class="skill">
              <div class="tensorflow progresss">
                  <span>Tenserflow</span>
              </div>
          </div> */}
        <div className="skill">
          <div className="html progresss">
            <span>HTML</span>
          </div>
        </div>
        <div className="skill">
          <div className="css progresss">
            <span>CSS</span>
          </div>
        </div>
        <div className="skill">
          <div className="javascript progresss">
            <span>JavaScript</span>
          </div>
        </div>
        <div className="skill">
          <div className="git progresss">
            <span>Git&amp;Github</span>
          </div>
        </div>
      </div>
    </section>
    {/*work experience section starts here*/}
    {/* education starts here */}
    <section id="education" className="text-center">
      <div className="section-heading">
        <span>
          <i className="fas fa-graduation-cap" />
        </span>
        <span>
          <h2>EDUCATION</h2>
        </span>
      </div>
      <div className="timeline">
        <div className="timeline-box">
          <div className="box-heading">
            <div className="box-hhh">
              <div className="box-h">SSC</div>
              <div className="box-company-name">
                Infant Jesus School
                <br />
                ~Maharashtra Board
              </div>
              <div className="box-date">2018-2019</div>
            </div>
          </div>
        </div>
        <div className="timeline-box">
          <div className="box-heading">
            <div className="box-hhh">
              <div className="box-h">HSC -commerce</div>
              <div className="box-company-name">
                BSGD Junior college
                <br />
                ~Maharashtra Board
              </div>
              <div className="box-date">2020-2021</div>
            </div>
          </div>
        </div>
        <div className="timeline-box">
          <div className="box-heading">
            <div className="box-hhh">
              <div className="box-h">BCA -Bachelor in computer application</div>
              <div className="box-company-name">
                Kirandevi Saraf Institute of complete learning <br />
                ~Tilak Maharashtra Vidyapeeth
              </div>
              <div className="box-date">2021-2024</div>
            </div>
          </div>
        </div>
        <div className="timeline-divider">
          <div className="timeline-traveller">
            <i className="fas fa-car-side" />
          </div>
        </div>
      </div>
    </section>
    {/*certificate section starts here*/}
    <section id="certificates" className="certificates">
      <div className="section-heading textenter certificate-font">
        <span>
          <i className="fas fa-th-list" />
        </span>
        <span>
          <h2>Certificates</h2>
        </span>
      </div>
      <div className="portfolio-container">
        <div className="cert-box cert-1">
          <div className="cert-main">
            HTML certificate
            <br />
            -from Sololearn
            <a href={require('./images/HTML_certificate.jpg')}>
              <img
                src={require('./images/HTML_certificate.jpg')}
                className="certificate-img"
              />
            </a>
          </div>
        </div>
        <div className="cert-box cert-1">
          <div className="cert-main">
            Python certificate
            <br />
            -from Sololearn
            <a href={require('./images/HTML_certificate.jpg')}>
              <img
                src={require('./images/Python_certificate.png')}
                className="certificate-img"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Section projects starts here */}
    <section id="projects" className="projects">
      <div className="section-heading textenter certificate-font">
        <span>
          <i className="fas fa-th-list" />
        </span>
        <span>
          <h2>
            <Link to="./projects" style={{ textDecoration: "none" }}>
              Projects
            </Link>
          </h2>
        </span>
      </div>
      <div className="portfolio-container">
        <div className="cert-box cert-1">
          <div className="cert-main">
            Compound Interest Calculator
            <br />
            -Python Flask
            <Link to="/projects/1">
              <img src={require('./images/project_1.png')} className="certificate-img" />
            </Link>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</>

    );
}

export default Body;