function Contact() {

    return(
    <div className="main">
    <section id="contact">
    <div className="contact-heading textenter" id="contact-heading">
      <span>
        <i className="far fa-address-card" />
      </span>
      <span>
        <h2>Contact Me</h2>
      </span>
    </div>
    <div id="contact-container">
      <div id="contact-form-container">
        <form id="contact-form" method="POST" name="google-sheet">
          <input
            id="input-name"
            name="name"
            type="text"
            placeholder="Your Name"
          />
          <input
            id="input-email"
            name="email"
            type="text"
            required=""
            placeholder="Your Email"
          />
          <textarea
            id="input-message"
            name="message"
            rows={2}
            cols={40}
            placeholder="Message"
            defaultValue={""}
          />
          <input
            id="input-page"
            name="page"
            type="text"
            defaultValue="Main"
            style={{ display: "none" }}
          />
          <button className="sub-btn" type="button" onClick="sendmail()">
            SEND MESSAGE
          </button>
        </form>
      </div>
      <div id="my-details-container">
        <h3> Get In touch </h3>
        <div className="my-details-info-container">
          <i className="fas fa-map-marker-alt" />
          <span>Vasai Virar, India</span>
        </div>
        <div className="my-details-info-container">
          <i className="fas fa-mobile-alt" />
          <span>7900108153</span>
        </div>
        <div className="my-details-info-container">
          <i className="far fa-envelope" />
          <span className="flexy">vinaydagodra28@gmail.com</span>
        </div>
      </div>
    </div>
    <div className="textcenter">
      <ul className="horizontal-list textcenter social-icons bottom-social">
        <li>
          <a
            href="https://www.linkedin.com/in/vinay-dangodra-4420461ba"
            target="_blank"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/_vinay_dangodra?igshid=3fo8xbifm76y"
            target="_blank"
          >
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <a href="mailto:vinaydangodra28@gmail.com" target="_blank">
            <i className="far fa-envelope" />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=+917900108153&text=&app_absent=0"
            target="_blank"
          >
            <i className="fab fa-whatsapp" />
          </a>
        </li>
        <li>
          <a href="https://github.com/VinayDangodra28" target="_blank">
            <i className="fab fa-github" />
          </a>
        </li>
      </ul>
    </div>
  </section>
  </div>
      );
  }
  export default Contact;