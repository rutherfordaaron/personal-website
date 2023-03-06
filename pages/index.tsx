import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <article>
      {/* ---------- Landing Section ---------- */}
      <section className="relative h-screen">
        {/* Bucket container */}
        <div className="absolute top-24 right-2 md:right-12 lg:right-60 scale-[200%] -z-10">
          <img src="/bucket.svg" alt="" className="w-40 h-40" />
        </div>

        {/* Text block 1 */}
        <div className="max-w-[800px] mx-auto flex pl-2 pt-28 md:pt-20">
          <p className="w-56 text-center text-lg md:w-96 md:text-3xl">Make a <span className="relative p-2 splash before:w-36 before:h-36 before:bottom-[-60px] before:left-[-40px]">splash</span> with a website that's designed and developed by the best.</p>
        </div>

        {/* Wave border */}
        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-[100px]">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-indigo-600"></path>
          </svg>
        </div>

        {/* Indigo section under the wave */}
        <div className="h-[50vh] w-screen bg-indigo-600 absolute block bottom-0 text-slate-100">
          <div className="mx-auto pb-10 px-10">
            {/* Text block 2 */}
            <div className="flex justify-center pt-10">
              <p className="text-center text-lg md:w-96 md:text-3xl">I pour on the skills and creativity to increase your web presence. With design and development services, get a website that really stands out.</p>
            </div>
            {/* Action button */}
            <div className="flex justify-center items-center pt-10">
              <Link legacyBehavior={false} href="/" className="block bg-indigo-200 px-10 py-5 rounded-full text-gray-800 text-2xl tracking-wider shadow-lg hover:bg-violet-200 hover:text-black md:text-3xl md:py-7 md:px-12">Get a Website</Link>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- Services Section ---------- */}
      {/* ---------- Work Proof Section ---------- */}
    </article>
  )
}

export default Home;