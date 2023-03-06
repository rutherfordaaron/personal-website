import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <article>
      {/* ---------- Landing Section ---------- */}
      <section className="relative h-screen">
        <div>
          {/* Bucket container */}
          <div className="rotate-[65deg] w-fit absolute top-5 right-5 md:right-12 lg:right-60">
            <Image className="scale-y-[-1]" src="/bucket.svg" alt="" height={55} width={55} />
          </div>

          {/* Paint fall */}
          <div className="bg-indigo-600 w-[40px] h-[500px] absolute top-[70px] right-[50px] md:right-[78px] lg:right-[271px] md:w-[80px] rounded-tl-[100%] rounded-tr-[2px] broder-l-indigo-700" />
        </div>

        {/* Text block 1 */}
        <div className="max-w-[800px] mx-auto flex pl-5 pt-28 md:pt-20">
          <p className="w-60 text-center text-xl md:w-96 md:text-3xl">Make a <span className="relative p-2 splash before:w-36 before:h-36 before:bottom-[-55px] before:left-[-40px]">splash</span> with a site that's designed and developed by the best.</p>
        </div>

        {/* Wave border */}
        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-[100px]">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-indigo-600"></path>
          </svg>
        </div>

        {/* Indigo section under the wave */}
        <div className="h-[50vh] w-screen bg-indigo-600 absolute block bottom-0 text-slate-100">
          <div className="max-w-[800px] mx-auto">
            {/* Text block 2 */}
            <div className="flex justify-end pr-5 pt-10">
              <p className="text-center w-64 text-xl md:w-96 md:text-3xl">Pouring on the skills and creativity to increase your web presence.</p>
            </div>
            {/* Action button */}
            <div className="flex justify-center items-center pt-20">
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