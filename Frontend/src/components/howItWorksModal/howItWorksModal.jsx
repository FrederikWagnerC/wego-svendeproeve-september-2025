import { fetchApi } from "../../utils/fetch/fetch";
import { useHowItWorksModal } from "./howItWorksModal";
import parse from 'html-react-parser';
import { useState, useEffect } from "react";
import spinner from '../../assets/spinner.svg';

export const HowItWorksModal = () => {
    const { howItWorksModalHandler } = useHowItWorksModal();
    const [howItWorksContent, setHowItWorksContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    

    useEffect(() => {
        const fetchHowitWorks = async () => {
            try {
                const response = await fetchApi("/api/content", "GET");
                if (response.success) {
                    setHowItWorksContent(response.data);
                } else {
                    setError("Failed to fetch how it works content");
                }
            } catch (err) {
                setError("Error loading how it works content");
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchHowitWorks();
    }, []);


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <img src={spinner} alt="Loading..." className="w-12 h-12" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <p className="text-red-600">{error}</p>
            </div>
        );
    }



    return (
        <div onClick={howItWorksModalHandler} id="howItWorksModal"
            className="bg-black/50 hidden fixed z-60 w-screen h-screen top-0 left-0 items-center justify-center pointer-events-auto">
            <div onClick={(e) => e.stopPropagation()} className=" bg-white relative rounded-2xl flex flex-col px-28 py-16 z-70 pointer-events-auto ">
                <button onClick={howItWorksModalHandler} className="absolute top-2 right-4 text-4xl cursor-pointer">×</button>
                <h2 className="text-center text-2xl mb-4">{howItWorksContent[0].title}</h2>
                {parse(howItWorksContent[0].content)}
            </div>
        </div>
    );
};

