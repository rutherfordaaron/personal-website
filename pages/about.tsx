import Link from "next/link";

const About = () => {
  return (
    <article>
      <section className="flex max-md:flex-col gap-12 justify-center items-center">
        <div className="relative min-w-[300px] h-[450px] bg-gray-200 shadow-lg">
          {/* Image here */}
        </div>
        <p className="max-w-[500px]">My name is Aaron Rutherford and my pronouns are they/them. I live in the heart of Portland OR with my beautiful spouse, Harmony, and my energetic kitty, Lucy. We love living here among all the beautiful plant life and small local businesses. Most days you'll find me huddled over my computer, programming or watching and reading about the latest in tech advancements, but you can also find me cooking delicious meals, writing short stories, and snuggling up with my little family for board games or shows. On days when the sun is shining we're always eager to take advantage. We have zoo passes and know all the animals by name and are regulars at our local park. Along with being nerds and animal lovers, we're art patrons, seeing the Oregon Symphony, finding local art pop-ups, and visiting our local library are just a few of our favorite weekend activities.</p>
      </section>

      <section className="flex justify-center overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 md:scale-[85%] lg:scale-100 lg:grid-cols-7 justify-center gap-y-8 max-sm:gap-y-24 items-center mt-24 max-sm:mb-24 mb-40 min-w-fit">
          <div className="collage-item md:right-8 lg:left-24 lg:bottom-4 lg:scale-[110%]">1</div>
          <div className="collage-item max-sm:top-32 max-sm:scale-110 max-sm:right-16 top-10 right-10 md:-left-5 lg:left-16 lg:top-28">2</div>
          <div className="collage-item md:scale-110 md:bottom-8 lg:left-8 lg:bottom-8">3</div>
          <div className="collage-item max-sm:top-32 top-10 max-md:right-10 md:top-20 lg:top-24 lg:scale-[105%]">4</div>
          <div className="collage-item max-sm:scale-110 max-sm:left-5 md:scale-110 lg:right-8 lg:bottom-10 lg:scale-110">5</div>
          <div className="collage-item max-sm:top-32 top-10 right-10 md:top-24 md:left-4 lg:-left-16 lg:top-20">6</div>
          <div className="collage-item lg:right-24 md:bottom-3 lg:bottom-8">7</div>
        </div>
      </section>

      <h2>My Web Journey</h2>
      <p>My interest in web development began during a copywritting course in 2021. I decided to learn some static design using HTML and CSS and quickly fell in love with development. I started learning principles of responsive and accessible design. Then, I began to pick up new tools to improve my front-end skills, including JavaScript, React, TailwindCSS, and SASS. Wanting to expand even further, I dove into full stack development by learning Next.js, TypeScript, and MongoDB. Using all these tools, I've created <Link href="/#portfolio">several projects</Link> and host their source code on <Link href="https://github.com/rutherfordaaron">GitHub</Link>. I'm continuing to grow my experience and toolset as I begin to learn C# and plan to contribute to some open source prjects.</p>
    </article>
  )
}

export default About;