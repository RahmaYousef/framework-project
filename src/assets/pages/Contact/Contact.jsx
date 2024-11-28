import React from 'react'

export default function Contact() {
  
  return (
   <>
   <div className=" w-full">
    <div className="flex flex-wrap flex-col justify-center items-center my-11">
    <h2 className="text-4xl">CONTACT SECTION    </h2>
    <div className="relative mt-5">
  <div className="before:absolute before:h-[4px] before:w-[100px]  before:top-3 before:right-[150%]  before:bg-black "></div>
  <i class="fa-solid fa-star   "></i>
  <div className="before:absolute  before:bg-black before:bottom-2 before:left-[150%] before:h-[4px] before:w-[100px]"></div>
  </div>
  <form className='my-10 flex flex-wrap flex-col justify-center items-center gap-y-10' >
    <input type="text" placeholder='userName' className=' form-control w-96' />
    <input type="text" placeholder='userAge' className=' form-control w-96'/>
    <input type="text" placeholder='userEmail' className=' form-control w-96'/>
    <input type="text" placeholder='userPassword' className=' form-control w-96'/>
    <button type='submit' className='btn '>Send Message</button>
  </form>
    </div>
   </div>
   </>
  )
}
