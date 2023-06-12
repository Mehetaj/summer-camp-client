import React from 'react';
import anime from 'animejs/lib/anime.es.js';

const element = document.getElementById('elem');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle the scroll event
  function handleScroll() {
    if (isInViewport(box)) {
      anime({
        targets: element,
        opacity: 1,
        translateY: ['50px', '0px'],
        easing: 'easeOutExpo',
        duration: 1000
      });
  
      // Remove the scroll event listener once the animation has been triggered
      window.removeEventListener('scroll', handleScroll);
    }
  }

const OneClassDemo = ({ classes }) => {
    // console.log(classes);
    const { photo, name, instructor, email } = classes
    return (
        <div id='elem' className='border w-[400px] border-red-500 rounded-xl'>
            <img className='w-[400px] h-[300px] rounded-t-xl' src={photo} alt="" />
            <div className='p-6'>
                <p className='text-3xl font-bold my-4'>{name}</p>

                <p className='text-xl font-semibold mt-3'>Instructor: {instructor}</p>
                <p className='mt-3'>Email Address : {email}</p>
            </div>

        </div>
    );
};

export default OneClassDemo;