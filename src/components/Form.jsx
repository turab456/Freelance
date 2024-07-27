import React from 'react'
import Call from "../assets/call.jpg"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import "../App.css"
  
const Form = () => {
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => setOpen(!open);
  return (
    <div>
       
                    <section className='bg-white flex flex-col justify-center items-center mt-5 h-min-[10vh] md:block hidden '>

                      


<div style={{backgroundImage:`url(${Call})`}} className='md:w-full h-min-[10vh] bg-no-repeat bg-cover bg-center flex  justify-center items-center relative md:p-5'>
<div className="absolute inset-0 bg-black opacity-50 "></div>

<div className='md:grid md:grid-cols-2 md:justify-center md:items-center md:gap-[100px]'>
<div>
<div className='md:w-[350px] relative'>
                    <h1 className='md:text-[29px] leading-8 font-medium'><span className='font-light text-gray-300'>Looking for </span><span className='text-white'>software development services?</span></h1>
                    <div className='h-[2px] w-20 mt-5 bg-green-500'>

</div>
<div className='md:mt-5'>
<h1 className='text-[16px] leading-8 text-white'>Before we start, we would like to better understand your needs. We'll review your application and schedule a free estimation call.</h1>

</div>
                    </div>
</div>
<div>
<div className="glass p-6 md:h-min-[10px]">
  <form action="" className="flex md:flex-col gap-6">
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex gap-8">
        <div className="flex flex-col">
          <label className="text-white text-lg mb-2">First Name</label>
          <input
            type="text"
            className="h-10 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-lg mb-2">Last Name</label>
          <input
            type="text"
            className="h-10 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col">
          <label className="text-white text-lg mb-2">Email</label>
          <input
            type="text"
            className="h-10 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-lg mb-2">Mobile Number</label>
          <input
            type="text"
            className="h-10 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          <label className="text-white text-lg mb-2">Description</label>
          <textarea
            className="w-full h-24 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  </form>
</div>

</div>
</div>

</div>


</section>
                    <section className='bg-white flex flex-col justify-center items-center mt-5 h-min-[10vh] block md:hidden '>

                      

                    <div style={{backgroundImage:`url(${Call})`}} className='w-full  bg-no-repeat bg-cover bg-center flex  justify-center items-center relative p-5'>
                    <div className="absolute inset-0 bg-black opacity-50 "></div>

                    <div className='flex flex-col justify-center'>
                    <div className='md:w-[350px] relative'>
                    <h1 className='md:text-[29px] text-[22px] leading-8 font-medium'><span className='font-light text-gray-300'>Looking for </span><span className='text-white'>software development services?</span></h1>
                    <div className='h-[2px] w-20  bg-green-500'>

</div>
<div className='md:mt-5'>
<h1 className='text-[16px] leading-7   text-white'>Before we start, we would like to better understand your needs. We'll review your application and schedule a free estimation call.</h1>

</div>
                    </div>
                    
                    <div className='flex justify-center items-center'>
<div className='glass p-6'>
<form action="" className="flex flex-col gap-6">
<div className="flex flex-col justify-center items-center gap-5">
<div className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label className="text-white text-lg mb-2">First Name</label>
          <input
            type="text"
            className="h-10 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-lg mb-2">Last Name</label>
          <input
            type="text"
            className="h-10 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-lg mb-2">Mobile Number</label>
          <input
            type="text"
            className="h-10 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white text-lg mb-2">Email</label>
          <input
            type="text"
            className="h-10 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col">
        <label className="text-white text-lg mb-2">Description</label>
          <textarea
            className="w-full h-24 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
</div>
</form>
</div>
                    </div>
                    </div>

</div>



</section>
    </div>
  )
}

export default Form