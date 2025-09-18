import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useFilter } from "../providers/filter";

export const BookingForm = ({ bookingInfo }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { seatsBooked, setSeatsBooked } = useFilter();

    const onSubmit = (data) => {
        console.log('Booking data:', data);
        // Handle form submission here
    };

    const availableSeats = bookingInfo ? (bookingInfo.seatsTotal - bookingInfo.seatsBooked) : 0;




    return (
        <div className="max-w-md bg-off-white px-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Book et lift</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Pladser Dropdown */}
                <div>
                    <label className="block text-sm font-medium mb-2">Pladser</label>
                    <select
                        {...register("seats", { required: "Vælg antal pladser" })}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-bright"
                        onChange={(e) => setSeatsBooked(parseInt(e.target.value))}
                        value={seatsBooked}
                    >
                        {[...Array(availableSeats)].map((_, index) => (
                            <option key={index} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                    {errors.seats && <p className="text-red-500 text-sm mt-1">{errors.seats.message}</p>}
                </div>

                {/* Besked til Yamal */}
                <div>
                    <label className="block text-sm font-medium mb-2">Besked til {bookingInfo?.user?.firstname}</label>
                    <textarea
                        {...register("message")}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-bright resize-none"
                        rows="4"
                        placeholder="Skriv en besked..."
                    />
                </div>

                {/* Kortnummer */}
                <div>
                    <label className="block text-sm font-medium mb-2">Kortnummer</label>
                    <input
                        type="text"

                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-bright"
                        placeholder="1234 1234 1234 1234"
                        maxLength="19"
                    />
                </div>

                {/* Udløbsdato and CVC */}
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

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-bright text-white py-4 rounded-full font-semibold text-lg hover:bg-blue-medium transition-colors"
                >
                    Book & betal
                </button>

                {/* Tilbage Button */}
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