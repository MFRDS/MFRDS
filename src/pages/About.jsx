import React from 'react';
import BulletList from '../components/BulletList';

const AboutPage = ({ setCurrentPage }) => {
  const educationItems = [
    {
      title: "Bachelor of Informatics Engineering",
      subtitle: "STT Terpadu Nurul Fikri | GPA: 3.94",
    },
    {
      title: "Revou - AWS Cendikiawan",
      subtitle: "Cloud and Gen AI • Student | Sep 2024 - Dec 2024",
    },
      {
      title: "Bangkit Academy",
      subtitle: "Machine Learning • Cohort | Sep 2024 - Dec 2024",
    }
  ];

  const experienceItems = [
    {
      title: "DevOps Intern",
      subtitle: "Cakap • Internship | Januari 2025 - April 2025",
    }
  ];

const certificationItems = [
  {
    title: "Tensorflow Developer Certificate",
    subtitle: "Tensorflow | 2024",
    link: "https://www.credential.net/4dac17e9-cae2-4bb7-ad7b-4a45228f2421#gs.htnhzs#acc.kJ6gbLBC"
  },
  {
    title: "AWS Cloud Practitioner",
    subtitle: "AWS Skill Builder | 2024",
    link: "https://drive.google.com/file/d/1axdQ3Df4MTJ6AfxqYs-3ysRMwVMy6O8t/view?usp=sharing"
  },
  {
    title: "Deep Learning AI TensorFlow Developer",
    subtitle: "Coursera | 2023",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/QFT2LZKCJ6RS"
  },
  {
    title: "Machine Learning",
    subtitle: "Coursera | 2023",
    link: "https://www.credential-url.com/ml"
  }
];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <h1 className="section-title">About Me.</h1>
          
          <div className="about-section">
            <h2 className="about-section-title">Education.</h2>
            <BulletList items={educationItems} />
          </div>

          <div className="about-section">
            <h2 className="about-section-title">Experience.</h2>
            <BulletList items={experienceItems} />
          </div>

          <div className="about-section">
            <h2 className="about-section-title">Certifications.</h2>
            <BulletList items={certificationItems} />
          </div>

          <button
            onClick={() => setCurrentPage('projects')}
            className="cta-button"
          >
            <span>Lets Continue To Projects</span>
            <span className="cta-button-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
