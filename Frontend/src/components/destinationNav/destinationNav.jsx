import { useFilter } from "../providers/filter"
import swap from "../../assets/swap.svg"
import { useNavigate } from "react-router";
import { useEffect } from "react";


export const DestinationNav = () => {
    const { destinationStart, setDestinationStart, destinationEnd, setDestinationEnd } = useFilter();

    useEffect(() => {
        const destinationStartInput = document.getElementById("destinationStart");
        const destinationEndInput = document.getElementById("destinationEnd");

        if (destinationStartInput && destinationEndInput) {
            destinationStartInput.value = destinationStart;
            destinationEndInput.value = destinationEnd;
        }
    }, [destinationStart, destinationEnd]);

    const navigate = useNavigate();


    const swapDestinations = () => {

        let destinationStart = document.getElementById("destinationStart");
        let destinationEnd = document.getElementById("destinationEnd");
        const temp = destinationStart.value;
        destinationStart.value = destinationEnd.value;
        destinationEnd.value = temp;

    }

    const searchDestinations = () => {
        const destinationStart = document.getElementById("destinationStart").value;
        const destinationEnd = document.getElementById("destinationEnd").value;
        setDestinationStart(destinationStart);
        setDestinationEnd(destinationEnd);
        navigate("/lift");
    }

    return (
        <div className="flex gap-4 justify-center items-center sticky bg-white top-0 z-40 mt-[1px] border-t border-gray-200 py-4">
            <input
                id="destinationStart"
                type="text"
                placeholder="Hvor fra?"
                className="rounded-2xl p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-bright"
            />
            <button onClick={swapDestinations} className="bg-blue-bright/25 p-2 rounded-xl"><img src={swap} alt="Swap" /></button>
            <input
                id="destinationEnd"
                type="text"
                placeholder="Hvor til?"
                className="rounded-2xl p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-bright"
            />
            <button onClick={searchDestinations} className="bg-blue-bright p-2 px-4 rounded-4xl text-white">Søg lift</button>
        </div>

    );
};
