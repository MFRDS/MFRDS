import React from 'react';
import ProjectCard from '../components/ProjectCard';
import InsightPulseImg from '../assets/projects/insightpulse.png';
import MemoraImg from '../assets/projects/memora.png';
import InterviewKuImg from '../assets/projects/interviewku.png';

const ProjectsPage = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h1 className="section-title">Projects.</h1>
        
        <div className="projects-grid">
          <ProjectCard
            title="InsightPulse - Web App"
            description="InsightPulse is a web application for real-time sentiment analysis of public opinions on various technology brands through Twitter."
            tags={['Streamlit',  'Playwright', 'Gemini API', 'IndoBERT']}
            image={InsightPulseImg} 
            link={"https://github.com/MFRDS/insightpulse-app"}
          />
          <ProjectCard
            title="Memora Chatbot - Web App"
            description="Intelligent chatbot using AWS Architecture, featuring Streamlit and SQL Alchemy."
            tags={['Streamlit',  'AWS', 'Chatbot', 'SQL Alchemy']}
            image={MemoraImg} 
            link={"https://github.com/MFRDS/Team2-CDK-Chatbot"}
          />
          <ProjectCard
            title="InterviewKu - Mobile App"
            description="InterviewKu is an Android application that provides interview simulation feature."
            tags={['Streamlit',  'AWS', 'Chatbot', 'SQL Alchemy']}
            image={InterviewKuImg} 
            link={"https://github.com/krisna31/interviewku"}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;