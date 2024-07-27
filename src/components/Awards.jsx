import React from 'react'
import Award from "../assets/Award.jpg"
import Clients from "../assets/value.png"
import Medal from "../assets/medal.png"
import Rating from "../assets/rating.png"
const Awards = () => {
    return (
        <div>
            <section className='bg-white flex flex-col justify-center items-center mt-5 h-min-[10vh] '>
            <div className=' hidden md:block'>
    <h1 className="md:text-4xl md:font-medium text-2xl font-medium inline-block  pb-1">
    Why We're the Best in Town
</h1>    
<div className='md:h-1 bg-green-500 md:absolute md:mt-5 md:mx-auto'></div>

</div>
<div className='md:-mt-10 md:hidden block'>
    <h1 className="md:text-4xl md:font-medium text-center text-2xl font-medium inline-block  pb-1">
    Why We're the Best in Town
</h1>    
<div className='h-1 w-1/2 bg-green-500 md:absolute md:mt-5 mx-auto '></div>

</div>
                <div className='flex flex-col justify-center items-center bg-gray-200 md:w-[80%] rounded-lg md:mt-10 w-[90%] mt-5'>

                    <div className='flex flex-col md:flex-row w-full p-5 gap-10'>
                        <div>
                            <img src={Award} alt="" className='md:h-[300px] rounded-lg shadow-xl' />
                        </div>
                        <div className='md:block hidden' >
                            <div className='flex flex-col justify-center items-center w-full gap-5 '>
                                <div className='flex gap-5  w-[550px] '>
                                    <div className='w-[80px] h-[80px] bg-green-500 rounded-full shadow-2xl flex justify-center items-center '>

                                        <img src={Clients} alt="" className='h-[50px]' />

                                    </div>
                                    <div>
                                        <h1 className='font-semibold'>Happy Clients</h1>
                                        <p> Proudly serving countless happy clients worldwide. </p>

                                    </div>
                                </div>



                                <div className='flex gap-5 w-[550px]'>
                                    <div className='w-[80px] h-[80px] bg-green-500 rounded-full shadow-2xl flex justify-center items-center '>

                                        <img src={Medal} alt="" className='h-[50px]' />
                                    </div>
                                    <div>
                                    <h1 className='font-semibold'>Best Awarded</h1>
                                    <p>Recipient of multiple prestigious awards for excellence.</p>
                                    </div>
                                </div>
                                <div className='flex gap-5 w-[550px]'>
                                    <div className='w-[80px] h-[80px] bg-green-500 rounded-full shadow-2xl flex justify-center items-center '>

                                        <img src={Rating} alt="" className='h-[50px]' />
                                    </div>
                                    <div>
                                    <h1 className='font-semibold'>High Rating</h1>
                                    <p>Consistently rated highly by our satisfied customers.</p>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='block md:hidden '>
                            <div className='flex flex-col gap-5'>

 <div className='flex gap-2 '>
 <div className='w-[150px] h-[70px] bg-green-500 rounded-full shadow-2xl flex justify-center items-center '>
 <img src={Clients} alt="" className='h-[50px]' />

</div>
<div>
                                        <h1 className='font-semibold'>Happy Clients</h1>
                                        <p className='text-sm'> Proudly serving countless happy clients worldwide. </p>

                                    </div>
 </div>
 <div className='flex gap-2 '>
 <div className='w-[150px] h-[70px] bg-green-500 rounded-full shadow-2xl flex justify-center items-center '>
 <img src={Medal} alt="" className='h-[50px]' />

</div>
<div>
                                        <h1 className='font-semibold'>Best Awarded</h1>
                                        <p className='text-sm'> Recipient of multiple prestigious awards for excellence. </p>

                                    </div>
 </div>
 <div className='flex gap-2 '>
 <div className='w-[150px] h-[70px] bg-green-500 rounded-full shadow-2xl flex justify-center items-center '>
 <img src={Rating} alt="" className='h-[50px]' />

</div>
<div>
                                        <h1 className='font-semibold'>High Rating</h1>
                                        <p className='text-sm'> Consistently rated highly by our satisfied customers. </p>

                                    </div>
 </div>
                            </div>
                        </div>

                    </div>


                    <div className=' translate-y-5 translate-x-5  bg-green-500 w-[90%]  rounded-md p-5 text-white md:text-[16px] leading-8'>
                        <p className=''>Founded in the year 2024,My Agency is a leading Mobile App, Software Development and Web development company helping global businesses to bring digital transformation. Being a true technological companion, My Agency helps startups to enterprise-level businesses to be the industry leaders.</p>
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Awards