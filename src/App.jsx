import { Navigate, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Course from './Pages/CoursePage/Course';
import Bootcamp from './Pages/BootcampPage/Bootcamp';

import Nav from './Heropage/section1/Nav';
import Img from './Heropage/section1/img';
import Icon from './Heropage/section1/Icon';
import Information from './Heropage/section2/information';
import Img2 from './Heropage/section2/img2';
import BootcampProgram from './Heropage/section2/BootcampProgram';
import CommanNeed from './Heropage/section3/CommanNeed';
import Question from './Heropage/section3/Question';
import About from './Heropage/section3/About';

const bootcamps = [
  {
    id: 1,
    img: 'https://www.bdtask.com/blog/uploads/how-to-be-a-full-stack-developer.jpg',
    title: 'Full Stack Web Development',
    description:
      'Master modern frontend and backend technologies by building real-world, production-ready web applications.',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJICn81AshurRAC5HkeDxqM7dc5e83TxUscfSi9pwfPYR9hW3LqxPWho&s=10',
    title: 'UI/UX Design Bootcamp',
    description:
      'Learn user research, wireframing, prototyping, and modern interface design to create engaging digital experiences.',
  },
  {
    id: 3,
    img: 'https://media.licdn.com/dms/image/v2/D5612AQFhbGfQlTwJQA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1684380897420?e=2147483647&v=beta&t=I4lAsx34IinhnlidHiisPJy4P7TYl65j1pes6IvzJ8M',
    title: 'Data Science & AI',
    description:
      'Explore Python, data analysis, machine learning, and AI while working on practical industry-focused projects.',
  },
  {
    id: 4,
    img: 'https://media.licdn.com/dms/image/v2/D5612AQGKijod7gssVA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1733410867272?e=2147483647&v=beta&t=Y_40WeQJTzd_IGoWr32jNhHtAN5Dd5sNwIorj0XswWg',
    title: 'Cloud & DevOps',
    description:
      'Build scalable applications and learn Docker, CI/CD, cloud platforms, and modern DevOps practices.',
  },
];

const Home = () => {
   useEffect(() => {
    // Check if the URL has a hash (like #about)
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        // Scroll to the section smoothly
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div className="min-h-screen overflow-hidden bg-[#ffffe4]">
      <div className="fixed top-0 z-50 w-full">
        <Nav />
      </div>

      <div className="flex flex-col items-center pt-16">
        <Img />
        <Icon />
      </div>

      <div className="flex flex-col lg:flex-row">
        <Information />
        <Img2 />
      </div>

      <div className="mx-auto mt-4 w-[95%] rounded-full border-2 bg-[#38240D] py-2 text-center font-font2 text-xl text-white">
        <h2>Bootcamp Program</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 px-10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {bootcamps.map((elem) => (
          <BootcampProgram
            key={elem.id}
            img={elem.img}
            title={elem.title}
            description={elem.description}
          />
        ))}
      </div>

      <CommanNeed />
      <Question />
      <About />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/bootcamp" element={<Bootcamp />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Navigate to="/#about" replace />} />
    </Routes>
  );
};

export default App;
