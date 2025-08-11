import React from 'react';
import Typewriter from '../components/Typewriter';
import FadeInComponent from '../components/FadeInComponent';
import SkillCard from '../components/SkillCard';
import profile from '/assets/profile.png';
import SocialMediaIcons from '../components/SocialMedia';
import logo_linkedin from '/assets/icons/linkedin.png';
import logo_github from '/assets/icons/github.png';
import logo_instagram from '/assets/icons/instagram.png';
import logo_discord from '/assets/icons/discord.png';



const HomePage = () => {
  const typewriterWords = ["Tech Enthusiast", "AI/ML Enthusiast"];

  const sectionStyle = {
    padding: '60px 0'
  };

  const containerStyle = {
    maxWidth: '896px',
    margin: '0 auto',
    padding: '0 16px'
  };

  const heroStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 16px'
  };

  const textCenterStyle = {
    textAlign: 'center'
  };

  const avatarStyle = {
    width: '230px',
    height: '230px',
    margin: '0 auto 24px',
    borderRadius: '50%',
    background: 'linear-gradient(to right, #60a5fa, #a855f7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'center'
};


  const h1Style = {
    fontSize: window.innerWidth <= 768 ? '32px' : '48px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '16px'
  };

  const h2Style = {
    fontSize: window.innerWidth <= 768 ? '24px' : '32px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '32px',
    textAlign: 'center'
  };

  const cardStyle = {
    border: '1px solid rgba(148, 163, 184, 0.3)',
    backgroundColor: 'rgba(226, 232, 240, 0.2)',
    borderRadius: '6px',
    padding: window.innerWidth <= 768 ? '16px' : '24px',
    backdropFilter: 'blur(10px)'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 480 ? '1fr' : 
                        window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 
                        'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px'
  };

  const socmedList = [
    {
      link: "https://www.linkedin.com/in/muhammad-firdaus-47509b208/",
      img: logo_linkedin,
    },
    {
      link: "https://github.com/mfrds",
      img: logo_github,
    },
    {
      link: "https://www.instagram.com/mfrds72/",
      img: logo_instagram,
    },
    {
      link: "https://discordapp.com/users/425986335497650187/",
      img: logo_discord,
    },
  ];



  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={textCenterStyle}>
          <FadeInComponent delay={200}>
            <div style={avatarStyle}>
              <img src={profile} alt="Profile" style={imageStyle} />
            </div>
          </FadeInComponent>
          <FadeInComponent delay={400}>
            <h1 style={h1Style}>Hi, I'm Muhammad Firdaus</h1>
          </FadeInComponent>
          <FadeInComponent delay={600}>
            <div style={{ 
              fontSize: window.innerWidth <= 768 ? '18px' : '24px', 
              fontWeight: '600' 
            }}>
              <Typewriter words={typewriterWords} />
            </div>
          </FadeInComponent>
        </div>
      </section>

      {/* About Me Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <FadeInComponent delay={200}>
            <h2 style={h2Style}>About Me</h2>
          </FadeInComponent>
          <FadeInComponent delay={400}>
            <div style={cardStyle}>
              <p style={{ 
                color: '#d1d5db', 
                lineHeight: '1.6',
                fontSize: window.innerWidth <= 768 ? '14px' : '16px'
              }}>
              Passionate about creating impactful solutions through data and technology.
              I enjoy working with complex datasets, building responsive websites, and developing interactive applications to deliver meaningful user experiences.
              I’m always curious, open to new ideas, and eager to grow both personally and professionally in this fast-changing field.
              </p>
            </div>
          </FadeInComponent>
        </div>
      </section>

      {/* Experience Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <FadeInComponent delay={200}>
            <h2 style={h2Style}>Experience</h2>
          </FadeInComponent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FadeInComponent delay={400}>
              <div style={cardStyle}>
                <h3 style={{ 
                  fontSize: window.innerWidth <= 768 ? '18px' : '20px', 
                  fontWeight: '600', 
                  color: 'white', 
                  marginBottom: '8px' 
                }}>
                  DevOps Intern
                </h3>
                <p style={{ color: '#60a5fa', marginBottom: '8px', fontSize: '14px' }}>Cakap • Internship</p>
                <p style={{ 
                  color: '#d1d5db',
                  fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                  lineHeight: '1.5'
                }}>
                  Januari 2025 - April 2025
                </p>
              </div>
            </FadeInComponent>
            
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <FadeInComponent delay={200}>
            <h2 style={h2Style}>Education</h2>
          </FadeInComponent>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FadeInComponent delay={400}>
              <div style={cardStyle}>
                <h3 style={{ 
                  fontSize: window.innerWidth <= 768 ? '18px' : '20px', 
                  fontWeight: '600', 
                  color: 'white', 
                  marginBottom: '8px' 
                }}>
                  Bachelor of Informatics Engineering
                </h3>
                <p style={{ color: '#60a5fa', marginBottom: '8px', fontSize: '14px' }}>STT Terpadu Nurul Fikri • 2021 - 2025</p>
                <p style={{ 
                  color: '#d1d5db',
                  fontSize: window.innerWidth <= 768 ? '14px' : '16px'
                }}>
                  GPA : 3.94/4.00
                </p>
              </div>
            </FadeInComponent>

            <FadeInComponent delay={400}>
              <div style={cardStyle}>
                <h3 style={{ 
                  fontSize: window.innerWidth <= 768 ? '18px' : '20px', 
                  fontWeight: '600', 
                  color: 'white', 
                  marginBottom: '8px' 
                }}>
                  Revou - AWS Cendikiawan
                </h3>
                <p style={{ color: '#60a5fa', marginBottom: '8px', fontSize: '14px' }}>Cloud and Gen AI • Student</p>
                <p style={{ 
                  color: '#d1d5db',
                  fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                  lineHeight: '1.5'
                }}>
                  Sep 2024 - Dec 2024
                </p>
              </div>
            </FadeInComponent>

            <FadeInComponent delay={400}>
              <div style={cardStyle}>
                <h3 style={{ 
                  fontSize: window.innerWidth <= 768 ? '18px' : '20px', 
                  fontWeight: '600', 
                  color: 'white', 
                  marginBottom: '8px' 
                }}>
                  Bangkit Academy
                </h3>
                <p style={{ color: '#60a5fa', marginBottom: '8px', fontSize: '14px' }}>Machine Learning • Cohort</p>
                <p style={{ 
                  color: '#d1d5db',
                  fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                  lineHeight: '1.5'
                }}>
                  Aug 2023 - Dec 2023
                </p>
              </div>
            </FadeInComponent>
          </div>
        </div>
        
      </section>

      {/* Programming Skills Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <FadeInComponent delay={200}>
            <h2 style={h2Style}>Programming Skills</h2>
          </FadeInComponent>
          <div style={gridStyle}>
            <SkillCard  skill="Python" level=""  delay={300} />
            <SkillCard  skill="SQL" level="MySQL, PostgreSQL"  delay={400} />
            <SkillCard  skill="React" delay={500} />
            <SkillCard  skill="TensorFlow" delay={600} />
            <SkillCard  skill="Pandas"  delay={700} />
            <SkillCard  skill="Scikit-learn"  delay={800} />
            <SkillCard  skill="Docker"  delay={900} />
            <SkillCard  skill="AWS Cloud"  delay={1000} />
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <FadeInComponent delay={200}>
            <h2 style={h2Style}>Interests</h2>
          </FadeInComponent>
            <div style={gridStyle}>
            <SkillCard icon="🤖" skill="Machine Learning"  delay={200} />
            <SkillCard icon="💻" skill="Web Development" delay={500} />
            <SkillCard icon="🔍" skill="Data Analysis" delay={300} />
            <SkillCard icon="📊" skill="Data Visualization" delay={700} />
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <FadeInComponent delay={200}>
            <h2 style={h2Style}>Connect With Me</h2>
          </FadeInComponent>
          <FadeInComponent delay={400}>
            <SocialMediaIcons icons={socmedList} />
          </FadeInComponent>
        </div>
      </section>
    </div>
  );
};

export default HomePage;