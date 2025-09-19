import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useFilter } from "../providers/filter";
import { fetchApi } from "../../utils/fetch/fetch";
import { useAuth } from "../providers/auth.provider";
import { toast } from "react-toastify";

export const BookingForm = ({ bookingInfo }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { seatsBooked, setSeatsBooked } = useFilter();
    const { loginData } = useAuth();
    const tokenData = loginData?.accessToken;


    const onSubmit = (data) => {
        const dataToSend = {
            ...data,
            tripId: bookingInfo?.id
        };

        fetchApi('/api/bookings', 'POST', dataToSend, tokenData )
        .then(response => {
            console.log(response)
            if (response.success) {
                const notify = () => toast.success("Booking successful");
                notify();
            } else {
                console.error('Booking failed');
                const notify = () => toast.error("Booking failed");
                notify();
            }
        });
    };

    const availableSeats = bookingInfo ? (bookingInfo.seatsTotal - bookingInfo.seatsBooked) : 0;




    return (
        <div className="max-w-md bg-off-white px-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Book et lift</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* SEATS */}
                <div>
                    <label className="block text-sm font-medium mb-2">Pladser</label>
                    <select
                        {...register("numSeats", { required: "Vælg antal pladser" })}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-bright"
                        onChange={(e) => setSeatsBooked(parseInt(e.target.value))}
                        value={seatsBooked}
                    >
                        {availableSeats > 0 && [...Array(availableSeats)].map((_, index) => (
                            <option key={index} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                    {errors.seats && <p className="text-red-500 text-sm mt-1">{errors.seats.message}</p>}
                </div>

                {/* MESSAGE */}
                <div>
                    <label className="block text-sm font-medium mb-2">Besked til {bookingInfo?.user?.firstname}</label>
                    <textarea
                        {...register("comment")}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-bright resize-none"
                        rows="4"
                        placeholder="Skriv en besked..."
                        value=" "
                    />
                </div>

                {/* "CARD" INFO */}
                <div>
                    <label className="block text-sm font-medium mb-2">Kortnummer</label>
                    <input
                        type="text"

                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-bright"
                        placeholder="1234 1234 1234 1234"
                        maxLength="19"
                    />
                </div>

                {/*  */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Udløbsdato</label>
                        <input
                            type="text"

                            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-bright"
                            placeholder="MM / ÅÅ"
                            maxLength="5"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">CVC-kode</label>
                        <input
                            type="text"

                            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-bright"
                            placeholder="CVC"
                            maxLength="4"
                        />
                    </div>
                </div>

                {/* SUBMUT */}
                <button
                    type="submit"
                    className="w-full bg-blue-bright text-white py-4 rounded-full font-semibold text-lg hover:bg-blue-medium transition-colors"
                >
                    Book & betal
                </button>

                {/* BACK */}
                <button
                    type="button"
                    className="w-full text-lg font-semibold bg-blue-bright/25 text-black py-4 rounded-full hover:text-white hover:bg-blue-medium transition-all"
                    onClick={() => navigate(-1)}
                >
                    Tilbage
                </button>
            </form>
        </div>
    );
}