import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Information = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.Title',
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: 1,
        },
      });

      tl.fromTo('.Title', { x: 300 }, { x: 0 })
        .fromTo('.Box1', { x: -500 }, { x: 0 })
        .fromTo('.Box2', { x: -500 }, { x: 0 })
        .fromTo('.Box3', { x: -500 }, { x: 0 })
        .fromTo('.Box4', { x: -500 }, { x: 0 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex-1 p-6 sm:p-10 lg:p-20">
      <div className="flex-col">
        <h2 className="Title font-font1 text-4xl h-auto max-w-xl">
          The Advantages Of the upSkills Program.
        </h2>
        <div className="grid grid-cols-2 gap-4 h-full w-full max-w-2xl mt-10">
          <div className="Box1 border-2 pl-2 min-h-30 w-full">
            <h3 className="text-xl font-bold">Relevant Skill set</h3>
            <br></br>
            <p className="font-font2 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo, dolor!
            </p>
          </div>
          <div className="Box2 border-2 pl-2 min-h-30 w-full">
            <h3 className="text-xl font-bold">Growth Mindset</h3> <br></br>
            <p className="font-font2 text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
              tempore.
            </p>
          </div>
          <div className="Box3 border-2 pl-2 min-h-30 w-full">
            <h3 className="text-xl font-bold">1-on-1 Mentoring</h3> <br></br>
            <p className="font-font2 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem,
              necessitatibus.
            </p>
          </div>
          <div className="Box4 border-2 pl-2 min-h-30 w-full">
            <h3 className="text-xl font-bold">Hiring Partners</h3> <br></br>
            <p className="font-font2 text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, aut!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
