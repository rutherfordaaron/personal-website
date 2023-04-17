import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/carousel/carousel";
import ProjectCard from "../components/portfolio/projectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

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
        <h2 className="text-3xl font-bold border-b-2 pb-2">Portfolio</h2>
        {/* Portfolio items */}
        {/* recipe box */}
        <div className="my-8 flex gap-10 max-md:flex-col-reverse items-center">
          <ProjectCard src="/screenshots/recipe-box.png" alt="recipe box project" href="https://recipe-box-phi.vercel.app/" />
          <div>
            <h3><Link href="https://recipe-box-phi.vercel.app/">Recipe Box</Link></h3>
            <p className="h3-sub">Digitize your recipe book with Recipe Box.</p>
            <p>Recipe Box is a full stack application created using Next.js and TailwindCSS with a custom built authentication API and the ability to store user data by leveraging MongoDB. A few of its features include: a rating system for public recipes, an internal search engine for finding the right recipes, options for making recipes public or private, and easy to navigate froms. A labor of love, Recipe Box is continuously being updated and improved upon. More features are on their way, so check back often.</p>
            <Link href="#" legacyBehavior={false}><p className="indent-0 pt-2">See it on GitHub. <FontAwesomeIcon className="opacity-75" icon={faExternalLink} /></p></Link>
          </div>
        </div>

        {/* la buca */}
        <div className="my-8 flex gap-10 max-md:flex-col-reverse items-center flex-row-reverse">
          <ProjectCard src="/screenshots/la-buca.png" alt="La Buca website" href="https://la-buca-italian-cafe.vercel.app/" />
          <div>
            <h3><Link href="https://la-buca-italian-cafe.vercel.app/">La Buca Italian Resaraunt</Link></h3>
            <p className="h3-sub">A modernization and reimagination of an existing site.</p>
            <p>An innovative redesign of a local restaruant's website. La Buca's website includes menus, review, links to social sites, and directions using Google Maps. Created with Next.js and TailwindCSS, this site in an excellent example of high quality user experience. See the <Link href="https://labucaitaliancafe.com/">original website</Link> for comparison.</p>
            <Link href="https://github.com/Hazipan/la-buca-italian-cafe" legacyBehavior={false}><p className="indent-0 pt-2">See it on GitHub. <FontAwesomeIcon className="opacity-75" icon={faExternalLink} /></p></Link>
          </div>
        </div>

        {/* countries api */}
        <div className="my-8 flex gap-10 max-md:flex-col-reverse items-center">
          <ProjectCard src="/screenshots/countries-api.png" alt="countries api project" href="https://hazipan.github.io/countries-project-using-api/" />
          <div>
            <h3><Link href="https://hazipan.github.io/countries-project-using-api/">Countries of the World</Link></h3>
            <p className="h3-sub">Learn interesting things about any country you can think of.</p>
            <p>My first exposure to API's and fetching data from an external source, this project allows you to explore all the countries of the world and learn about things like their currency, population, and what their flag looks like. This project was built with React and React-Router. It's data comes from the <Link href="https://restcountries.com/">Countries API</Link></p>
            <Link href="https://github.com/Hazipan/countries-project-using-api/" legacyBehavior={false}><p className="indent-0 pt-2">See it on GitHub. <FontAwesomeIcon className="opacity-75" icon={faExternalLink} /></p></Link>
          </div>
        </div>

        {/* rock, paper, scissors */}
        <div className="my-8 flex gap-10 max-md:flex-col-reverse items-center flex-row-reverse">
          <ProjectCard src="/screenshots/rock-paper-scissors.png" alt="rock paper scissors project" href="https://hazipan.github.io/rock-paper-scissors-lizard-spock/" />
          <div>
            <h3><Link href="https://hazipan.github.io/rock-paper-scissors-lizard-spock/">Rock, Paper, Scissors, Lizard, Spock</Link></h3>
            <p className="h3-sub">An expanded version of the classic game.</p>
            <p>Play against the computer as it randomly picks a symbol to put against you. This project was built with React and plain CSS, and it really tested my CSS animation skills and introduced me to the concept of data persistence. See how high (or low) of a score you can get. The highest so far is 23 and the lowest is -11.</p>
            <Link href="https://github.com/Hazipan/rock-paper-scissors-lizard-spock" legacyBehavior={false}><p className="indent-0 pt-2">See it on GitHub. <FontAwesomeIcon className="opacity-75" icon={faExternalLink} /></p></Link>
          </div>
        </div>

        <div className="my-8 flex gap-10 max-md:flex-col-reverse items-center">
          <ProjectCard src="/screenshots/tip-calc.png" alt="tip splitter project" href="https://hazipan.github.io/tip-calc/" />
          <div>
            <h3>Tip Splitter</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link href="https://github.com/Hazipan/tip-calc/" legacyBehavior={false}><p className="indent-0 pt-2">See it on GitHub. <FontAwesomeIcon className="opacity-75" icon={faExternalLink} /></p></Link>
          </div>
        </div>

        <div className="my-8 flex gap-10 max-md:flex-col-reverse items-center flex-row-reverse">
          <ProjectCard src="/screenshots/todo.png" alt="todo project" href="https://hazipan.github.io/todo-app/" />
          <div>
            <h3><Link href="https://hazipan.github.io/todo-app/">Todo</Link></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Link href="https://github.com/Hazipan/todo-app/" legacyBehavior={false}><p className="indent-0 pt-2">See it on GitHub. <FontAwesomeIcon className="opacity-75" icon={faExternalLink} /></p></Link>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Home;