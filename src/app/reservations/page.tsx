"use client";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { addReservation } from "@/libs/addReservations";
import { getReservations } from "@/libs/getReservations";

const ReservationDetails = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id") || "";
    const name = decodeURIComponent(searchParams.get("name") || "");

    const { data: session } = useSession();
    const userToken = session?.user?.token;
    const userId = session?.user?.id;

    const [reservationDate, setReservationDate] = useState("");

    const handleAddReservation = async () => {
        if (!reservationDate) {
            alert("Please select a date!");
            return;
        }

        if (!userToken) {
            alert("You must be logged in to make a reservation.");
            return;
        }

        // Fetch current reservations
        const reservationsResponse = await getReservations(userToken);

        // Check if the user already has 3 or more reservations
        if (reservationsResponse.count >= 3) {
            alert("You already have 3 reservations.");
            return;
        }

        // Proceed with adding the reservation
        const response = await addReservation(id, userToken, reservationDate);
        if (response.success) {
            alert("Reservation added successfully!");
            setReservationDate(""); // Clear input after success
        } else {
            alert("Failed to add reservation.");
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Reservation Details</h1>
            <div className="mt-4 border p-4 rounded-lg shadow">
                <p><strong>Restaurant Name:</strong> {name}</p>
            </div>

            {/* Reservation Date Input */}
            <div className="mt-4">
                <label className="block font-semibold">Select Date:</label>
                <input
                    type="date"
                    value={reservationDate}
                    onChange={(e) => setReservationDate(e.target.value)}
                    className="border p-2 rounded mt-1 w-full"
                />
            </div>

            {/* Add Reservation Button */}
            <button
                onClick={handleAddReservation}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add Reservation
            </button>
        </div>
    );
};

export default ReservationDetails;
