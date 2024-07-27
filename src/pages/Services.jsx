import React,{useEffect, useRef,useState} from 'react'
import "../App.css"
import {FooterWithSocialLinks} from "../components/Footer"
import Navbar from '../components/Navbar'
import Design from "../assets/design.jpg"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../App.css"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Healthcare from "../assets/industry/health.jpg"
import Ecom from "../assets/industry/ecomm.jpg"
import Education from "../assets/industry/education.jpg"
import Finance from "../assets/industry/finance.jpg"
import Food from "../assets/industry/food.jpg"
import Legal from "../assets/industry/legal.jpg"
import Manufacturing from "../assets/industry/manuf.jpg"
import Media from "../assets/industry/media.jpg"
import Travel from "../assets/industry/travel.jpg"
import Ngo from "../assets/industry/ngo.jpg"
import Shopping from "../assets/industry/shop.jpg"
import Lifecycle from "../assets/life cycle.jpg"
import { GiPositionMarker } from "react-icons/gi";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Avatar,
  Rating,
} from "@material-tailwind/react";
import { useLocation } from 'react-router-dom'
const Services = () => {
  const [content, setContent] = useState();
  const [activeTab, setActiveTab] = React.useState("Frontend");
  const data = [
    {
      label: "Frontend",
      value: "Frontend",
      desc:
      <div className='flex justify-center items-center'>


       <div className='flex flex-wrap md:gap-10 gap-5 justify-center items-center  min-w-[300px]'>

        {
          content?.service?.fronendtools?.map((items,i)=>(
        <div className=' p-5 flex flex-col gap-2'>

        <img src={items.image} alt="" className='md:w-min-[70px] md:h-min[70px] w-[100px] h-[100px]' />
        <h1 className='text-center font-bold text-gray-800'>{items.title}</h1>
        </div>

          ))
        }


 
       </div>
      </div>
    },
    {
      label: "Backend",
      value: "Backend",
      desc:
 
      <div className='flex justify-center items-center'>
       <div className='flex flex-wrap md:gap-10 gap-5 justify-center items-center  min-w-[300px]'>
       
       {
        content?.service?.backendtools?.map((items,i)=>(

        <div className=' p-5 flex flex-col gap-2'>

        <img src={items.image} alt="" className='md:w-[70px] md:h-[70px] w-[100px] h-[100px]' />
        <h1 className='text-center font-bold text-gray-800'>{items.title}</h1>
        </div>
        ))
       }
       

 
       </div>
      </div>
    },
    {
      label: "UI/UX",
      value: "UI/UX",
      desc:
      <div className='flex justify-center items-center'>
       <div className='flex flex-wrap md:gap-10 gap-5 justify-center items-center   min-w-[300px]'>
       
       {
        content?.service?.uiux?.map((items,i)=>(
        <div className=' p-5 flex flex-col gap-2'>

        <img src={items.image} alt="" className='md:w-[70px] md:h-[70px] w-[100px] h-[100px]' />
        <h1 className='text-center font-bold text-gray-800'>{items.title}</h1>
        </div>

        ))
       }
        {/* <div className=' p-5 flex flex-col gap-2'>

<img src={Figmaimg} alt="" className='md:w-[70px] md:h-[70px] w-[100px] h-[100px] ' />
<h1 className='text-center font-bold text-gray-800'>Figma</h1>

</div>
        <div className=' p-5 flex flex-col gap-2'>

<img src={Framerimg} alt="" className='md:w-[70px] md:h-[70px] w-[100px] h-[100px]' />
<h1 className='text-center font-bold text-gray-800'>Framer</h1>

</div>
        <div className=' p-5 flex flex-col gap-2'>

<img src={Pinimg} alt="" className='md:w-[70px] md:h-[70px] w-[100px] h-[100px]' />
<h1 className='text-center font-bold text-gray-800'>UX Pin</h1>

</div> */}


 
       </div>
      </div>
    },
    {
      label: "Database",
      value: "Database",
      desc:
      <div className='flex justify-center items-center'>
      <div className='flex flex-wrap md:gap-10 gap-5 justify-center items-center  min-w-[300px]'>
     
     {
      content?.service?.database?.map((items,i)=>(

       <div className=' p-5 flex flex-col gap-2'>

       <img src={items.image} alt="" className='md:w-[70px] md:h-[70px] w-[100px] h-[100px]' />
       <h1 className='text-center font-bold text-gray-800'>{items.title}</h1>
       </div>

      ))
     }




      </div>
     </div>
    },
    {
      label: "Tools",
      value: "Tools",
      desc:
      <div className='flex justify-center items-center'>
      <div className='flex flex-wrap md:gap-10 gap-5 justify-center items-center  min-w-[300px]'>
    
    {
      content?.service?.tools?.map((items,i)=>(
       <div className=' p-5 flex flex-col gap-2'>

       <img src={items.image} alt="" className='md:w-[70px] md:h-[70px] w-[100px] h-[100px]' />
       <h1 className='text-center font-bold text-gray-800'>{items.title}</h1>
       </div>

      ))
    }




      </div>
     </div>
    },

  ];
    const cards = [
        { id: 1, title: 'Healthcare', content: 'This is card 1',image:Healthcare },
        { id: 2, title: 'Finance', content: 'This is card 2',image:Finance },
        { id: 3, title: 'Education', content: 'This is card 3',image: Education},
        { id: 4, title: 'E-commerce ', content: 'This is card 4',image: Ecom},
        { id: 5, title: 'Travel and Tourism', content: 'This is card 5',image:Travel },
        { id: 6, title: 'Entertainment and Media', content: 'This is card 6',image:Media },
        { id: 7, title: 'Non-Profit Organizations', content: 'This is card 6',image:Ngo },
        { id: 8, title: 'Manufacturing', content: 'This is card 6',image:Manufacturing },
        { id: 9, title: 'Food and Beverage', content: 'This is card 6',image:Food },
        { id: 10, title: 'Legal Services', content: 'This is card 6',image: Legal},
        { id: 11, title: 'Fashion and Apparel', content: 'This is card 6',image:Shopping },
        // Add more cards as needed
      ];
      const cards1 = [
        {
          id: 1,
          img: Design,
          name: "Turab Hussain",
          role:"CEO of Startup",
          location:"Bangalore, Karnataka, India",
          content: "Working with [Your Agency Name] has been a game-changer for our business. Their innovative web solutions and exceptional customer service have exceeded our expectations. We couldn't be happier with the results!"
        },
        {
          id: 2,
          img: Design,
          name: "Ayesha Khan",
          role:"CEO of Startup",
          location:"Delhi, India",

          content: "[Your Agency Name] took our vision and turned it into a reality. Their team of expert developers and designers were professional, responsive, and a pleasure to work with. We highly recommend their services to anyone looking for top-notch web development."
        },
        {
          id: 3,
          img: Design,
          name: "Ahmed Raza",
          role:"CEO of Startup",
          location:"Surat, Gujrat, India",

          content: "The expertise and dedication of the team at [Your Agency Name] are unmatched. They delivered a fantastic website that perfectly represents our brand and meets our business needs. We're thrilled with the outcome!"
        },
        {
          id: 4,
          img: Design,
          name: "Sara Ali",
          role:"CEO of Startup",
          location:"Patna, Bihar, India",

          content: "From start to finish, [Your Agency Name] provided exceptional service. Their creative solutions and technical prowess made the entire process smooth and stress-free. We couldn't ask for a better partner for our web development projects."
        }
      ];
      

    //   const [currentSlide, setCurrentSlide] = useState(0);
      const sliderRef = useRef(null);

      const settings = {
        dots: false,        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows:false,
        slidesToScroll: 1,
        // afterChange: (current) => setCurrentSlide(current),

        responsive: [
          {
            breakpoint: 640, // Mobile devices (phones)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // Tablets and small laptops
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024, // Laptops and larger screens
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const settings1 = {
        dots: false,        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows:false,
        slidesToScroll: 1,
        // afterChange: (current) => setCurrentSlide(current),

        responsive: [
          {
            breakpoint: 640, // Mobile devices (phones)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // Tablets and small laptops
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024, // Laptops and larger screens
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const location = useLocation();
     
      useEffect(() => {
    if (location.state) {
      setContent(location.state);
    }
  }, [location.state]);

  console.log(content);
  return (
    <div className=' h-screen'>
        <div>
            <Navbar isHomePage={true}/>
        </div>
<section className='w-full h-full bg-no-repeat bg-cover bg-center flex justify-center items-center' style={{backgroundImage:`url(${content?.service.image})`}}>
<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 "></div>
<div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center md:p-10 p-5 md:mt-10">
          <div className=" text-white md:mt-[100px] mt-[120px]">
            <h1 className="md:text-4xl font-bold md:mb-4 text-2xl"> <span className='text-green-500'>{content?.service.title[0]} </span> <span>{content?.service.title[1]}</span></h1>
            <p className="md:text-lg   text-sm mt-2 md:text-center">{content?.service.subtitle}</p>
          </div>
          <button className="bg-green-500 md:p-5 md:rounded-full mt-5 p-2 rounded-full text-gray-200 md:hover:bg-white hover:md:text-green-500 transition-all">Get Started</button>

          </div>
</section>

<section className='flex justify-center items-center'>
    <div className='flex flex-col justify-center items-center md:w-[80%] md:p-10 p-5'>
        <h1 className='md:text-[32px] font-bold text-[22px] '>{content?.service.title2}</h1>
        <p className='text-[16px] leading-7 text-black'>{content?.service.description}</p>
    </div>
</section>
        
        <section className='md:mt-[50px] hidden md:block'>
    <div className='w-[90%] mx-auto rounded-md bg-gray-200 hidden md:flex '>
     
        <div className='p-5'>
            <h1 className='text-center text-[32px]'>{content?.service.frontend.title}</h1>
            <div className='h-[2px] w-[100px] bg-green-500 mx-auto'></div>
            <p className='text-black text-[16px] leading-8 mt-5'>
            {content?.service.frontend.description}
            </p>
        </div>
        <div className='flex-shrink-0'>
            <img src= {content?.service.frontend.image} alt="" className='md:h-[300px] rounded-lg -translate-x-10 -translate-y-10 transition-all shadow-lg' />
        </div>
    </div>
    <div className='w-[90%] mx-auto rounded-md bg-gray-200 hidden md:flex md:mt-[100px] '>
        <div className='flex-shrink-0'>
            <img src= {content?.service.backend.image} alt="" className='md:h-[300px] rounded-lg -translate-x-10 -translate-y-10 transition-all shadow-lg' />
        </div>
        <div className='p-5'>
            <h1 className='text-center text-[32px]'> {content?.service.backend.title}</h1>
            <div className='h-[2px] w-[100px] bg-green-500 mx-auto'></div>
            <p className='text-black text-[16px] leading-8 mt-5'>
            {content?.service.frontend.description}
            </p>
        </div>
    </div>
    <div className='w-[90%] mx-auto rounded-md bg-gray-200 hidden md:flex md:mt-[100px]'>
    
        <div className='p-5'>
            <h1 className='text-center text-[32px]'> {content?.service.fullstack.title}</h1>
            <div className='h-[2px] w-[100px] bg-green-500 mx-auto'></div>
            <p className='text-black text-[16px] leading-8 mt-5'>
            {content?.service.fullstack.description}
            </p>
        </div>
        <div className='flex-shrink-0'>
            <img src= {content?.service.fullstack.image} alt="" className='md:h-[300px] rounded-lg -translate-x-10 -translate-y-10 transition-all shadow-lg' />
        </div>
    </div>
</section>



        <section className='md:mt-[50px] md:hidden block flex flex-col gap-5'>
    <div className='md:w-[90%] mx-auto rounded-md bg-gray-200  md:flex p-2 w-[90%] '>
    <div className='p-2'>
            <img src= {content?.service.frontend.image} alt="" className='md:h-[300px] rounded-lg  shadow-lg' />
        </div>
        <div className='md:p-5 mt-5 md:mt-0 p-2'>
            <h1 className='text-center md:text-[32px] text-[22px]'> {content?.service.frontend.title}</h1>
            <div className='h-[2px] w-[100px] bg-green-500 mx-auto'></div>
            <p className='text-black md:text-[16px] md:leading-8 md:mt-5 mt-2 text-[14px] leading-6'>
            {content?.service.frontend.description}
            </p>
        </div>
       
    </div>
    <div className='md:w-[90%] mx-auto rounded-md bg-gray-200  md:flex p-2 w-[90%] '>
    <div className='p-2'>
            <img src= {content?.service.backend.image} alt="" className='md:h-[300px] rounded-lg  shadow-lg' />
        </div>
        <div className='md:p-5 mt-5 md:mt-0 p-2'>
            <h1 className='text-center md:text-[32px] text-[22px]'> {content?.service.backend.title}</h1>
            <div className='h-[2px] w-[100px] bg-green-500 mx-auto'></div>
            <p className='text-black md:text-[16px] md:leading-8 md:mt-5 mt-2 text-[14px] leading-6'>
            {content?.service.backend.description}
            </p>
        </div>
       
    </div>
    <div className='md:w-[90%] mx-auto rounded-md bg-gray-200  md:flex p-2 w-[90%] '>
    <div className='p-2'>
            <img src= {content?.service.fullstack.image} alt="" className='md:h-[300px] rounded-lg  shadow-lg' />
        </div>
        <div className='md:p-5 mt-5 md:mt-0 p-2'>
            <h1 className='text-center md:text-[32px] text-[22px]'> {content?.service.fullstack.title}</h1>
            <div className='h-[2px] w-[100px] bg-green-500 mx-auto'></div>
            <p className='text-black md:text-[16px] md:leading-8 md:mt-5 mt-2 text-[14px] leading-6'>
            {content?.service.fullstack.description}
            </p>
        </div>
       
    </div>
    {/* <div className='w-[90%] mx-auto rounded-md bg-gray-200  md:flex md:mt-[100px] '>
        <div className='flex-shrink-0'>
            <img src={Develop} alt="" className='md:h-[300px] rounded-lg -translate-x-10 -translate-y-10 transition-all shadow-lg' />
        </div>
        <div className='p-5'>
            <h1 className='text-center text-[32px]'>Back-End Development</h1>
            <div className='h-[2px] w-[100px] bg-green-500 mx-auto'></div>
            <p className='text-black text-[16px] leading-8 mt-5'>
                Your paragraph text goes here. This section can be used to provide additional 
                information or context about the image displayed on the left. You can explain 
                the significance of the image, offer some insights or data, or simply describe 
                what the viewer is seeing.
            </p>
        </div>
    </div>
    <div className='w-[90%] mx-auto rounded-md bg-gray-200  md:flex md:mt-[100px]'>
    
        <div className='p-5'>
            <h1 className='text-center text-[32px]'>Full-Stack Development</h1>
            <div className='h-[2px] w-[100px] bg-green-500 mx-auto'></div>
            <p className='text-black text-[16px] leading-8 mt-5'>
                Your paragraph text goes here. This section can be used to provide additional 
                information or context about the image displayed on the left. You can explain 
                the significance of the image, offer some insights or data, or simply describe 
                what the viewer is seeing.
            </p>
        </div>
        <div className='flex-shrink-0'>
            <img src={Develop} alt="" className='md:h-[300px] rounded-lg -translate-x-10 -translate-y-10 transition-all shadow-lg' />
        </div>
    </div> */}
</section>

<div className="p-5 flex flex-col md:mt-5 ">
  <div>
  <h1 className='md:text-[32px] font-bold text-[22px] md:text-center'>{content?.industry}</h1>

  </div>

<div className='mt-5'>

      <Slider ref={sliderRef} {...settings}>
        {cards.map(card => (
          <div key={card.id} className="md:p-2 md:space-x-3 text-white">
            <div className="   p-6 bg-none bg-center bg-cover shadow-md relative h-[450px]" style={{backgroundImage:`url(${card.image})`}}>
            <div className="absolute inset-0 bg-black opacity-75 "></div>
            <div className='flex flex-col relative'>
<div className='h-[200px]'>
  
</div>
            <div className='relative'>
              <h3 className="text-2xl text-green-500 font-bold mb-2">{card.title}</h3>
              <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis minima asperiores odit possimus a voluptates, perferendis doloremque eum consequatur? Minima!</p>

            </div>
            </div>
            </div>
          </div>
        ))}
      </Slider>
</div>


 <div className='mx-auto flex gap-2 mt-4'>

<div className='h-10 w-min-10 p-2 rounded-full border-1 bg-green-500' onClick={() => sliderRef.current.slickPrev()}>
<IoIosArrowBack className='text-2xl text-white font-light' onClick={() => sliderRef.current.slickPrev()}/>
</div>
<div className='h-10 w-min-10 p-2 rounded-full border-1 bg-green-500' onClick={() => sliderRef.current.slickNext()}>
<IoIosArrowForward className='text-2xl text-white' onClick={() => sliderRef.current.slickNext()}/>
</div>
    </div>
    </div>


    <section className='flex justify-center items-center'>
    <div className='flex md:flex-col justify-center items-center md:w-[90%] md:p-5 p-5'>
        {/* <p className='text-[16px] leading-7 text-black'>we pride ourselves on being the leading web development agency in town. Our commitment to excellence and innovation has earned us the reputation as the best service providers in the industry. Our team of expert developers and designers is dedicated to delivering cutting-edge web solutions that drive digital success for businesses of all sizes. We understand the unique needs of our local clients and go above and beyond to exceed their expectations with top-tier service and unparalleled results. Choose [Your Agency Name] for a partnership that guarantees superior quality, reliability, and the best web development experience in town.</p> */}
   <div className='flex md:flex-row flex-col justify-center gap-10 '>
<img src={Lifecycle} alt="" className='md:h-[300px] md:w-[500px] h-10 w-10 md:block hidden' />
<div >
<h1 className='md:text-[32px] font-bold text-[24px] text-center'>Our Scrum-Based <span className='text-green-500'>Development Process</span></h1>
<img src={Lifecycle} alt="" className='h-[200px] w-[500px]  md:hidden block md:mt-0 mt-2' />

        <p className='text-[16px] leading-7 text-black mt-5 md:mt-0'>At [Your Agency Name], we use Scrum to deliver top-quality web development. We plan thoroughly, work in short sprints, and incorporate your feedback regularly. This agile approach ensures we adapt quickly and deliver a final product that exceeds your expectations.</p>
        <div className='flex   md:w-[500px] justify-between mt-2'>
<ul className='text-sm font-light flex flex-col gap-1'>
  <div className='flex items-center gap-1'>

  <div className='h-2 w-2 bg-green-500'></div> <li>Collaborative Approach</li>
  </div>
  <div className='flex items-center gap-1'>

  <div className='h-2 w-2 bg-green-500'></div> <li>Iterative Development</li>
  </div>
  <div className='flex items-center gap-1'>

  <div className='h-2 w-2 bg-green-500'></div> <li>Regular Feedback</li>
  </div>
  <div className='flex items-center gap-1'>

  <div className='h-2 w-2 bg-green-500'></div> <li>Continuous Improvement</li>
  </div>
  <div className='flex items-center gap-1'>

  <div className='h-2 w-2 bg-green-500'></div> <li>Transparency and Accountability  </li>
  </div>
</ul>

        </div>
</div>
        </div>
    </div>
</section>



<section className='flex justify-center items-center md:p-0 p-2'>
      <div className='flex flex-col justify-center items-center md:w-[80%] md:p-10 '>
        <h1 className='md:text-[32px] font-bold text-[24px] p-2'>
          Leveraging the Latest Technologies for Cutting-Edge Web Development and Exceptional User Experiences
        </h1>
        <div className='md:mt-5'>

        <Tabs value={activeTab} className="">
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 overflow-x-auto whitespace-nowrap w-screen md:w-full"
            indicatorProps={{
              className:
                "bg-transparent border-b-2  shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`inline-block px-4 py-2 whitespace-nowrap ${activeTab === value ? "text-gray-900 border-b-2 border-gray-900" : ""}`}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody className='p-5 '>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
        </div>
      </div>
    </section>

    
    <div className="flex flex-col md:p-5 ">
  <div>
  <h1 className='md:text-[32px] font-bold text-[22px] text-center'>What Our Clients Says</h1>

  </div>
  <div>
    <p className='text-center text-black md:text-[16px] md:leading-8 md:mt-2 mt-2 text-[14px] leading-6 p-2 md:p-0'>Our clients are at the heart of everything we do, and their satisfaction is our top priority. Here are just a few of the glowing reviews we've received</p>
  </div>

<div className='mt-5 p-2 md:p-0'>

      <Slider ref={sliderRef} {...settings1}>
        {cards1.map(card => (
          <div key={card.id} className="md:p-2 md:space-x-3 text-black p-2">
            <div className="   p-6 bg-none bg-center bg-cover shadow-lg relative min-h-[300px] min-w-[100px]  bg-white rounded-xl" >
         <div className='flex gap-3 '>
<Avatar src={card.img}/>
<div className='flex flex-col'>
<h1 className='text-black'>{card.name}</h1>
<p className='text-gray-800 text-[12px]'>{card.role}</p>
</div>


         </div>
         <div className='md:mt-5 mt-3'>
  <Rating value={4} readonly/>
</div>
<div className='md:mt-5 mt-3'>
  <p className='text-[15px] italic'>"{card.content}"</p>
</div>
<div className='flex justify-end items-end md:mt-5'>
  <p className='flex justify-center items-center'><span><GiPositionMarker className='text-green-500'/></span>{card.location}</p>
</div>
            </div>
          </div>
        ))}
      </Slider>
</div>


 <div className='mx-auto flex gap-2 md:mt-4'>
  {/* <IoIosArrowBack className='text-2xl text-green-500' onClick={() => sliderRef.current.slickPrev()}/>
    <IoIosArrowForward className='text-2xl text-green-500' onClick={() => sliderRef.current.slickNext()}/> */}
<div className='h-10 w-min-10 p-2 rounded-full border-1 bg-green-500' onClick={() => sliderRef.current.slickPrev()}>
<IoIosArrowBack className='text-2xl text-white font-light' onClick={() => sliderRef.current.slickPrev()}/>
</div>
<div className='h-10 w-min-10 p-2 rounded-full border-1 bg-green-500' onClick={() => sliderRef.current.slickNext()}>
<IoIosArrowForward className='text-2xl text-white' onClick={() => sliderRef.current.slickNext()}/>
</div>
    </div>
    </div>
    <section className='mt-5'>

<FooterWithSocialLinks/>
    </section>
    </div>
  )
}

export default Services