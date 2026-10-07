import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Img = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: 500, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, ease: 'power2.out' },
      );
    }, imageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={imageRef} className=" w-full">
      <div className="h-[80%] w-full pt-10 pl-20 sm:pt-25">
        <div className="flex flex-col h-90 w-350 ">
          <div className="flex flex-col items-center justify-center mb-4">
            <h3 className="text-3xl font-bold sm:text-4xl lg:text-6xl">
              LEARN. BUILD. GROW.
            </h3>
          </div>
          <div className="pt-8 flex flex-col items-center justify-center mb-4 font-mono text-center text-base sm:text-xl lg:text-2xl">
            Become The Software Engineer You Always Wanted To Be. Learn By Doing, Build Your Skills, and Grow Your Career With UpSkill.
          </div>
          <div className=''>  
            <p className="pt-6 text-base text-center font-font2 sm:text-xl lg:text-2xl">
              UpSkill is a modern learning platform designed to help students and beginners build practical skills for their careers. It focuses on learning by doing rather than only studying theory. UpSkill provides courses and bootcamps in areas such as Web Development, React, Full Stack Development, Python, Data Science, AI, UI/UX Design, and other modern technologies.</p>
          </div>
        </div>
        <div>
          <Link
            to="/Course"
            className="mx-auto mb-20 flex h-10 w-150 flex-col items-center justify-center rounded  px-4 py-2 font-bold bg-[#1d2d44] border-red-600 text-red-600 transition hover:bg-red-600 hover:text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Img;
