
const Home: React.FC = () => {
  return (
    <div className="w-full h-full p-10 flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
        Welcome to My Profile
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed max-w-xl text-center">
        Hi! You can call me <span className="text-myOrange">Navi</span>. I’m a passionate developer exploring web and software projects. Here you’ll find some of my work and highlights.
      </p>
    </div>
  );
};

export default Home;
