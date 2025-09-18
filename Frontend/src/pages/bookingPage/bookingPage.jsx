import { fetchApi } from "../../utils/fetch/fetch";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import spinner from '../../assets/spinner.svg';
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { BookingForm } from "../../components/bookingForm/bookingForm";
import { BookingLiftDetails } from "../../components/bookingLiftDetails/bookingLiftDetails";

export const BookingPage = () => {
    const { liftId } = useParams();
    const [bookingInfo, setBookingInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const fetchBookingInfo = async () => {
            try {
                const data = await fetchApi(`/api/trips/${liftId}`);
                setBookingInfo(data.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

      

        fetchBookingInfo();
    }, [liftId]);

      if (loading) {
            return <div className="flex justify-center p-8"><img src={spinner} alt="Loading..." /></div>;
        }

        if (error) {
            return <div className="text-red-500 p-4">Error: {error.message}</div>;
        }

        return (
            <div className="flex justify-center gap-8">
                {bookingInfo && <BookingForm bookingInfo={bookingInfo} />}
                {bookingInfo && <BookingLiftDetails lift={bookingInfo} />}
            </div>

        )






};
