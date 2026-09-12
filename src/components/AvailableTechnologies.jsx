import React, { useEffect, useState } from 'react';
import TehnologyContainer from './technologyContainer';
import MyStats from './MyStats';

const AvailableTechnologies = () => {
    const [technologies, setTechnologies] = useState([]);
    const [selectedTechs, setSelectedTechs] = useState([]); // State to hold selected technologies


    // add tech to my stat
    const handleAddToStack = (id) => {
        const isAlreadySelected = selectedTechs.some((tech) => tech.id === id);
        if (isAlreadySelected) {
            alert('You can only select one technology per category.');
            return; // If already selected, do nothing
        }
        const selectedTech = technologies.find((tech) => tech.id === id);
        if (selectedTech) {
            setSelectedTechs((prev) => [...prev, selectedTech]);
        }
    };


    // remove technology from the selected stack 
    const handleRemoveFromStack = (id) => {
        setSelectedTechs((prev) => prev.filter((tech) => tech.id !== id));
    };




    const fetchTechnologies = async () => {
        try {
            const response = await fetch('./data.json');
            const data = await response.json();
            setTechnologies(data);
        }
        catch (error) {
            console.error('Error fetching technologies:', error);
        }
    }

    // Fetch technologies when the component mounts
    useEffect(() => {
        fetchTechnologies();
    }, []);

    return (
        <section className=''>
            <div className='container mx-auto mt-1'>
                <h3 className='text-4xl font-bold'>Explore the <span className='text-[#EC4899]'>Tecnologies</span> </h3>
                <p className='text-[#64748B] mt-3 '>Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-3 mt-6'>
                <TehnologyContainer
                    technologies={technologies}
                    handleAddToStack={handleAddToStack} />
                <MyStats
                    selectedTechs={selectedTechs}
                    handleRemoveFromStack={handleRemoveFromStack} />
            </div>
        </section>
    );
};

export default AvailableTechnologies;