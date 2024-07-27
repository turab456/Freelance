import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { GiDiscussion } from "react-icons/gi";
import { SiCoreldraw } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { TbBrandSpeedtest } from "react-icons/tb";
import { HiRocketLaunch } from "react-icons/hi2";
import Services from '../components/Services';
import Awards from '../components/Awards';
import { FooterWithSocialLinks } from '../components/Footer';
import Form from '../components/Form';
import { useAgency } from '../context/MyContext';
import assets from "../components/assets"
import { scrolldata } from '../utils/data';
const Home = () => {

const{handleData}=useAgency()


  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};
const [currentSlide, setCurrentSlide] = useState(0);

const sliderRef = useRef(null);

const settings = {
  dots: false,        infinite: true,
  speed: 500,
  slidesToShow: 1,
  arrows:false,
  slidesToScroll: 1,
  beforeChange: (current, next) => setCurrentSlide(next),

  responsive: [
    {
      breakpoint: 640, 
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



const items = scrolldata.map((item) => (
  <div key={item.id} className='flex flex-col gap-2 items-start'>
    <div className='h-[100px] w-[160px] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${item.image})` }}></div>
    <h1 className='text-green-500 font-medium'>{item.title}</h1>
    <p className='text-white text-md w-[160px] font-light text-justify hyphens-auto whitespace-break-spaces break-words'>{item.description}</p>
    <button className='text-white rounded-full border-2 border-green-500 p-2 hover:bg-white hover:text-green-500 hover:border-white' onClick={()=>handleData(item)}>
      <IoIosArrowRoundForward />
    </button>
  </div>
));
  const [activeTab, setActiveTab] = React.useState("html");
  const steps = [
    {
      number: '01',
      title: 'Research',
      description: 'We select an expert team to help you deliver your goals',
    },
    {
      number: '02',
      title: 'Scoping session',
      description: 'Our team partners with you to effectively shape your business idea',
    },
    {
      number: '03',
      title: 'Project set-up',
      description: 'We ensure that your project has the tools and processes needed to succeed',
    },
    {
      number: '04',
      title: 'Project kickoff',
      description: 'We work with you to successfully create a game-changing software product',
    },
    {
      number: '05',
      title: 'Project kickoff',
      description: 'We work with you to successfully create a game-changing software product',
    },
  ];
  const data = [
    {
      label: "Plan",
      icon: <GiDiscussion className='text-2xl' />,
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Design",
      icon: <SiCoreldraw className='text-2xl' />,
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Develop",
      icon: <MdDeveloperMode className='text-2xl' />,
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Test",
      icon: <TbBrandSpeedtest className='text-2xl' />,
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Deploy",
      icon: <HiRocketLaunch className='text-2xl' />,
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  const currentTab = data.find(tab => tab.value === activeTab);

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);



  return (
    <div>
      <div className='relative w-full h-screen'>
        <Navbar isHomePage={true} />
        <video className="absolute top-0 left-0 w-full h-full object-cover" src={assets.video} type="video/mp4" autoPlay loop muted />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

        <div className="absolute top-0 left-0 w-full h-full flex items-center md:p-10 p-5">
          <div className=" text-white md:mt-[100px] mt-[90px]">
            <h1 className="md:text-5xl font-bold md:mb-4 text-2xl">Your Ideas,Our Technology</h1>
            <p className='text-green-500 md:text-3xl md:mt-5 font-bold mt-5 '>#1 Ranked For Best IT Services</p>
            <p className="md:text-lg  md:w-[700px] text-sm mt-2">We design and build industry-leading web-based products that bring value to your customers, delivered with compelling UX.</p>
            <button className="bg-green-500 md:p-5 md:rounded-full mt-5 p-2 rounded-full md:mt-10 md:hover:bg-white hover:md:text-green-500 transition-all">Get Started</button>
          </div>




























        </div>

      </div>

      <section class="md:flex md:justify-center  md:items-center md:p-10 p-5">
        <div class="md:grid md:grid-cols-2 md:justify-center md:items-center md:w-[60%]">
          <div>
            <h1 className="md:text-4xl md:font-medium text-2xl font-medium inline-block border-b-4 border-green-500 pb-1">
              Who Are We?
            </h1>    </div>
          <div className=''>
            <p class="mt-2 text-black md:w-[600px] hidden md:block md:text-[16px] leading-8">
              At [Your Agency Name], we are a team of passionate and innovative professionals dedicated to creating exceptional digital experiences. Our agency was founded with the belief that every business, regardless of size, deserves a compelling online presence. With years of industry experience, we understand the unique challenges that businesses face in the digital landscape and are committed to providing customized solutions that drive success.
            </p>
            <p class="mt-5 text-black w-full text-justify hyphens-auto md:hidden text-sm">
              At [Your Agency Name], we are a team of passionate and innovative professionals dedicated to creating exceptional digital experiences. Our agency was founded with the belief that every business, regardless of size, deserves a compelling online presence.
            </p>

          </div>
        </div>
      </section>

      <section className="md:flex md:justify-center md:items-center md:p-8 p-5 md:bg-center bg-cover" style={{ backgroundImage: `url(${assets.Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div class="md:grid md:grid-cols-2 md:justify-center md:items-center gap-10 ">
          <div className='md:-mt-10 md:hidden block'>
            <h1 className="md:text-4xl md:font-medium text-2xl font-medium inline-block border-b-4 border-green-500 pb-1">
              Our Team?
            </h1>
          </div>
          <div className='md:h-[300px] mx-auto rounded-lg bg-green-500 hidden md:block'>

            <div>
              <img src={assets.Team} alt="" className='md:h-[300px] mx-auto rounded-lg -translate-x-10 -translate-y-10 transition-all hover:translate-y-10 hover:translate-x-10' />
            </div>
          </div>
          <div className='md:hidden block mt-5'>
            <img src={assets.Team} alt="" className='md:h-[300px] mx-auto rounded-lg ' />
          </div>
          <div className=''>
            <div className='md:-mt-10 hidden md:block'>
              <h1 className="md:text-4xl md:font-medium text-2xl font-medium inline-block border-b-4 border-green-500 pb-1">
                Our Team?
              </h1>
            </div>
            <div className='md:mt-5'>
              <p class="mt-2 text-black md:w-[600px] hidden md:block md:text-[16px] leading-8">
                At [Your Agency Name], we are a team of passionate and innovative professionals dedicated to creating exceptional digital experiences. Our agency was founded with the belief that every business, regardless of size, deserves a compelling online presence. With years of industry experience, we understand the unique challenges that businesses face in the digital landscape and are committed to providing customized solutions that drive success.
              </p>
              <p class="mt-2 text-black w-full text-justify hyphens-auto md:hidden text-sm">
                At [Your Agency Name], we are a team of passionate and innovative professionals dedicated to creating exceptional digital experiences. Our agency was founded with the belief that every business, regardless of size, deserves a compelling online presence.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
      {['Plan', 'Design', 'Develop', 'Test', 'Deploy'].map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full">
              {step}
            </div>
            {index < 4 && (
              <div className="hidden md:block w-16 border-t-2 border-blue-500"></div>
            )}
          </div>
          {index < 4 && (
            <div className="block md:hidden h-16 border-t-2 border-blue-500"></div>
          )}
        </React.Fragment>
      ))}
    </div> */}
      <section className="flex flex-col justify-center items-center w-full md:w-[90%] mx-auto md:mt-10">
        <div className=' hidden md:block'>
          <h1 className="md:text-4xl md:font-medium text-2xl font-medium inline-block border-b-4 border-green-500 pb-1">
            Our Approach
          </h1>
        </div>
        <div className='md:-mt-10 md:hidden block'>
          <h1 className="md:text-4xl md:font-medium text-2xl font-medium inline-block border-b-4 border-green-500 pb-1">
            Our Approach
          </h1>
        </div>
        <div className='md:mt-5 hidden md:block'>
          <p className='md:text-center text-justify p-5 hyphens-auto md:text-[16px] leading-8'>From planning to deployment, we follow a methodical approach: designing with care, developing with precision, and testing thoroughly, ensuring our applications meet high standards of functionality and user satisfaction.</p>
        </div>
        <div className='md:mt-5 md:hidden block'>
          <p className='md:text-center text-justify p-5 hyphens-auto text-sm'>From planning to deployment, we follow a methodical approach: designing with care, developing with precision, and testing .</p>
        </div>


        <div className='md:flex md:justify-center md:items-center md:w-[100%] md:p-5 w-screen  rounded-lg '>

          {/* <div className='md:flex gap-5 w-[100%] hidden'>
<Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-gray-500 bg-transparent "
        indicatorProps={{
          className:
            "bg-transparent border-b- border-green-500 shadow-none rounded-none",
        }}
      >
        {data.map(({icon, label, value }) => (
          <>
          
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-green-500 text-lg font-semibold " : "text-lg "}
          >
<div className="flex flex-col items-center">
          <span className='text-2xl'>{label}</span>
        </div>          </Tab>
          </>
        ))}
      </TabsHeader>
      <TabsBody className='flex'>
        {data.map(({ value, desc }) => (
          <>
          
          <TabPanel key={value} value={value} >
            {desc}
          </TabPanel>
          <TabPanel key={value} value={value} >
            {desc}
          </TabPanel>
          </>

        ))}
      </TabsBody>
    </Tabs>
</div> */}

          <div className='md:flex md:justify-center md:items-center md:gap-8 hidden '>
            <div className='md:w-[200px] md:h-[200px]  rounded-full md:flex md:justify-center md:items-center shadow-2xl bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${assets.Team})` }}>
              <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
              <div className='md:flex md:flex-col md:justify-center md:items-center'>

                <h1 className='md:text-4xl md:text-white z-10 relative'>01</h1>
                <h1 className='md:text-4xl md:text-green-500 z-10 relative font-medium'>Plan</h1>
              </div>

            </div>
            <div className='md:w-[200px] md:h-[200px]  rounded-full md:flex md:justify-center md:items-center shadow-2xl bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${assets.Design})` }}>
              <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
              <div className='md:flex md:flex-col md:justify-center md:items-center'>

                <h1 className='md:text-4xl md:text-white z-10 relative'>02</h1>
                <h1 className='md:text-4xl md:text-green-500 z-10 relative font-medium'>Design</h1>
              </div>

            </div>
            <div className='md:w-[200px] md:h-[200px]  rounded-full md:flex md:justify-center md:items-center shadow-2xl bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${assets.Develop})` }}>
              <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
              <div className='md:flex md:flex-col md:justify-center md:items-center'>

                <h1 className='md:text-4xl md:text-white z-10 relative'>03</h1>
                <h1 className='md:text-4xl md:text-green-500 z-10 relative font-medium'>Develop</h1>
              </div>

            </div>
            <div className='md:w-[200px] md:h-[200px]  rounded-full md:flex md:justify-center md:items-center shadow-2xl bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${assets.Test})` }}>
              <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
              <div className='md:flex md:flex-col md:justify-center md:items-center'>

                <h1 className='md:text-4xl md:text-white z-10 relative'>04</h1>
                <h1 className='md:text-4xl md:text-green-500 z-10 relative font-medium'>Test</h1>
              </div>

            </div>
            <div className='md:w-[200px] md:h-[200px]  rounded-full md:flex md:justify-center md:items-center shadow-2xl bg-no-repeat bg-cover bg-center relative' style={{ backgroundImage: `url(${assets.Deploy})` }}>
              <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
              <div className='md:flex md:flex-col md:justify-center md:items-center'>

                <h1 className='md:text-4xl md:text-white z-10 relative'>05</h1>
                <h1 className='md:text-4xl md:text-green-500 z-10 relative font-medium'>Deploy</h1>
              </div>

            </div>


          </div>

          <div className="bg-green-400 h-[600px] flex flex-col items-center gap-5 p-2 relative md:hidden">
            <div className="flex items-center w-full justify-center relative">
              <p className="text-black font-bold mr-10 text-2xl">We</p>
              <div className="rounded-full h-[100px] w-[100px]  flex flex-col justify-center items-center mr-[50px] bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: `url(${assets.Team})` }}>
              <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
              <div className='md:flex md:flex-col md:justify-center md:items-center'>

                <h1 className='text-2xl text-white z-10 relative text-center'>01</h1>
                <h1 className='text-2xl text-green-500 z-10 relative font-medium'>Plan</h1>
              </div>
                {/* <GiDiscussion className='text-lg' />
                <p className="text-center mx-auto text-green-500 font-semibold text-xl">Plan</p> */}
              </div>
            </div>
            <svg
              height="90"
              width="200"
              className="absolute"
              style={{
                top: '55px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <path
                d="M 100,50 Q 100,100 50,150"
                stroke="black"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
            <div className="flex items-center w-full justify-center relative">
              <div className="rounded-full h-[100px] w-[100px] bg-white flex flex-col justify-center items-center mr-[50px] bg-cover bg-center relative" style={{ backgroundImage: `url(${assets.Design})` }}>
              <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div>
              <div className='md:flex md:flex-col md:justify-center md:items-center'>

                <h1 className='text-2xl text-white z-10 relative text-center'>02</h1>
                <h1 className='text-2xl text-green-500 z-10 relative font-medium'>Design</h1>
              </div>
              </div>
              <p className="text-white font-bold mr-10 text-2xl"></p>
            </div>
            <svg
              height="80"
              width="200"
              className="absolute"
              style={{
                top: '175px',
                left: '55%',
                transform: 'translateX(-50%)',
              }}
            >
              <path
                d="M 50,50 Q 100,100 150,150"
                stroke="black"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
            <div className="flex items-center w-full justify-center relative">
              <p className="text-yellow-200 font-bold mr-10 text-2xl">Then</p>
              <div className="rounded-full h-[100px] w-[100px] bg-white flex flex-col justify-center items-center mr-[50px]">
                <MdDeveloperMode className='text-lg' />
                <p className="text-center mx-auto text-green-500 font-semibold text-xl">Develop</p>
              </div>
            </div>

            <svg
              height="95"
              width="200"
              className="absolute"
              style={{
                top: '290px',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <path
                d="M 100,50 Q 100,100 50,150"
                stroke="yellow"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
            <div className="flex items-center w-full justify-center relative">
              <div className="rounded-full h-[100px] w-[100px] bg-white flex flex-col justify-center items-center mr-[50px]">
                <TbBrandSpeedtest className='text-lg' />
                <p className="text-center mx-auto text-green-500 font-semibold text-xl">Test</p>
              </div>
              <p className="text-white font-bold mr-10 text-2xl"></p>
            </div>
            <svg
              height="90"
              width="200"
              className="absolute"
              style={{
                top: '400px',
                left: '60%',
                transform: 'translateX(-50%)',
              }}
            >
              <path
                d="M 50,50 Q 100,100 150,150"
                stroke="yellow"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
            <div className="flex items-center w-full justify-center relative">
              <p className="text-yellow-200 font-bold mr-10 text-2xl">And</p>
              <div className="rounded-full h-[100px] w-[100px] bg-white flex flex-col justify-center items-center mr-[50px]">
                <HiRocketLaunch className='text-lg' />
                <p className="text-center mx-auto text-green-500 font-semibold text-xl">Deploy</p>
              </div>
            </div>
          </div>


        </div>


      </section>

      <Services />
      <Awards />

      <section className='bg-white flex flex-col justify-center items-center mt-5 h-min-[10vh]  hidden md:block '>
     
     
        <div className='flex flex-col justify-center items-center bg-[#212121] md:w-full  md:mt-10 w-full mt-5 md:p-8'>
<div className='md:grid md:grid-cols-12 md:mt-5'>
 <div className='md:col-span-5  w-full relative'>
<h1 className='w-[350px] leading-8 text-white md:text-[32px] text-left md:font-semibold	md:leading-9'>Delivering Excellence to Transform Businesses</h1>
<div className='md:h-1 md:w-1/2 bg-green-500 md:absolute md:mt-5'></div>
<div>
  <p className='md:text-[16px] leading-8 absolute md:mt-10 text-left text-gray-400 w-[400px]'>Are you wondering what sets us apart as the leading global IT development company? It's our unwavering commitment to our core values that truly make a difference.</p>
</div>
  </div> 
  <div className='md:col-span-7  w-full'>
  <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls={true}
    />  </div>
</div>


        </div>
      </section>
      {/* <section className='bg-white flex flex-col justify-center items-center mt-5 h-min-[10vh]  md:hidden block '>
     
     
     <div className='flex flex-col justify-center items-center bg-[#212121] md:w-full  md:mt-10 w-full mt-5 md:p-5 p-5'>
<div className=' w-full'>
<h1 className='text-white text-[22px]'>Delivering Excellence to Transform Businesses</h1>
<div className='h-1 w-1/2 bg-green-500 md:absolute md:mt-5'></div>
<h1 className='text-[15px] text-white mt-5 font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut culpa consequuntur ipsam.</h1>
</div> 

<div>


</div>

     </div>
    
   </section> */}
   <section className='bg-[#212121] justify-center items-center mt-10 h-min-[10vh]  md:hidden block p-2 '>
<div className=' justify-center items-center'>
<div className=' bg-[#212121] md:w-full  md:mt-10 w-full mt-5 md:p-5 p-5'>

<div className=' w-full'>
<h1 className='text-white text-[22px]'>Delivering Excellence to Transform Businesses</h1>
<div className='h-1 w-1/2 bg-green-500 md:absolute md:mt-5'></div>
<h1 className='text-[15px] text-white mt-5 font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut culpa consequuntur ipsam.</h1>
</div> 
</div>
   <Slider ref={sliderRef} {...settings}>
{ scrolldata.map(item=>(
   <>
   
  
{/* <img src={item.image} alt="" /> */}
<div key={item.id} className='flex flex-col gap-2 items-center'>
<div className='h-[200px] w-full bg-no-repeat bg-cover bg-center rounded-md' style={{ backgroundImage: `url(${item.image})` }}></div>
<h1 className='text-green-500 font-medium'>{item.title}</h1>
<p className='text-white text-md min-w-[160px] font-light text-justify hyphens-auto whitespace-break-spaces break-words'>{item.description}</p>
<button className='text-white rounded-full border-2 border-green-500 p-2 hover:bg-white hover:text-green-500 hover:border-white' onClick={()=>handleData(item)}>
  <IoIosArrowRoundForward />
</button>
</div>
</>
  ))
}
</Slider>
<div className='flex justify-center mt-4'>
        {scrolldata.map((_, index) => (
          <div
            key={index}
            className={`w-6 h-1  mx-1 cursor-pointer ${currentSlide === index ? 'bg-green-500' : 'bg-gray-500'}`}
            onClick={() => sliderRef.current.slickGoTo(index)}
          ></div>
        ))}
      </div>
<div className='mx-auto flex gap-2 mt-4 justify-center'>

<div className='h-10 w-min-10 p-2 rounded-full border-1 bg-green-500' onClick={() => sliderRef.current.slickPrev()}>
<IoIosArrowBack className='text-2xl text-white font-light' onClick={() => sliderRef.current.slickPrev()}/>
</div>
<div className='h-10 w-min-10 p-2 rounded-full border-1 bg-green-500' onClick={() => sliderRef.current.slickNext()}>
<IoIosArrowForward className='text-2xl text-white' onClick={() => sliderRef.current.slickNext()}/>
</div>
    </div>
</div>


   </section>

<section className='md:mt-8'>
  <div className='mt-5 flex flex-col justify-center items-center'>
  <div className=' hidden md:block'>
          <h1 className="md:text-4xl md:font-medium text-2xl font-medium inline-block  pb-1">
            How we Onboard Clients
          </h1>
          <div className='h-[2px] w-20 mx-auto bg-green-500'>

          </div>
        </div>
        <div className='md:-mt-10 md:hidden block'>
          <h1 className="md:text-4xl md:font-medium text-2xl font-medium inline-block border-b-4 border-green-500 pb-1">
          How we Onboard Clients
          </h1>
        </div>
        <div className=' hidden md:block'>
          <p className='md:text-center text-justify p-5 hyphens-auto md:text-[16px] leading-8'>
          we believe that a smooth onboarding process is key to a successful project. From our first conversation to the final delivery, we ensure a seamless experience tailored to your needs.            </p>
        </div>
        <div className='md:mt-5 md:hidden block'>
          <p className='md:text-center text-justify p-5 hyphens-auto text-sm'>
          we believe that a smooth onboarding process is key to a successful project. From our first conversation to the final delivery, we ensure a seamless experience tailored to your needs.            </p>
        </div>
  </div>
<div className="md:flex md:justify-center md:items-start space-x-4 md:mt-1 p-10 hidden md:block">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className={`bg-[#F2F5F7] p-6 rounded-sm  w-64 client `} 
          style={{ marginTop: `${index * 1.5}rem` }}
        >
          <h2 className="text-4xl font-bold mb-4 number">{step.number}</h2>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-700">{step.description}</p>
        </div>
      ))}
    </div>

    <div className='flex flex-col gap-5  block justify-center items-center  p-10 md:hidden'>
    {steps.map((step, index) => (
       <div
       key={step.number}
       className={`bg-[#F2F5F7] p-6 rounded-sm  w-64 client `} 
      //  style={{ marginTop: `${index * 1.5}rem` }}
     >
        <h2 className="text-4xl font-bold mb-4 number">{step.number}</h2>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-700">{step.description}</p>
      </div>
    ))}
    </div>
</section>
<Form/>
<FooterWithSocialLinks/>
    </div>
  );
}

export default Home;
