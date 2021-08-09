import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import useOnScreen from './Hooks/useOnScreen';

function About() {

   const Options = {
        threshold : 0.5,
        rootMargin : "-40% 0px 0px 0px"
   }
   
   const [introRef, introVisibility] = useOnScreen(Options);
   const [profRef, profVisibility] = useOnScreen(Options);
   const [intRef, intVisibility] = useOnScreen(Options);

  return (

    <div className="main" id='about'>
      <h1>About me</h1>

      <div className={introVisibility ? 'intro vis' : 'intro unvis'}>
        <div className='heading'>
        <h3>Introduction</h3>
        </div>
        <div className='info' ref={introRef}>
        <img className={introVisibility ? 'right visible' : 'right unvisible'} src='/Files/todo.png' width='200px' height='200px'/>
        <h6 className={introVisibility ? 'left ab text-box visible' : 'left ab text-box unvisible'}>My name is John, but some people call me Jack. I was born and raised in Columbus, Ohio. I am currently 20
        years old. </h6>
        </div>
      </div>
      <div className={profVisibility ? 'prof vis' : 'prof unvis'}>
        <div className='heading'>
        <h3>Professional</h3>
        </div>
        <div className='info' ref={profRef}>
        <h6 className={profVisibility ? 'right ab text-box visible' : 'right ab text-box unvisible'}>I graduated high school in the spring of 2019. I chose to attend The Ohio State University where I am
        currently a junior pursuing a bachelors degree in Computer Science and Engineering. I plan to graduate with my
        intended degree in the spring of 2023.</h6>
        <img className={profVisibility ? 'left visible' : 'left unvisible'} src='/Files/todo.png' width='200px' height='200px'/>
        </div>
      </div>
      <div className={intVisibility ? 'interests vis' : 'interests unvis'}>
        <div className='heading'>
        <h3>Interests</h3>
        </div>
        <div className='info'  ref={intRef}>
        <img className={intVisibility ? 'right visible' : 'right unvisible'} src='/Files/todo.png' width='200px' height='200px'/>
        <h6 className={intVisibility ? 'left ab text-box visible' : 'left ab text-box unvisible'}>Outside of school I enjoy spending my time lifting, video-gaming, woodworking, and simply hanging out with
        friends/family. I also enjoy coding(hence my major) and like to learn new technologies for building various applications.
        My immediate interests related to computer science are DATABASE STUFF, and python</h6>
        </div>
      </div>
    </div>
  );
}

export default About;