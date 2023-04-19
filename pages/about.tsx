import Link from "next/link";
import AboutMeImage from "../components/aboutMeImage";
import Image from "next/image";
import CustomHead from "../components/customHead";

const About = () => {
  return (
    <article>
      <CustomHead
        title="About Me | Aaron Rutherford | Fullstack Developer"
        description="About Aaron Rutherford, fullstack developer specializing in Next.js, React, Tailwind, and MongoDB."
        keywords="portfolio, fullstack, next.js, next, react, react.js, mongodb, tailwind, tailwindCSS, aaron rutherford, hire, about"
      />

      <h1 className="mb-16 text-[48px] relative text-center">About Me</h1>
      <section className="flex max-lg:flex-col gap-12 justify-center items-center mt-10">
        <div className="relative min-w-[300px] h-[300px] md:min-w-[500px] md:h-[500px] bg-accent-200 shadow-xl">
          <Image src="/about-me/us-in-masks.jpg" alt="" height={500} width={500} objectFit="cover" />
        </div>
        <div className="max-w-[500px]">
          <p>My name is Aaron Rutherford and my pronouns are they/them. I live in the heart of Portland OR with my beautiful spouse, Harmony, and my energetic kitty, Lucy. We love living here among all the beautiful plant life and small local businesses.</p>
          <p>Most days you'll find me huddled over my computer, programming or watching and reading about the latest in tech advancements, but you can also find me cooking delicious meals, writing short stories, and snuggling up with my little family for board games or shows. On days when the sun is shining we're always eager to take advantage.</p>
          <p>We have zoo passes and know all the animals by name and are regulars at our local park. Along with being nerds and animal lovers, we're art patrons, seeing the Oregon Symphony, finding local art pop-ups, and visiting our local library are just a few of our favorite weekend activities.</p>
        </div>
      </section>

      <section className="flex justify-center overflow-hidden lg:scale-110 lg:my-12">
        <div className="grid grid-cols-2 md:grid-cols-4 md:scale-[85%] lg:scale-100 lg:grid-cols-7 justify-center gap-y-8 max-sm:gap-y-24 items-center mt-24 max-sm:mb-24 mb-40 min-w-fit">
          <div className="collage-item md:right-8 lg:left-24 lg:bottom-4 lg:scale-[110%]">
            <AboutMeImage src="/about-me/forest.jpg" alt="View of forest park in Portland, OR" />
          </div>
          <div className="collage-item max-sm:top-32 max-sm:scale-110 max-sm:right-16 top-10 right-10 md:-left-5 lg:left-16 lg:top-28">
            <AboutMeImage src="/about-me/lucy-belly.jpg" alt="My cat, Lucy, laying on our bed with her belly up" />
          </div>
          <div className="collage-item md:scale-110 md:bottom-8 lg:left-8 lg:bottom-8">
            <AboutMeImage src="/about-me/kite-holding.jpg" alt="Me holding my kite at the park" />
          </div>
          <div className="collage-item max-sm:top-32 top-10 max-md:right-10 md:top-20 lg:top-24 lg:scale-[105%]">
            <AboutMeImage src="/about-me/harmony-lion.jpg" alt="My spouse, Harmony, on a lion statue at the Oregon zoo" />
          </div>
          <div className="collage-item max-sm:scale-110 max-sm:left-5 md:scale-110 lg:right-8 lg:bottom-10 lg:scale-110">
            <AboutMeImage src="/about-me/engagement.jpg" alt="me and harmony posing for engagement photos" />
          </div>
          <div className="collage-item max-sm:top-32 top-10 right-10 md:top-24 md:left-4 lg:-left-16 lg:top-20">
            <AboutMeImage src="/about-me/hiking.jpg" alt="me hiking in the mountains of Cache Valley, UT" />
          </div>
          <div className="collage-item lg:right-24 md:bottom-3 lg:bottom-8">
            <AboutMeImage src="/about-me/us-at-park.jpg" alt="Me and Harmony taking a selfie wearing face masks" />
          </div>
        </div>
      </section>

      <h2 className="mb-4">My Web Journey</h2>
      <p>My interest in web development began during a copywritting course in 2021. I decided to learn some static design using HTML and CSS and quickly fell in love with development. I started learning principles of responsive and accessible design. Then, I began to pick up new tools to improve my front-end skills, including JavaScript, React, TailwindCSS, and SASS. Wanting to expand even further, I dove into full stack development by learning Next.js, TypeScript, and MongoDB. Using all these tools, I've created <Link href="/#portfolio">several projects</Link> and host their source code on <Link href="https://github.com/rutherfordaaron">GitHub</Link>. I'm continuing to grow my experience and toolset as I begin to learn C# and plan to contribute to some open source prjects.</p>
    </article>
  )
}

export default About;