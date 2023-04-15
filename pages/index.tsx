import Image from "next/image";
import Carousel from "../components/carousel/carousel";

const Home = () => {
  return (
    <article>
      {/* ---------- Landing Section ---------- */}
      <section>
        {/* <div>
          <p>I'm Aaron Rutherford, a full stack web developer with a focus on Next.js, React, MongoDB, and TailwindCSS. As a professional with a deep passion for web development, I strive to deliver high-quality and responsive web applications. I'm committed to staying up-to-date with the latest web development technologies and trends, and I'm confident in my ability to tackle complex projects and deliver outstanding results. My portfolio showcases my range of capabilities, and I'm ready to take on any challenge and contribute to your team's success.</p>
        </div>
        <div className="relative h-[400px] w-[300px] mx-auto my-4">
          <Image src="/headshot.jpg" layout="fill" alt="aaron rutherford headshot" />
        </div> */}
      </section>

      {/* ---------- Tool Carousel Section ---------- */}
      <section>
        <Carousel />
      </section>

      {/* ---------- Projects Section ---------- */}
      <section id="portfolio">
      </section>
    </article>
  )
}

export default Home;