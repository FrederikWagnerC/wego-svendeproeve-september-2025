import { useFilter } from "../providers/filter";

export const BookingLiftDetails = ({ lift }) => {
    const { cityDeparture, cityDestination, departureDate, pricePerSeat } = lift;
    const { seatsBooked } = useFilter();
    
    const formatDanishDate = (dateString) => {
        const date = new Date(dateString);
        
        const dayNames = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
        const monthNames = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'];
        
        const dayName = dayNames[date.getDay()];
        const day = date.getDate();
        const monthName = monthNames[date.getMonth()];
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        
        return `${dayName} den ${day}. ${monthName} kl. ${hours}:${minutes}`;
    };

    const totalPrice = seatsBooked * pricePerSeat;

    return (
        <div className="bg-white rounded-lg shadow-md  w-80 h-fit mx-auto md:mx-0">
            {/* TRIP DETAILS */}
            <div className=" p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 ">
                    {cityDeparture} → {cityDestination}
                </h3>
                <p className="text-gray-600 mb-1">
                    {new Date(departureDate).toLocaleString('da-DK', {  day: 'numeric',month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}
                </p>
                <p className="text-gray-600">
                    {seatsBooked} sæde{seatsBooked !== 1 ? "r" : ""}
                </p>
            </div>
            
            {/* PRICE */}
            <div className="border-t border-gray-200 pt-4 p-6">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">Samlet pris</span>
                    <span className="text-xl font-bold text-gray-800">DKK {totalPrice.toLocaleString('da-DK', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
            </div>
        </div>
    );
};