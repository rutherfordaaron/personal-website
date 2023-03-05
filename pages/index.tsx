import Image from "next/image";

const Home = () => {
  return (
    <article>
      <section className="relative h-screen">
        <div>
          {/* Bucket container */}
          <div className="rotate-[65deg] w-fit absolute top-5 right-5">
            <Image className="scale-y-[-1]" src="/bucket.svg" alt="" height={55} width={55} />
          </div>

          {/* Paint fall */}
          <div className="bg-indigo-600 w-[40px] h-[300px] absolute top-[70px] right-[51px] rounded-tl-[100%] rounded-tr-[2px] broder-l-indigo-700 border-r-indigo-700" />
        </div>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam eum voluptatibus veniam ea nam tempora, eius quibusdam commodi accusantium suscipit minima sint error dignissimos?</p>

        {/* Wave border */}
        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-[100px]">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-indigo-600"></path>
          </svg>
        </div>

        {/* Indigo section under the wave */}
        <div className="h-[50vh] w-screen bg-indigo-600 absolute bottom-0">

        </div>
      </section>
    </article>
  )
}

export default Home;