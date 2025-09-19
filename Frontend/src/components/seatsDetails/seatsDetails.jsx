import defaultAvatar from '../../assets/defaultAvatar.svg';
import { NavLink } from 'react-router';
import { useAuth } from '../providers/auth.provider';
import { useLoginModal } from '../loginModal/useLoginModal';

export const SeatsDetails = ({ lift }) => {
    const { seatsTotal, seatsBooked, bookings, cityDeparture, cityDestination, pricePerSeat } = lift;
    const availableSeats = seatsTotal - seatsBooked;
    const { loginData } = useAuth();
    const { loginModalHandler } = useLoginModal();

    console.log(lift)

    return (
        <div className=" w-72 h-fit sticky top-24 mt-24">

            {/* Header */}
            <h3 className="text-lg font-bold mb-4">Pladser</h3>
            <div className='bg-white rounded-2xl shadow-md p-6'>

                {/* Seats List */}
                <div className="space-y-3 mb-6">
                    {/* Booked seats */}
                    {bookings && bookings.map((booking, index) => (
                        <div className="flex items-center gap-3 border-b border-gray-200 pb-3" key={index}>
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                                <img
                                    src={booking.user.imageUrl}
                                    alt={`${booking.user.firstname}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-gray-800">{booking.user.firstname}</p>
                                <p className="text-sm text-gray-500">{cityDeparture} - {cityDestination}</p>
                            </div>
                        </div>
                    ))}

                    {/* Available seats */}
                    {availableSeats > 0 && [...Array(availableSeats)].map((_, index) => (
                        <div className="flex items-center gap-3 border-b border-gray-200 pb-3" key={`available-${index}`}>
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
                                <img
                                    src={defaultAvatar}
                                    alt={`Available Seat`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-500">Dig?</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Price Section */}
                <div className=" mb-6">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600">Pris per plads</span>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400 text-sm">DKK</span>
                            <span className="text-2xl font-bold text-gray-800 ml-1">{pricePerSeat}</span>
                        </div>
                    </div>
                </div>

                {/* Book Button */}
                {loginData ? (
                    <NavLink to={`/lift/book/${lift.id}`}>
                        <button className="w-full bg-blue-bright text-white py-3 rounded-full font-semibold hover:bg-blue-medium transition-colors">
                            Book plads
                        </button>
                    </NavLink>
                ) : (
                    <button 
                        onClick={loginModalHandler}
                        className="w-full bg-blue-bright text-white py-3 rounded-full font-semibold hover:bg-blue-medium transition-colors"
                    >
                        Book plads
                    </button>
                )}
            </div>
        </div>
    );
};