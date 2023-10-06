import Image from "next/image";
import Link from "next/link";
import Carousel from "../components/carousel/carousel";
import ProjectCard from "../components/portfolio/projectCard";
import CarouselSvg from "../components/carousel/carouselSvg";
import Head from "next/head";
import CustomHead from "../components/customHead";

const Home = () => {
  return (
    <article>
      <CustomHead
        title="Aaron Rutherford | Fullstack Developer"
        description="Protfolio of Aaron Rutherford, fullstack developer specializing in Next.js, React, Tailwind, and MongoDB."
        keywords="portfolio, fullstack, next.js, next, react, react.js, mongodb, tailwind, tailwindCSS, aaron rutherford, hire"
      />
      {/* ---------- Landing Section ---------- */}
      <section className="lg:grid lg:px-44 grid-cols-2 justify-center items-center gap-12">
        {/* Name Card & Image Wrapper */}
        <div className="relative flex flex-col justify-center items-center gap-0 md:mt-10">
          {/* Headshot Image */}
          <div className="w-56 h-72 md:w-72 md:h-96 shadow-md bg-accent-300 relative right-8 md:right-24">
            <Image src="/headshot.jpg" alt="Aaron Rutherford Headshot" layout="fill" />
          </div>
          {/* Name Card */}
          <div className="relative bg-accent-200 px-8 py-6 md:px-12 md:py-8 bottom-36 md:bottom-48 -right-8 md:-right-10 shadow-lg z-40">
            <h1 className="text-xl md:text-2xl">Aaron Rutherford</h1>
            <p className="text-md md:text-xl text-accent-600 italic indent-0">Fullstack Developer</p>
          </div>
        </div>
        {/* Intro */}
        <p className="lg:w-96 lg:pb-24 relative bottom-10 lg:bottom-0">I am passionate about creating sites that are inspiring, intuitive, and innovative. I&apos;m always adding new technologies and techniques to my repretoire to ensure my projects are the best that they can be. I also have a strong belief that everything should be accessible: from they way I write my code in a readable way for others, to the end result that the end-user experiences.</p>
      </section>

      {/* ---------- Tools Carousel ---------- */}
      <div className="relative bottom-4 md:bottom-12">
        <Carousel items={[
          { element: <CarouselSvg src="/stack-icons/mongodb.svg" alt="mongodb logo" />, index: 0 },
          { element: <CarouselSvg src="/stack-icons/nextjs.svg" alt="next.js logo" />, index: 1 },
          { element: <CarouselSvg src="/stack-icons/node.svg" alt="node.js logo" />, index: 2 },
          { element: <CarouselSvg src="/stack-icons/react.svg" alt="react.js logo" />, index: 3 },
          { element: <CarouselSvg src="/stack-icons/tailwind.svg" alt="tailwind logo" />, index: 4 },
          { element: <CarouselSvg src="/stack-icons/typescript.svg" alt="typescript logo" />, index: 5 },
          { element: <CarouselSvg src="/stack-icons/mongodb.svg" alt="mongodb logo" />, index: 6 },
          { element: <CarouselSvg src="/stack-icons/nextjs.svg" alt="next.js logo" />, index: 7 },
          { element: <CarouselSvg src="/stack-icons/node.svg" alt="node.js logo" />, index: 8 },
          { element: <CarouselSvg src="/stack-icons/react.svg" alt="react.js logo" />, index: 9 },
          { element: <CarouselSvg src="/stack-icons/tailwind.svg" alt="tailwind logo" />, index: 10 },
          { element: <CarouselSvg src="/stack-icons/typescript.svg" alt="typescript logo" />, index: 11 },
        ]} />
      </div>

      {/* ---------- Projects Section ---------- */}
      <section id="portfolio">
        <h2 className="text-3xl font-bold border-b-2 pb-2 border-accent-300">Portfolio</h2>
        {/* Portfolio items */}
        {/* Guildsmen project */}
        <ProjectCard
          src="/screenshots/guildsmen.png"
          alt="guildsmen project"
          href="https://guildsmen-ttrpg.com/"
          githubHref="https://github.com/rutherfordaaron/guildsmen-website"
          title="Guildsmen"
          subtitle="My primary passion project"
          reverse={true}
          body={<p>This site is a fullstack website that leverages the latest version of Next.js, React, MongoDB, and TailwindCSS. This project is the culmination of a couple years of work creating a tabletop role play game called Guildsmen. It's my current passion project and has really pushed my web development skills. It is still a work in progress, but the core of the game is complete.</p>}
        />

        {/* recipe box */}
        <ProjectCard
          src="/screenshots/recipe-box.png"
          alt="recipe box project"
          href="https://recipe-box-phi.vercel.app/"
          githubHref="https://github.com/rutherfordaaron/recipe-box"
          title="Recipe Box"
          subtitle="A social site for recipe sharing and creation."
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
          body={<p>An innovative redesign of a local restaruant&apos;s website. La Buca&apos;s website includes menus, review, links to social sites, and directions using Google Maps. Created with Next.js and TailwindCSS, this site in an excellent example of high quality user experience. See the <Link href="https://labucaitaliancafe.com/">original website</Link> for comparison.</p>}
          reverse={true}
        />

        {/* freelance site */}
        <ProjectCard
          src="/screenshots/freelance.png"
          alt="freelance site screenshot"
          href="https://freelance-site-beige.vercel.app/"
          githubHref="https://github.com/rutherfordaaron/freelance-site/"
          title="Freelance Site"
          subtitle="A site to hire me and my partner for small projects."
          body={<p>A freelance site for my partnership with designer Harmony Brooks, this site has a playful personality and includes custom-built SVGs and animations. Codded using Next.js, React, and TailwindCSS, this site is currently a work in progress.</p>}
        />

        {/* rock paper scissors */}
        <ProjectCard
          src="/screenshots/rock-paper-scissors.png"
          alt="rock paper scissors project screenshot"
          href="https://rutherfordaaron.github.io/rock-paper-scissors-lizard-spock/"
          githubHref="https://github.com/rutherfordaaron/rock-paper-scissors-lizard-spock"
          title="An Expanded, Classic Game"
          subtitle="An expanded version of the classic rock, paper, scissors game."
          body={<p>An extended version of the classic Rock, Paper, Scissors game, this site uses a random number generator and logic statements to determine the winner and local storage to track and store your score across visits. This site has excellent CSS animations and was created using React and plain CSS.</p>}
          reverse={true}
        />

        {/* e-commerce page */}
        <ProjectCard
          src="/screenshots/e-commerce.png"
          alt="static e-ommerce page"
          href="https://rutherfordaaron.github.io/e-commerce-page/"
          githubHref="https://github.com/rutherfordaaron/e-commerce-page/"
          title="Static E-Commerce Page"
          subtitle="A pixel-perfect creation from a given design."
          body={<p>A demo page of a standard e-commerce site using images provided by <Link href="https://frontendmentor.io">Frontend Mentor</Link> and coded wiht React.js and SCSS. This site includes cart functionality, a shadow box display, and a stationary carousel.</p>}
        />

        {/* tip splitter */}
        <ProjectCard
          src="/screenshots/tip-calc.png"
          alt="tip splitter project screenshot"
          href="https://rutherfordaaron.github.io/tip-calc/"
          githubHref="https://github.com/rutherfordaaron/tip-calc/"
          title="Tip Splitting Calculator"
          subtitle="A percentage calculator."
          body={<p>A web application that calculates preset and custom percentages and divides among participants. This application has a strong visual hierarchy and uses input fields with hover and focus states.</p>}
          reverse={true}
        />
      </section>
    </article>
  )
}

export default Home;