import backArrowIcon from '../../assets/backArrow.svg';
import { useNavigate } from 'react-router';

export const BackArrow = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className="hidden md:flex h-fit bg-white p-4 rounded-xl justify-between sticky top-24 cursor-pointer">
            <img src={backArrowIcon} alt="Back" className="w-6 h-6" />
        </button>
    );
};
