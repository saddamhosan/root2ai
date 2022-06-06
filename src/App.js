import { BsInstagram, BsQuestionCircleFill } from "react-icons/bs";
import { FaFacebookF, FaHome, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import './App.css';

function App() {
  return (
    <div>
      {/* ----header Start---- */}
      <header>
        <div className="headerContact">
          <p className="icons">
            <span className="headerIcon">
              <IoIosCall style={{ marginTop: "5px" }} />
            </span>
            <span>+880 1883370000 /</span>
          </p>
          <p className="icons">
            <span className="headerIcon">
              <FaWhatsapp style={{ marginTop: "5px" }} />
            </span>
            <span>+880 1883370000 |</span>
          </p>{" "}
          <p className="icons">
            <span className="headerIcon">
              <MdOutlineMailOutline style={{ marginTop: "5px" }} />
            </span>
            <span>Email:contact.saddamhosan@gmail.com</span>
          </p>
        </div>
        <div className="headerContact">
          <p className="icons" style={{ marginRight: "30px" }}>
            <span className="headerIcon">
              <BsQuestionCircleFill style={{ marginTop: "5px" }} />
            </span>
            <span>Have any question?</span>
          </p>
          <p className="headerSocial">
            <p>
              <FaFacebookF />
            </p>{" "}
            <p className="headerIcon">
              <BsInstagram />
            </p>{" "}
            <p className="headerIcon">
              <FaLinkedinIn />
            </p>
          </p>
        </div>
      </header>
      <section className="logo">
        <h1>LOGO</h1>
      </section>
      {/* ----header End---- */}
      {/* ----Menu Start---- */}
      <section className="menu">
        <div>
          <FaHome />
        </div>
        <div>Menu 1</div>
        <div>Menu 2</div>
        <div>Menu 3</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
      {/* ----header End---- */}
      {/* ----Project section Start---- */}
      <section>
        <div className="projectReport">
          <h1>Project Report</h1>
          <p>
            <span className="link">Home ></span> Project Report
          </p>
        </div>
        <p className="text">Text.....</p>
      </section>
      {/* ----Project section end---- */}
      {/* ----Footer Start---- */}
      <footer>
        <div className="contact">
          <p className="icons">
            <span className="footerIcon">
              <HiOutlineMail className="footerIcon" />
            </span>{" "}
            <span>contact.saddamhosan@gmail.com</span>
          </p>
          <p className="icons">
            <span className="footerIcon">
              <IoIosCall />
            </span>
            <span>+880 1883370000</span> /
            <span className="footerIcon">
              <FaWhatsapp />
            </span>
            <span>+880 1883370000</span>
          </p>
          <p className="icons">
            <span className="footerIcon">
              <FaFacebookF />
            </span>{" "}
            <span className="footerIcon">
              <BsInstagram />
            </span>{" "}
            <span className="footerIcon">
              <FaLinkedinIn />
            </span>
          </p>
        </div>
        <p className="copy">
          <small>Copyright &#169;2022</small>
        </p>
      </footer>
      {/* ----Footer End---- */}
    </div>
  );
}

export default App;
