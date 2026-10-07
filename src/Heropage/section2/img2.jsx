import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Img2 = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: 300, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'bottom 70%',
            scrub: 1,
          },
        },
      );
    }, imageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex min-h-125 flex-1 items-center justify-center p-1 pb-30">
      <div className="h-60 w-full max-w-md pt-1 ">
        <img
          ref={imageRef}
          className="h-90 w-full rounded-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1RMb4T8KijXyPWxc_wiEJZNVFxOVNmj5mznO_-akZaslhlYgmCA6VYntS&s=10"
          alt="Students learning together"
        />
      </div>
    </div>
  );
};

export default Img2;
