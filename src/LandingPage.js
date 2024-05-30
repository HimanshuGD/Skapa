import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import video1 from './assets/video1.mp4';
import video2 from './assets/video2.mp4';
import video3 from './assets/video3.mp4';
import Navbar1 from './Navbar/Navbar';
import Signin from './Pages/Login-Register/Login';
import Register from './Pages/Login-Register/Register';

const HoverSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4A90E2;
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #357ABD;
  }
`;

const InfoContent = styled.div`
  text-align: center;
  padding: 0rem;
  font-size: 1.5rem;
  max-width: 800px;
  position: relative;
  z-index: 1;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
  }

  .hover-box {
    display: inline-block;
    padding: 1rem;
    background-color: #ffffff33;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: #ffffff;
      color: #4A90E2;
    }
  }
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 100vh;
  color: white;
  font-size: 2rem;
`;

const LoginForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  color: white;
  padding: 40px;
  max-width: 800px;
  width: 60%;
  height: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  h1 {
    margin-bottom: 1rem;
    font-size: 3rem;
  }

  button {
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    width: 100%;
    background-color: #ff5700;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e14e00;
    }
  }
`;

const LandingPage = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(video1);
  const [showRegister, setShowRegister] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleGetStartedClick = () => {
    setShowRegister(true);
  };

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollPosition(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const sectionIndex = Math.floor(scrollPosition / windowHeight);

    switch (sectionIndex) {
      case 0:
        setCurrentVideo(video1);
        break;
      case 1:
        setCurrentVideo(video2);
        break;
      case 2:
        setCurrentVideo(video3);
        break;
      default:
        setCurrentVideo(video1);
        break;
    }
  }, [scrollPosition]);

  return (
    <>
      <Navbar1 />
      <Section>
        <VideoBackground autoPlay loop muted src={video3} />
        <Content>
          <h1>Skapa - A content creator's buddy</h1>
          <p>Scroll down to explore more</p>
        </Content>
      </Section>
      <Section>
        <VideoBackground autoPlay loop muted src={video2} />
        <Content>
          <h1>Discover Amazing AI generated Content tailored for you</h1>
        </Content>
      </Section>
      <Section>
        <VideoBackground autoPlay loop muted src={video3} />
        <Content>
          <h1>Connect and share your content with Friends</h1>
        </Content>
      </Section>
      <HoverSection
        mouseX={mousePosition.x}
        mouseY={mousePosition.y}
        isHovering={isHovering}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <InfoContent>
          <h2>Welcome to Skapa</h2>
          <p>
            Skapa is your go-to platform for discovering and sharing AI-generated content.
            Join us today and start creating amazing content effortlessly.
          </p>
          <div className="hover-box">
            Hover over this box
          </div>
        </InfoContent>
      </HoverSection>
      <Section style={{
        backgroundColor: '#C8E6C9', transition: 'background-color 0.3s ease', cursor: 'pointer', }} 
        className="hover-section"
        onMouseEnter={() => { document.querySelector('.hover-section').style.backgroundColor = '#C9E6E3'; }}
        onMouseLeave={() => { document.querySelector('.hover-section').style.backgroundColor = '#C8E6C9'; }}
    >
        {showRegister ? (
          <Register onRegisterClick={handleSignInClick} />
        ) : showSignIn ? (
          <Signin onSignUpClick={handleGetStartedClick} />
        ) : (
          <LoginForm>
            <h1>Skapa</h1>
            <div style={{ paddingBottom: '0.5cm' }}>
              <button onClick={handleGetStartedClick} style={{ borderRadius: '1cm' }}>Get Started</button>
            </div>
            <h2>Already have an account?</h2>
            <Link style={{ color: 'inherit', textDecoration: 'none' }} onClick={handleSignInClick}>
              <h2 style={{ color: 'lightblue' }}>Sign in</h2>
            </Link>
          </LoginForm>
        )}
      </Section>
    </>
  );
};

export default LandingPage;
