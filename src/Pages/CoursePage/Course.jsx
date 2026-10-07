import { useEffect } from 'react';
import Nav from '../../Heropage/section1/Nav';
import About from '../../Heropage/section3/About';

const CourseCard = ({ img, title, description, button }) => (
  <div className="Program h-125 w-90 overflow-hidden rounded-xl border-2 border-black bg-[#1d2d44]">
    <div className="h-[50%]">
      <img className="h-full w-full object-cover" src={img} alt={title} />
    </div>

    <h4 className="px-4 pt-5 text-xl font-semibold text-white">{title}</h4>
    <p className="px-4 pt-8 text-gray-300">{description}</p>

    <div className="px-4 pt-8">
      <button className="h-10 w-full rounded-lg border border-red-600 text-red-600 transition hover:bg-red-600/80 hover:text-white hover:border-white">
        {button}
      </button>
    </div>
  </div>
);

const Course = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bootcamps = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Learn HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB by building real-world full-stack web applications.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    button: "Register Now",
  },

  {
    id: 2,
    title: "React Frontend Development",
    description:
      "Master React, components, props, hooks, routing, API integration, and modern UI development with practical projects.",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    button: "Register Now",
  },

  {
    id: 3,
    title: "Python & Data Science",
    description:
      "Learn Python programming, NumPy, Pandas, data visualization, data analysis, and the fundamentals of machine learning.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    button: "Register Now",
  },

  {
    id: 4,
    title: "UI/UX Design Bootcamp",
    description:
      "Learn user research, wireframing, prototyping, design systems, Figma, and modern UI/UX principles through practical projects.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    button: "Register Now",
  },

  {
    id: 5,
    title: "Advanced React & Next.js",
    description:
      "Build production applications using advanced React concepts, Next.js, server-side rendering, APIs, authentication, and deployment.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    button: "Live",
  },

  {
    id: 6,
    title: "AI & Machine Learning",
    description:
      "Explore artificial intelligence, machine learning algorithms, neural networks, and real-world AI applications with Python.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    button: "Coming Soon",
  },
];

  return (
    <div className="min-h-screen bg-[#ffffe4]">
      <div className="fixed top-0 z-50 w-full">
        <Nav />
      </div>
      <main className="px-6 pb-20 pt-32">
        <div className="flex flex-row gap-50 ">
          <div className="flex flex-col gap-8 pt-15 pl-10">
            <h1 className="text-left font-font1 text-6xl font-bold whitespace-nowrap">The<spam className="text-blue-500"> Best</spam></h1>
            
            <h3 className="text-left font-font1 text-5xl font-bold">Program To Endroll Now</h3>
            <button className="p-0.75 text-center font-font1 text-xl font-bold  bg-orange-300 rounded-full justify-start w-40 h-10 hover:bg-orange-400 transition">
              Contact Us
            </button>
            <p className='w-180 text-left font-serif text-xl text-balance pt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, libero adipisci. Voluptates rem vitae est delectus at. Repellendus doloremque voluptatem, reprehenderit, saepe ipsa sint autem iste inventore architecto, numquam fugiat.</p></div>
          <div className="pr-20 ">  
            <img
              className="h-120 w-150 rounded-2xl object-cover pb-8"
              src="https://cdn-icons-png.flaticon.com/512/12650/12650036.png"
              alt="Online learning"
            />
          </div>
        </div>
      </main>
      <section className="px-6 pb-20 gap-20 pt-10 flex flex-col">
        <h3 className="mb-6 text-4xl font-bold text-center font-font1 underline">Course Details</h3>
        <div className="flex flex-wrap pl-25 gap-20">
          {bootcamps.map((bootcamp) => (
            <CourseCard key={bootcamp.id} {...bootcamp} />
          ))}
        </div>
      </section>
      <section className="px-6 pb-20 gap-20 pt-40 flex flex-col">
        <About />
      </section>
    </div>

  );  
};

export default Course;
