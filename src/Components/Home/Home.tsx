import photo from '../../assets/Navi_Rosca.jpg';

const Home: React.FC = () => {
    return (
        <div className="flex w-full items-center justify-center min-h-screen bg-black px-6">
            <div className="w-full max-w-[1660px] h-[750px] bg-white shadow-2xl rounded-2xl flex overflow-hidden">
                {/* Left Profile Section */}
                <div className="w-1/6 bg-gray-200 flex flex-col items-center justify-center p-6">
                    {/* Profile Image */}
                    <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                            src={photo}
                            alt="Profile"
                            className="absolute"
                            style={{
                                top: '100%',
                                left: '43.5%',
                                transform: 'translate(-46%, -70%) scale(1.1)',
                                transformOrigin: 'center',
                                width: 'auto',
                                height: 'auto',
                                minWidth: '100%',
                                minHeight: '100%'
                            }}
                        />
                    </div>

                    {/* Profile Name */}
                    <h2 className="mt-4 text-xl font-bold text-gray-800">Navi Rosca</h2>
                    <p className="text-gray-600 text-sm">Full-Stack Developer</p>
                </div>

                {/* Right Content Section */}
                <div className="w-2/3 p-10 flex flex-col justify-center bg-white">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to My Profile</h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        This section will contain your bio, portfolio highlights, or anything else you want to showcase.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
