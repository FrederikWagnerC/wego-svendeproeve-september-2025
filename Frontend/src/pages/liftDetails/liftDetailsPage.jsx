import { useParams } from "react-router"
import { LiftDetailsSection } from "../../components/liftDetailsSection/liftDetailsSection"
import { fetchApi } from "../../utils/fetch/fetch"
import { useState, useEffect } from "react"
import spinner from '../../assets/spinner.svg'
import { SeatsDetails } from "../../components/seatsDetails/seatsDetails"
import { BackArrow } from "../../components/backArrow/backArrow"

export const LiftDetailsPage = () => {
    const { liftId } = useParams();
    const [lift, setLift] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchLiftDetails = async () => {
            try {
                const data = await fetchApi(`/api/trips/${liftId}`);
                setLift(data.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchLiftDetails();
    }, [liftId]);

    if (loading) {
        return <img src={spinner} alt="Loading..." />;
    }

    if (error) {
        return <div>Error fetching lift details</div>;
    }


    return (
        <div className="flex flex-col md:flex-row justify-center gap-16">
            {lift && <BackArrow />}
            {lift && <LiftDetailsSection lift={lift } />}
            {lift && <SeatsDetails lift={lift} />} 
        </div>
    )
}