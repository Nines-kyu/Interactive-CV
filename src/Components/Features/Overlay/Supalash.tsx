import { useEffect, useState } from 'react';
import '../Overlay/Supalash.css';
import Logo from '../../../assets/Navi-logo.svg';


interface SupalashProps {
    onClose: () => void;
}

const Supalash: React.FC<SupalashProps> = ({onClose}) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100dvh';
        return () => {
            document.body.style.overflow = 'hidden';
        document.body.style.height = '100dvh';
        };
    }, []);

    const handleClick = () => {
        setAnimate(true);

        setTimeout(() => {
            onClose();
        }, 1500);
    }

    return (
        <div className='splash-container flex relative'>
            <div className={`curtain curtain-left ${animate ? 'open' : ''}`}></div>
            <div className={`curtain curtain-right ${animate ? 'open' : ''}`}></div>

            <div className='absolute flex inset-0 items-center justify-center'>
                <img src={Logo} className={`logo ${animate ? 'logo-spin fade-out': ''}`} onClick={handleClick} alt='Logo'/>
            </div>
        </div>
    )
}

export default Supalash;