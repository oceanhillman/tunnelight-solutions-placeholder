import Image from "next/image";
import logo from "../public/images/text-logo.png";

export default function Home() {

  return (
    <div className="absolute w-screen h-screen">
      <div id="hero-container" className="z-0 absolute w-screen h-screen">
        <div className="w-screen h-screen flex flex-col items-center justify-between">

          <div></div>

          <div className="flex flex-col justify-center items-center">
            <Image src={logo} alt="logo" priority={true} className=" w-[400px] sm:w[400px] md:w-[500px] lg:w-[600px]" />
            <h1 className="mt-[5%] text-center text-white text-xl md:text-2xl lg:text-3xl">
              BETA VERSION SPRING 2024
            </h1>
          </div>
          
          <h1 className="mx-[20px] -mt-[50px] mb-[20px] pt-[30px] px[100px] text-center border-t-2 text-white text-xl md:text-2xl lg:text-3xl">
            Empowering the unhoused with AI-driven solutions
          </h1>

        </div>
      </div>
    </div>
  )
}