import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../Css/App.css";
import bgVideo from "../Assets/cut1.mp4";
import logo from "../Assets/logo.png";
import youngPartnerImage from "../Assets/yp.jpg";
import familyBlessingImage from "../Assets/fbp.jpg";
import businessBlessingImage from "../Assets/bbp.jpg";
import demo1 from "../Assets/jbp.jpg";
import demo2 from "../Assets/tvc.jpg";
import pro1 from "../Assets/pro1.png";
import pro2 from "../Assets/pro2.jpeg";
import magazine1 from "../Assets/magazine1.png"; 
import magazine2 from "../Assets/magazine2.png";
import magazine3 from "../Assets/magazine3.png";
import magazine4 from "../Assets/magazine4.png";
import magazine5 from "../Assets/magazine5.png";
import magazine6 from "../Assets/magazine6.png";
import pdfIcon from "../Assets/pdf-icon.png";
import "../Css/Footer.css";
// import graphic from "../Assets/graphic.jpeg";  // Add a decorative graphic

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">About</li>
          <li className="nav-item" onClick={() => navigate("/blessing-plans")}>
            Blessing Plans
          </li>
          <li className="nav-item">Prayer Towers</li>
          <li className="nav-item">Job Opportunities</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Programs</li>
        </ul>
      </nav>
    </header>
  );
};

const magazines = [
  { imgSrc: magazine1, link: "/magazine1.pdf" },
  { imgSrc: magazine2, link: "/magazine2.pdf" },
  { imgSrc: magazine3, link: "/magazine3.pdf" },
  { imgSrc: magazine4, link: "/magazine4.pdf" },
  { imgSrc: magazine5, link: "/magazine5.pdf" },
  { imgSrc: magazine6, link: "/magazine6.pdf" },
];
const magazineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const App = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <Header />

      {/* Video Background Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <video autoPlay muted loop className="bg-video">
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Hero Content */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="hero-title"
        >
          PRAYING FOR THE WORLD
        </motion.h1>
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-subtitle"
        >
          JOIN HANDS IN BUILDING GOD'S KINGDOM
        </motion.p>
      </motion.div>

      {/* Call-to-action Section */}
      <motion.div
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.2 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cta-button"
        >
          Donate Now
        </motion.button>
      </motion.div>
      <motion.div
        className="promise-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <motion.div
          className="promise-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {/* Today's Promise */}
          <motion.div
            className="promise-card"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover effect
            initial={{ x: -100, opacity: 0 }} // Slide in from the left
            animate={{ x: 0, opacity: 1 }} // Animate to original position
            transition={{ delay: 0.2, duration: 0.6 }} // Delay for a smooth entrance
          >
            <h3>Today's Promise</h3>
            <motion.img
              src={pro1}
              alt="Today's Promise"
              className="promise-image"
              whileHover={{ scale: 1.1 }} // Slight zoom-in on hover for image
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            <motion.p
              className="promise-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.2 }}
            >
              When others fail you, trust that God remains your steadfast
              confidence, standing by you as you honor Him and live by His
              principles.
            </motion.p>
            <motion.div className="promise-actions">
              <motion.button
                className="action-button"
                whileHover={{ scale: 1.1 }} // Hover animation for button
                whileTap={{ scale: 0.95 }} // Button tap animation
                transition={{ duration: 0.3 }}
              >
                Read More & Watch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Monthly Promise */}
          <motion.div
            className="promise-card"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Hover effect
            initial={{ x: 100, opacity: 0 }} // Slide in from the right
            animate={{ x: 0, opacity: 1 }} // Animate to original position
            transition={{ delay: 0.4, duration: 0.6 }} // Delay for a smooth entrance
          >
            <h3>Monthly Promise</h3>
            <motion.img
              src={pro2}
              alt="Monthly Promise"
              className="promise-image"
              whileHover={{ scale: 1.1 }} // Slight zoom-in on hover for image
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            />
            <motion.p
              className="promise-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.2 }}
            >
              God is going to raise you up to great heights and display His
              power in your life so that His name might be glorified before all.
            </motion.p>
            <motion.div className="promise-actions">
              <motion.button
                className="action-button"
                whileHover={{ scale: 1.1 }} // Hover animation for button
                whileTap={{ scale: 0.95 }} // Button tap animation
                transition={{ duration: 0.3 }}
              >
                Read More & Watch
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Features Section (Blessing Plans in Motion) */}
      <motion.div
        className="features-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h2 style={{ color: "white" }}>Blessing Plans</h2>

        {/* Blessing Plans Carousel */}
        <motion.div
          className="features-grid"
          animate={{ x: ["100%", "0%", "-100%"] }} // Move from right (100%), through the screen (0%), to left (-100%)
          transition={{
            duration: 20, // Adjust duration as needed for speed
            ease: "linear",
            repeat: Infinity, // Infinite loop
            repeatType: "loop", // Loop indefinitely in a continuous cycle
          }}
        >
          {/* Blessing Plans */}
          <motion.div className="feature-box">
            <h3 className="para">Young Partner Plan</h3>
            <img
              src={youngPartnerImage}
              alt="Young Partner Plan"
              className="feature-image"
            />
            <p className="para">
              In the world today, each child and young person face great
              temptations and vicious allurements, which destroy their life. In
              order to protect them from all the evil influences, it is
              essential to keep them before the Lord in prayer till they enter
              into adulthood. So for this purpose, the Young Partners plan has
              been operated in Jesus Calls since 1985 for the protection and
              blessing of each child who is enrolled in this plan.
            </p>
          </motion.div>

          <motion.div className="feature-box">
            <h3 className="para">Family Blessing Plan</h3>
            <img
              src={familyBlessingImage}
              alt="Family Blessing Plan"
              className="feature-image"
            />
            <p className="para">
              Family Blessing Plan is an exceptional Plan given by the Lord to
              Dr. Paul Dhinakaran, for families to be blessed, to live in unity
              and to prosper. Prayers are offered in Jesus Calls Prayer Tower
              for the families who have subscribed to this Plan, to be blessed,
              to enjoy peace and for every member of the family to be in good
              health.
            </p>
          </motion.div>

          <motion.div className="feature-box">
            <h3 className="para">Business Blessing Plan</h3>
            <img
              src={businessBlessingImage}
              alt="Business Blessing Plan"
              className="feature-image"
            />
            <p className="para">
              Even as you enroll your shop, trade, business, or industry in this
              plan, the Almighty Lord will surely grant you and your business
              divine protection and prosperity. The Lord will teach you to be
              profitable and expand your business. If it’s a new enterprise that
              you invested in or an ongoing activity, trust the Lord, He will
              not let you face a loss.
            </p>
          </motion.div>

          {/* Demo Blessing Plans */}
          <motion.div className="feature-box">
            <h3 className="para">Job Blessing Plan</h3>
            <img src={demo1} alt="Demo Plan 1" className="feature-image" />
            <p className="para">
              Even as you come forward to bless others as a partner in this
              facet, the Almighty Lord who lifted up Joseph and who blessed his
              job and made him a ruler will surely grant you the suitable job
              and He will bless your employer, your office and your co-employees
              just for your sake.
            </p>
          </motion.div>

          <motion.div className="feature-box">
            <h3 className="para">Jesus Calls TV Club</h3>
            <img src={demo2} alt="Demo Plan 2" className="feature-image" />
            <p className="para">
              Priya's elder sister Jothi lived in Ashok Nagar, Chennai. Her
              husband Mr. Balaji worked abroad. Priya was very upset that even
              though Jothi had all the other blessings in her life she was not
              blessed with a child. So, Priya kept praying with a burden for her
              sister to be blessed with the gift of a child.{" "}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Updated Section for Upcoming Prayer Meetings */}
      <motion.div
        className="upcoming-prayer-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <div className="upcoming-title">
          <h2>Upcoming Prayer Meetings</h2>
          <motion.button
            className="view-all-button"
            whileHover={{ scale: 1.05, backgroundColor: "#ff6347" }}
            transition={{ duration: 0.3 }}
          >
            View all
          </motion.button>
        </div>
        <motion.div
          className="prayer-meetings"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, staggerChildren: 0.2 }}
        >
          <motion.div
            className="prayer-card"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="date-box">
              <h3>12</h3>
              <p>Oct '24</p>
              <p>Saturday</p>
            </div>
            <div className="meeting-info">
              <h4>Miracle Fasting Prayer</h4>
              <p>
                <strong>From:</strong> 12-10-24 - 10:00 AM
              </p>
              <p>
                <strong>To:</strong> 12-10-24 - 02:00 PM
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Vanagaram Prayer
                Tower, JC Garden, Chennai-600095
              </p>
            </div>
          </motion.div>

          <motion.div
            className="prayer-card"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="date-box">
              <h3>20</h3>
              <p>Oct '24</p>
              <p>Sunday</p>
            </div>
            <div className="meeting-info">
              <h4>Special Prayer Meet</h4>
              <p>
                <strong>From:</strong> 20-10-24 - 11:00 AM
              </p>
              <p>
                <strong>To:</strong> 20-10-24 - 01:00 PM
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> Egmore Prayer Tower,
                Chennai-600008
              </p>
            </div>
          </motion.div>

          {/* Add more cards as needed */}
        </motion.div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="testimonials-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h2>Testimonies</h2>
        <div className="testimonials-background">
          {/* <img src={graphic} alt="decorative graphic" className="testimonials-graphic" /> */}
        </div>
        <div className="testimonials-grid">
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="testimonial-box"
          >
            <p className="para">
              “I am a young partner in Jesus Calls Ministry. During my 11th and
              12th grades, I struggled to keep up with my academics and often
              contacted the Jesus Calls prayer helpline for support. In one
              conversation with a prayer intercessor, he mentioned that God
              would use me to comfort people and uplift the broken-hearted in
              the future.”
            </p>
            <span className="para">- Nisha Veronica, Chennai</span>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="testimonial-box"
          >
            <p className="para">
              “My husband's name is Dheeraj Singh. We got married four years
              ago, but we were unable to have a child. Despite consulting many
              doctors, no one could determine the cause or provide a cure. But
              we didn't give up and continued to pray and even visited the Jesus
              Calls National Prayer Tower. ”
            </p>
            <span className="para">- John Samuel, Bangalore</span>
          </motion.div>
        </div>
      </motion.div>
      {/* magazine section */}
      <motion.div
        className="magazine-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={magazineVariants}
      >
        <h2 className="magazine-title">eMagazine</h2>
        <motion.div className="magazine-grid">
          {magazines.map((mag, index) => (
            <motion.div
              key={index}
              className="magazine-item"
              variants={itemVariants}
            >
              <a
                href={mag.link}
                target="_blank"
                rel="noopener noreferrer"
                className="magazine-link"
              >
                <img
                  src={mag.imgSrc}
                  alt={`Magazine ${index + 1}`}
                  className="magazine-cover"
                />

                {/* <img src={pdfIcon} alt="PDF Icon" className="pdf-icon" />
            <span>Click to Read</span> */}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logo} alt="logo" className="logo-image" />
            <p>
              Jesus Calls is a global ministry founded by Late Brother D.G.S.
              Dhinakaran and led by Dr. Paul Dhinakaran. Jesus Calls serves to
              bring comfort and healing to the broken-hearted without
              distinction through prayer offered all 24/7 throughout the year.
            </p>
          </div>
          <div className="footer-right">
            <h2>Want to know more?</h2>
            <p>24*7 Prayers</p>
            <p>
              <strong>Phone:</strong> 8546999000
            </p>
            <p>
              <strong>For Queries, Call:</strong> 0442345677
            </p>
          </div>
          <div className="footer-right">
            <h2>Contact Details</h2>
            <p>
              <strong>Address:</strong> Jesus Calls, 16, Dr. D.G.S Dhinakaran
              Road, R.A.Puram, Chennai - 600 028.
            </p>
            <p>
              <strong>Email:</strong> admin@jesuscalls.org
            </p>
          </div>
        </div>
      </footer>
      {/* Footer Section */}
      {/* <footer className="footer">
        <p>© 2024 Jesus Calls Ministries. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default App;
