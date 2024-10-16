import React from 'react';
import { useParams } from 'react-router-dom';
import '../Detail.css'; // Import CSS for styling
import youngPartnerImage from '../Assets/yp.jpg';
import familyBlessingImage from '../Assets/fbp.jpg';
import businessBlessingImage from '../Assets/bbp.jpg';
import tvClubImage from '../Assets/tvc.jpg';
import jobBlessingImage from '../Assets/jbp.jpg';
import magazineMinistryImage from '../Assets/church.jpg';
const planDetails = [
  {
    id: 1,
    title: 'Young Partner Plan',
    imageSrc: youngPartnerImage, // Reference the correct image
    content: `In the world today, each child and young person face great temptations and vicious allurements, which destroy their life. In order to protect them from all the evil influences, it is essential to keep them before the Lord in prayer till they enter into adulthood. So for this purpose, the Young Partners plan has been operated in Jesus Calls since 1985 for the protection and blessing of each child who is enrolled in this plan.

As a child is enrolled as a Young Partner with the Lord Jesus, prayer is offered once every day in the Prayer Tower daily till they attain 25 years or until they get married. The prayer is based on the prayer of Jabez found in 1 Chronicles 4:10: Protection, Prophetic wisdom, and Prosperity in life. 

`,
  },
  {
    id: 2,
    title: 'Family Blessing Plan',
    imageSrc: familyBlessingImage,
    content: `Family Blessing Plan is an exceptional Plan given by the Lord to Dr. Paul Dhinakaran, for families to be blessed, to live in unity and to prosper. Prayers are offered in Jesus Calls Prayer Tower for the families who have subscribed to this Plan, to be blessed, to enjoy peace and for every member of the family to be in good health.

When God blesses, He adds no sorrow to it. What He establishes will be perfect in all dimensions. For God to sustain, protect, multiply, help and preserve your family, enroll in the Family Blessing plan. God will join hands with your family to bring upon you the blessings He promised Abraham and his household. The cords of love He ties you with cannot be broken and His Presence will hover around you and your loved ones ensuring His protection. You will enjoy the finest blessings and be fruitful.`,
  },
  {
    id: 3,
    title: 'Business Blessing Plan',
    imageSrc: businessBlessingImage,
    content: `Even as you enroll your shop, trade, business, or industry in this plan, the Almighty Lord will surely grant you and your business divine protection and prosperity. The Lord will teach you to be profitable and expand your business. If it’s a new enterprise that you invested in or an ongoing activity, trust the Lord, He will not let you face a loss. For the Lord will restore everything to you in double measure, enable you to reap hundredfold blessings (Genesis 26:12), and will make you eat the fruits of your labor with peace and joy.`
  }
  // Add details for other plans similarly
];

const PlanDetailPage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const plan = planDetails.find((p) => p.id === parseInt(id));

  return (
    <div className="plan-detail-page">
      <h1>{plan.title}</h1>
      <img src={plan.imageSrc} alt={plan.title} className="plan-detail-image" />
      <p>{plan.content}</p>
      {/* Here you can add the additional paragraph after the image */}
    </div>
  );
};

export default PlanDetailPage;
