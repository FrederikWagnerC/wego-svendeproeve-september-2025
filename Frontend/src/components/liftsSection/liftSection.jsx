import { LiftCard } from "../liftCard/liftCard";
import { useFilter } from "../providers/filter";
import { useMemo } from "react";


export const LiftsSection = ({ lifts }) => {
    const { seats, bagageSmall, bagageMedium, bagageLarge, comfort, music, animalsAllowed, childrenAllowed, smokingAllowed } = useFilter();

    const filteredLifts = useMemo(() => {
        return lifts.filter(lift => {
            if ((lift.seatsTotal - lift.seatsBooked -1) < seats) return false;
            if (bagageSmall && lift.bagSizeId !== 1) return false;
            if (bagageMedium && lift.bagSizeId !== 2) return false;
            if (bagageLarge && lift.bagSizeId !== 3) return false;
            if (comfort && !lift.hasComfort) return false;
            if (music && !lift.allowMusic) return false;
            if (animalsAllowed && !lift.allowPets) return false;
            if (childrenAllowed && !lift.allowChildren) return false;
            if (smokingAllowed && !lift.allowSmoking) return false;
            return true;
        });
    }, [lifts, seats, bagageSmall, bagageMedium, bagageLarge, comfort, music, animalsAllowed, childrenAllowed, smokingAllowed]);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const dayAfterTomorrow = new Date(today);
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
    
    // Create three separate arrays
    const todayLifts = filteredLifts.filter(lift => {
        const liftDate = new Date(lift.departureDate);
        const liftDateOnly = new Date(liftDate);
        liftDateOnly.setHours(0, 0, 0, 0);
        
        const now = new Date();
        
        // Check if it's today AND the time hasn't passed yet
        return liftDateOnly.getTime() === today.getTime() && liftDate > now;
    }).sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by full datetime (includes time)
    
    const tomorrowLifts = filteredLifts.filter(lift => {
        const liftDate = new Date(lift.departureDate);
        liftDate.setHours(0, 0, 0, 0);
        return liftDate.getTime() === tomorrow.getTime();
    }).sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by full datetime (includes time)
    
    const otherLifts = filteredLifts.filter(lift => {
        const liftDate = new Date(lift.departureDate);
        liftDate.setHours(0, 0, 0, 0);
        return liftDate.getTime() !== today.getTime() && liftDate.getTime() !== tomorrow.getTime();
    }).sort((a, b) => new Date(a.date) - new Date(b.date));


    return (
        <>
            <section className="flex flex-col gap-8 justify-center min-w-[750px]">
                {/* Today's Lifts */}
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

                {/* Tomorrow's Lifts */}
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

                {/* Other Lifts */}
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

                {/* No lifts message */}
                {todayLifts.length === 0 && tomorrowLifts.length === 0 && otherLifts.length === 0 && (
                    <div className="text-center flex flex-col">
                        <p className="text-gray-600 text-lg">No lifts available at the moment.</p>
                    </div>
                )}
            </section>
        </>
    )
}