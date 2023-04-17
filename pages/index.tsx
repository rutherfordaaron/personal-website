import Image from "next/image";
import Carousel from "../components/carousel/carousel";
import ProjectCard from "../components/portfolio/projectCard";

const Home = () => {
  return (
    <article>
      {/* ---------- Landing Section ---------- */}
      <section className="lg:grid lg:px-44 grid-cols-2 justify-center items-center gap-12">
        {/* Name Card & Image Wrapper */}
        <div className="relative flex flex-col justify-center items-center gap-0 md:mt-10">
          {/* Headshot Image */}
          <div className="w-56 h-72 md:w-72 md:h-96 shadow-md bg-gray-600 relative right-8 md:right-24">
            <Image src="/headshot.jpg" alt="Aaron Rutherford Headshot" layout="fill" className="filter grayscale-[50%]" />
          </div>
          {/* Name Card */}
          <div className="relative bg-gray-200 px-8 py-6 md:px-12 md:py-8 bottom-36 md:bottom-48 -right-8 md:-right-10 shadow-lg z-40">
            <h1 className="text-xl md:text-2xl">Aaron Rutherford</h1>
            <p className="text-md md:text-xl text-gray-600 italic indent-0">Fullstack Developer</p>
          </div>
        </div>
        {/* Intro */}
        <p className="lg:w-96 lg:pb-24 relative bottom-10 lg:bottom-0">I am passionate about creating sites that are inspiring, intuitive, and innovative. I'm always adding new technologies and techniques to my repretoire to ensure my projects are the best that they can be. I also have a strong belief that everything should be accessible: from they way I write my code in a readable way for others, to the end result that the end-user experiences.</p>
      </section>

      {/* ---------- Tools Carousel ---------- */}
      <div className="relative bottom-4 md:bottom-12">
        <Carousel />
      </div>
      {/* ---------- Projects Section ---------- */}
      <section id="portfolio">
        <h2 className="text-3xl">Portfolio</h2>
        {/* Portfolio items */}
        <div className="my-8 flex gap-10 max-md:flex-col items-center">
          <ProjectCard src="/screenshots/recipe-box.png" alt="recipe box project" href="https://recipe-box-phi.vercel.app/" />
          <div>
            <h3>Recipe Box</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div className="my-8 flex gap-10 max-md:flex-col items-center flex-row-reverse">
          <ProjectCard src="/screenshots/la-buca.png" alt="La Buca website" href="https://la-buca-italian-cafe.vercel.app/" />
          <div>
            <h3>La Buca, Redesigned</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div className="my-8 flex gap-10 max-md:flex-col items-center">
          <ProjectCard src="/screenshots/countries-api.png" alt="countries api project" href="https://hazipan.github.io/countries-project-using-api/" />
          <div>
            <h3>Countries API</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div className="my-8 flex gap-10 max-md:flex-col items-center flex-row-reverse">
          <ProjectCard src="/screenshots/rock-paper-scissors.png" alt="rock paper scissors project" href="https://hazipan.github.io/rock-paper-scissors-lizard-spock/" />
          <div>
            <h3>Rock, Paper, Scissors, Lizard, Spock</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div className="my-8 flex gap-10 max-md:flex-col items-center">
          <ProjectCard src="/screenshots/tip-calc.png" alt="tip splitter project" href="https://hazipan.github.io/tip-calc/" />
          <div>
            <h3>Tip Splitter</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div className="my-8 flex gap-10 max-md:flex-col items-center flex-row-reverse">
          <ProjectCard src="/screenshots/todo.png" alt="todo project" href="https://hazipan.github.io/todo-app/" />
          <div>
            <h3>Todo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Home;