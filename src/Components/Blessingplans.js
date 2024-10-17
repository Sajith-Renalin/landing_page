import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../Css/Styl.css";
import youngPartnerImage from "../Assets/yp.jpg";
import familyBlessingImage from "../Assets/fbp.jpg";
import businessBlessingImage from "../Assets/bbp.jpg";
import tvClubImage from "../Assets/tvc.jpg";
import jobBlessingImage from "../Assets/jbp.jpg";
import magazineMinistryImage from "../Assets/church.jpg";
import logo from "../Assets/logo.png";

const plans = [
  {
    id: 1,
    imageSrc: youngPartnerImage,
    title: "Young Partner Plan",
    description: `The Young Partners Plan (YPP) is a God-given plan with a specific mission in heart. This plan was instituted on the 25th July 1985 with the sole purpose of reaching out to young people all over the world...`,
  },
  {
    id: 2,
    imageSrc: familyBlessingImage,
    title: "Family Blessing Plan",
    description: `Family Blessing Plan is an exceptional Plan given by the Lord to Dr. Paul Dhinakaran, for families to be blessed, to live in unity and to prosper...`,
  },
  {
    id: 3,
    imageSrc: businessBlessingImage,
    title: "Business Blessing Plan",
    description: `Multiply Your Blessings with Jesus Calls Business Blessing Plan! Enroll your business, shop, or industry to receive divine protection...`,
  },
  {
    id: 4,
    imageSrc: tvClubImage,
    title: "Jesus Calls TV Club",
    description: `Join the Jesus Calls TV Club today! Your contributions support the television ministry, reaching millions...`,
  },
  {
    id: 5,
    imageSrc: jobBlessingImage,
    title: "Job Blessing Plan",
    description: `Join the Job Blessing Plan to shine in your career, lead a successful life with a suitable job placement, career advancement...`,
  },
  {
    id: 6,
    imageSrc: magazineMinistryImage,
    title: "Jesus Calls Magazine Ministry",
    description: `Join hands with Jesus Calls Magazine Ministry! For 50 years, we've shared God's truth, testimonies, and answers to life's questions...`,
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">About</li>
          <li className="nav-item">Blessing Plans</li>
          <li className="nav-item">Prayer Towers</li>
          <li className="nav-item">Job Opportunities</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Programs</li>
        </ul>
      </nav>
    </header>
  );
};

// PlanCard component to display each plan
const PlanCard = ({ id, imageSrc, title, description }) => {
  return (
    <div className="plan-card">
      <img src={imageSrc} alt={title} className="plan-image" />
      <div className="plan-details">
        <h3 className="plan-title">{title}</h3>
        <p className="plan-description">{description}</p>
        <Link to={`/plan/${id}`}>
          <button className="read-more-button">Read More</button>
        </Link>
      </div>

      <motion.button
        className="navigate-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Back
      </motion.button>
    </div>
  );
};

// PlansList component to render all the plans
const PlansList = () => {
  return (
    <div className="plans-list">
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          id={plan.id}
          imageSrc={plan.imageSrc}
          title={plan.title}
          description={plan.description}
        />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="logo" className="logo-image" />
          <p>
            Jesus Calls is a global ministry founded by Late Brother D.G.S.
            Dhinakaran and led by Dr. Paul Dhinakaran. Jesus Calls serves to
            bring comfort and healing to the broken-hearted without distinction
            through prayer offered all 24/7 throughout the year.
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
  );
};
// Main component for the LogoDetailsPage
const LogoDetailsPage = () => {
  return (
    <div className="app">
      <Header />
      <PlansList />
      <Footer />
    </div>
  );
};

export default LogoDetailsPage;
