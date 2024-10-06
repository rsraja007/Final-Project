import React from 'react';
//import { Routes, Route, useLocation} from 'react-router-dom';
// import Component from './Components/Component';
//import Navbar from './Components/Navbar';
//import Home from './Components/Home';
//import About from './Components/About';
//import ReactProjects from './Components/ReactProjects';
//import Services from './Components/Services';
//import Contact from './Components/Contact';
//import Login from './Auth/Login';
//import Signup from './Auth/Signup';
function App() {
  
  return (
    <>
        <div>
            <div>React projects</div>
            <div className='project-holder'>
                <div className='pro'>
                    <p><a href='https://rsraja007.github.io/react-todo/' target='_blank' rel='noopener noreferrer'>ToDoList</a></p>
                </div>
                <div className='pro'>
                    <p><a href='https://rsraja007.github.io/react-weather/' target='_blank' rel='noopener noreferrer'>Weather Api</a></p>
                </div>
                <div className='pro'>
                    <p><a href='https://rsraja007.github.io/react-news/' target='_blank' rel='noopener noreferrer'>News Api</a></p>
                </div>
            </div>
        </div>
        
    </>
  );
}

export default App;
