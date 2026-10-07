import { useLayoutEffect } from 'react';
import Nav from '../../Heropage/section1/Nav';
import About from '../../Heropage/section3/About';

const CourseCard = ({ img, title, description }) => (
  <div className="Program h-125 w-90 overflow-hidden rounded-xl border-2 border-red-600 bg-[#1d2d44]">
    <div className="h-[50%]">
      <img className="h-full w-full object-cover" src={img} alt={title} />
    </div>

    <h4 className="px-4 pt-5 text-xl font-semibold text-white">{title}</h4>
    <p className="px-4 pt-8 text-gray-300">{description}</p>

    <div className="px-4 pt-8">
      <button className="h-10 w-full rounded-lg border border-red-600 text-red-600 transition hover:bg-white hover:text-red-600">
        Start Learning
      </button>
    </div>
  </div>
);

const Bootcamp = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  return (
    <div className="min-h-screen bg-[#ffffe4]">
      <div className="fixed top-0 z-50 w-full">
        <Nav />
      </div>
      <main className="px-6 pb-20 pt-32">
        <div className="flex flex-row gap-50 ">
          <div className="flex flex-col gap-8 pt-15 pl-10">
            <h1 className="text-left font-font1 text-6xl font-bold whitespace-nowrap">E-Learning</h1>
            <h3 className="text-left font-font1 text-4xl font-bold text-blue-600">PRENIUM</h3>
            <button className="p-0.75 text-center font-font1 text-xl font-bold  bg-orange-300 rounded-full justify-start w-40 h-10 hover:bg-orange-400 transition">
              Contact Us
            </button>
            <p className='w-180 text-left font-serif text-xl text-balance pt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi qui perferendis rem. Dignissimos, repellendus eius qui quasi amet quis culpa maiores provident saepe temporibus ratione enim rerum recusandae. Veniam eos laboriosam tenetur, non dicta exercitationem temporibus quibusdam sequi quia magnam?</p>
          </div>
          <div className="pr-20 ">  
            <img
              className="h-140 rounded-2xl object-cover pb-8"
              src="https://cdn-icons-png.flaticon.com/512/46/46759.png"
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

export default Bootcamp;
