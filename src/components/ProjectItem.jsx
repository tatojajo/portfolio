import React, { useState } from 'react';

const ProjectItem = ({ img, title, link, gitHubLink }) => {
  const [showMessage, setShowMessage] = useState(false);


  const handleLinkClick = () => {
    if (link === '') {
      setShowMessage(true);

    }
  };
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt='/' className='rounded-xl group-hover:opacity-10' />
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>React JS</p>
        <div className='flex gap-3'>

          {showMessage ? (
            <a href={link} target='_blank' onClick={handleLinkClick}>
              <p className='text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg'>
                Live Soon
              </p>
            </a>
          ) : (
            <a href={link} target='_blank'>
              <p className='text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg'>
                Live
              </p>
            </a>
          )}
          <a href={gitHubLink} target='_blank'>
            <p className='text-center p-3 rounded-ld bg-white text-gray-700 font-bold cursor-pointer text-lg'>
              GitHub
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
