import Image from "next/image";
import Link from "next/link";
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
        <h2 className="text-3xl font-bold border-b-2 pb-2">Portfolio</h2>
        {/* Portfolio items */}
        {/* recipe box */}
        <ProjectCard
          src="/screenshots/recipe-box.png"
          alt="recipe box project"
          href="https://recipe-box-phi.vercel.app/"
          githubHref="https://github.com/rutherfordaaron/recipe-box"
          title="Recipe Box"
          subtitle="Digitize your recipe book with Recipe Box."
          body={<p>Recipe Box is a full stack application created using Next.js and TailwindCSS with a custom built authentication API and the ability to store user data by leveraging MongoDB. A few of its features include: a rating system for public recipes, an internal search engine for finding the right recipes, options for making recipes public or private, and easy to navigate froms. Being a labor of love, Recipe Box is continuously being updated and improved upon.</p>}
        />

        {/* la buca */}
        <ProjectCard
          src="/screenshots/la-buca.png"
          alt="La Buca website"
          href="https://la-buca-italian-cafe.vercel.app/"
          githubHref="https://github.com/rutherfordaaron/la-buca-italian-cafe"
          title="La Buca Italian Restaraunt"
          subtitle="A modernization and reimagination of an existing site."
          body={<p>An innovative redesign of a local restaruant's website. La Buca's website includes menus, review, links to social sites, and directions using Google Maps. Created with Next.js and TailwindCSS, this site in an excellent example of high quality user experience. See the <Link href="https://labucaitaliancafe.com/">original website</Link> for comparison.</p>}
          reverse={true}
        />

        {/* countries api */}
        <ProjectCard
          src="/screenshots/e-commerce.png"
          alt="static e-ommerce page"
          href="https://rutherfordaaron.github.io/e-commerce-page/"
          githubHref="https://github.com/rutherfordaaron/e-commerce-page/"
          title="Static E-Commerce Page"
          subtitle="A pixel-perfect creation from a given design."
          body={<p>Built from a <Link href="https://frontendmentor.io">Frontend Mentor</Link> project, this static web page was created with pixel-perfect precision. Built using React, SCSS, and only a few given images - no boilerplate code was used.</p>}
        />

        {/* rock, paper, scissors */}
        <ProjectCard
          src="/screenshots/rock-paper-scissors.png"
          alt="rock paper scissors project"
          href="https://rutherfordaaron.github.io/rock-paper-scissors-lizard-spock/"
          githubHref="https://github.com/rutherfordaaron/rock-paper-scissors-lizard-spock"
          title="Rock, Paper, Scissors, Lizard, Spock"
          subtitle="An expanded version of the classic game."
          body={<p>Play against the computer as it randomly picks a symbol to put against you. This project was built with React and plain CSS, and shows off complex and well orchestrated CSS animations.</p>}
          reverse={true}
        />

        <ProjectCard
          src="/screenshots/tip-calc.png"
          alt="tip splitter project"
          href="https://rutherfordaaron.github.io/tip-calc/"
          githubHref="https://github.com/rutherfordaaron/tip-calc/"
          title="Tip Splitter"
          subtitle="Split the tip with this calculator."
          body={<p>Built using React and CSS, use this simple app to split the bill between multiple people and calculate the tip.</p>}
        />

        <ProjectCard
          src="/screenshots/todo.png"
          alt="todo project"
          href="https://rutherfordaaron.github.io/todo-app/"
          githubHref="https://github.com/rutherfordaaron/todo-app/"
          title="Todo"
          subtitle="A simple todo app."
          body={<p>Track and manage tasks using this simple todo app.</p>}
          reverse={true}
        />
      </section>
    </article>
  )
}

export default Home;