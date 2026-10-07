import React, { useEffect } from 'react';
import gsap from 'gsap';

const CommanNeed = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.3,
    });

    tl.to('.NeedItem:nth-child(odd)', {
      scale: 0.8,
      duration: 1,
      ease: 'power2.inOut',
    }).to(
      '.NeedItem:nth-child(even)',
      {
        scale: 1.2,
        duration: 1,
        ease: 'power2.inOut',
      },
      '<',
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex gap-12 pt-20">
      <div className="NeedItem pl-20">
        <div className="w-80 p-5 pt-20">
          <img
            className="h-60 w-60 rounded-xl border-2 object-cover"
            src="https://img.magnific.com/premium-vector/email-service-modern-flat-concept-web-banner-design-man-send-letter-with-illustration_647728-26.jpg?semt=ais_test_b&w=740&q=80"
            alt=""
          />
        </div>

        <h3 className="pl-8 font-font5 text-xl font-bold">CV & Resume Prep</h3>

        <p className="h-20 w-70 whitespace-pre-line pl-8 pt-1 font-font5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="NeedItem">
        <div className="w-80 p-5 pt-20">
          <img
            className="h-60 w-60 rounded-xl border-2 object-cover"
            src="https://assets-v2.lottiefiles.com/a/dc02e2a4-1189-11ee-a6b5-f39817b70832/Gk3hVl6BRi.png"
            alt=""
          />
        </div>

        <h3 className="pl-8 font-font5 text-xl font-bold">
          Interview Coaching
        </h3>

        <p className="h-20 w-70 whitespace-pre-line pl-8 pt-1 font-font5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="NeedItem">
        <div className="w-80 p-5 pt-20">
          <img
            className="h-60 w-60 rounded-xl border-2 object-cover"
            src="https://assets-v2.lottiefiles.com/a/7a9dc440-1187-11ee-96ea-03cb817ee859/DxkNl1720n.png"
            alt=""
          />
        </div>

        <h3 className="pl-8 font-font5 text-xl font-bold">Buddy System</h3>

        <p className="h-20 w-70 whitespace-pre-line pl-8 pt-1 font-font5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="NeedItem">
        <div className="w-80 p-5 pt-20">
          <img
            className="h-60 w-60 rounded-xl border-2 object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoe4ybdzR8y3BeM8LC_bUDFkZMsP5NixweO-5gOVR9DOfrhkd2Ix_aCebA&s=10"
            alt=""
          />
        </div>

        <h3 className="pl-8 font-font5 text-xl font-bold">
          Career Opportunity
        </h3>

        <p className="h-20 w-70 whitespace-pre-line pl-8 pt-1 font-font5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default CommanNeed;
