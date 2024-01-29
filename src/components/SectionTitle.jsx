

const SectionTitle = ({ headings, subHeading }) => {
    return (
        <div className="text-center my-7 mx-auto w-4/12">
            <p className="text-yellow-500 mb-2">--{headings}--</p>
            <h1 className="border-y-2 uppercase text-3xl border-gray-400 p-3">{subHeading}</h1>
        </div>
    );
};

export default SectionTitle;
