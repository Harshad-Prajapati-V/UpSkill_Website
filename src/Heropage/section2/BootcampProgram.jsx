import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BootcampProgram = (props) => {
  const programRef = useRef(null);

  useEffect(() => {
    const program = programRef.current;

    const tl = gsap.timeline();

    tl.fromTo(
      program,
      {
        x: 1500,
        opacity: 1,
      },
      {
        x: -1500,
        duration: 10,
        delay: 0.8,
        repeat: -1,
        ease: 'none',
      },
    );

    const pauseAnimation = () => {
      tl.pause();
    };

    const resumeAnimation = () => {
      tl.resume();
    };

    program.addEventListener('mouseenter', pauseAnimation);
    program.addEventListener('mouseleave', resumeAnimation);

    return () => {
      program.removeEventListener('mouseenter', pauseAnimation);
      program.removeEventListener('mouseleave', resumeAnimation);

      tl.kill();
    };
  }, []);

  return (
    <div
      ref={programRef}
      className="Program border-2 border-red-600 h-125 w-full rounded-xl overflow-hidden bg-black/80"
    >
      <div className="h-[50%]">
        <img
          className="h-full w-full object-cover"
          src={props.img}
          alt={props.title}
        />
      </div>

      <h4 className="pt-5 px-4 text-xl font-semibold text-white">{props.title}</h4>

      <p className="pt-8 px-4 text-gray-300">{props.description}</p>

      <div className="px-4 pt-8">
        <button className="border h-10 w-full rounded-lg hover:bg-white hover:text-red-600 border-red-600 text-red-600 transition">
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default BootcampProgram;
