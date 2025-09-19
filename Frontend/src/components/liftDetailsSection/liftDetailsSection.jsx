import ferry from '../../assets/ferry.svg';
import electric from '../../assets/electric.svg';
import comfort from '../../assets/comfort.svg';
import bagage from '../../assets/bagage.svg';
import flexible from '../../assets/flexible.svg';



export const LiftDetailsSection = ({ lift }) => {
    const {
        addressDeparture,
        addressDestination,
        allowChildren,
        allowMusic,
        allowPets,
        allowSmoking,
        bagSizeId,
        bagsize,
        bookings,
        cityDeparture,
        cityDestination,
        comment,
        createdAt,
        departureDate,
        hasComfort,
        id,
        isElectric,
        pricePerSeat,
        routeDeviation,
        seatsBooked,
        seatsTotal,
        useFerry,
        user,
        userId
    } = lift;


    const renderStars = (rating = Math.round(user.avgStars), size = 'text-2xl') => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`${size} ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
            </span>
        ));
    };

    return (
        <section className="bg-white p-6 rounded-2xl shadow-md max-w-[600px]">
            <div>
                <h3 className="font-bold text-xl">{cityDeparture} til {cityDestination}</h3>
                <p>{new Date(departureDate).toLocaleString('da-DK', {  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
            </div>

            <div className="mt-4">
                <h4 className='text-lg font-bold mb-1'>Information</h4>
                {useFerry && <div className="flex items-center gap-2 mb-3"><img src={ferry} alt="Ferry" className="w-6 h-6 mb-1" /><span>Rute inkluderer en færge</span></div>}
                {/* DETAILS  */}
                <h5 className='mb-4 text-xl'>Detaljer</h5>
                <div className='flex flex-wrap w-full gap-4'>
                    {hasComfort &&
                        <div className='flex gap-2 items-center flex-1 min-w-[250px]'>
                            <img src={comfort} alt="Comfort" className="w-8 h-8 " />
                            <div className='flex flex-col '>
                                <p className='mb-[-5px] text-gray-500 font-bold '>KOMFORT</p>
                                <p>Maks. 2 personer på bagsædet</p>
                            </div>
                        </div>
                    }
                    <div className='flex gap-2 items-center flex-1 min-w-[250px]'>
                        <img src={bagage} alt="Bagage" className="w-8 h-8 " />
                        <div className='flex flex-col '>
                            <p className='mb-[-5px] text-gray-500 font-bold '>BAGAGESTØRRELSE</p>
                            <p>{bagsize.description}</p>
                        </div>
                    </div>
                    {routeDeviation === 5 &&
                        <div className='flex flex-row gap-2 items-center flex-1 min-w-[250px]'>
                            <img src={flexible} alt="Flexibility" className="w-8 h-8 " />
                            <div className='flex flex-col '>
                                <p className='mb-[-5px] text-gray-500 font-bold '>AFVIGELSE FRA RUTEN</p>
                                <p>Bilisten er fleksibel</p>
                            </div>
                        </div>
                    }

                    {isElectric &&
                        <div className='flex gap-2 items-center flex-1 min-w-[250px]'>
                            <img src={electric} alt="Electric" className="w-8 h-8 " />
                            <div className='flex flex-col '>
                                <p className='mb-[-5px] text-gray-500 font-bold '>BRÆNDSTOFTYPE</p>
                                <p>Bilen er elektrisk</p>
                            </div>
                        </div>
                    }

                </div>

                {/* PREFERENCES  */}
                <h5 className='mt-6 mb-2 text-xl'>Præferencer</h5>
                <div className='flex flex-wrap w-full gap-2 min-w-[250px]'>
                    <div className='flex gap-2 items-center flex-1 '>
                        <p className={`text-2xl ${allowPets ? 'text-green-500' : 'text-red-500'}`}>{allowPets ? '✓' : '×'}</p>
                        <p>Kæledyr</p>

                    </div>

                    <div className='flex gap-2 items-center flex-1 min-w-[250px]'>
                        <p className={`text-2xl ${allowMusic ? 'text-green-500' : 'text-red-500'}`}>{allowMusic ? '✓' : '×'}</p>
                        <p>Musik</p>

                    </div>

                    <div className='flex gap-2 items-center flex-1 min-w-[250px]'>
                        <p className={`text-2xl ${allowChildren ? 'text-green-500' : 'text-red-500'}`}>{allowChildren ? '✓' : '×'}</p>
                        <p>Børn</p>

                    </div>

                    <div className='flex gap-2 items-center flex-1 min-w-[250px]'>
                        <p className={`text-2xl ${allowSmoking ? 'text-green-500' : 'text-red-500'}`}>{allowSmoking ? '✓' : '×'}</p>
                        <p>Rygning</p>

                    </div>
                </div>

            </div>
            {/* DRIVER COMMENT */}
            {comment && (
                <div className="mt-8">
                    <h4 className="text-lg font-bold mb-3">Chaufførens kommentar:</h4>
                    <div className="flex gap-4">
                        <div className="text-6xl text-blue-bright leading-none">"</div>
                        <p className="text-gray-700 italic pt-2">{comment}</p>
                    </div>
                </div>
            )}

            {/* DRIVER SECTION */}
            <div className="mt-8">
                <h4 className="text-2xl font-bold mb-4">Chaufføren:</h4>

                {/* Driver Info */}
                <div className="flex gap-8 mb-6">
                    <img
                        src={user.imageUrl || 'https://i.pravatar.cc/150?u=default'}
                        alt={`${user.firstname} ${user.lastname}`}
                        className="w-60 h-60 rounded-full object-cover"
                    />
                    <div className=" gap-4 flex flex-col ">
                        <div>
                            <h5 className="font-bold text-xl">{user.firstname}</h5>
                            <div className="flex items-center gap-1 mb-1">
                                {renderStars(Math.round(user.avgStars || 0))}
                                <span className="text-sm text-gray-500 ml-2">
                                    ({user.numReviews || 0} anmeldelser)
                                </span>
                            </div>
                            <p className="text-sm text-gray-600">Medlem siden {user.memberSince || 'juli 2014'}</p>
                        </div>
                        <button className="bg-blue-bright text-white px-6 py-4 text-xl rounded-full hover:bg-blue-medium transition-colors">
                            Skriv en anmeldelse
                        </button>
                    </div>

                </div>

                {/* Reviews */}
                <div className="space-y-4">
                    {user.userReviews.map((review) => (
                        <div key={review.id} className="flex gap-3 p-4 bg-off-white rounded-2xl">
                            <div className='my-auto'>
                                <img
                                    src={`https://i.pravatar.cc/40?u=${review.id}`}
                                    alt={review.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col  gap-2 mb-1">
                                    <h6 className="font-semibold">{review.reviewer.firstname}</h6>
                                    <div className='flex items-center gap-2'>
                                        <span className="text-xs text-gray-500">{new Date(review.createdAt).toLocaleString('da-DK', {  day: 'numeric',month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}</span>
                                        <div className="flex">
                                            {renderStars(review.numStars, 'text-lg')}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700">{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}