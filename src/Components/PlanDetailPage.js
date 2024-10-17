import React from "react";
import { useParams } from "react-router-dom";
import "../Css/Detail.css";
import "../Css/Footer.css";
import logo from "../Assets/logo.png";
import youngPartnerImage from "../Assets/yp.jpg";
import familyBlessingImage from "../Assets/fbp.jpg";
import businessBlessingImage from "../Assets/bbp.jpg";
import tvClubImage from "../Assets/tvc.jpg";
import jobBlessingImage from "../Assets/jbp.jpg";
import magazineMinistryImage from "../Assets/church.jpg";
const planDetails = [
  {
    id: 1,
    title: "Young Partner Plan",
    imageSrc: youngPartnerImage,
    content: `In the world today, each child and young person face great temptations and vicious allurements, which destroy their life. In order to protect them from all the evil influences, it is essential to keep them before the Lord in prayer till they enter into adulthood. So for this purpose, the Young Partners plan has been operated in Jesus Calls since 1985 for the protection and blessing of each child who is enrolled in this plan.

As a child is enrolled as a Young Partner with the Lord Jesus, prayer is offered once every day in the Prayer Tower daily till they attain 25 years or until they get married. The prayer is based on the prayer of Jabez found in 1 Chronicles 4:10: Protection, Prophetic wisdom, and Prosperity in life. 

`,
  },
  {
    id: 2,
    title: "Family Blessing Plan",
    imageSrc: familyBlessingImage,
    content: `Family Blessing Plan is an exceptional Plan given by the Lord to Dr. Paul Dhinakaran, for families to be blessed, to live in unity and to prosper. Prayers are offered in Jesus Calls Prayer Tower for the families who have subscribed to this Plan, to be blessed, to enjoy peace and for every member of the family to be in good health.

When God blesses, He adds no sorrow to it. What He establishes will be perfect in all dimensions. For God to sustain, protect, multiply, help and preserve your family, enroll in the Family Blessing plan. God will join hands with your family to bring upon you the blessings He promised Abraham and his household. The cords of love He ties you with cannot be broken and His Presence will hover around you and your loved ones ensuring His protection. You will enjoy the finest blessings and be fruitful.`,
  },
  {
    id: 3,
    title: "Business Blessing Plan",
    imageSrc: businessBlessingImage,
    content: `Even as you enroll your shop, trade, business, or industry in this plan, the Almighty Lord will surely grant you and your business divine protection and prosperity. The Lord will teach you to be profitable and expand your business. If it’s a new enterprise that you invested in or an ongoing activity, trust the Lord, He will not let you face a loss. For the Lord will restore everything to you in double measure, enable you to reap hundredfold blessings (Genesis 26:12), and will make you eat the fruits of your labor with peace and joy.`,
  },
  {
    id: 4,
    imageSrc: tvClubImage,
    title: "Jesus Calls TV Club",
    content: `Mrs. Priya Rajesh was worried about her elder sister Mrs. Jothi as she was not blessed with a child even after 13 years of marriage. Everyone in the family was so dejected that they even stopped celebrating special occasions together.

Priya resides in Tambaram, near Chennai and she was aware of the Jesus Calls Prayer Tower there. She also watched the Jesus Calls television programmes regularly and had sponsored many programmes as it was her habit to do so on her children’s birthdays.

Priya's elder sister Jothi lived in Ashok Nagar, Chennai. Her husband Mr. Balaji worked abroad. Priya was very upset that even though Jothi had all the other blessings in her life she was not blessed with a child. So, Priya kept praying with a burden for her sister to be blessed with the gift of a child. She also sponsored the Jesus Calls TV programme on behalf of her sister, in faith, believing for a miracle to happen soon. What a wonder!`,
  },
  {
    id: 5,
    imageSrc: jobBlessingImage,
    title: "Job Blessing Plan",
    content: `Even as you come forward to bless others as a partner in this facet, the Almighty Lord who lifted up Joseph and who blessed his job and made him a ruler will surely grant you the suitable job and He will bless your employer, your office and your co-employees just for your sake. The Lord will restore everything to you in double measure, enable you to reap hundredfold blessing (Genesis 26:12) and will make you eat the fruits of your labour with peace and joy. (Isaiah 65:22).`,
  },
  {
    id: 6,
    imageSrc: magazineMinistryImage,
    title: "Jesus Calls Magazine Ministry",
    content: `Since its inception in May 1973, Jesus Calls Magazine Ministry has been growing and is completing its 50th year, this May 2023 for God's glory. This magazine contains God’s word shared by the Dhinakarans for men, women, youth and children, with updates on ministerial events, astonishing testimonies, answers with Biblical perspective to questions on life issues and Bible Quiz. We reach more than 3 million people through the magazine ministry.`,
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
          <li className="nav-item">
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

const PlanDetailPage = () => {
  const { id } = useParams();
  const plan = planDetails.find((p) => p.id === parseInt(id));

  return (
    <div className="plan-detail-page">
      <Header />
      <h1>{plan.title}</h1>
      <img src={plan.imageSrc} alt={plan.title} className="plan-detail-image" />
      <p>{plan.content}</p>
      {/* Here you can add the additional paragraph after the image */}
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
    </div>
  );
};

export default PlanDetailPage;
