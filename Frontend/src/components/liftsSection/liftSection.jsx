import { LiftCard } from "../liftCard/liftCard";
import { useFilter } from "../providers/filter";
import { useMemo } from "react";


export const LiftsSection = ({ lifts }) => {
    const { seats, bagageSmall, bagageMedium, bagageLarge, comfort, music, animalsAllowed, childrenAllowed, smokingAllowed, destinationStart, destinationEnd } = useFilter();

    const filteredLifts = useMemo(() => {
        return lifts.filter(lift => {
            if ((lift.seatsTotal - lift.seatsBooked) < seats) return false;
            if (bagageSmall && lift.bagSizeId !== 1) return false;
            if (bagageMedium && lift.bagSizeId !== 2) return false;
            if (bagageLarge && lift.bagSizeId !== 3) return false;
            if (comfort && !lift.hasComfort) return false;
            if (music && !lift.allowMusic) return false;
            if (animalsAllowed && !lift.allowPets) return false;
            if (childrenAllowed && !lift.allowChildren) return false;
            if (smokingAllowed && !lift.allowSmoking) return false;
            if (destinationStart && lift.cityDeparture.toLowerCase() !== destinationStart.toLowerCase()) return false;
            if (destinationEnd && lift.cityDestination.toLowerCase() !== destinationEnd.toLowerCase()) return false;
            return true;
        });
    }, [lifts, seats, bagageSmall, bagageMedium, bagageLarge, comfort, music, animalsAllowed, childrenAllowed, smokingAllowed, destinationStart, destinationEnd]);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    
    // FILTER LIFTS INTO TODAY, TOMORROW, AND OTHER
    const todayLifts = filteredLifts.filter(lift => {
        const liftDate = new Date(lift.departureDate);
        const liftDateOnly = new Date(liftDate);
        liftDateOnly.setHours(0, 0, 0, 0);
        
        const now = new Date();
        
        // CHECKS FOR LIFTS LATER TODAY
        return liftDateOnly.getTime() === today.getTime() && liftDate > now;
    }).sort((a, b) => new Date(a.date) - new Date(b.date)); 
    
    const tomorrowLifts = filteredLifts.filter(lift => {
        const liftDate = new Date(lift.departureDate);
        liftDate.setHours(0, 0, 0, 0);
        return liftDate.getTime() === tomorrow.getTime();
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
    
    const otherLifts = filteredLifts.filter(lift => {
        const liftDate = new Date(lift.departureDate);
        liftDate.setHours(0, 0, 0, 0);
        return liftDate.getTime() !== today.getTime() && liftDate.getTime() !== tomorrow.getTime();
    }).sort((a, b) => new Date(a.date) - new Date(b.date));


    return (
        <>
            <section className="flex flex-col gap-8 md:min-w-[750px] min-w-[400px] px-4 md:px-0">
                {/* TODAY */}
                {todayLifts.length > 0 && (
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-4">Næste lift</h2>
                        <div className="flex flex-col gap-4">
                            {todayLifts.map(lift => (
                                <LiftCard key={lift.id} lift={lift} />
                            ))}
                        </div>
                    </div>
                )}

                {/* TOMORROW */}
                {tomorrowLifts.length > 0 && (
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-4">I morgen</h2>
                        <div className="flex flex-col gap-4">
                            {tomorrowLifts.map(lift => (
                                <LiftCard key={lift.id} lift={lift} />
                            ))}
                        </div>
                    </div>
                )}

                {/* OTHER */}
                {otherLifts.length > 0 && (
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-4">Senere datoer</h2>
                        <div className="flex flex-col gap-4">
                            {otherLifts.map(lift => (
                                <LiftCard key={lift.id} lift={lift} />
                            ))}
                        </div>
                    </div>
                )}

                {/* NO LIFTS */}
                {todayLifts.length === 0 && tomorrowLifts.length === 0 && otherLifts.length === 0 && (
                    <div className="text-center flex flex-col">
                        <p className="text-gray-600 text-lg">No lifts available at the moment.</p>
                    </div>
                )}
            </section>
        </>
    )
}