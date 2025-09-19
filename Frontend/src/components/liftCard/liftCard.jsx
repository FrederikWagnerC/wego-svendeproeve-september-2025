import locationStart from '../../assets/locationStart.svg';
import locationEnd from '../../assets/locationEnd.svg';
import ferry from '../../assets/ferry.svg';
import electric from '../../assets/electric.svg';
import { NavLink } from 'react-router';


export const LiftCard = ({ lift }) => {
    // Format date and time
    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const timeString = date.toLocaleTimeString('da-DK', {
            hour: '2-digit',
            minute: '2-digit'
        });

        // Check if it's today or tomorrow
        if (date.toDateString() === today.toDateString()) {
            return `I dag ${timeString}`;
        } else if (date.toDateString() === tomorrow.toDateString()) {
            return `I morgen ${timeString}`;
        } else {
            const dayMonth = date.toLocaleDateString('da-DK', {
                day: 'numeric',
                month: 'short'
            });
            return `${dayMonth} ${timeString}`;
        }
    };

    const renderStars = (rating = Math.round(lift.user.avgStars)) => {
        return (
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`text-lg ${star <= rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                    >
                        ★
                    </span>
                ))}
            </div>
        );
    };




    return (
        <div className="bg-white rounded-2xl shadow-md h-full min-w-[600px] transition-all">
            <NavLink to={`/lift/${lift.id}`} >
            <div className="flex items-center justify-between">
                {/* Left section - Driver info and locations */}
                <div className="flex items-center">
                    {/* Driver avatar and info */}
                    <div className="flex flex-col items-center justify-center px-8">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                            {lift.user?.imageUrl ? (
                                <img
                                    src={lift.user.imageUrl}
                                    alt={lift.user.firstname}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-white font-semibold text-lg">
                                    {lift.user?.firstname?.charAt(0) || 'U'}
                                </span>
                            )}
                        </div>
                        <div className="text-center mt-1">
                            <p className="font-semibold text-sm text-gray-800">
                                {lift.user?.firstname || 'Driver'}
                            </p>
                            {renderStars()}
                        </div>
                    </div>
                </div>


                {/* Date/Time and Route */}
                <div className="flex-3 border-r-2 border-l-2 border-gray-200 p-4 relative">
                    <div className='absolute top-4 right-4 flex gap-1'>

                        {lift.useFerry && <img src={ferry} alt="Ferry" className="w-6 h-6 mb-1" />}
                        {lift.isElectric && <img src={electric} alt="Electric" className="w-6 h-6 mb-1" />}

                    </div>
                    <p className="font-semibold text-gray-800 mb-2">
                        {formatDateTime(lift.departureDate)}
                    </p>

                    {/* Route with icons */}
                    <div className="space-y-2">
                        <div className="flex space-x-2 justify-baseline items-baseline">
                            <img src={locationStart} alt="Location Start" />
                            <div className='flex flex-col mb-auto'>
                                <span className="text-sm text-black font-bold">
                                    {lift.cityDeparture || 'Departure'}
                                </span>
                                <span className="text-xs text-black/80">
                                    {lift.addressDeparture || ''}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-baseline space-x-2">
                            <img src={locationEnd} alt="Location End" />
                            <div className='flex flex-col mb-auto'>
                                <span className="text-sm text-black font-bold">
                                    {lift.cityDestination || 'Destination'}
                                </span>
                                <span className="text-xs text-black/80">
                                    {lift.addressDestination || ''}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Right section - Amenities and Price */}
                <div className="flex flex-col  items-center justify-between  w-1/4  gap-12 relative">

                    <div className='absolute top-1/2 transform -translate-y-1/2 border border-gray-200 w-full'></div>

                    {/* Price */}
                    <div className="text-right w-full h-full px-2 mb-auto self-stretch">
                        <p className="font-bold text-xl text-black text-center">
                            DKK {lift.pricePerSeat || 125}
                        </p>
                    </div>

                    {/* Available seats indicators */}
                    <div className="flex flex-row-reverse gap-1">
                        {[...Array(lift.seatsTotal)].map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full ${
                                    console.log(index , lift.seatsBooked),
                                    index < lift.seatsBooked ? 'bg-red-500' : 'bg-green-500'
                                }`}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
            </NavLink >
        </div>
    );
};
