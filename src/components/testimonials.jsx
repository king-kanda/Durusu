import React from 'react';
import styles from '../styles/accounts.module.scss';


//  -----------------------------
import Suisseintl from 'next/font/local';
import Druk from 'next/font/local';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })
const suss = Suisseintl({
    src: '../../public/fonts/SuisseIntl-Bold.otf',
    display: 'swap',
})
const druk = Druk ({
  src: '../../public/fonts/druk.otf',
  display: 'swap',
})
// -----------------------------

const TestimonialsData = [

  {
    ImageLink: 'https://res.cloudinary.com/namiri/image/upload/v1691842792/samples/people/pexels-tony-schnagl-5588224_tmfg9h.jpg',
    Comment: "Streamlined my study routine and enhanced my collaboration skills. It's a tool I wish I had from day one.",
    Name: 'Daniel Johnson.',
    Title: 'Victory Elementary School',
    rating: 5,
  },
  {
    ImageLink: 'https://res.cloudinary.com/namiri/image/upload/v1691842792/samples/people/pexels-tony-schnagl-5588224_tmfg9h.jpg',
    Comment: "Revolutionized how I approach learning. The collaborative features have not only boosted my grades but also my confidence.",
    Name: 'Amir Patel.',
    Title: 'Victory Elementary School',
    rating: 5,
  },
  {
    ImageLink: 'https://res.cloudinary.com/namiri/image/upload/v1691842792/samples/people/pexels-tony-schnagl-5588224_tmfg9h.jpg',
    Comment: "Personalized learning path and progress tracking have become crucial for my academic growth. This approach will benefit me long after graduation.",
    Name: 'Sofia Kim.',
    Title: 'International Institute of Technology',
    rating: 5,
  },
  {
    ImageLink: 'https://res.cloudinary.com/namiri/image/upload/v1691842792/samples/people/pexels-tony-schnagl-5588224_tmfg9h.jpg',
    Comment: "Made learning more interactive and enjoyable. The skills I've developed through this platform will stay with me throughout my education journey.",
    Name: 'Isabella Wang.',
    Title: 'Horizon University',
    rating: 5,
  },
  
];

const Testimonials = () => {
  const testimonial = TestimonialsData[0]; // Selecting the first testimonial from the data

  const divStyle = {
    backgroundImage: `url(${testimonial.ImageLink})`,
    backgroundSize: 'cover', // Adjust the image sizing as needed
    backgroundPosition: 'center center', // Adjust the image position as needed
    minHeight: '100vh', // Set a minimum height to ensure content visibility
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    minHeight: '100vh',
  };

  return (
     <>
        <div className={` ${styles.Testimonials } `}>
                <div className={` hello`}>
                    <div className="w-full p-8" style={divStyle}>
                        <div className={` ${styles.card } p-12  text-white`}>
                        <p className={` ${inter.className} text-lg `}> &quot; {testimonial.Comment} &quot;</p>
                        <div className={` mt-5`}>
                            <h4 className={`mt-2 text-xl font-bold ${inter.className}`}>{testimonial.Name}</h4>
                            <p className={` ${inter.className} `}>{testimonial.Title}</p>
                        </div>
                        {/* You can add more content here */}
                        </div>
                    </div>
                </div>
        </div>
     </>
  );
};

export default Testimonials;
