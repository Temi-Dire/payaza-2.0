import './landing.css'
import Navbar from './Navbar'
import WhyChooseUs from './WhyChooseUs'

const Landing = () => {
  return (
    <div className=" h-screen pt-4 md:pt-12 mb-24" >
        <Navbar />

        <section className='mt-10 mb-20 md:mt-20 md:mb-40 px-10 md:px-32'>
            <h1 className='text-[#360F55] font-grotesque lg:max-w-[70%] md:text-[52px] 3xl:max-w-[835px] text-indigo-1000 text-[56px] tracking-[-1.2px] font-rebond font-bold leading-[60px] xl:text-[80px] xl:leading-[69px] xl:tracking-[-1.6px] align-left'>
                The next generation of payment solutions.
            </h1>
        </section>

        <WhyChooseUs />
    </div>
  )
}

export default Landing