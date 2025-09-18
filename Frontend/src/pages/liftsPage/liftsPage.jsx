import { fetchApi } from "../../utils/fetch/fetch";
import { LiftsSection } from "../../components/liftsSection/liftSection";
import { useState, useEffect } from "react";
import spinner from '../../assets/spinner.svg';
import { FilterSidebar } from "../../components/filterSidebar/filterSidebar";

export const LiftsPage = () => {
    const [lifts, setLifts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLifts = async () => {
            try {
                const response = await fetchApi("/api/trips", "GET");
                if (response.success) {
                    setLifts(response.data);
                } else {
                    setError("Failed to fetch lifts");
                }
            } catch (err) {
                setError("Error loading lifts");
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchLifts();
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
        <div className="flex justify-center mt-8 gap-8">
            <FilterSidebar />
            <LiftsSection lifts={lifts} />
        </div>
    );
};