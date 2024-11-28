import user from "../../images/download.svg"
export default function Home() {
  return (
<>
<div className="h-screen bg-primary-300 flex flex-wrap flex-col items-center  gap-2 pt-4 ">
  <img src={user} alt="user" className="w-[20%]"/>
  <h1 className="font-semibold text-white text-4xl">START FRAMEWORK  </h1>
  <div className="relative">
  <div className="before:absolute before:top-3 before:-left-[120px] before:h-[4px] before:w-[100px] before:bg-white "></div>
  <i class="fa-solid fa-star text-white  "></i>
  <div className="before:absolute  before:bg-white before:top-3 before:-right-[120px] before:h-[4px] before:w-[100px]"></div>
  </div>

  
  <h4 className="text-white">Graphic Artist - Web Designer - Illustrator
  </h4>
</div>
</>
  )
}
