import Image from "next/image";
import Carousel from "../components/carousel/carousel";

const Home = () => {
  return (
    <article>
      {/* ---------- Landing Section ---------- */}
      <section className="lg:grid lg:px-44 grid-cols-2 justify-center items-center gap-12">
        {/* Name Card & Image Wrapper */}
        <div className="relative flex flex-col justify-center items-center gap-0 md:mt-10">
          {/* Headshot Image */}
          <div className="w-56 h-72 md:w-72 md:h-96 shadow-md bg-gray-600 relative right-8 md:right-24">
            {/* <Image src="/headshot.jpg" alt="Aaron Rutherford Headshot" layout="fill" /> */}
          </div>
          {/* Name Card */}
          <div className="relative bg-gray-200 px-8 py-6 md:px-12 md:py-8 bottom-36 md:bottom-48 -right-8 md:-right-10 shadow-lg z-40">
            <h1 className="text-xl md:text-2xl">Aaron Rutherford</h1>
            <p className="text-md md:text-xl text-gray-600 italic">Fullstack Developer</p>
          </div>
        </div>
        {/* Intro */}
        <p className="lg:w-96 lg:pb-24 indent-10 relative bottom-10 lg:bottom-0">I am passionate about creating sites that are inspiring, intuitive, and innovative. I'm always adding new technologies and techniques to my repretoire to ensure my projects are the best that they can be. I also have a strong belief that everything should be accessible: from they way I write my code in a readable way for others, to the end result that the end-user experiences.</p>
      </section>

      {/* ---------- Tools Carousel ---------- */}
      <Carousel />

      {/* ---------- Projects Section ---------- */}
      <section id="portfolio">
      </section>
    </article>
  )
}

export default Home;