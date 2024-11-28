
export default function Footer() {
  return (
    <>
    <div className="bg-primary-50 grid sm:grid-cols-1 md:grid-cols-3 place-content-center gap-3  w-full p-16 ">
      <div className="first text-center ">
<h3 className="text-white text-3xl">LOCATION</h3>
<h4 className="text-white text-1xl">2215 John Daniel Drive</h4>
<h5 className="text-white text-1xl">Clark, MO 65243</h5>
      </div>
      <div className="second flex flex-wrap flex-col justify-center items-center text-center">
<h3 className="text-white text-3xl">AROUND THE WEB</h3>
<ul className="flex space-x-3 mt-3">
  <i class="fa-brands fa-facebook text-xl text-white"></i>
  <i class="fa-brands fa-twitter text-xl text-white"></i>
  <i class="fa-brands fa-linkedin-in text-xl text-white"></i>
  <i class="fa-solid fa-globe text-xl text-white"></i>
</ul>
      </div>
      <div className="third text-center">
<h3 className="text-white text-3xl">ABOUT FREELANCER</h3>
<p className="text-white text-1xl">Freelance is a free to use, licensed Bootstrap theme <br/> created by Route</p>
      </div>

    </div>
    <div className="bg-primary-200 p-5 w-full text-center">
  <h4 className="text-white">Copyright © Your Website 2021</h4>
</div>
    </>
  )
}
