import React from 'react';
import ProjectItem from './ProjectItem';
import {
  FaGithub,
} from 'react-icons/fa';
import studentsData from '../assets/students-data.png';
import todo from '../assets/todo.png';
import barbers from '../assets/barbers.png';
import ecommerce from '../assets/ecommerce.png';

const myProjects = [
  {
    title: 'T-Shop',
    image: ecommerce,
    link: '',
    gitHubLink: 'https://github.com/tatojajo/eCommerce'
  },
  {
    title: 'Students-Data',
    image: studentsData,
    link: 'https://tatojajo.github.io/Students-Data-Table-App/',
    gitHubLink: "https://github.com/tatojajo/Students-Data-Table-App"
  },
  {
    title: 'BarberShop',
    image: barbers,
    link: '',
    gitHubLink: "https://github.com/tatojajo/barbers"
  },
  {
    title: 'To_Do',
    image: todo,
    link: 'https://tatojajo.github.io/todo_redux/',
    gitHubLink: "https://github.com/tatojajo/todo_redux"
  }
]

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <div className='flex p-5 gap-3 items-center justify-center'>
        <h5>All of my projects on</h5>
        <a href='https://github.com/tatojajo' target='_blank'>
              <FaGithub className='cursor-pointer' size={20} />
            </a>
      </div>
      <div className='grid sm:grid-cols-2 gap-12'>
        {
          myProjects.map((project, index) => {
            return <ProjectItem key={index} img={project.image} title={project.title} link={project.link} gitHubLink={project.gitHubLink} />
          })
        }

      </div>
    </div>
  );
};

export default Projects;
