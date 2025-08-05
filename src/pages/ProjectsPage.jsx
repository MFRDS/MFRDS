import React from 'react';
import FadeInComponent from '../components/FadeInComponent';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  const projects = [
    {
      title: "InsightPulse - Web App",
      description: "InsightPulse is a web application for real-time sentiment analysis of public opinions on various technology brands through Twitter.",
      img: "/assets/projects/insightpulse.png",
      link: "https://github.com/MFRDS/insightpulse-app"
    },
    {
      title: "Memora Chatbot - Web App",
      description: "Intelligent chatbot using AWS Architecture, featuring Streamlit and SQL Alchemy.",
      img: "/assets/projects/memora.png",
      link: "https://github.com/MFRDS/Team2-CDK-Chatbot"
    },
    {
      title: "InterviewKu - Mobile App",
      description: "InterviewKu is an Android application that provides interview simulation feature.",
      img: "assets/projects/interviewku.png",
      link: "https://github.com/krisna31/interviewku"
    }
  ];

  const containerStyle = {
    paddingTop: '80px',
    minHeight: '100vh'
  };

  const innerStyle = {
    maxWidth: '1152px',
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
          <h1 style={h1Style}>Projects</h1>
        </FadeInComponent>
        
        <div style={gridStyle}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              img={project.img}
              link={project.link}
              delay={600 + index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

