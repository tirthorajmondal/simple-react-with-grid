import Card from './Card';

const TehnologyContainer = ({ technologies, handleAddToStack }) => {
    console.log(technologies);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-3 w-full lg:w-3/4 md border p-4 rounded-4xl'>
            {
                technologies.length > 0 ?
                    technologies.map((tech) => <Card
                        key={tech.id}
                        technology={tech}
                        handleAddToStack={handleAddToStack} />) :
                    <div><p>No technologies available</p></div>

            }
        </div>
    );
};

export default TehnologyContainer;