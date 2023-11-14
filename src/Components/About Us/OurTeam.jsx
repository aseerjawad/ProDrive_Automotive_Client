

const OurTeam = ({ element }) => {
    const { name, profession, image } = element
    return (
        <div>
            <div>
                <img className="w-60 h-60" src={image} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{profession}</p>
            </div>
        </div>
    );
};

export default OurTeam;