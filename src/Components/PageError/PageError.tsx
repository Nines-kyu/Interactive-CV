import { Link } from 'react-router-dom';

const PageError: React.FC = () => {
    return(
        <div className='h-full flex flex-col flex-grow items-center justify-center bg-red-100'>
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600 mb-5">404</h1>
                <p className="text-xl text-gray-700 mb-5">Oops! the page you're looking for doesn't exist.</p>
                <Link to="/" className="text-blue-500 hover:underline mt-4" >
                    Go back to the homepage
                </Link>
            </div>
        </div>
    );
};

export default PageError;