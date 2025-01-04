import Image from "next/image";
import we3 from "../assets/logo_dark.png";
import we31 from "../assets/developer-8829735_1280.webp";

export default function Experience() {
  return (
    <div className="mt-24 px-5 md:px-0">
      <h2 className="text-2xl mb-4">Experience</h2>
      <div className="flex items-center space-x-4">
        <Image src={we3} alt="profile_pic" className="w-8 h-4" />
        <h3>We3 Tech Work</h3>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="md:w-2/3 pr-6">
          <div className="text-sm py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nam
            neque voluptatum eos odit ratione a culpa enim. Explicabo, officia
            dicta. Id quasi a et eligendi nulla sit, repudiandae illum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita
            modi ex. Fugiat porro blanditiis quod reiciendis assumenda. Aperiam
            ipsam placeat cumque amet accusamus veritatis non quasi ipsa
            provident fugit.
          </div>
        </div>
        <div className="md:w-1/3 mt-4">
          <Image
            src={we31}
            alt="we3"
            className="md:w-72 md:h-40 w-full rounded-xl"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Image src={we3} alt="profile_pic" className="w-8 h-4" />
        <h3>We3 Tech Work</h3>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between">
        <div className="md:w-2/3 pr-6">
          <div className="text-sm py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, nam
            neque voluptatum eos odit ratione a culpa enim. Explicabo, officia
            dicta. Id quasi a et eligendi nulla sit, repudiandae illum. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Incidunt expedita
            modi ex. Fugiat porro blanditiis quod reiciendis assumenda. Aperiam
            ipsam placeat cumque amet accusamus veritatis non quasi ipsa
            provident fugit.
          </div>
        </div>
        <div className="md:w-1/3 mt-4">
          <Image
            src={we31}
            alt="we3"
            className="md:w-72 md:h-40 w-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
