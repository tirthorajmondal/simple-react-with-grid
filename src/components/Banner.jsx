import matin from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='flex  items-center pt-25 container mx-auto'>
            <div className='w-[50%]'>
                <h1 className='text-5xl font-bold'>Build your Ideal</h1>
                <h1 className='text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-purple-600'>Development Stack</h1>
                <p className='mt-6 text-[#64748B]'>Explore frontend,backend,database,and tooling options,compare them side by side,and put together the stack that fits your next project.</p>

                <div className='mt-14 gap-3 flex'>
                    <button className="bg-orange-500 px-3 py-2  text-black  text-lg">Secondary</button>
                    <button className="bg-black px-3 py-2  text-white text-lg ">Secondary</button>
                </div>

            </div>
            <div className='flex  w-[50%] justify-center'>
                <img src={matin} alt="" />
            </div>

        </div>
    );
};

export default Banner;