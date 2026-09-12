

const MyStats = ({ handleRemoveFromStack, selectedTechs }) => {
    return (
        <div className="border rounded-xl p-5 h-fit w-full lg:w-1/4 ">
            <h2 className="font-bold text-lg">
                Your Stack: {selectedTechs.length}
            </h2>
            {selectedTechs.length === 0 ?
                <>
                    <p className="text-sm text-gray-400 mt-2">

                        No technologies selected yet.
                    </p>

                    <div className="border border-dashed rounded-lg p-5 mt-5 text-center">
                        <p className="text-sm text-gray-400">
                            Your stack is empty.
                        </p>
                    </div>
                </>
                :
                <div className="mt-5">
                    <ul className="space-y-2">
                        {selectedTechs.map((tech, index) => (
                            <li key={index} className="flex items-center justify-between border rounded-lg p-3">
                                <span className=" text-gray-800 font-semibold text-xl">{tech.name}</span>
                                <button
                                    onClick={() => handleRemoveFromStack(tech.id)}
                                    className="text-red-500 hover:text-red-700 bg-amber-50 p-2 rounded-lg">
                                    Remove
                                </button>
                            </li>

                        ))}
                    </ul>
                </div>
            }

        </div>



    );
};

export default MyStats;