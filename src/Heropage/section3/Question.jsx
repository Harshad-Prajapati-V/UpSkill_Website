import { useEffect, useState } from 'react';
import gsap from 'gsap';

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const animation = gsap.to('.Header', {
      duration: 2,
      y: 10,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 0.5,
    });

    return () => animation.kill();
  }, []);

  const questions = [
    {
      question: 'Can I access course material offline?',
      answer:
        'Yes, you can download the course material and access it offline whenever you need it.',
    },
    {
      question: 'Is there any prerequisite for courses?',
      answer:
        'Most beginner courses do not require any prerequisites. Some advanced courses may require basic programming knowledge.',
    },
    {
      question: 'How long do I have access to a course?',
      answer:
        'You will have access to the course for the duration mentioned on the course page.',
    },
    {
      question: 'How can I make a payment for a course?',
      answer:
        'You can make payments using supported online payment methods such as cards, UPI, or other available options.',
    },
    {
      question: 'How can I contact the course instructor?',
      answer:
        'You can contact the instructor through the course discussion section or the provided contact option.',
    },
  ];

  return (
    <div className="w-full px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="Header mb-10 text-center font-font5 text-2xl font-bold underline">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col gap-4">
          {questions.map((item, index) => (
            <div key={item.question} className="overflow-hidden rounded-lg border">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between p-4 text-left hover:bg-gray-100"
              >
                <h3 className="font-medium">{item.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="border-t p-4 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
