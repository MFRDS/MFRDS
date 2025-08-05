import React from 'react';
import FadeInComponent from '../components/FadeInComponent';
import CertificateCard from '../components/CertificateCard';

const CertificatesPage = () => {
  const certificates = [
    {
      title: "Tensorflow Developer Certificate",
      issuer: "TensorFlow",
      date: "2024",
      link: "https://www.credential.net/4dac17e9-cae2-4bb7-ad7b-4a45228f2421#gs.htnhzs#acc.kJ6gbLBC"
    },
    {
      title: "Deep Learning AI TensorFlow Developer",
      issuer: "Coursera",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/QFT2LZKCJ6RS"
    },
    {
      title: "Machine Learning",
      issuer: "Coursera",
      date: "2023",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/JBHXRTNDABG3"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS Skill Builder",
      date: "2024",
      link: "https://drive.google.com/file/d/1axdQ3Df4MTJ6AfxqYs-3ysRMwVMy6O8t/view?usp=sharing"
    }
  ];

  const containerStyle = {
    paddingTop: '80px',
    minHeight: '100vh'
  };

  const innerStyle = {
    maxWidth: '896px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '60px 16px' : '80px 24px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 480 ? '1fr' : 
                        window.innerWidth <= 768 ? 'repeat(1, 1fr)' : 
                        'repeat(auto-fit, minmax(280px, 1fr))',
    gap: window.innerWidth <= 768 ? '16px' : '24px'
  };

  const h1Style = {
    fontSize: window.innerWidth <= 768 ? '28px' : '36px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '16px',
    textAlign: 'center'
  };

  const pStyle = {
    color: '#d1d5db',
    textAlign: 'center',
    marginBottom: '48px',
    fontSize: window.innerWidth <= 768 ? '14px' : '16px'
  };

  return (
    <div style={containerStyle}>
      <div style={innerStyle}>
        <FadeInComponent delay={200}>
          <h1 style={h1Style}>Certificates</h1>
        </FadeInComponent>
        <FadeInComponent delay={400}>
          
        </FadeInComponent>
        
        <div style={gridStyle}>
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              link={cert.link}
              delay={600 + index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;