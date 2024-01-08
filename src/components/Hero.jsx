import { pravesh } from '../assets';

const Hero = () => {
    return (
        <section
        id='home'
        className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container bg-beige'
        >
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 mx-20'>
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              Hi, I'm
            </span>
            <span className='text-sky-400 inline-block'>Pravesh Mansharamani</span> 
          </h1>
          <p className='font-montserrat text-slate-gray text-xl leading-8 mt-6 mb-7 '>
            Currently, I'm studying Math + CS @ <span className='text-pink-400'>University of Waterloo.</span> Previously, I have worked @ Rivvi, Flowise AI, Waterloo Blockchain and University of Waterloo. Scroll to see my work!
          </p>
  
        </div>
        
        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center '>
          <img
            src={pravesh}
            alt='pfp'
            width={510}
            height={402}
            className='object-contain relative z-10'
          />
        </div>
      </section>
    )
}

export default Hero;
