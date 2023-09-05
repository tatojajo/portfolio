import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main'>
      <img
        className='w-full h-screen object-cover  backdrop-blur-md'
        src='https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3464&q=80'
        alt='home page'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl front-bold text-gray-800'>
            I'm Tato Jajanidze
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I'm a
            <TypeAnimation
              sequence={[
                'React Developer',
                2000,
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a href='https://github.com/tatojajo' target='_blank'>
              <FaGithub className='cursor-pointer' color='black' size={20} />
            </a>
            <a href='https://www.linkedin.com/in/tato-jajanidze/' target='_blank'>
              <FaLinkedinIn className='cursor-pointer' color='#0073b1' size={20} />
            </a>
            <a href='https://www.facebook.com/tato.jajanidze.16' target='_blank'>
              <FaFacebookF className='cursor-pointer' color='blue' size={20} />
            </a>
            <a href='https://www.instagram.com/tatojajanize/' target='_blank'>
              <FaInstagram className='cursor-pointer' color='red' size={20} />
            </a>
          </div>
          <div className='mt-4'>
            <a href='https://drive.google.com/file/d/1vdxF1_ELiYopveP5XH8uxkIcufUhkErK/view?usp=sharing' target='_blank'>
              <button type="button" class="focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-green-900">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
