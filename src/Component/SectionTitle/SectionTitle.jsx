
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center mb-8">
           <p className="text-[#BB8506]">---{subHeading}---</p> 
           <p className="text-3xl uppercase border-y-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;