import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: "Joe Meyer",
    role: "Founder & CEO",
    feedback: "Great service and support. Highly recommend! The team was extremely professional and went above and beyond to meet my needs. Truly a fantastic experience from start to finish.",
    image: require('../assets/Joe_Meyer.jpg'),
  },
  {
    id: 2,
    name: "David Sides",
    role: "Chief Executive Officer",
    feedback: "Professional and efficient. Will use again. The team handled everything with precision and care, making the entire process seamless and stress-free. I couldn't be more satisfied with the results.",
    image: require('../assets/David-Sides.jpg'),
  },
  {
    id: 3,
    name: "Henry O’Connell",
    role: "Project Manager",
    feedback: "Exceeded my expectations. Fantastic work! The team delivered outstanding results ahead of schedule, demonstrating remarkable expertise and commitment. Their proactive communication and problem-solving approach made the entire process smooth and efficient.",
    image: require('../assets/Canary-Speech.jpg'),
  },
  {
    id: 4,
    name: "Amy Shecter",
    role: "Marketing Head",
    feedback: "Very satisfied with the results. Excellent job! The team demonstrated exceptional creativity and dedication, ensuring every detail was perfect. Their innovative approach and professionalism truly stood out, making this a wonderful experience.",
    image: require('../assets/Amy-Shecter.png'),
  },
  {
    id: 5,
    name: "Brett Shaheen",
    role: "Chief Executive Officer",
    feedback: "Quick and reliable service. Highly appreciated! The team's attention to detail and commitment to delivering quality results exceeded my expectations. I would confidently recommend their services to anyone.",
    image: require('../assets/Brett-Shaheen.jpg'),
  },
];

export const Testimonials = () => {
  return (
    <div className="w-full h-screen md:min-h-screen lg:min-h-[80vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex flex-col items-center justify-center py-16">
      <h2 className="text-5xl sm:text-6xl font-bold text-white hover:text-rose-500 transition-colors duration-300 text-center mb-8">Testimonials</h2>
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-6 rounded-lg shadow-md h-80 w-60 mx-auto transition-transform transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-green-400">
                <img src={testimonial.image.default} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <p className="text-2xl font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-yellow-300">{testimonial.role}</p>
                <p className="mt-4 text-gray-200">{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
