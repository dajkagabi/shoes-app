
import { useNavigate } from 'react-router-dom';
import videoSource from '../../assets/run-river.mp4';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      <video
        className="absolute w-full h-full object-cover"
        src={videoSource}
        autoPlay
        loop
        muted
      ></video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl text-white font-bold">Welcome to Our Store</h1>
        <p className="text-lg md:text-xl text-white mt-4">Discover the latest products and offers</p>
        <button
          onClick={() => navigate('/products')}
          className="mt-8 px-6 py-3 bg-white text-black text-lg font-bold rounded-lg hover:bg-gray-200"
        >
          View Products
        </button>
      </div>
    </div>
  );
};

export default Home;
