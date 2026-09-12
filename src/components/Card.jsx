


const Card = ({ technology, handleAddToStack }) => {

    return (
        <div className='p-6 border rounded-4xl'>
            <div className='flex items-center justify-between '>

                <img src={technology.icon} alt="" className='h-12 w-12' />

                <button className="btn bg-emerald-100 text-blue-500 rounded-4xl">{technology.badge}</button>

            </div>
            <div>
                <h1 className='text-5xl font-bold mt-7'>{technology.name}</h1>
            </div>
            <div>
                <p className='text-[#64748B] mt-5'>{technology.description}</p>
            </div>
            <div className='flex items-center justify-between font-bold mt-12'>
                <button className='p-2 bg-green-100'>{technology.category}</button>

                <h3>{technology.difficulty}</h3>
                <h3 className='text-2xl'>⭐{technology.rating}</h3>
            </div>
            <div>
                <button
                    onClick={() => handleAddToStack(technology.id)}

                    className='w-full cursor-pointer bg-black p-5 rounded-4xl mt-20 text-white text-2xl'>Add to Stack</button>
            </div>

        </div>
    );
};

export default Card;