import { useState } from "react"
import poert1 from "../../images/poert1.png"
import poert2 from "../../images/port2.png"
import poert3 from "../../images/port3.png"
import { Button, Modal } from "flowbite-react";


export default function Portfolio() {
  const [openModal, setOpenModal] = useState(true);


  let [images,setImages]=useState([
    {path:poert1,id:1},
    {path:poert2,id:2},
    {path:poert3,id:3},
    {path:poert1,id:4},
    {path:poert2,id:5},
    {path:poert3,id:6},
  ])
  return (
    <>
    <div className="w-full text-center ">
      <h2 className="text-4xl mt-10">PORTFOLIO COMPONENT</h2>
      <div className="relative mt-5">
  <div className="before:absolute before:h-[4px] before:w-[100px]  before:top-3 before:right-[52%] before:bg-black "></div>
  <i class="fa-solid fa-star   "></i>
  <div className="before:absolute  before:bg-black before:bottom-2 before:left-[52%] before:h-[4px] before:w-[100px]"></div>
  </div>
  <div className="container">
  <div className=" grid sm:grid-cols-1 md:grid-cols-3   p-24 space-x-10 space-y-10">
    {images.map((element)=>{
      return (
        <div className="relative cursor-pointer " >
<img src={element.path} alt="poert1" className="rounded-md " />
<div onClick={() => setOpenModal(element.id)} className="layer absolute inset-0 w-full h-full bg-[#1abc9ce6] flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-1000 rounded-md">
  <i className="fa-solid fa-plus text-6xl text-white   "></i>
</div>
    </div >
      )
    })}
    </div>
  </div>
    {images.map((element)=>{
      return (
        <Modal dismissible  show={openModal === element.id} onClose={() => setOpenModal(false)}>
       <img src={element.path} />
      </Modal>
      )
    })}
 </div>
    </>
  )
}

