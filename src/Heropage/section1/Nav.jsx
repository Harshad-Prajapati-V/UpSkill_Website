import { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Nav = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from('.Hero', { y: -50, duration: 0.8, delay: 0.1 })
        .from('.Nav', { y: -50, duration: 0.5 }, '-=0.4')
        .from('.Button', { y: -60, duration: 0.5 }, '-=0.3');
    });

    return () => ctx.revert();
  }, []);

  return (
    <nav className="w-full border-b-2 bg-[#ffffe4] shadow-xl">
      <div className="flex w-full items-center justify-between p-3">
        <Link to="/" className="Hero ml-4 mt-1 font-font1 text-2xl text-blue-600 sm:ml-10">
          UpSkill.
        </Link>

        <div className="Nav hidden items-center gap-6 font-font3 md:flex lg:gap-10">
          <Link to="/" className="font-bold hover:text-blue-600">Home</Link>
          <Link to="/course" className="font-bold hover:text-blue-600">Course</Link>
          <Link to="/bootcamp" className="font-bold hover:text-blue-600">Bootcamp</Link>
          <Link to="/contact" className="font-bold hover:text-blue-600">Contact</Link>
        </div>

        <div className="Button mr-2 flex gap-3 sm:mr-10 sm:gap-5">
          <Link
            to="/course"
            className="rounded-full bg-blue-600 p-2 text-white transition-all hover:scale-105 hover:border hover:bg-white hover:text-blue-600"
          >
            Login
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-blue-600 p-2 text-white transition-all hover:scale-105 hover:border hover:bg-white hover:text-blue-600"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
